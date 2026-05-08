# Kartenvorderseite – Layoutspezifikation

Vorlage zum Nachbau in InDesign. Maße in Millimetern (DTP-Standard) und Pixeln (300 DPI).

## Dokument

| Parameter | Wert |
|---|---|
| Endformat (Trim) | 63,5 × 88,9 mm |
| Beschnittzugabe (Bleed) | 3 mm umlaufend |
| Format mit Bleed | 69,5 × 94,9 mm |
| Sicherheitszone (Safe) | 3 mm innen vom Trim |
| Auflösung | 300 DPI |
| Pixelmaß (mit Bleed) | 821 × 1121 px |
| Farbraum | CMYK, FOGRA39 (Coated FOGRA39) |
| Hintergrund | 100 % Weiß (Papierweiß) |
| Schwarz | 100 K, **kein** Tiefschwarz (CMYK 0/0/0/100) |
| Eckenrundung | nicht designen – QPMN schneidet |

## InDesign-Dokumenteinstellungen

- Neues Dokument → Druck → Custom
- Breite 63,5 mm, Höhe 88,9 mm
- Anschnitt: oben/unten/links/rechts je 3 mm
- Farbprofil: CMYK ISO Coated v2 (FOGRA39)
- Stege/Marginalien: 3 mm umlaufend (= Safe Zone)
- Spalten: 1
- Seitenformat: Hochformat

## Schriften

| Einsatz | Schrift | Datei | Stil |
|---|---|---|---|
| Headline / Quartett / Title / Mechanismus / Werte / Footer | Printvetica | `fonts/PRINTVETICA.OTF` | Versalien |
| Diagnose | Fournier MT Pro Italic | `fonts/FOURNIERMTPRO-ITALIC.TTF` | Kursiv |
| Falltürfrage | Fournier MT Pro Regular | `fonts/FOURNIERMTPRO-REGULAR.TTF` | Regular |

Beim PDF-Export Schriften einbetten oder in Pfade umwandeln.

## Vertikale Aufteilung (Top-down)

Alle Y-Werte gemessen vom oberen Trim-Rand (also nicht von der Bleed-Kante).

| Block | Y-Position (mm) | Inhalt | Schrift / Größe (pt) | Ausrichtung |
|---|---|---|---|---|
| Header | 3 – 6 | KLARHEITSKARTEN I | Printvetica 7 pt, Versalien | zentriert |
| Quartett | 7 – 10 | z. B. AUFSCHUB | Printvetica 9 pt, Versalien | zentriert |
| Trennlinie 1 | 12 | 0,25 pt schwarz, 36 mm breit, zentriert | – | – |
| Title | 14 – 30 | z. B. ICH FANGE MORGEN AN | Printvetica 22–26 pt, Versalien, ggf. zwei Zeilen | zentriert |
| Mechanismus | 33 – 36 | z. B. PRESENT BIAS | Printvetica 6 pt, Versalien | zentriert |
| Trennlinie 2 | 38 | 0,25 pt schwarz, 36 mm breit, zentriert | – | – |
| Werteblock | 41 – 60 | 5 Zeilen, je 3,8 mm Zeilenhöhe, Label links / Zahl rechts | Printvetica 6,5 / 7 pt | links / rechts bündig im Inhaltsbereich |
| Trennlinie 3 | 62 | 0,25 pt schwarz, 36 mm breit, zentriert | – | – |
| Diagnose | 65 – 73 | z. B. „Morgen ist der Lieblingsort der Sucht.“ | Fournier MT Pro Italic 7,5 pt | zentriert, max. 2 Zeilen |
| Falltürfrage | 75 – 83 | z. B. „Was wäre heute der kleinste echte Schritt?“ | Fournier MT Pro Regular 7 pt | zentriert, max. 2 Zeilen |
| Footer | 84 – 86 | links: ID (z. B. A01) / rechts: SELBSTBETRUG | Printvetica 5 pt, Versalien | links / rechts bündig |

Inhaltsbereich (Safe Zone): X 3 → 60,5 mm, Y 3 → 85,9 mm. Breite = 57,5 mm.

## Werte-Tabelle: Zeilenstruktur

Pro Zeile:
- Label (Sofortentlastung / Tarnung / Rückfallkraft / Folgekosten / Klarheitsschmerz) linksbündig im Inhaltsbereich.
- Zahl (1–10) rechtsbündig im Inhaltsbereich.
- Tabulator zwischen Label und Zahl.
- Zeilenhöhe 3,8 mm (entspricht ~10,7 pt Vorschub bei 7 pt Schrift).
- Kein Punktraster zwischen Label und Zahl (klassische Optik), oder optional als Punktreihe mit 60 % Schwarz.

## Trennlinien

- Hairline 0,25 pt
- 100 K schwarz
- Länge ca. 36 mm, zentriert
- Drei Stück: unter Quartettlabel, unter Mechanismus, unter Werten

## Data Merge in InDesign

1. Master-CSV laden: `klarheitskarten/01_text/klarheitskarten_001_master.csv` (Trennzeichen: Semikolon, UTF-8).
2. Datenfelder in Vorlage einsetzen:
   - `<<id>>` im Footer links
   - `<<quartett>>` im Quartett-Header (über Mapping in Großbuchstaben, oder eigene Spalte „quartett_label“ ergänzen)
   - `<<titel>>` im Title-Block (Großbuchstaben via Versalien-Stil)
   - `<<mechanismus>>` im Mechanismus-Feld (Versalien)
   - `<<sofortentlastung>>`, `<<tarnung>>`, `<<rueckfallkraft>>`, `<<folgekosten>>`, `<<klarheitsschmerz>>` als Werte
   - `<<diagnose>>` im Diagnose-Block
   - `<<falltuerfrage>>` im Falltür-Block
3. „Datenzusammenführung erstellen" → Mehrseitiges Dokument (52 Seiten).
4. PDF-Export X-1a oder X-4, mit Bleed 3 mm und Schnittmarken aus.

## Referenz-Renderings

Als visueller Anker (kein endgültiger Druckstand) liegen 52 + 4 + 1 PNGs hier:

- `klarheitskarten/03_exports/cards_front/A01.png` … `M04.png`
- `klarheitskarten/03_exports/rules/R01_trumpfquartett.png` … `R04_hinweis.png`
- `klarheitskarten/03_exports/backs/card_back.png`

Diese PNGs zeigen Proportionen, Hierarchie und Aufteilung – nicht die finale Druckqualität. Final: InDesign-Vektor-PDF.
