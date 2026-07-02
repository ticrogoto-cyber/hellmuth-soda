// Kriminologische Merkmalsklassifikation für Nova-Einträge (Haiku,
// JSON-Schema-Output). Ein Call pro Eintrag. Die Merkmale erfassen
// Tatstrukturen, keine Personen; demographische Kategorien sind
// ausgeschlossen (Projektrahmen).

import Anthropic from '@anthropic-ai/sdk';
import { log } from './log.mjs';

const CLASSIFY_MODEL = process.env.CLASSIFY_MODEL || 'claude-haiku-4-5';

const client = new Anthropic({ maxRetries: 4 });

export const MERKMALE_ENUMS = {
  tatmittel: [
    'Fahrzeug',
    'Messer',
    'Machete-Hiebwaffe',
    'Schusswaffe',
    'Körpergewalt',
    'Sprengsatz',
    'Säure',
    'Sonstiges',
  ],
  tatkontext: [
    'ÖPNV-Bahn',
    'Volksfest-Veranstaltung',
    'öffentlicher Straßenraum',
    'Klinik-Rettungsdienst',
    'Bildungseinrichtung',
    'Wohnumfeld',
    'Sonstiges',
  ],
  betroffene: [
    'Einsatzkräfte',
    'Kinder-Jugendliche',
    'Passanten',
    'Personal-Beschäftigte',
    'Mehrere Gruppen',
  ],
  systemversagen: [
    'keines',
    'Freispruch-Verfahrenseinstellung',
    'gescheiterte Unterbringung',
    'behördenbekannter Gefährder',
    'gescheiterte Abschiebung-Vollstreckung',
  ],
  exzess: [
    'Filmen',
    'Wiederholungsabsicht',
    'Verstümmelung',
    'Gruppenbegehung',
    'keines',
  ],
};

export const MERKMALE_SCHEMA = {
  type: 'object',
  properties: {
    tatmittel: { type: 'string', enum: MERKMALE_ENUMS.tatmittel },
    tatkontext: { type: 'string', enum: MERKMALE_ENUMS.tatkontext },
    betroffene: { type: 'string', enum: MERKMALE_ENUMS.betroffene },
    systemversagen: { type: 'string', enum: MERKMALE_ENUMS.systemversagen },
    exzess: {
      type: 'array',
      items: { type: 'string', enum: MERKMALE_ENUMS.exzess },
      minItems: 1,
    },
  },
  required: ['tatmittel', 'tatkontext', 'betroffene', 'systemversagen', 'exzess'],
  additionalProperties: false,
};

