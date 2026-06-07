// Anthropic-Anbindung: Relevanz-Filter (Haiku), Übersetzung (Haiku) und
// Stil-Transformation (Opus). Der große, stabile House-Style-Prompt wird als
// gecachter System-Block übergeben (prompt caching), da er pro Item identisch ist.
//
// Modelle und Effort sind über ENV überschreibbar. Defaults folgen dem Briefing:
//   RELEVANCE_MODEL = claude-haiku-4-5
//   TRANSFORM_MODEL = claude-opus-4-7   (Hinweis: claude-opus-4-8 ist verfügbar)
//   TRANSLATE_MODEL = claude-haiku-4-5
//
// Wichtig für Opus 4.7/4.8: temperature/top_p/top_k und budget_tokens sind dort
// entfernt (400). Wir senden sie nicht. Effort steuert die Tiefe.

import Anthropic from '@anthropic-ai/sdk';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { log } from './log.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const styleDir = join(__dirname, '..', 'style');

const MODELS = {
  relevance: process.env.RELEVANCE_MODEL || 'claude-haiku-4-5',
  transform: process.env.TRANSFORM_MODEL || 'claude-opus-4-7',
  translate: process.env.TRANSLATE_MODEL || 'claude-haiku-4-5',
};
const TRANSFORM_EFFORT = process.env.TRANSFORM_EFFORT || 'medium'; // low|medium|high|xhigh|max

const client = new Anthropic({ maxRetries: 4 }); // SDK-Backoff für 429/5xx/Verbindungsfehler

// House-Style einmalig laden: vollständige claude.md + Newsroom-Zusatzregel.
const HOUSE_STYLE = [
  readFileSync(join(styleDir, 'claude.md'), 'utf8'),
  '\n\n---\n\n',
  readFileSync(join(styleDir, 'newsroom-rule.md'), 'utf8'),
].join('');

// Themen-Vokabular für den Relevanz-Filter, abgeleitet aus claude.md.
const THEME_VOCAB = {
  science:
    'Substanzabhängigkeit, Nikotin, Alkohol, Cannabis, MDMA, Koffein, Zucker; ' +
    'Pharmakologie, Dopamin, Serotonin, Nucleus accumbens, Acetylcholin, Adenosin; ' +
    'Neurobiologie der Sucht, Entzug, Toleranz, Kindling, Anhedonie, Neuroinflammation; ' +
    'Bewusstsein, Interozeption, Set & Setting, Polytoxikomanie, Remission/Abstinenz.',
  hellmuth:
    'Getränkekultur in Asien (Japan, Korea, China, Südostasien); alkoholfreie und ' +
    'funktionale Getränke, botanische Sodas, Hopfen, Tee, Sake, Soju, Baijiu; ' +
    'Markttrends, Produktneuheiten, Regulierung, Konsumverhalten, Zucker/Süßstoffe, ' +
    'Nüchternheit/Sober-curious, Brauwesen und Getränkeindustrie.',
};

const logUsage = (label, usage) => {
  if (!usage) return;
  log.info(
    `${label} usage: in=${usage.input_tokens ?? 0}` +
      ` cache_read=${usage.cache_read_input_tokens ?? 0}` +
      ` cache_write=${usage.cache_creation_input_tokens ?? 0}` +
      ` out=${usage.output_tokens ?? 0}`
  );
};

const firstText = (msg) => {
  for (const block of msg.content || []) {
    if (block.type === 'text') return block.text;
  }
  return '';
};

// Robustes JSON aus Modellantwort ziehen (erstes { bis letztes }).
const parseJsonObject = (text) => {
  const t = String(text || '').trim();
  const start = t.indexOf('{');
  const end = t.lastIndexOf('}');
  if (start === -1 || end === -1 || end <= start) {
    throw new Error('Keine JSON-Struktur in der Antwort gefunden.');
  }
  return JSON.parse(t.slice(start, end + 1));
};

/**
 * Relevanz-Score 0–10 (Haiku, strukturierte Ausgabe). Nur Items >= 8 sollten weiter.
 * @returns {Promise<{score:number, reason:string}>}
 */
