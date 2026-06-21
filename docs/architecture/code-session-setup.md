# Code-Session-Setup für hellmuth-soda

Stand: 2026-06-21, Commit `8bf6d6e`. Diese Datei dokumentiert das vollständige
Setup, damit ein neuer Code-Chat in fünf Minuten betriebsfähig ist, falls die
aktuelle Session kontextuell kippt. Sektion 10 ist die Brücke zum Folge-Chat —
Commit-SHA, Cache-Bust-Stand, Statistik, offene Pflicht-Fixes mit Soll-Strings.

## 1. Repo-Übersicht

Top-Level-Verzeichnisse:

| Pfad | Zweck |
|---|---|
| `/zutaten/substances.js` | Substanz-Daten, 168 Einträge, `window.SUBSTANCES_DATA.entries[]` |
| `/zutaten/zutaten.js` | Overlay-Renderer, Filter-Logik, Like/Share-Handler-Spiegel |
| `/zutaten/zutaten.css` | Stylesheet Substanz-Index, aktuell `?v=24` |
| `/zutaten/index.html` | Listing mit 168 SSG-Tiles + Filter-Leiste |
| `/zutaten/<slug>/index.html` | 168 statische Detail-Pages, von `pipeline/render.mjs` erzeugt |
| `/zutaten/bildgebung/` | Bildgebung-Artikel-Infrastruktur, Inhalte noch leer |
| `/pipeline/render.mjs` | Build-Pipeline, SSG, RSS-Feeds, Sitemap |
| `/pipeline/style/quellen-format.md` | **Zentrale Style-Spec, Sektionen I-X** |
| `/pipeline/style/newsroom-rule.md` | News-Modul-Stil |
| `/pipeline/style/claude.md` | Globale Hausordnung |
| `/pipeline/run.mjs` | News-Pipeline-Run (Cron-Trigger) |
| `/news/` | News-Modul (Hellmuth + Science), `news.css`, `detail.js`, `data.js` |
| `/search.js` | Site-weite Suche (NEWS+VOKABULAR+SUBSTANCES) |
| `/.github/workflows/news.yml` | News-Pipeline (Cron + workflow_dispatch) |
| `/.github/workflows/live-probe.yml` | Live-Verifikation gegen Pages |
| `/docs/architecture/` | Setup-Doku (dieser File) |
| `/docs/staging/` | Audit- und Vorschlag-Dokumente |
| `/styles.css` | Globaler Stylesheet |
| `/CNAME` | `hellmuth-soda.de` |
| `/sitemap.xml` | Automatisch von `pipeline/render.mjs` aktualisiert |

Pages-Setup: GitHub-Pages mit Default-Jekyll-Build, serviert main-Branch root.
Keine `.nojekyll`-Datei, kein `_config.yml`. Custom-Domain via CNAME.

## 2. Branch-Architektur

- Hauptbranch: `main`. Alle Pushes hier.
- Kein dauerhafter Integration-Branch wie `claude/quirky-fermat-8rewv0`
  (vom User in einer früheren Direktive genannt, im Repo nicht vorhanden).
- Feature-Branches als `claude/<beschreibung>` (~40 alte Branches im Remote, alle stale).
- Kein PR-Workflow im aktuellen Setup — alle Edits gehen direkt auf `main`
  via Code-Sessions mit Push-Permission.
- Kein Auto-Merge konfiguriert. Keine `.github/auto-merge.yml`.
- News-Pipeline (`news.yml`) committet selbst als `hellmuth-news-bot` direkt
  auf main, mit bis zu 5 Push-Retries bei Konflikt.

## 3. substances.js-Struktur

Datei: ~2000 Zeilen, single `window.SUBSTANCES_DATA = { entries: [...] }`.
Render-Code (Node) lädt via `vm.runInContext` mit `window`-Shim.

### Schema pro Eintrag

