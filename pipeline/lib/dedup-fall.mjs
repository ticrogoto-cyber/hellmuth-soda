// Fall-Dedup mit Justiz-Ausnahme: Haiku-Abgleich jedes Kandidaten (nach dem
// Score-Gate) gegen den Bestand (Titel, Ort, Datum). Folgeberichte zu bereits
// dokumentierten Fällen werden verworfen, AUSSER das justizielle oder
// behördliche Ergebnis erfüllt selbst die Anomalie-Kriterien als
// eigenständiges Systemversagen (Freispruch, Bewährung für Schwerstverbrechen,
// Verfahrenseinstellung, Freilassung durch Behördenfehler). Solche Einträge
// existieren im Bestand (Fulda-Urteil, Aschau-Freispruch, Berliner
// Freilassung) und bleiben zulässig; sie behandeln das Justizereignis, nicht
// die Tat. Der Abgleich berücksichtigt auch die in diesem Lauf bereits
// angenommenen Kandidaten, damit Mehrfachmeldungen desselben neuen Falls
// (Testlauf: drei Meldungen zur selben Tat in Stade) nicht mehrfach
// veröffentlicht werden.

import Anthropic from '@anthropic-ai/sdk';

const DEDUP_MODEL = process.env.DEDUP_MODEL || 'claude-haiku-4-5';

const client = new Anthropic({ maxRetries: 4 });

export const FALL_KLASSEN = ['NEUER_FALL', 'FOLGEBERICHT', 'FOLGEBERICHT_JUSTIZANOMALIE'];

export const FALL_DEDUP_SCHEMA = {
  type: 'object',
  properties: {
    klassifikation: { type: 'string', enum: FALL_KLASSEN },
    match_titel: { type: 'string' },
    ort: { type: 'string' },
    begruendung: { type: 'string' },
  },
  required: ['klassifikation', 'match_titel', 'ort', 'begruendung'],
  additionalProperties: false,
};

const PROMPT_HEAD =
  'Du prüfst für eine kriminologische Chronik, ob eine neue Meldung einen ' +
  'bereits dokumentierten Fall betrifft. Der Bestand ist unten als Liste ' +
  'aufgeführt (Titel | Ort | Datum des Ereignisses).\n\n' +
  'Klassifiziere die neue Meldung in genau eine Kategorie:\n\n' +
  'NEUER_FALL: Das gemeldete Ereignis ist mit keinem Bestandsfall identisch. ' +
  'Ähnliche Taten am selben Ort oder gleichartige Delikte sind KEIN Match; ' +
  'entscheidend ist die Identität des Falls (dieselbe Tat, dasselbe Ereignis, ' +
  'dasselbe Verfahren). Im Zweifel NEUER_FALL.\n\n' +
  'FOLGEBERICHT: Die Meldung berichtet erneut über einen Bestandsfall: neue ' +
  'Ermittlungsdetails, Festnahme, Anklage, Prozessauftakt, Zeugenaussagen, ' +
  'reguläres Urteil, Gedenken, Jahrestag, Nachbetrachtung. Das gilt auch, ' +
  'wenn die Meldung neue Einzelheiten enthält.\n\n' +
  'FOLGEBERICHT_JUSTIZANOMALIE: Die Meldung betrifft einen Bestandsfall, ABER ' +
  'das gemeldete justizielle oder behördliche Ergebnis erfüllt selbst die ' +
  'Kriterien einer strukturellen Anomalie als eigenständiges Systemversagen: ' +
  'Freispruch trotz dokumentierter Tat, Bewährungsstrafe für ein ' +
  'Schwerstverbrechen, Verfahrenseinstellung, Freilassung durch ' +
  'Behördenfehler, geplatzter oder verschleppter Prozess mit Haftentlassung. ' +
  'Reguläre Verurteilungen, erwartbare Haftbefehle und normale ' +
  'Prozessauftakte sind KEINE Justizanomalie, sondern FOLGEBERICHT.\n\n' +
  'Zusätzlich zum Bestand können dir bereits angenommene Kandidaten des ' +
  'laufenden Pipeline-Laufs genannt werden; sie zählen wie Bestandsfälle ' +
  '(eine zweite Meldung zum selben neuen Fall ist FOLGEBERICHT).\n\n' +
  'Gib bei FOLGEBERICHT und FOLGEBERICHT_JUSTIZANOMALIE in match_titel den ' +
  'Titel des betroffenen Bestandsfalls wörtlich aus der Liste an, bei ' +
  'NEUER_FALL einen leeren String. Gib in ort den Tatort der neuen Meldung ' +
  'an (Stadt, Bundesland), soweit erkennbar, sonst einen leeren String. ' +
  'Antworte ausschließlich mit dem JSON-Objekt.';

const bestandZeile = (e) => `- ${e.title} | ${e.ort || 'Ort unbekannt'} | ${e.date || 'Datum unbekannt'}`;

/**
 * Klassifiziert einen Kandidaten gegen den Bestand plus die in diesem Lauf
 * bereits angenommenen Kandidaten. Der Bestand liegt im gecachten
 * System-Block (stabil pro Lauf), die Laufliste in der User-Nachricht.
 * @param {{title:string, summary:string, bestand:Array<{title:string,ort:?string,date:?string}>, angenommen?:Array<{title:string,ort:?string}>}} args
 * @returns {Promise<{klassifikation:string, matchTitel:string, ort:string, begruendung:string}>}
 */
export async function classifyFallDedup({ title, summary, bestand, angenommen = [] }) {
  const system = [
    {
      type: 'text',
      text: PROMPT_HEAD + '\n\nBESTAND:\n' + bestand.map(bestandZeile).join('\n'),
      cache_control: { type: 'ephemeral' },
    },
  ];
  const user =
    (angenommen.length
      ? 'In diesem Lauf bereits angenommene Kandidaten (zählen wie Bestand):\n' +
        angenommen.map((a) => `- ${a.title}${a.ort ? ' | ' + a.ort : ''}`).join('\n') +
        '\n\n'
      : '') +
    `Neue Meldung:\nTitel: ${title || ''}\nAnriss: ${summary || ''}\n\n` +
    'Klassifiziere die Meldung.';

  const msg = await client.messages.create({
    model: DEDUP_MODEL,
    max_tokens: 400,
    system,
    messages: [{ role: 'user', content: user }],
    output_config: { format: { type: 'json_schema', schema: FALL_DEDUP_SCHEMA } },
  });
  const text = (msg.content || []).find((b) => b.type === 'text')?.text || '';
  const start = text.indexOf('{');
  const end = text.lastIndexOf('}');
  if (start === -1 || end <= start) throw new Error('Fall-Dedup: keine JSON-Struktur.');
  const out = JSON.parse(text.slice(start, end + 1));
  const klassifikation = FALL_KLASSEN.includes(out.klassifikation) ? out.klassifikation : 'NEUER_FALL';
  return {
    klassifikation,
    matchTitel: String(out.match_titel || '').trim(),
    ort: String(out.ort || '').trim(),
    begruendung: String(out.begruendung || '').trim(),
  };
}

export const dedupModelInfo = { model: DEDUP_MODEL };
