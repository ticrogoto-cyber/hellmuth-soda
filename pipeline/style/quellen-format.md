# Quellen-Format (verbindlich für Substanz-Index und Bildgebung)

Datum: 2026-06-20. Verbindlich ab sofort für alle neuen Einträge in
`zutaten/substances.js` (Substanz-Index) und für die geplanten 37
Bildgebung-Artikel unter `zutaten/bildgebung/`.

## I. Substanz-Index (substances.js `quellen`-Array)

Das `quellen`-Feld ist ein Array kurzer String-Zitate für die
Kachel-Eyebrow-Zeile, **keine Bibliografie**. Wird sowohl auf der
statischen Detail-Page als auch im Overlay als kommagetrennte
Inline-Zeile gerendert: »Quellen: Name Jahr, Name Jahr«.

### Format

- Schema: `Nachname Jahr [optional kurzes Inhalts-Stichwort]`
- Vier-stellige Jahreszahl
- Autor-Nachname ohne Vorname/Initialen
- Bei Mehrfachautoren: nur Erstautor, kein »et al«
- Beispiele zulässig:
  - `"Yoshino 2017"`
  - `"Slutsky 2010 Magnesium-L-Threonat Kognition"`
  - `"Smith 2010 VITACOG"`
  - `"Cochrane 2018"` (für Cochrane-Reviews ohne Erstautor)

### Verboten im sichtbaren Array

- DOI im Text (`"10.1056/NEJMra1401038"`)
- PMID im Text (`"PMID 12345678"`)
- Volle URLs oder Domains (`"blueprint.bryanjohnson.com"`,
  `"midwesterndoctor.com DMSO-Serie"`)
- Journal-Namen als Anhängsel (NEJM, JAMA, Lancet, BMJ am Ende)
- Volltitel der Studie
- Fehlendes Jahr (`"FDA Drug Efficacy Study"` ohne Jahresanker)
- Bücher ohne Jahr (`"Kreativer Suizid (Buch)"`)
- Eintragslänge > 80 Zeichen

### Verifikations-Metadaten (separat, nicht im quellen-Array)

PMIDs zur Verifikation bleiben Datenmodell-intern, werden im
Frontend **nicht angezeigt**. Wenn benötigt, in paralleles Feld:

```js
quellen_pmids: ["20838622", "27066240"]
```

oder in separate Audit-Datei (`docs/staging/pmid-verifikation.md`).

### Web-Quellen ohne Autor/Jahr

Wenn kein Autor/Jahr-Anker existiert (Substack, Blog-Domains):
**nicht ins quellen-Array aufnehmen**. Stattdessen im wirkung-Text
als Kontextquelle nennen, oder eigenes Feld `kontextquellen: []`
verwenden, das im Frontend nicht gerendert wird.

### Leeres Quellen-Array

Bei leerem `quellen: []` rendert das Frontend nichts (kein leerer
Block, keine Pseudo-Quelle). Aktueller Stand: 20 von 168 Einträgen
ohne Quellen, das ist toleriert.

## II. Bildgebung-Artikel (Frontmatter `sources[]`-Array)

Bildgebung-Artikel sind Langform mit Befundlogik (MRT/CT/EEG/Studien-
Strukturanalysen). Sie vertragen und brauchen mehr Apparat als
Substanz-Einträge. Volltitel, Journal und Jahr im Fußnoten-Rendering
(über `footnotes.js`).

Schema-Reference: `docs/zutaten-module.md` Z.18 — Frontmatter mit
strukturiertem Array:

```yaml
sources:
  - n: 1
    authors: "Smith J, Müller K, Tanaka R"
    title: "Magnesium and cognitive performance: a randomized trial"
    journal: "NEJM"
    year: 2020
    doi: "10.1056/NEJMra1401038"
    pmid: "32567890"
```

### Frontend-Rendering im Bildgebung-Artikel

- Inline-Fußnoten als `(1)(2)(3)` im Fließtext (via `footnotes.js`)
- Fußnoten-Sektion am Artikel-Ende mit `Authors Jahr · Volltitel · Journal`
- DOI und PMID **nur strukturiert im Frontmatter**, im sichtbaren
  Fußnoten-Text nicht gerendert
- Maschinenlesbarkeit (RSS/JSON-LD/Sitemap) nutzt das Frontmatter

### Differenzierung zur Substanz-Index-Regel

