# Code-Session-Setup — Schnellstart für eine neue Code-Chat-Session

Stand: 2026-06-21. Adressat: ein frisch geöffneter Code-Chat, der das Repo in fünf Minuten betriebsfähig haben muss, falls die laufende Session kontextuell kippt. Diese Datei ist Pflichtlektüre, bevor irgendein Edit, Build oder Subagent-Spawn passiert.

---

## 1. Repo-Übersicht

Top-Level-Layout (statische Site, kein Bundler, kein Framework — Vanilla JS + SSG via Node-Script):

| Pfad | Zweck |
|---|---|
| `/zutaten/substances.js` | Substanz-Daten, **168 Einträge**, alphabetisch, Umlaute wie Grundbuchstabe sortiert |
| `/zutaten/zutaten.js` | Overlay-Renderer, Filter-Logik (Szenario-Tabs, Kategorie-Chips), `renderDetailContent()` spiegelt SSG-Template |
| `/zutaten/zutaten.css` | Stylesheet, aktuell `?v=23` |
| `/zutaten/<slug>/index.html` | Statische Detail-Pages, **vollautomatisch** von `pipeline/render.mjs` generiert — niemals von Hand editieren |
| `/zutaten/index.html` | Listing mit allen 168 SSG-Tiles (datenidentisch zu substances.js) |
| `/pipeline/render.mjs` | Build-Pipeline für SSG (Detail-Pages + Listing) |
| `/pipeline/style/quellen-format.md` | Zentrale Style-Spec, Sektionen I–X (siehe §8) |
| `/pipeline/style/newsroom-rule.md` | News-Modul-spezifische Regeln |
| `/pipeline/style/claude.md` | Globale Hausordnung für alle Code-Sessions |
| `/search.js` | Site-weite Suche (Top-Nav), JSON-Index aus substances.js + news/ |
| `/news/` | News-Modul, SSG via `pipeline/run.mjs`, eigener Cron-Workflow |
| `/.github/workflows/live-probe.yml` | Verifikationslayer, curlt produktive URLs |
| `/.github/workflows/news.yml` | News-Pipeline (Cron + manual dispatch) |
| `/docs/staging/` | Staging-Notizen, in-flight Block-Vorschläge, Audit-Schnipsel |
| `/docs/architecture/` | Diese Datei und verwandte Architektur-Dokus |

---

## 2. Branch-Architektur

- **Hauptbranch:** `main` — alles produktiv, Cloudflare/GitHub-Pages deployt direkt aus `main`.
- **Feature-Branches:** Konvention `claude/<kurzbeschreibung>` (Beispiele: `claude/news-typography`, `claude/external-link-icon-fix`, `claude/theme-vocab-v2`).
- **Integration-Branch `claude/quirky-fermat-8rewv0`:** **existiert aktuell nicht** (`git branch -a | grep quirky` → leer). Falls in Zukunft benötigt, von `main` abzweigen, ist aber kein etablierter Workflow.
- **PR-Workflow:** Feature-Branch → PR → Review → Merge in `main`. Kleine Style-Sweeps werden in der Regel direkt auf `main` committet.
- **Auto-Merge:** keine repo-weite Auto-Merge-Policy aktiv. Bei Bedarf PR-spezifisch über `gh pr merge --auto --squash`.

---

## 3. `substances.js`-Struktur

Header-Kommentar (Z. 1–14) definiert das verbindliche Schema:

```js
// Substanz-Index Data: window.SUBSTANCES_DATA
// Schema per entry:
//   name             string  Display name
//   slug             string  URL-safe identifier
//   featured         boolean (optional, nur für die 17 Leuchttürme)
//   szenario         1 | 2 | 3 | "sonderfall"
//   kategorie        "Pflanze" | "Pilz" | "Mikrobiom" | "Aminosäure"
//                  | "Vitamin" | "Mineral" | "Fettsäure" | "Substanz" | "Konzept"
//   unterkategorie   string (z. B. "Wurzel", "Bakterium", "Molekül")
//   werbung          string  Verpackungsrückseite-Ton, 1—drei Sätze
//   wirkung          string  Mehrabsatziger Diagnose-Text, Absätze durch \n\n getrennt
//   quellen          string[]  Studienzitate als Datenattribute (nicht im Fließtext)
//   related_article  string|null  Pfad zu Bildgebung-Artikel

window.SUBSTANCES_DATA = { entries: [ /* ... */ ] }
```