```js
{
  name: string,            // Pflicht. Vollständiger Name inkl. lateinisch/Klammer
  slug: string,            // Pflicht. URL-Safe lowercase ASCII, Bindestriche
  featured: true,          // Optional. Nur für die 18 Leuchttürme
  shortName: string,       // Optional. Anzeige auf Listing-Tile (falls kürzer)
  szenario: 1|2|3|null|"sonderfall",  // Pflicht. Render-Verdikt-Stufe
  kategorie: string,       // Pflicht. "Pflanze"|"Pilz"|"Mikrobiom"|"Aminosäure"|
                           //         "Vitamin"|"Mineral"|"Fettsäure"|"Substanz"|"Konzept"
  unterkategorie: string,  // Optional. z.B. "Wurzel", "Bakterium", "Molekül"
  werbung: string,         // Pflicht. 1-3 Sätze ohne umschließende Guillemets
  wirkung: string,         // Pflicht. Mehr-Absätze durch \n\n getrennt
  quellen: string[],       // Optional. "Name Jahr"-Format, kommagetrennt
  related_article: string|null  // Optional. Pfad zu Bildgebung-Artikel
}
```

### Slug-Konvention

- Lowercase, ASCII (Umlaute zu Vokal+e: ö→oe, ü→ue, ß→ss)
- Bindestriche zwischen Wörtern
- Botanischer Name in Slug wenn üblich (z.B. `andorn-marrubium-vulgare`)
- Klammer-Suffix in `name` bleibt, aber nicht im Slug

### Verdikt-Stufen-Render

| szenario | Render | Bedeutung |
|---|---|---|
| 1 | Rosa (`hsl(0, 50%, 95%)`) | entlarvte Werbung, Demontage |
| 2 | Grün (`hsl(140, 18%, 93%)`) | unterdrückte Substanz (Suppressions-Argument) |
| 3 | Grün (`hsl(140, 18%, 93%)`) | unterschätzt, Marketing trifft nicht |
| null oder "sonderfall" | Grau (`hsl(40, 14%, 95%)`) | Konzept ohne Verdikt |
| featured: true | Gold (`hsl(40, 50%, 92%)`) | überstimmt szenario, mit Gold-Atmung-Animation |

### Drei Beispiel-Einträge

**Featured (Hopfen):**
```js
{
  name: "Hopfen (Humulus lupulus)",
  slug: "hopfen",
  featured: true,
  shortName: "Hopfen",
  szenario: 3,
  kategorie: "Pflanze",
  unterkategorie: "Dolde",
  werbung: "Pflanzlicher Schlafhelfer aus dem Bierbraukessel ...",
  wirkung: "Pharmakologisch trägt Hopfen Methylbutenol und alpha-Säuren ...\n\n...\n\nMan hat ein Sedativum gesucht und eine Apotheke übersehen.",
  quellen: ["Benkherouf 2019", "Kyrou 2017"],
  related_article: null
}
```

**Sz1 (Aktivkohle):**
```js
{
  name: "Aktivkohle",
  slug: "aktivkohle",
  szenario: 1,
  kategorie: "Substanz",
  unterkategorie: "Kohlenstoff",
  werbung: "Aktivkohle als Detox-Allrounder für Magen, Darm und Vergiftungen ...",
  wirkung: "Aktivkohle ist ein Notfallmedikament ...\n\n...\n\nAktivkohle gehört in die Notaufnahme. Der Smoothie kennt keine Indikation.",
  quellen: ["Neuvonen 1980", "Bates 2017"],
  related_article: null
}
```

**Konzept (Magnesium):**
```js
{
  name: "Magnesium",
  slug: "magnesium",
  szenario: 3,
  kategorie: "Mineral",
  unterkategorie: "Mineral",
  werbung: "Das wichtigste Mineral für Muskel, Nerven und Schlaf ...",
  wirkung: "Magnesium ist Kofaktor in über dreihundert enzymatischen Reaktionen ...\n\nGerechtfertigte Indikation, schlecht ausgeführtes Marketing ...\n\nWirksamkeit hängt am Salz. Das Etikett verrät davon nichts ...\n\nWas fehlt, ist das Wissen, welche Form wofür wirkt.",
  quellen: ["Morck 1983", "Rapuri 2007", "Slutsky 2010"],
  related_article: null
}
```

## 4. Render-Pipeline

Build-Befehl (lokal, kein CI):
```bash
cd pipeline && node -e "import('./render.mjs').then(m => m.build()).then(r => console.log('Build:', JSON.stringify(r)))"
```

### Was `build()` macht (`pipeline/render.mjs` Z.704+)

