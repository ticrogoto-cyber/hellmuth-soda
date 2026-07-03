// Vorfilter für Sendungscontainer: Manche ÖRR-Feeds (beobachtet beim per
// Discovery gefundenen NDR-Feed) liefern komplette Nachrichtensendungen als
// Episoden-Items (»NDR Info 21:45 | 02.07.2026«). Das sind Programmhinweise,
// keine Einzelvorfälle; im ersten Cron-Lauf erreichte ein solcher Container
// Score 6. Items dieses Musters werden vor dem Scoring aussortiert.

// Titel, die im Kern aus Sendungsname + Uhrzeit + Datum bestehen:
// kurzer Prefix (Sendungsname), dann »HH:MM«, optional »Uhr«, Trennzeichen
// oder »vom«, dann ein Datum, danach nichts mehr.
const RE_EPISODE = /^.{0,48}?\d{1,2}:\d{2}(?:\s*Uhr)?\s*(?:[|,–-]\s*)?(?:vom\s+)?\d{1,2}\.\d{1,2}\.\d{2,4}\s*$/;

/** true, wenn ein Titel eine Sendungs-Episode statt einer Einzelmeldung ist. */
export function isBroadcastContainer(title) {
  return RE_EPISODE.test(String(title ?? '').trim());
}