export const CLASSIFY_SYSTEM_PROMPT =
  'Du klassifizierst Einträge einer kriminologischen Chronik nach einem festen ' +
  'Merkmalsschema. Die Merkmale erfassen ausschließlich Tatstrukturen, keine ' +
  'Personen. Demographische Kategorien existieren im Schema nicht.\n\n' +
  'ZUORDNUNGSREGELN:\n' +
  '- tatmittel: Das dominante Tatmittel der beschriebenen Tat. Bei mehreren ' +
  'Waffen das prägende Mittel (bei echter Gleichrangigkeit: Sonstiges). Axt, ' +
  'Machete, Hammer und andere Hiebwaffen fallen unter Machete-Hiebwaffe. ' +
  'Schläge, Tritte, Würgen fallen unter Körpergewalt. Brandsätze und ' +
  'Pyrotechnik fallen unter Sprengsatz. Bei Justizfällen ohne eigene ' +
  'Tathandlung (Freispruch, Freilassung, Netzwerk-Aufdeckung): das Tatmittel ' +
  'der zugrunde liegenden Tat, sonst Sonstiges.\n' +
  '- tatkontext: Der räumlich-institutionelle Kontext des Tatorts. Bahnhöfe, ' +
  'Züge, Straßenbahnen, Haltestellen: ÖPNV-Bahn. Stadtfeste, Weihnachtsmärkte, ' +
  'Kirmes, Demonstrationen, Sportveranstaltungen, Freibäder: Volksfest-' +
  'Veranstaltung. Straßen, Plätze, Parks, Fußgängerzonen: öffentlicher ' +
  'Straßenraum. Krankenhäuser, Notaufnahmen, Rettungswagen, Psychiatrie, ' +
  'Forensik: Klinik-Rettungsdienst. Schulen, Hochschulen, Kinderheime: ' +
  'Bildungseinrichtung. Wohnungen, Wohnhäuser, Nachbarschaft, Unterkünfte: ' +
  'Wohnumfeld. Gerichtssäle und abstrakte Verfahrenskontexte: Sonstiges.\n' +
  '- betroffene: Die primär betroffene Gruppe. Polizei, Feuerwehr, ' +
  'Rettungskräfte im Einsatz: Einsatzkräfte. Minderjährige Opfer: Kinder-' +
  'Jugendliche. Zufällig anwesende Unbeteiligte: Passanten. Angegriffene in ' +
  'ihrer beruflichen Funktion (Klinikpersonal, Lehrer, Kontrolleure, ' +
  'Zugbegleiter, Kassierer): Personal-Beschäftigte. Mehrere der genannten ' +
  'Gruppen gleichrangig: Mehrere Gruppen.\n' +
  '- systemversagen: Das im Text dokumentierte institutionelle Versagen. ' +
  'Freispruch, Verfahrenseinstellung, Verfahrensfehler, geplatzte Prozesse: ' +
  'Freispruch-Verfahrenseinstellung. Entlassung trotz Gefährlichkeit, ' +
  'Drehtür-Psychiatrie, Ausbruch aus Unterbringung, ausgelaufene Fußfessel: ' +
  'gescheiterte Unterbringung. Täter war Behörden vor der Tat als Gefährder ' +
  'oder durch Anzeigen/Vorstrafen bekannt, ohne dass wirksame Maßnahmen ' +
  'folgten: behördenbekannter Gefährder. Gescheiterte Abschiebung, ' +
  'gescheiterte Dublin-Überstellung, nicht vollstreckter Haftbefehl: ' +
  'gescheiterte Abschiebung-Vollstreckung. Kein solches Versagen im Text ' +
  'dokumentiert: keines. Bei mehreren dokumentierten Versagensformen die im ' +
  'Text dominante.\n' +
  '- exzess: Alle zutreffenden Exzessmerkmale der Tatbegehung. Filmen der Tat ' +
  'oder Prahlen in sozialen Medien: Filmen. Rückkehr zum Opfer, erneutes ' +
  'Zustechen/Überfahren, Ausspähung mit erneutem Anlauf: Wiederholungsabsicht. ' +
  'Verstümmelung, exzessive Gewalteinwirkung weit über die Tötung hinaus ' +
  '(z. B. 87 Tritte, 38 Stiche): Verstümmelung. Begehung durch Gruppe (ab ' +
  'drei gemeinschaftlich Handelnden): Gruppenbegehung. Keines davon: nur ' +
  '["keines"].\n\n' +
  'Antworte ausschließlich mit dem JSON-Objekt.';

export function classifyUserPrompt({ title, lead, body }) {
  return (
    `Titel: ${title || ''}\n` +
    `Lead: ${lead || ''}\n\n` +
    `Text:\n${body || ''}\n\n` +
    'Klassifiziere diesen Eintrag nach dem Merkmalsschema.'
  );
}

/**
 * Klassifiziert einen Nova-Eintrag nach dem Merkmalsschema.
 * Ein Haiku-Call, JSON-Schema-erzwungener Output.
 * @returns {Promise<{tatmittel:string, tatkontext:string, betroffene:string, systemversagen:string, exzess:string[]}>}
 */
export async function classifyMerkmale({ title, lead, body }) {
  const msg = await client.messages.create({
    model: CLASSIFY_MODEL,
    max_tokens: 300,
    system: [{ type: 'text', text: CLASSIFY_SYSTEM_PROMPT, cache_control: { type: 'ephemeral' } }],
    messages: [{ role: 'user', content: classifyUserPrompt({ title, lead, body }) }],
    output_config: { format: { type: 'json_schema', schema: MERKMALE_SCHEMA } },
  });
  const text = (msg.content || []).find((b) => b.type === 'text')?.text || '';
  const start = text.indexOf('{');
  const end = text.lastIndexOf('}');
  if (start === -1 || end <= start) throw new Error('Klassifikation: keine JSON-Struktur.');
  const out = JSON.parse(text.slice(start, end + 1));
  return normalizeMerkmale(out);
}

/** Validiert/normalisiert ein Merkmale-Objekt gegen die Enums. */
export function normalizeMerkmale(m) {
  const pick = (key, fallback) =>
    MERKMALE_ENUMS[key].includes(m?.[key]) ? m[key] : fallback;
  let exzess = Array.isArray(m?.exzess)
    ? m.exzess.filter((e) => MERKMALE_ENUMS.exzess.includes(e))
    : [];
  exzess = [...new Set(exzess)];
  if (exzess.length > 1) exzess = exzess.filter((e) => e !== 'keines');
  if (!exzess.length) exzess = ['keines'];
  return {
    tatmittel: pick('tatmittel', 'Sonstiges'),
    tatkontext: pick('tatkontext', 'Sonstiges'),
    betroffene: pick('betroffene', 'Passanten'),
    systemversagen: pick('systemversagen', 'keines'),
    exzess,
  };
}

export const classifyModelInfo = { model: CLASSIFY_MODEL };
