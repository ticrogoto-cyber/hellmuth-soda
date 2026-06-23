# Suchttypen — Review

`/diagnose/suchttypen/` — interaktiver Entscheidungsbaum, zwölf Fragen, zehn Typen, Diagnose am Ende. Quelle für Sprache und Typologie: »Kreativer Suizid. Rauchen, Hunger und die Lüge vom inneren Kind« (Ticro Goto, Cum notis, Charlottenburg 2026, ISBN 979-8-252624-61-7).

Die Synthese ist im Repo unter `suchttypen/SYNTH.md` dokumentiert. Diese Datei ist die menschenlesbare Zusammenfassung für die Sichtprüfung.

## Architektur

- **Eine HTML-Datei**, inline CSS und JavaScript, keine externen Skripte außer site.js / search.js.
- **Inline-SVG** für den Baum: Stamm und Verzweigungen werden in einer SVG-Spalte links neben den Fragen gezeichnet.
- **HTML** für Frage- und Antworttexte (Tap-Targets ≥ 44 px für Touch).
- **Scroll-Reveal** über IntersectionObserver-äquivalente Logik: jede neue Tier blendet ein, der Stamm zeichnet sich entlang `stroke-dashoffset`. Auto-Scroll bringt die aktuelle Frage in den Blick.
- **`prefers-reduced-motion: reduce`**: Animationen, Transforms und Auto-Scroll-Smoothing deaktivieren sich.
- **Replay**: Knopf »Nochmal« setzt State, Baum und Scroll-Position zurück.
- **Mobile**: Single-Column-Layout, Stamm in 22-px-Spalte, Antworten als großzügige Tap-Targets.

## Stil-Konformität (Bildgebung-Ästhetik)

- Schwarz auf Weiß. Keine Farbflächen, keine bunten Buttons.
- Akzentfarbe für gewählte Antwort und aktiven Stamm: `#6B0F1A` (Blutrot).
- Sekundärgrau für verworfene Antworten und Trennlinien: `#888`.
- Pfeile durchgezogen, 0.8 px, Chevron-Spitze.
- Stamm-Linien 0.8 px, Verzweigungen 0.8 px.
- Pfade laufen niemals durch Text (Stamm sitzt in separater Spalte links, Verzweigungen enden vor den Textspalten).
- Typografie: Printvetica VERSALIEN für Überschriften und Typ-Namen, Fournier Pro Italic für Fragen und Closer-Zitat.

## 12 Fragen

| # | Frage | Antworten kurz |
|---|-------|----------------|
| 1 | Du nimmst was. Warum nimmst du es? | Gefühl weg / wer-ich-sein-will / wie Atmen |
| 2 | Du hast schon einmal aufgehört. Was kam danach? | Wieder angefangen / Andere Substanz / Nie aufgehört |
| 3 | Jemand fragt, wie viel du trinkst. | Vergleichszahlen / im Griff / wegen Diagnose |
| 4 | Du fühlst Trauer, Wut, Leere. | Reflex / Schaden / Methode |
| 5 | Eine Woche ohne den Stoff. | Traurig & leer / geht vorbei / Substitution |
| 6 | Jemand sagt: ganz aufhören. | wäre nicht ich / nicht heute / wegen Diagnose |
| 7 | Eine Woche aufschreiben. Die Zahl ist… | Ausnahmewoche / getrackt / nicht aufgeschrieben |
| 8 | Du schaust auf dein Konsum-Muster. | macht mich härter / verdient / kein Drama |
| 9 | Jeden Tag ausgeruht, klar, ruhig. | kenne ich nicht / verdächtig / wäre Verlust |
| 10 | Was tust du wirklich beim Konsum? | Entzug entziehen / Gefühl weg / Täter vollenden |
| 11 | Wie lange ohne den Stoff? | Drei Wochen / Mehrere Monate / Wochenende |
| 12 | Welcher Satz tut am meisten weh? | Mörder spazieren / Vergleichsgruppe krank / Adelstitel |

Jede Antwort vergibt Punkte an einen oder zwei der zehn Typen (`SYNTH.md` enthält die exakten Gewichte). Am Ende gewinnt der Typ mit den meisten Punkten; bei Gleichstand entscheidet die Typ-Reihenfolge (BETÄUBER < NORMALISIERER < KONTROLL-LÜGNER < … < ZUSTANDSBLINDE).

## 10 Suchttypen

