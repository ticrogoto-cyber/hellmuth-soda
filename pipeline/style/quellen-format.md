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

## VI. Ortsnamen in deutscher Konvention

Ortsnamen im Fließtext nutzen die etablierte deutsche Schreibweise.
Englische oder originalsprachliche Schreibweisen bleiben nur in
zitiertem Markenkontext erhalten (Studientitel, Firmen-Eigennamen,
offiziell genannte Konferenz-/Dokument-Titel wie »The Tokyo Declaration«).

### Regel

| Englisch / Original | Deutsch (Fließtext) |
|---|---|
| Tokyo | Tokio |
| Beijing / Peking (alt) | Peking |
| Moscow / Moskva | Moskau |
| Rome / Roma | Rom |
| Milan | Mailand |
| Florence / Firenze | Florenz |
| Naples / Napoli | Neapel |
| Lisbon / Lisboa | Lissabon |
| Copenhagen / København | Kopenhagen |
| Warsaw / Warszawa | Warschau |
| Bombay (alt) | Mumbai |

### Beispiele

- Falsch im Fließtext: »In Tokyo ein Rezept, in Berlin ein NEM.«
- Richtig: »In Tokio ein Rezept, in Berlin ein NEM.«
- Erhalten bleibt: Studientitel »The Tokyo Declaration on Adverse Drug Reactions«.

### Migrations-Status (2026-06-20)

- 1 Treffer in substances.js bereinigt: `zink-carnosin` Wirkungstext,
  »Tokyo« → »Tokio«.
- Keine weiteren Ortsnamen-Treffer in den 168 Einträgen.
- Bildgebung-Artikel: noch nicht vorhanden, Regel gilt ab Erstellung.

## VII. Absatz-Architektur (Wirkungstext)

Jeder Substanz-Eintrag rendert vier Slots in fester Reihenfolge:

1. **Werbung-Label** + ein bis zwei Sätze (externe Marketing-Position).
2. **Wirkung-Label** + Hauptkörper als ein oder mehrere Absätze.
3. **Pointenabsatz** separat, durch `\n\n` abgesetzt.
4. **Quellen-Label** + Name-Jahr-Liste (Format Sektion I).

### Hauptkörper-Regel

- Kurze Einträge (Wirkung < 600 Zeichen): ein Hauptkörper-Absatz.
- Längere Einträge (≥ 600 Zeichen): zwei bis sechs Hauptkörper-Absätze,
  thematisch getrennt. Empfohlene Schnitte:
  - Mechanismus / Pharmakologie
  - Studienlage / klinische Evidenz
  - Marketing-Realität / Form-Differenzierung

### Pointenabsatz-Regel

- Immer als eigener Block, durch `\n\n` vom Hauptkörper getrennt.
- Ein bis drei Sätze.
- Pointenabsatz muss durch den Vorletzten gesetzt sein. Wenn der
  Pointensatz ein Konzept einführt, das im Hauptkörper nicht aufgebaut
  wurde, gehört entweder das Setup nachgezogen oder die Pointe gestrichen.

### Verbotene Pattern

- **Single-Block-Form**: Wirkung > 800 Zeichen ohne einen einzigen
  `\n\n`-Trenner. Architektur-Audit 2026-06-21 hatte 59 solcher Fälle —
  alle in derselben Welle behoben.
- **Über-Fragmentierung**: mehr als sechs Absätze bei unter 600 Zeichen
  (Audit fand keine, Regel gilt präventiv).
- **Mineral-Schablonen-Trikolon**: »das Mineral / Salz / Spurenelement
  ist gut, X ist entscheidend, der Kaffee ist Y« — acht von achtzehn
  Mineralien trugen es, alle in derselben Welle gestrichen. Wiederkehrende
  Closer-Schablonen über mehrere Einträge sind verboten, jede Pointe
  eintrags-spezifisch.

### Renderer-Kompatibilität

