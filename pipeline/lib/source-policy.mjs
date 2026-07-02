// Quellenpolitik der Nova-Pipeline: verbindliche Rangordnung für sichtbare
// Quellenangaben und Ausschlussliste. Wikipedia ist für interne Recherche
// erlaubt, als sichtbare Quelle verboten. Kampagnen- und Aktivistenportale
// sind kategorisch ausgeschlossen: Sie betreiben die politische
// Instrumentalisierung, von der sich der methodische Vorspann abgrenzt.

// NIE als sichtbare Quelle (Domain-Suffixe).
export const SOURCE_BLACKLIST = [
  'wikipedia.org',
  // Kampagnen-/Aktivistenportale
  'nius.de',
  'apollo-news.net',
  'journalistenwatch.com',
  'reitschuster.de',
  'pi-news.net',
  'deutschland-kurier.org',
  'compact-online.de',
  'anonymousnews.org',
  'unser-mitteleuropa.com',
];

// Rangordnung sichtbarer Quellen (1 = höchste). Boulevard (Rang 5) nur als
// Zweitquelle, nie allein.
const RANK_PATTERNS = [
  // 1: Polizei- und Behördenmeldungen, Justiz
  { rank: 1, re: /presseportal\.de\/blaulicht|polizei\.|\.polizei|staatsanwaltschaft|generalbundesanwalt|justiz\.|bundesgerichtshof|gericht\.|landgericht|amtsgericht|oberlandesgericht/i },
  // 2: Öffentlich-rechtliche und Agenturberichterstattung
  { rank: 2, re: /tagesschau\.de|zdf\.de|zdfheute\.de|ndr\.de|wdr\.de|br\.de|mdr\.de|swr\.de|rbb24|hessenschau\.de|deutschlandfunk|dpa\.com|sportschau\.de/i },
  // 3: Überregionale Qualitätspresse
  { rank: 3, re: /faz\.net|sueddeutsche\.de|spiegel\.de|zeit\.de|welt\.de|lto\.de|tagesspiegel\.de|taz\.de|handelsblatt\.com|nzz\.ch/i },
  // 5: Boulevard (nur als Zweitquelle)
  { rank: 5, re: /bild\.de|express\.de|tz\.de|mopo\.de|bz-berlin\.de/i },
];

// 4: Etablierte Regionalpresse und alles Übrige, das nicht gelistet ist.
const DEFAULT_RANK = 4;

export function isBlacklistedSource(url) {
  try {
    const host = new URL(url).hostname;
    return SOURCE_BLACKLIST.some((b) => host === b || host.endsWith('.' + b));
  } catch {
    return false;
  }
}

export function rankSource(url) {
  const s = String(url || '');
  for (const { rank, re } of RANK_PATTERNS) if (re.test(s)) return rank;
  return DEFAULT_RANK;
}

/** Sortiert ein sources-Array nach Rangordnung (stabil bei Ranggleichheit). */
export function sortSourcesByRank(sources) {
  return sources
    .map((s, i) => ({ s, i, rank: rankSource(s.url) }))
    .sort((a, b) => a.rank - b.rank || a.i - b.i)
    .map((x) => x.s);
}