1. Lädt News-Markdown aus `content/news/<rubrik>/*.md`
2. Schreibt News-Detail-Pages + RSS-Feeds + `news/data.js`
3. Schreibt Bildgebung-Feed-Stub (`zutaten/bildgebung/feed.xml`)
4. Ruft `buildZutaten()` → 168 Detail-Pages unter `zutaten/<slug>/index.html`
5. Ruft `buildZutatenIndex()` → ersetzt `<ul class="zutaten-grid">…</ul>`
   in `zutaten/index.html` mit 168 SSG-Tiles + injiziert JSON-LD ItemList
6. Schreibt `sitemap.xml` (statische Seiten + 168 Substanz-URLs + News)

### Absatz-Rendering

`render.mjs` Detail-Template (Z.~600) und `zutaten/zutaten.js renderDetailContent()`
(Z.112) splitten beide den `wirkung`-Text identisch:

```js
wirkung.split(/\n\n+/).filter(Boolean).map((p, i) => {
  const label = i === 0 ? '<em class="zutaten-field-label">Wirkung:</em> ' : '';
  return `<p class="zutaten-line">${label}${linkify(p)}</p>`;
}).join('')
```

Quellen-Block bekommt zusätzlich die Klasse `zutaten-quellen`:
```js
`<p class="zutaten-line zutaten-quellen"><em class="zutaten-field-label">Quellen:</em> ${quellen.join(', ')}</p>`
```

### Cache-Bust-Strings

| Datei | Zeile | Pattern |
|---|---|---|
| `zutaten/index.html` | 24 | `<link rel="stylesheet" href="zutaten.css?v=N" />` |
| `zutaten/index.html` | 1962 | `<script src="zutaten.js?v=N">` |
| `zutaten/index.html` | 1960 | `<script src="../search.js?v=N">` |
| `pipeline/render.mjs` | 585 | `<link rel="stylesheet" href="../zutaten.css?v=N" />` (für Detail-Pages) |
| `pipeline/render.mjs` | 586 | `<link rel="stylesheet" href="../../news/news.css?v=5" />` |
| `pipeline/render.mjs` | 624 | `<script src="../../search.js?v=N">` |
| Alle `zutaten/<slug>/index.html` | Auto-generiert | per Build überschrieben |

## 5. GitHub-Action-Workflows

### `.github/workflows/news.yml`

- Trigger: `schedule: cron "17 22 * * *"` (täglich 22:17 UTC) + `workflow_dispatch`
- Gate: `vars.NEWS_CRON_ENABLED` muss `true` sein
- Führt `node pipeline/run.mjs` aus mit `ANTHROPIC_API_KEY` Secret
- Committet als `hellmuth-news-bot` direkt auf main
- Push-Retries: 5 mit rebase --autostash

### `.github/workflows/live-probe.yml`

Auto-Trigger auf push für:
- `.github/workflows/live-probe.yml`
- `zutaten/substances.js`
- `zutaten/zutaten.css`
- `zutaten/zutaten.js`
- `search.js`

