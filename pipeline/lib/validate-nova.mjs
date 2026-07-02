// Nachvalidierung für Nova-Einträge: harte Schranke zwischen Transformation
// und Persistenz. Der Opus-Prompt allein garantiert die Regeln nicht (im
// Testlauf wurde trotz explizitem Verbot ein Opfer-Klarname publiziert).
// Zwei Stufen: deterministische Checks (Regex/String) und ein Haiku-Prüfcall
// mit JSON-Schema-Output. Verstöße führen zur Regeneration (max. 2 Versuche)
// oder zum Verwerfen. Ein verworfener Eintrag ist besser als ein regelwidriger.

import Anthropic from '@anthropic-ai/sdk';
import { isBlacklistedSource } from './source-policy.mjs';

const VALIDATE_MODEL = process.env.VALIDATE_MODEL || 'claude-haiku-4-5';

const client = new Anthropic({ maxRetries: 4 });

// --- Stufe 1: deterministische Checks ---------------------------------------
// Verstöße tragen `regenerierbar`: Stil kann Opus im zweiten Anlauf beheben,
// eine Blacklist-Quelle nicht (sie hängt am Item, nicht am Text).

export function validateDeterministic({ title, lead, body, sources }) {
  const violations = [];
  const fullText = [title, lead, body].filter(Boolean).join('\n');

  if (fullText.includes('—')) {
    violations.push({
      regel: 'Geviertstrich',
      detail: 'Der Text enthält einen Geviertstrich (—); er ist überall verboten.',
      regenerierbar: true,
    });
  }
  if (String(title || '').includes(':')) {
    violations.push({
      regel: 'Doppelpunkt-Titel',
      detail: `Der Titel enthält einen Doppelpunkt (»${title}«); Doppelpunkte sind im Titel verboten.`,
      regenerierbar: true,
    });
  }
  for (const src of sources || []) {
    if (isBlacklistedSource(src.url)) {
      violations.push({
        regel: 'Quellen-Blacklist',
        detail: `Quelle auf der Ausschlussliste: ${src.url}`,
        regenerierbar: false,
      });
    }
  }
  return violations;
}

// --- Stufe 2: Haiku-Prüfcall -------------------------------------------------

export const VALIDATE_RULES = [
  'Opfer-Klarname',
  'Täter-Klarname',
  'Herkunft-Nationalität-Ethnie',
  'Stilfigur-nicht-sondern',
];

export const VALIDATE_SCHEMA = {
  type: 'object',
  properties: {
    verstoesse: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          regel: { type: 'string', enum: VALIDATE_RULES },
          zitat: { type: 'string' },
          begruendung: { type: 'string' },
        },
        required: ['regel', 'zitat', 'begruendung'],
        additionalProperties: false,
      },
    },
  },
  required: ['verstoesse'],
  additionalProperties: false,
};