| Aspekt | Substanz-Index | Bildgebung |
|---|---|---|
| Feld | `quellen: ["Name Jahr"]` (String-Array) | `sources: [{authors, title, journal, year, doi, pmid}]` (Object-Array) |
| Render | Kommagetrennte Inline-Zeile | Inline-Fußnoten + Apparat am Ende |
| Volltitel | nein | ja |
| Journal | nein | ja |
| DOI im Frontend | nein | nein (Frontmatter only) |
| PMID im Frontend | nein | nein (Frontmatter only) |

Argument für die Differenzierung: Substanz-Kacheln sind Verdikt-
Schnellblick (Tile-Größe ~140 px); Bildgebung-Artikel sind Argument-
Langform mit Fußnotenapparat. Eine einheitliche Regel würde entweder
die Substanz-Kachel überladen oder die Bildgebung-Artikel
informationsarm halten.

## III. Anwendung auf kommende Blöcke

Die folgenden Staging-JSONs befolgen ab sofort die Substanz-Index-Regel
(`Name Jahr [optional Stichwort]`):

- `block-d-b-vitamine.json` (7 Einträge)
- `block-d-mineralien.json` (12 Einträge)
- `block-d-vitamine-rest.json` (5 Einträge)
- `batch-1-ruhe-phytos.json` (10)
- `batch-2-adaptogene.json` (10)
- `batch-3-klarheit-cholin.json` (10)
- `batch-6-postbiotika-hepato.json` (10)
- `batch-8-bitterpflanzen-mayr.json` (7)
- `batch-11-polyphenole-carotinoide.json` (9)
- + nachfolgende block-e/f/g

Summe ~101 kommende Einträge. Für jeden gilt: `quellen`-Array nach
Format-Regel I oben, keine Journal-Namen-Anhängsel, kein DOI/PMID
im sichtbaren Text.

## IV. Bestehender Audit-Stand

Audit-Datei: `docs/staging/quellen-format-audit.md` (Stand 2026-06-20).

- 148 von 168 Einträgen mit nicht-leerem `quellen`
- 20 Einträge ohne Quellen (toleriert)
- 12 Format-Abweichungen auf 11 Slugs:
  - 7× Journal-Name angehängt (chlorophyll, eisen, iod, kalium,
    lithiumorotat, vitamin-b1-thiamin, vitamin-b9-folat, vitamin-b6-p5p,
    vitamin-b12-methylcobalamin — alle mit NEJM/JAMA/Lancet/BMJ-Suffix)
  - 5× NO_YEAR (dmae, dmso × 2, l-theanin, macadamia)

Folge-Welle: Diese 11 Slugs manuell auf das Soll-Format zu bringen,
bevor neue Einträge das Muster reproduzieren.

## V. Werbung-Feld ohne umschließende Guillemets

Das `werbung`-Feld in `substances.js` enthält **keine umschließenden
Guillemets** `»…«`. Die Renderer-Feldbeschriftung »Werbung:« markiert
den Inhalt bereits als externe Marketing-Position. Doppelte Markierung
durch Guillemets ist redundant.

### Regel

- Werbung-Text beginnt ohne `»` und endet ohne `«`.
- Guillemets **innerhalb** des Werbung-Inhalts bleiben erlaubt:
  Zitat-im-Zitat, Markennamen, ironisch markierte Marketing-Floskeln.

### Beispiele

- Falsch: `werbung: "»Pflanzliche Cholesterin-Lösung. Plaque weg.«"`
- Richtig: `werbung: "Pflanzliche Cholesterin-Lösung. Plaque weg."`
- Richtig mit Innen-Guillemets: `werbung: "Vermarktet als »Botox-Ersatz« für die Stirn."`

### Geltung

Gilt ab sofort für alle bestehenden 168 Einträge (Migration in dieser
Welle), für alle in Sektion III gelisteten kommenden Blöcke
(block-d/e/f/g, batches 1-11) und analog für künftige Bildgebung-Artikel-
Werbung-Felder, sofern diese ein vergleichbares Muster nutzen.

### Migrations-Status (2026-06-20)

- 167 Einträge bereinigt
- 1 Eintrag (Spilanthol) war bereits ohne umschließende Guillemets
- 1 Eintrag (Ergothionein) behält innere Guillemets `»Longevity-Vitamin«`
  als Zitat-im-Zitat, äußere Klammer entfernt