Standard-Tests (echtes Outbound vom Runner gegen https://hellmuth-soda.de):

1. **Listing**: 168 Tiles, 168 data-name, ItemList-JSON-LD, OG-Tags
2. **Hopfen-Detail**: Title, Hopfen-Hits, Wirkung, p-Tags
3. **Vitamin-C-Hybrid**: 5 Pflicht-Schlüssel-Strings (Symptomverwaltung, TET-Enzyme, etc.)
4. **L-Theanin-Sz1**: 3 Schlüssel-Strings, Tile-Sz1, 6 zutaten-line
5. **Konsolidierung**: search.js-Label-Logik, Tokio-Live, MCT-Konzept, Reishi-Sz3
6. **Nachzieh-Welle Stichproben** (12 Soll-Phrasen aus letzter Welle)
7. **Cache-Bust-Stand**: extrahiert ?v=N für zutaten.css/zutaten.js/search.js

### Neuen Test hinzufügen

Im `run`-Step von `live-probe.yml`:

```bash
echo "==============================================="
echo "TEST-NAME"
echo "==============================================="
curl -sS -o /tmp/probe.html -A "$UA" "https://hellmuth-soda.de/zutaten/<slug>/?nocache=$(date +%s)"
for needle in "Pflicht-String-1" "Pflicht-String-2"; do
  count=$(grep -oc "$needle" /tmp/probe.html)
  echo "  [$count] '$needle'"
done
```

Falls neue Files am Trigger beteiligt sein sollen: paths-Filter oben erweitern.

## 6. Subagent-Spawn-Pattern

Mindeststandard pro Welle: vier Subagents. Bis zu zwanzig parallel ohne Rückfrage.

### Pflicht-Hände jeder Welle

1. **Implementierung**: Edit auf `substances.js` oder Code-File
2. **Stil-Compliance**: Prüfung gegen `pipeline/style/quellen-format.md`
3. **Verifikation**: Playwright auf lokalem SSG oder GitHub-Action gegen Live
4. **Bericht-Format**: Tabelle mit Spalten »Sub-Aufgabe«, »Status«, »Beleg«

Belege sind konkret: Grep-Count, Commit-SHA, URL, Action-Run-ID.
Keine Selbst-Behauptungen ohne externe Verifikation.

### Bericht-Tabellen-Format

Pflicht-Spalten:
- Sub-Aufgabe (kurz)
- Status (✓ / ⚠ / ✗)
- Beleg (Grep-Treffer-Count, Commit-SHA, Action-Log-Zitat, URL)

Bei Substanz-Wellen am Tabellen-Ende:
- **Live-URL**: `https://hellmuth-soda.de/zutaten/<slug>/`
- Eine Zeile pro Eintrag bei Batches

### Zwei-Layer-Verifikation

User-Konvention: Codes Action-Runner + Tickros web_fetch müssen beide Soll-Strings
finden, sonst gilt die Welle als nicht erledigt. Bei Divergenz: bis zu drei
Iterationen innerhalb derselben Welle, dann Fehler-Bericht mit konkretem Hänger.

### Freigabe-Wörter

Ohne weitere Rückfrage durchziehen bei:
»Freigabe«, »live setzen«, »committen«, »übernehmen«, »so machen«,
»Pauschal-Freigabe«.

## 7. Cache-Bust-Konvention

Aktueller Stand: `zutaten.css?v=24`, `zutaten.js?v=4`, `search.js?v=3`,
`news.css?v=5`, `styles.css?v=13`.

Bei jedem Stilcommit hochzählen (Standardhygiene, nicht reaktiv).

### Systemweite Bump

```bash
# CSS
sed -i 's/zutaten.css?v=N/zutaten.css?v=N+1/g' \
  zutaten/index.html pipeline/render.mjs

# JS (selten — bei Code-Änderungen in zutaten.js)
sed -i 's/zutaten.js?v=N/zutaten.js?v=N+1/g' zutaten/index.html

# search.js (Code-Änderungen in search.js)
grep -rl 'search.js?v=N' --include='*.html' --include='*.mjs' . \
  | xargs sed -i 's/search\.js?v=N/search.js?v=N+1/g'

# Detail-Pages werden via Build automatisch aus render.mjs überschrieben
cd pipeline && node -e "import('./render.mjs').then(m => m.build())"
```

## 8. Stilregeln-Lokation

Zentrale Spec: `/pipeline/style/quellen-format.md` mit 10 Sektionen:

| Sektion | Inhalt |
|---|---|
| I | Substanz-Index quellen-Array (»Name Jahr«-Format, max 80 Zeichen, kein DOI/PMID/URL) |
| II | Bildgebung sources-Array (Object-Schema mit authors/title/journal/year/doi/pmid) |
| III | Anwendung kommende Blöcke (D/E/F/G + Batches) |
| IV | Audit-Stand Quellen-Format (12 Abweichungen) |
| V | Werbung-Feld ohne umschließende Guillemets (innere bleiben) |
| VI | Ortsnamen deutsche Konvention (Tokio, Peking, Rom, Mailand, …) |
| VII | Absatz-Architektur + Hauptkörper-Längen-Gate (>600/>1200/>2000 Z) |
| VIII | Negation-Affirmation max 3 im Bestand |
| IX | Doppelpunkt-Fließtext-Regel |
| X | Pointenabsatz immer abgesetzt |

### Verbindliche Regeln im Überblick

- **Vier-Slot-Pattern**: Werbung-Label / Wirkung-Hauptkörper / Pointenabsatz / Quellen
- **Hauptkörper-Längen-Gate**: >600 Z → mind. 2-geteilt, >1200 → 3, >2000 → 4
- **Pointenabsatz**: immer durch `\n\n` abgesetzt
- **Negation-Affirmation**: max 3 »nicht X, sondern Y«-Konstruktionen im Bestand
- **Werbung-Feld**: keine umschließenden Guillemets `»…«` (innere als Zitat ok)
- **Keine Doppelpunkte im Fließtext** außer vor Aufzählung ≥3 Items oder nach Feld-Labels
- **Geviertstrich für Spannen**: `—` (U+2014), kein En-Dash `–` (U+2013)
- **Ortsnamen**: Tokio statt Tokyo, Peking, Mumbai (Sektion VI)
- **Quellen**: »Name Jahr [optional Stichwort]«, kein DOI/PMID/URL/Volltitel/Journal-Anhängsel
- **Isolierte Floskel-Pointen** wie »Das ist X« streichen, wenn Setup im Vorletzten fehlt
- **Em-Dash (—) im Fließtext**: verboten außer in Zahlenspannen
- **Englische Anführungszeichen**: verboten, deutsche Guillemets `»…«`
- **Ausrufezeichen**: verboten
- **Rhetorische Fragen**: verboten außer als Zitat aus fremdem Munde

Zusätzliche Stilregel-Files:
- `/pipeline/style/newsroom-rule.md` (News-Modul-Kurzmeldungen)
- `/pipeline/style/claude.md` (globale Hausordnung)

## 9. Verifikations-Layer

### Layer 1: Codes GitHub-Action-Runner

Workflow `.github/workflows/live-probe.yml` läuft auf jedem Push der Daten-
oder Code-Files. Echtes Outbound vom Runner zu hellmuth-soda.de. Pro Standard-Test:
- HTTP-Code + Bytes
- Grep-Counts auf Pflicht-Strings mit umgebendem Kontext-Satz
- Cache-Bust-Stand verifiziert

Ergebnis liegt als Action-Log vor (job_id, Log-URL).

### Layer 2: Tickros web_fetch parallel

User prüft selbst per web_fetch auf Live-URL mit Cache-Bust-Query.
Bei Divergenz: ein Layer falsch, Welle nicht erledigt.

### Standard-URL-Liste im Live-Probe

- `https://hellmuth-soda.de/zutaten/` (Listing)
- `https://hellmuth-soda.de/zutaten/hopfen/`
- `https://hellmuth-soda.de/zutaten/vitamin-c/`
- `https://hellmuth-soda.de/zutaten/l-theanin/`
- `https://hellmuth-soda.de/zutaten/zink-carnosin/`
- `https://hellmuth-soda.de/zutaten/aktivkohle/`
- `https://hellmuth-soda.de/zutaten/magnesium/`
- `https://hellmuth-soda.de/zutaten/sulforaphan/`
- `https://hellmuth-soda.de/zutaten/brennnessel/`
- `https://hellmuth-soda.de/search.js`

### Bericht-Format-Pflicht

Tabelle pro Welle, Spalten »Sub-Aufgabe«, »Status«, »Beleg«. Live-URLs am Tabellen-
Ende. Bei Mass-Edits: zusätzlich vorher/nachher-Spalten pro betroffenem Eintrag.

## 10. Aktueller Status (Brücke zum Folge-Chat)

**Letzter Commit:** `8bf6d6e` — Nachzieh-Welle (7 Pflicht-Fixes aus Stichproben-Audit)

**Cache-Bust-Stand:**
- `zutaten.css?v=24`
- `zutaten.js?v=4`
- `search.js?v=3`
- `news.css?v=5`
- `styles.css?v=13`

**Statistik (Stand 8bf6d6e):**

| Stufe | Anzahl |
|---|---|
| Featured (Gold) | 18 |
| Sz1 (Rosa) | 29 |
| Sz2 (Grün) | 2 |
| Sz3 (Grün) | 67 |
| Konzept (Grau) | 52 |
| **Total** | **168** |

Grün-Summe (Sz2+Sz3): 69. Grau: 52.

**Offene Pflicht-Fixes — 16 Einträge ohne Quellen (Subagent-Audit aus 8bf6d6e):**

| Substanz-Slug | Offener Fix | Soll-Aktion |
|---|---|---|
| andorn-marrubium-vulgare | Quellen fehlen | mindestens 2 Belege Name-Jahr |
| bacillus-coagulans | Quellen fehlen | mindestens 2 Belege |
| bacillus-subtilis | Quellen fehlen | mindestens 2 Belege |
| basenpulver-basentee | Quellen fehlen | mindestens 2 Belege |
| bentonit-zeolith | Quellen fehlen | mindestens 2 Belege |
| beta-glucan-hafer | Quellen fehlen | mindestens 2 Belege |
| bittersalz-glaubersalz | Quellen fehlen | mindestens 2 Belege |
| fos-fructooligosaccharide | Quellen fehlen | mindestens 2 Belege |
| gos-galactooligosaccharide | Quellen fehlen | mindestens 2 Belege |
| inulin | Quellen fehlen | mindestens 2 Belege |
| magnolia | Quellen fehlen | mindestens 2 Belege |
| nac-n-acetylcystein | Quellen fehlen | mindestens 2 Belege |
| pektin | Quellen fehlen | mindestens 2 Belege |
| phgg | Quellen fehlen | mindestens 2 Belege |
| psyllium | Quellen fehlen | mindestens 2 Belege |
| resistente-staerke | Quellen fehlen | mindestens 2 Belege |
| suma-pfaffia-paniculata | Quellen fehlen | mindestens 2 Belege |
| tausendgueldenkraut | Quellen fehlen | mindestens 2 Belege |

**Tragende Negationen warten auf User-Sichtung (Welle 486f221):**

1. CoQ10: »Das sind keine subtilen Verbesserungen, das sind Wirkungen, die der Körper als Nachlassen der Müdigkeit selbst registriert.«
2. GOS: »Weniger Gas als Inulin, bessere Verträglichkeit.«
3. Piracetam: »Patentschutz 1972 erloschen, kein Hersteller hat ein Interesse, das Original-Nootropikum als solches im Westen neu zuzulassen.«

**Unsafe-Negationen aus Welle 486f221 (10 Stück, nicht angefasst):**
Aniracetam, Berberin, Bittersalz, Cholin, Curcumin, Ginkgo, Maca, Mangan, Mucuna, Selen.

**Block-E/F/G-Generierung:**
Live-Stellungs-Protokoll dokumentiert (Bericht-Antwort vom 2026-06-21):
- Auto-Trigger via paths-Filter auf substances.js/zutaten.css/zutaten.js/search.js
- Pflicht-Bericht: Tabelle mit Substanz/Soll-String/Grep-Treffer + Live-URL
- Bei Schlüssel-String-Fehlern: max 3 Iterationen, dann Bericht mit Hänger

Schwellen für neue Einträge:
- 2-4 Wirkungs-Absätze, 1-3-Satz-Pointenabsatz
- Mindestens 2 Quellen im »Name Jahr«-Format
- Kein Mineral-Schablonen-Trikolon
- Max 1 Negation-Affirmation pro Eintrag (Gesamt-Bestand max 3)
- Vier-Slot-Pattern (Werbung / Wirkung / Pointe / Quellen)
- Werbung ohne umschließende Guillemets

**Live-Probe-Workflow letzter erfolgreicher Run vor diesem Commit:**
- Run für `c5f1362` (Live-Probe-Erweiterung), 2026-06-21 02:29 UTC
- Alle Tests grün, Cache-Bust-Stand bestätigt

**Bildgebung-Modul:**
Stub-Infrastruktur vorhanden (`zutaten/bildgebung/index.html`, `bildgebung.css`,
`bildgebung.js`, `footnotes.js`, `feed.xml`). Keine Artikel-Inhalte. SSG-
Generator wartet auf `bildgebung/data.js` mit Frontmatter-Schema laut
quellen-format.md Sektion II.

**Geplante 37 Bildgebung-Artikel:** Format-Differenzierung zu Substanz-Index
(Sektion II: Object-Array mit Volltitel/Journal/Frontmatter-DOI/PMID,
Inline-Fußnoten via footnotes.js).

**Setup-Doku-Verifikation für Folge-Chat:**
- Diese Datei: `/docs/architecture/code-session-setup.md`
- Letzte Aktualisierung: bei Bedarf manuell, kein Auto-Update
- Bei Drift zwischen Doku und Repo: User-Hinweis, dann Re-Schreiben
