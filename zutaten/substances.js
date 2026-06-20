// Substanz-Index Data: window.SUBSTANCES_DATA
// Schema per entry:
//   name             string  Display name, e.g. "Hopfen (Humulus lupulus)"
//   slug             string  URL-safe identifier, lowercase a-z0-9 with hyphens
//   werbung          string  1-3 Saetze: was Hersteller/Shops behaupten (paraphrasiert, neutral)
//   wirkung          string  3-6 Saetze: was die Evidenz tatsaechlich sagt (diagnostisch, ohne Hedging)
//   filters          string[]    optional, e.g. ["ruhe"] — siehe config/zutaten-filters.json
//   related_article  string|null optional Pfad zu einem Bildgebung-Artikel, z.B. "/zutaten/bildgebung/hopfen-jenseits-vom-bier/"
//
// Stilregeln fuer beide Felder: keine Doppelpunkte im Fliesstext (nur in Feld-Labels),
// keine Gedankenstriche, keine leeren Verstaerker, kein Hedging, kein Coaching-Deutsch.
// Werbung-Feld zitiert/paraphrasiert ohne zu uebertreiben. Wirkung-Feld ist diagnostisch
// und konkret (z.B. "Drei RCTs mit je 40 Teilnehmern zeigen X. Metaanalysen fehlen.")
//
// Phase 1: leerer Bestand. Phase 2 wird 51+ Eintraege ergaenzen (siehe Plandokument).

window.SUBSTANCES_DATA = {
  entries: []
};