Optional verwendete Felder: `shortName` (für Display-Verkürzung).

**Slug-Konvention:** lowercase ASCII, Bindestriche statt Leerzeichen, keine Umlaute (»ä« → »a«, »ö« → »o«, »ü« → »u«, »ß« → »ss«). Beispiel: `Akkermansia muciniphila` → `akkermansia-muciniphila`. Der Slug ist gleichzeitig der URL-Pfad unter `/zutaten/<slug>/`.

Vollständiges Beispiel-Eintrag:

```js
{
  name: "Akkermansia muciniphila",
  slug: "akkermansia-muciniphila",
  shortName: "A. muciniphila",
  szenario: 3,
  kategorie: "Mikrobiom",
  unterkategorie: "Bakterium",
  werbung: "Next-Generation-Probiotikum für Stoffwechsel und Darmgesundheit. Forschungsstamm für anspruchsvolle Anwender.",
  wirkung: "Erst 2004 isoliert vom niederländischen Mikrobiologen Antoon Akkermans. Die Spezies lebt in der inneren Schleimschicht des Darms und frisst ausschließlich Mucin. Direkter Kontakt zur Darmbarriere.\n\nNiedrige Akkermansia-Abundanz korreliert mit Adipositas, Typ-2-Diabetes, Lebersteatose. Phase-II-Studie an Übergewichtigen mit metabolischem Syndrom: drei Monate pasteurisierte Akkermansia senkt Leberenzyme, verbessert Insulinsensitivität, reduziert LDL.\n\nBemerkenswert. Die pasteurisierte Form wirkt stärker als die lebende. Das kehrt die Probiotikum-Logik um.\n\nEine 2004 entdeckte Mucin-Spezialistin liefert als Totpräparat, was Metformin in kleiner Dosis schafft.",
  quellen: ["Depommier 2019"],
  related_article: null,
},
```

---

## 4. Render-Pipeline

`pipeline/render.mjs` ist der einzige zulässige Generator für Detail-Pages und Listing.

- **`build()`-Funktion (Z. 704+):** iteriert über alle `substances`, schreibt pro Eintrag `/zutaten/<slug>/index.html` und am Ende ein konsolidiertes `/zutaten/index.html` mit allen Tiles.
- **Absatz-Trennung:** Das `wirkung`-Feld wird via `split(/\n\n+/)` auf Doppel-Zeilenumbrüche zerlegt. Jeder Absatz wird zu `<p class="zutaten-line">…</p>` — sowohl im SSG-Template als auch in `zutaten.js → renderDetailContent()`. Beide Code-Pfade müssen synchron bleiben, sonst sehen Overlay und SSG-Page unterschiedlich aus.
- **SSG-Scope:** 168 Detail-Pages + 1 Listing-Page mit allen Tiles. Listing wird nicht clientseitig erzeugt, sondern komplett vorgerendert.

**Cache-Bust-Strings** (manuell hochzuzählen, siehe §7):

| Datei | Zeile | Snippet |
|---|---|---|
| `zutaten/index.html` | 24 | `<link rel="stylesheet" href="zutaten.css?v=23" />` |
| `zutaten/index.html` | 1962 | `<script src="zutaten.js?v=4"></script>` |
| `pipeline/render.mjs` | 585 | gleicher `?v=…`-Pattern für Detail-Templates |