Sowohl `pipeline/render.mjs` (statische Detailseiten) als auch
`zutaten/zutaten.js renderDetailContent()` (Overlay-Template) splitten
den wirkung-Text per `split(/\n\n+/)` und rendern jeden Block als
eigenes `<p class="zutaten-line">`. Das Quellen-Block bekommt
zusätzlich die Klasse `zutaten-quellen`. Beide Render-Pfade sind
seit Welle b0383eb identisch.

### Hauptkörper-Längen-Gate (verbindlich)

Pro Hauptkörper-Absatz gilt:

- > 600 Zeichen: mindestens zweigeteilt
- > 1200 Zeichen: mindestens dreigeteilt
- > 2000 Zeichen: mindestens viergeteilt

Trennung folgt thematischen Brüchen, nicht starren Wortzählungen.
Übergangs-Marker als Schnittstellen:

- Mechanismus zu Klinik: »Wer X hat«, »In der Praxis«, »Im Patientenalltag«
- Studienlage zu Marketing: »Im Marketing«, »In der Werbung«, »Der Industrie«
- Allgemein zu spezifisch: »Konkret«, »Im Detail«, »Pharmakologisch«
- Pro zu Contra: »Allerdings«, »Aber«, »Demgegenüber«
- Studien-Block: »Klinisch«, »Eine randomisierte«, »Doppelblinde«

## VIII. Negation-Affirmation-Konstruktionen (verbindlich)

Maximum **drei** Negation-Affirmation-Konstruktionen über den gesamten
Bestand. Verbotene Patterns:

- »nicht X, sondern Y« und Komma-Varianten ohne »sondern«
- »kein X, ein Y«
- »Das ist keine X, das ist Y«
- »Das ist nicht X, das ist Y«
- »X ist nicht A, sondern B« im Satzkern
- »weniger X als Y« (Komparativ-Negation)

Erlaubt sind: »nicht nur … sondern auch« (Steigerung, nicht Antithese),
Relativsätze (»Es gibt keine X, die Y«), reine Befunde
(»fand keinen Effekt«), elliptische Aphorismen ohne ersten Halbsatz.

Audit-Lauf 2026-06-21: 24 Treffer gefunden, 11 umgeschrieben auf
direkte Affirmation (»Das ist keine Werbung, das ist Biochemie« →
»Das ist Biochemie«), 3 tragende behalten (CoQ10, GOS, Piracetam),
10 unsafe nicht angefasst.

Für Block E/F/G stark zu vermeiden. Auto-Quote-Kontrolle in Folge-
Wellen prüft, dass Bestand nicht über drei wachst.

## IX. Doppelpunkt-im-Fließtext (verbindlich)

Doppelpunkte sind erlaubt:

- Vor Aufzählung mit drei oder mehr Items (Komma-Liste danach,
  Items je unter 35 Zeichen)
- Direkt nach den Feld-Labels »Werbung:«, »Wirkung:«, »Quellen:«
  (Renderer-Output, nicht im Wirkung-String)

Verstöße (nicht erlaubt):

- »Daneben: …«, »Der Unterschied: …«, »Was nicht dokumentiert ist: …«
- »Aber: …«, »Bemerkenswert: …«
- »Vier Wochen oral bei aktiver Colitis ulcerosa: …«
- »Klinische Endpunktdaten am Menschen: selten.«

Auto-Fix-Regel: Doppelpunkt durch Punkt ersetzen, nachfolgender Text
großschreiben. Audit-Lauf 2026-06-21: 23 Verstöße gefixt.

## X. Pointenabsatz immer abgesetzt (verbindlich)

Der aphoristische Schlusssatz (oder die letzten zwei kurzen Sätze)
gehört durch `\n\n` vom Hauptkörper getrennt. Erkennungs-Heuristik:

- Letzter Satz, deutlich kürzer als die anderen
- Beginnt oft mit »Man hat…«, »Der Wert von…«, »Macht nur…«,
  »Bleibt…«, »Heißt trotzdem…«, »Übrig bleibt…«
- Klar aphoristisch / Verdikt-Schluss

Audit-Lauf 2026-06-21: 77 Pointen abgesetzt.