1. **DER BETÄUBER** — Substanz gegen Gefühl. Feierabend als Fluchtroute. *Buch: Kap. 4, Kap. 5.*
2. **DER NORMALISIERER** — Maßstab an kranker Population geeicht. Drei Bier sind moderat, weil die Nachbarn vier trinken. *Buch: Kap. 1, Kap. 6, Kap. 13.*
3. **DER KONTROLL-LÜGNER** — »Ich kann jederzeit aufhören.« Tut es nie. *Buch: Kap. 3, Kap. 7.*
4. **DER NOTAUSGANGSSPRINGER** — Eine Sucht beenden, die nächste anfangen. Drehtüren. *Buch: Kap. 6 §1–4.*
5. **DER KREATIV-PRAHLER** — Krücke als Werkzeug. Verteidigt nicht den Stoff, sondern die Identität, die er sich angeraucht hat. *Buch: Kap. 3, Kap. 8.*
6. **DER DIAGNOSEFLÜCHTLING** — Etikett statt Verantwortung. ADHS, Reizdarm, Burnout. *Buch: Kap. 6 §6, Kap. 11, Kap. 15.*
7. **DER OPTIMIERER** — Tracking-App, dritter Espresso, Nikotin-Pouch. Wachheit auf Kredit. *Buch: Kap. 7, Kap. 8.*
8. **DER SELBSTBESTRAFER** — Greift zur Substanz, von der er weiß, dass sie wehtut. Salz als Rasierklinge. *Buch: Kap. 4, Kap. 6 §5.*
9. **DER GRANDIOSE** — Schaden als Adelstitel. John Wick mit Bierdose. *Buch: Kap. 14.*
10. **DER ZUSTANDSBLINDE** — Kann sich kein Leben ohne den Stoff vorstellen. Lebt auf zwanzig Prozent, hält es für hundert. *Buch: Kap. 12, Kap. 16.*

Vollständige Charakterisierungen (4–5 Sätze pro Typ) im Code (`TYPES`-Objekt) und in `SYNTH.md`.

## Buch-Closer

Nach der Diagnose: Trennlinie, dann das Closer-Modul mit Buchtitel, Verlag (Cum notis, Charlottenburg 2026), ISBN und Amazon-Link `https://www.amazon.de/dp/9798252624617`. Darunter der **Nochmal**-Button.

## Navigation

- Neuer Eintrag »Suchttypen« im Diagnose-Dropdown, **VOR** Quiz. 
- Patch in `pipeline/render.mjs` (3 Nav-Templates + STATIC_PAGES-Sitemap-Eintrag).
- Bulk-Patch in 471 vorhandenen HTML-Dateien (Pythonscript, regex-basiert, idempotent — kein Doppelpatch möglich).
- Übersichts-Seite `/diagnose/index.html` als Sammelpunkt aller Diagnose-Werkzeuge (Suchttypen / Quiz / Vokabular / Klarheitskarten).

## Bekannte Einschränkungen

- Die Branching-Logik ist eine Scoring-Implementation, kein echtes Verzweigungs-Skript. Der Brief erlaubt Branching, schreibt es aber nicht zwingend vor — »Mindestens 10 Fragen pro Durchlauf« ist erfüllt (12 fixe Fragen). Wenn echtes Skip-Branching gewünscht ist (manche Fragen werden bei bestimmten Antworten übersprungen), lässt sich das in `chooseAnswer()` als `next`-Override leicht ergänzen.
- TOFI, Patchwork-Ich, Trauer-Süchtige und andere Typ-Kandidaten aus den Extracts wurden in die Zehn verdichtet (BETÄUBER, BLIND, STRAFER decken die Cluster ab). Liste der eingeschmolzenen Kandidaten im Synthese-Dokument.

## Prüf-Checkliste vor dem Deploy

- [ ] Auf Desktop laden, alle 12 Fragen beantworten, jeden der 10 Typen erreichen (z.B. via verschiedene Antwort-Kombinationen).
- [ ] Auf Mobil testen (Tap-Targets, Scroll-Verhalten, Stamm-Layout in 22-px-Spalte).
- [ ] `prefers-reduced-motion: reduce` aktivieren und prüfen, dass keine Transitions, kein Smooth-Scroll laufen.
- [ ] Sprache: deutsche Substantiv-Großschreibung in Italic-Antworten, Guillemets `»…«`.
- [ ] Amazon-Link (ASIN/ISBN) lädt zum Buch.
- [ ] Navigation: »Suchttypen« erscheint VOR »Quiz« in jedem Diagnose-Dropdown.
