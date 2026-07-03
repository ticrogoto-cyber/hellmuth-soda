// Maskierung von Personennamen für die Job-Summary. Das Repo ist öffentlich,
// damit sind Actions-Summaries öffentlich; Quellen-Schlagzeilen zitieren
// Verdächtige aber im presseüblichen Anonymisierungsformat mit Namens-Initial
// (»Fatih Khan G.«, »Ali B.«). Diese Muster werden vor der Ausgabe durch
// »[Name]« ersetzt. Maskiert wird nur die Summary (stdout); die Log-Ebene
// (stderr) bleibt vollständig.

// Kapitalisiertes Namenswort, optional mit Bindestrich (»Jan-Philipp«).
const NAMENSWORT = "[A-ZÄÖÜ][a-zäöüßéèáàâçñ']+(?:-[A-ZÄÖÜ][a-zäöüßéèáàâçñ']+)?";

// Muster 1: ein bis drei Vornamen + Nachnamen-Initial mit Punkt
// (»Fatih Khan G.«, »Ali B.«). Das Initial ist genau ein Großbuchstabe,
// Abkürzungen wie »St.« oder »Dr.« matchen nicht. Bewusst überdeckend:
// Da das Deutsche Substantive kapitalisiert, können Rollenwörter direkt vor
// dem Namen mitmaskiert werden (»Beamtin Anna S.« → »[Name]«). Recall geht
// vor Präzision; nur die Diagnose-Summary ist betroffen, nie der Bestand.
const RE_NAME_INITIAL = new RegExp(`\\b(?:${NAMENSWORT}\\s+){1,3}[A-ZÄÖÜ]\\.(?!\\w)`, 'g');

// Muster 2: ein bis zwei Initialen + Nachname (»F. Khan«, »J. K. Rowling«).
// Kleingeschriebene Folgewörter (»E. coli«, »z. B.«) matchen nicht.
const RE_INITIAL_NAME = new RegExp(`\\b(?:[A-ZÄÖÜ]\\.\\s+){1,2}${NAMENSWORT}\\b`, 'g');

/** Ersetzt Personennamen-Muster in einem Text durch »[Name]«. */
export function maskNames(text) {
  return String(text ?? '')
    .replace(RE_NAME_INITIAL, '[Name]')
    .replace(RE_INITIAL_NAME, '[Name]');
}