export const VALIDATE_SYSTEM_PROMPT =
  'Du prüfst Einträge einer kriminologischen Chronik auf Verstöße gegen vier ' +
  'redaktionelle Regeln. Die Chronik dokumentiert Tatstrukturen, das Projekt ' +
  'untersucht keine Täterdemographie. Melde ausschließlich echte Verstöße ' +
  'gegen die vier Regeln, keine sonstigen Auffälligkeiten.\n\n' +
  'REGEL 1, Opfer-Klarname: Klarnamen von Opfern sind verboten, auch in ' +
  'abgekürzter Form (»Serkan C.«) und auch dann, wenn Medien sie nennen. ' +
  'Zulässig sind Rollen- und Altersbezeichnungen (der Zugbegleiter, die ' +
  '34-Jährige, das Kind).\n\n' +
  'REGEL 2, Täter-Klarname: Klarnamen von Tätern oder Tatverdächtigen sind ' +
  'verboten, auch abgekürzt (»Ali B.«). Einzige Ausnahme: Die Person ist ' +
  'rechtskräftig verurteilt UND von breiter öffentlicher Bekanntheit ' +
  '(kriminalgeschichtlich etablierte Fälle). Im Zweifel ist es ein Verstoß.\n\n' +
  'REGEL 3, Herkunft/Nationalität/Ethnie: Angaben zu Herkunft, Nationalität, ' +
  'Ethnie, Migrationsstatus oder Religionszugehörigkeit von Tätern oder ' +
  'Verdächtigen sind verboten (»der syrische Täter«, »ein Afghane«, »mit ' +
  'Migrationshintergrund«). KEINE Verstöße sind: a) die ideologische ' +
  'Einordnung der Tat (»islamistisch«, »rechtsextremistisch«, ' +
  '»dschihadistisches Motiv«); b) aufenthaltsrechtliche Verfahrensangaben, ' +
  'die ein dokumentiertes Behördenversagen belegen (gescheiterte Abschiebung, ' +
  'unterbliebene Dublin-Überstellung, Duldung im Kontext des Systemversagens); ' +
  'c) Ereignis- und Eigennamen (»Eritrea-Festival«). Entscheidend ist, ob die ' +
  'Angabe eine Person demographisch markiert (Verstoß) oder ein Ereignis oder ' +
  'Behördenhandeln benennt (kein Verstoß).\n\n' +
  'REGEL 4, Stilfigur »nicht X, sondern Y«: Die rhetorische Antithese »nicht ' +
  'X, sondern Y« / »kein X, sondern Y« ist verboten, ebenso ihre gesplittete ' +
  'Form über Satzgrenzen (»ist kein X. Es ist ein Y.«) und redundante ' +
  'Parallelkonstruktionen (»X hat kein A. X hat ein B.«). KEIN Verstoß ist ' +
  'die faktisch-taxonomische Abgrenzung, deren Negation echte Information ' +
  'trägt: Rechtskategorien (»nicht Mord, sondern Totschlag«), Zuständigkeits- ' +
  'oder Faktenkorrekturen, quantitative Präzisierungen.\n\n' +
  'Gib für jeden Verstoß die Regel, das wörtliche Zitat aus dem Eintrag und ' +
  'eine knappe Begründung an. Ein Eintrag ohne Verstöße ergibt eine leere ' +
  'Liste. Antworte ausschließlich mit dem JSON-Objekt.';

export async function validateWithHaiku({ title, lead, body }) {
  const user =
    `Titel: ${title || ''}\n` +
    `Lead: ${lead || ''}\n\n` +
    `Text:\n${body || ''}\n\n` +
    'Prüfe diesen Eintrag gegen die vier Regeln.';

  const msg = await client.messages.create({
    model: VALIDATE_MODEL,
    max_tokens: 800,
    system: [{ type: 'text', text: VALIDATE_SYSTEM_PROMPT, cache_control: { type: 'ephemeral' } }],
    messages: [{ role: 'user', content: user }],
    output_config: { format: { type: 'json_schema', schema: VALIDATE_SCHEMA } },
  });
  const text = (msg.content || []).find((b) => b.type === 'text')?.text || '';
  const start = text.indexOf('{');
  const end = text.lastIndexOf('}');
  if (start === -1 || end <= start) throw new Error('Validierung: keine JSON-Struktur.');
  const out = JSON.parse(text.slice(start, end + 1));
  const list = Array.isArray(out.verstoesse) ? out.verstoesse : [];
  return list
    .filter((v) => VALIDATE_RULES.includes(v?.regel))
    .map((v) => ({
      regel: v.regel,
      detail: `${v.begruendung} (Zitat: »${v.zitat}«)`,
      regenerierbar: true,
    }));
}

/**
 * Vollständige Nachvalidierung eines generierten Eintrags. Deterministische
 * Checks zuerst; bei nicht regenerierbaren Verstößen (Blacklist-Quelle)
 * entfällt der Haiku-Call, sonst laufen beide Stufen, damit der
 * Korrekturhinweis für die Regeneration vollständig ist. Ein API-Fehler
 * wirft: Die Schranke ist hart, ein unvalidierter Eintrag wird nicht
 * durchgelassen (das Item bleibt ungesehen und wird im nächsten Lauf
 * erneut geprüft).
 * @returns {Promise<Array<{regel:string, detail:string, regenerierbar:boolean}>>}
 */
export async function validateEntry({ title, lead, body, sources }) {
  const deterministic = validateDeterministic({ title, lead, body, sources });
  if (deterministic.some((v) => !v.regenerierbar)) return deterministic;
  const haiku = await validateWithHaiku({ title, lead, body });
  return [...deterministic, ...haiku];
}

/** Formatiert Verstöße als Korrekturhinweis für den Regenerations-Prompt. */
export function formatViolations(violations) {
  return violations.map((v) => `- ${v.regel}: ${v.detail}`).join('\n');
}

export const validateModelInfo = { model: VALIDATE_MODEL };

// Kompakte Verstoß-Zeile für Log und Job-Summary (Regeln, dedupliziert).
export function violationSummary(violations) {
  return [...new Set(violations.map((v) => v.regel))].join(', ');
}