export async function scoreRelevance({ rubrik, title, summary, sourceName }) {
  const vocab = THEME_VOCAB[rubrik] || '';
  const system = [
    {
      type: 'text',
      text:
        'Du bist ein strenger Relevanz-Gutachter für ein redaktionelles News-Modul. ' +
        'Bewerte, wie gut ein Fundstück thematisch passt, auf einer Ganzzahl-Skala 0 bis 10. ' +
        '10 = exakt im Kern des Themas und substanziell; 0 = themenfremd oder reines Marketing. ' +
        'Sei knauserig: im Zweifel niedriger. Keine Borderline-Großzügigkeit.\n\n' +
        `Themenfeld der Rubrik »${rubrik}«:\n${vocab}`,
      cache_control: { type: 'ephemeral' },
    },
  ];
  const user =
    `Quelle: ${sourceName || 'unbekannt'}\n` +
    `Titel: ${title || ''}\n` +
    `Anriss: ${summary || ''}\n\n` +
    'Gib nur JSON zurück: {"score": <0-10 int>, "reason": "<knappe Begründung>"}.';

  const msg = await client.messages.create({
    model: MODELS.relevance,
    max_tokens: 300,
    system,
    messages: [{ role: 'user', content: user }],
    output_config: {
      format: {
        type: 'json_schema',
        schema: {
          type: 'object',
          properties: {
            score: { type: 'integer' },
            reason: { type: 'string' },
          },
          required: ['score', 'reason'],
          additionalProperties: false,
        },
      },
    },
  });
  logUsage(`relevance(${rubrik})`, msg.usage);
  const out = parseJsonObject(firstText(msg));
  let score = Number(out.score);
  if (!Number.isFinite(score)) score = 0;
  score = Math.max(0, Math.min(10, Math.round(score)));
  return { score, reason: String(out.reason || '') };
}

/**
 * Übersetzt Titel + Text nach Deutsch (für Nicht-EN/DE-Quellen), vor dem Relevanz-Filter.
 * @returns {Promise<{title:string, summary:string}>}
 */
export async function translateToGerman({ title, summary, lang }) {
  const system = [
    {
      type: 'text',
      text:
        'Du bist ein präziser Fachübersetzer. Übersetze Getränke- und Wissenschaftsmeldungen ' +
        'originalgetreu ins Deutsche. Keine Ausschmückung, keine Wertung, keine Auslassung. ' +
        'Gib nur JSON zurück: {"title": "...", "summary": "..."}.',
    },
  ];
  const user =
    `Ausgangssprache: ${lang || 'unbekannt'}\n` +
    `Titel: ${title || ''}\n` +
    `Text: ${summary || ''}`;

  const msg = await client.messages.create({
    model: MODELS.translate,
    max_tokens: 1500,
    system,
    messages: [{ role: 'user', content: user }],
  });
  logUsage('translate', msg.usage);
  try {
    const out = parseJsonObject(firstText(msg));
    return { title: String(out.title || title), summary: String(out.summary || summary) };
  } catch {
    return { title, summary };
  }
}

/**
 * Stil-Transformation (Opus). System-Prompt = vollständige House-Style + Newsroom-Regel,
 * gecacht. Output: {title, lead, body}. Leerer body => Item verwerfen.
 * @returns {Promise<{title:string, lead:string, body:string}>}
 */
export async function transformToHouseStyle({ rubrik, title, summary, sourceName, sourceUrl, isPreprint, headlineOnly }) {
  const lengthRule =
    rubrik === 'science'
      ? 'Rubrik Wissenschaft: genau 5 Sätze im body.'
      : 'Rubrik HELLMUTH: 5 bis 15 Sätze im body.';
  const headlineNote = headlineOnly
    ? '\nPressespiegel: nur Titel und frei zugänglicher Anriss liegen vor. Keine Volltext-Rekonstruktion, keine erfundenen Details oder Zahlen, die Paywall NICHT erwähnen. Gleiche Mindestqualität und volle Rubrik-Länge wie sonst. Wenn Titel und Anriss keine fünf substanziellen Sätze mit eigener Einordnung tragen, gib einen leeren body zurück (das Item wird dann verworfen). Lieber nichts als ein dünner Zweisätzer.'
    : '';
  const preprintNote = isPreprint
    ? '\nHinweis: Dies ist ein Preprint (nicht peer-reviewed). Das im Text kenntlich machen.'
    : '';

  const system = [
    {
      type: 'text',
      text: HOUSE_STYLE,
      cache_control: { type: 'ephemeral' },
    },
  ];
  const user =
    `Rubrik: ${rubrik}\n${lengthRule}${headlineNote}${preprintNote}\n\n` +
    `Quelle: ${sourceName || ''}\n` +
    `Original-URL (nur Kontext, nicht in den Text schreiben): ${sourceUrl || ''}\n` +
    `Original-Titel: ${title || ''}\n` +
    `Original-Anriss: ${summary || ''}\n\n` +
    'Schreibe die Kurzmeldung in eigenen Worten gemäß Hausordnung und Newsroom-Regel. ' +
    'Gib nur das JSON-Objekt zurück.';

  const msg = await client.messages.create({
    model: MODELS.transform,
    max_tokens: 2000,
    system,
    messages: [{ role: 'user', content: user }],
    output_config: { effort: TRANSFORM_EFFORT },
  });
  logUsage(`transform(${rubrik})`, msg.usage);
  const out = parseJsonObject(firstText(msg));
  return {
    title: String(out.title || '').trim(),
    lead: String(out.lead || '').trim(),
    body: String(out.body || '').trim(),
  };
}

export const modelInfo = { ...MODELS, transformEffort: TRANSFORM_EFFORT };