Beim Rebuild überschreibt `render.mjs` alle 168 Detail-HTMLs mit dem aktuellen `?v=`-String — also: erst `?v=` im Quell-Template hochzählen, dann Build laufen lassen.

---

## 5. GitHub-Action-Workflows

`/.github/workflows/` enthält zwei Workflows:

### `news.yml`
News-Pipeline. Cron-Trigger + `workflow_dispatch`. Ruft `pipeline/run.mjs` (News-Build). Verantwortlich für News-SSG und News-Index.

### `live-probe.yml`
Auto-Trigger auf `push` für Pfade: `.github/workflows/live-probe.yml`, `zutaten/substances.js`, `zutaten/zutaten.css`, `zutaten/zutaten.js`, `search.js`. Nutzt curl mit Browser-UA gegen `hellmuth-soda.de`. Vier Substanz-Test-Blöcke plus Konsolidierungs-Tests:

| Block | URL |
|---|---|
| Listing | `https://hellmuth-soda.de/zutaten/` |
| Hopfen-Detail | `https://hellmuth-soda.de/zutaten/hopfen/` |
| Vitamin-C-Hybrid | `https://hellmuth-soda.de/zutaten/vitamin-c/` |
| L-Theanin (Sz1) | `https://hellmuth-soda.de/zutaten/l-theanin/` |
| Konsolidierung | Zink-Carnosin, MCT-Öl-Tile, Reishi-Tile |

**Neuen Test hinzufügen:**
1. Im `run`-Step einen Echo-Block (»===== LIVE-PROBE Name =====«) und einen `curl -sS -o /tmp/<slug>.html`-Block einfügen.
2. Counts via `grep -oc` für die erwarteten Marker (`<p`, `zutaten-tile`, JSON-LD-Tag, etc.).
3. Falls die geprüfte Datei nicht im `paths:`-Filter steht, dort ergänzen.

---

## 6. Subagent-Spawn-Pattern

Verbindlich für alle Wellen:

- **Mindeststandard:** vier Subagents pro Welle parallel, bis zu **zwanzig parallel ohne Rückfrage**.
- **Pflicht-Hände pro Welle:**
  1. Implementierung (Edit / Write)
  2. Stil-Compliance (Abgleich gegen `pipeline/style/quellen-format.md`)
  3. Verifikation (Grep-Counts, live-probe, web-fetch)
  4. Bericht-Format (Sammler, baut Tabelle)
- **Bericht-Format:** Markdown-Tabelle mit Spalten **Sub-Aufgabe / Status / Beleg**.
- **Belege müssen konkret sein:** Grep-Count (»`zutaten-line: 12`«), Commit-SHA (`486f221`), URL (`https://hellmuth-soda.de/zutaten/hopfen/`), Action-Run-ID. Keine vagen »erledigt«-Markierungen.

---

## 7. Cache-Bust-Konvention

Aktueller Stand:

| Asset | Version |
|---|---|
| `zutaten.css` | `?v=23` |
| `zutaten.js` | `?v=4` |
| `search.js` | `?v=3` |
| `news.css` | `?v=5` |

**Regel:** Bei jedem Commit, der die jeweilige Asset-Datei berührt, das `?v=N` systemweit um eins erhöhen. Systemweite Erhöhung per:

```bash
# Beispiel zutaten.css: 23 → 24
grep -rl 'zutaten\.css?v=23' --include='*.html' --include='*.mjs' . \
  | xargs sed -i 's/zutaten\.css?v=23/zutaten.css?v=24/g'
```

Anschließend `node pipeline/render.mjs` laufen lassen — der Build überschreibt die 168 Detail-HTMLs mit dem neuen `?v=`-Wert. Vergessen führt zu altem Cloudflare-Cache; live-probe würde es nicht erkennen, weil der Server brav 200 zurückliefert.

---

## 8. Stilregeln-Lokation

Zentrale Spec: **`/pipeline/style/quellen-format.md`** mit zehn Sektionen:

| Sektion | Thema |
|---|---|
| I | Substanz-Index `quellen`-Array — Format »Nachname Jahr«, kein »et al«, keine DOI/PMID/URL im sichtbaren Array |
| II | Bildgebung `sources`-Array |
| III | Anwendung kommende Blöcke |
| IV | Audit-Stand |
| V | `werbung`-Feld ohne umschließende Guillemets |
| VI | Ortsnamen deutsche Konvention (Tokio, Peking, Rom — nicht Tokyo/Beijing/Roma) |
| VII | Absatz-Architektur: **Vier-Slot-Pattern**, Hauptkörper-Längen-Gate |
| VIII | Negation-Affirmation: maximal **3** tragende Negationen im Gesamtbestand |
| IX | Doppelpunkt-Fließtext-Regel |
| X | Pointenabsatz immer abgesetzt (eigener Absatz, knapp, schließend) |

Ergänzend:

- **`/pipeline/style/newsroom-rule.md`** — News-Modul-Stil (Headlines, Lead, Quellenfußnote).
- **`/pipeline/style/claude.md`** — globale Hausordnung für Code-Sessions (Tonfall, Subagent-Disziplin, Verifikationspflicht).

Bei jeder substantiellen Text-Änderung muss Sektion I–X gegen den Edit gehalten werden.

---

## 9. Verifikations-Layer

**Zwei Layer, beide müssen treffen, sonst gilt die Welle als unerledigt:**

1. **GitHub-Action-Runner** via `.github/workflows/live-probe.yml` — echtes Outbound von Codes Runner gegen `hellmuth-soda.de`. Erfasst Cache, Edge-Caching, GitHub-Pages-Propagation realistisch.
2. **Tickros `web_fetch`** parallel — unabhängiger Pfad, anderes IP-Subnetz, Sanity-Check.

Standard-URL-Liste, die in jeder Welle gegengeprüft wird:

- `https://hellmuth-soda.de/zutaten/` (Listing)
- `https://hellmuth-soda.de/zutaten/hopfen/`
- `https://hellmuth-soda.de/zutaten/vitamin-c/`
- `https://hellmuth-soda.de/zutaten/l-theanin/`
- `https://hellmuth-soda.de/zutaten/zink-carnosin/`
- MCT-Öl-Tile im Listing
- Reishi-Tile im Listing

Bei thematischen Wellen die geänderten Slugs zusätzlich aufnehmen.

---

## 10. Aktueller Status (Stand 2026-06-21)

- **Letzter Commit-SHA:** `486f22193a0148322e8d334cfd52a0cb8fa3d58f` (`git rev-parse HEAD`)
- **Aktiver Branch:** `main`
- **Letzter Cache-Bust:** `zutaten.css?v=23`, `zutaten.js?v=4`, `search.js?v=3`, `news.css?v=5`

**Statistik substances.js (aus File, 2026-06-21):**

| Kohorte | Count |
|---|---|
| Total | **168** |
| Featured (Leuchttürme) | 18 |
| Szenario 1 | 29 |
| Szenario 2 | 6 |
| Szenario 3 | 79 |
| Sonderfall | 2 |
| Szenario null (Nebenbestand) | 52 |
| Kategorie »Konzept« | 1 |

**Offene Wellen:**

- **Block E / F / G** Substanz-Generierung wartet — die nächsten Welle-Pakete sind in `/docs/staging/` skizziert, aber noch nicht in `substances.js` eingespielt.
- **Tragende Negationen:** Sektion-VIII-Audit (max 3 im Bestand) wartet auf Sichtung. Vor jedem neuen `wirkung`-Text gegenzählen.
- **Pointenabsatz-Konsolidierung** (Sektion X) für Altbestand: noch nicht über alle 168 Einträge gelaufen.

---

**Bei Session-Start eines neuen Code-Chats: dieses Dokument zuerst lesen, dann `/pipeline/style/claude.md`, dann `/pipeline/style/quellen-format.md`. Erst danach Edits.**
