# News-Modul

Automatisiertes, täglich aktualisiertes News-Modul mit zwei Rubriken:

- **Forschung** (interner Slug: `science`) — begutachtete Studien zu Substanzen, Pharmakologie, Bewusstsein. Läuft in **diesem** Repo (`hellmuth-soda`), S/W-Design.
- **HELLMUTH** — asiatische Getränkekultur. Gehört auf die Hellmuth-Botanical-Soda-Seite (anderes Repo, Creme/Gold). Die Pipeline ist rubrik-agnostisch; auf der Soda-Seite läuft derselbe Code mit `PIPELINE_RUBRIKEN=hellmuth`.

## Architektur

```
fetch → dedup → (translate) → relevance(≥8) → transform → render → commit → Pages-Deploy
```

- **fetch** (`pipeline/fetch.mjs`): RSS/Atom (mit Discovery), PubMed E-Utilities, Sitemap- und Scrape-Fallback. robots.txt wird respektiert.
- **dedup** (`pipeline/dedup.mjs`): SHA-256 der Original-URL gegen `pipeline/state/seen.json`.
- **translate** (`pipeline/lib/anthropic.mjs`): nur für Quellen mit `translate:true` und Sprache ≠ en/de (Haiku).
- **relevance**: Claude Haiku, Score 0–10, nur ≥ `RELEVANCE_THRESHOLD` (Default 8) gehen weiter.
- **transform**: Claude Opus, System-Prompt = vollständige `pipeline/style/claude.md` + `pipeline/style/newsroom-rule.md` (prompt-gecacht).
- **render** (`pipeline/render.mjs`): schreibt Markdown nach `content/news/<rubrik>/<YYYY-MM-DD>-<slug>.md`, generiert statische Detailseiten `news/<rubrik>/<slug>/index.html` und `news/data.js`.

Quelle der Wahrheit sind die Markdown-Dateien; `data.js` und Detailseiten werden bei jedem Lauf daraus neu gebaut.

## Frontend

- `news/index.html` — Übersicht mit Rubrik-Filter (Alle / Forschung / HELLMUTH).
- `news/<rubrik>/<slug>/index.html` — generierte Detailseite mit Pflicht-Backlink + DOI.
- Startseite: `<section id="news-band">` zwischen Quiz und Footer, befüllt von `news/news-home.js` aus `news/data.js` (3 jüngste Forschungs-Items). Der Quiz-Code bleibt unangetastet.
- **Lesezeit:** aus der Wortzahl des Body (200 Wörter/Min, `render.mjs` `readingMinutes`), in `data.js` als `minutes` und in der Meta-Zeile (Rubrik · Datum · Lesezeit) auf Karte und Detailseite. Bei sehr kurzen Items „unter 1 Min." (gewollt).
- **Klartext der Woche:** `config/featured.json` ist ein Array von Slugs (max. 3 werden gezeigt), z. B. `["ginseng-als-alltagsware","zwei-depressionen-im-hirn"]`. `news/news.js` zieht die Datei zur Laufzeit (Cache-Buster), eine Änderung greift also sofort ohne Pipeline-Lauf. Leeres Array (`[]`) → die Sektion bleibt versteckt.
- **Prev/Next:** jede Detailseite verlinkt unter der Quellenangabe den chronologisch benachbarten Artikel **derselben Rubrik** (Vorheriger = älter, links; Nächster = neuer, rechts). Fehlt ein Nachbar, bleibt die Seite leer.

## Betrieb (GitHub Actions)

Workflow: `.github/workflows/news.yml`.

- **Täglich** (Cron 05:17 UTC): `node run.mjs`, committet neuen Content auf den Branch, GitHub Pages deployt.
- **Manuell** (`workflow_dispatch`):
  - `task=run` mit `max_new` und `dry_run` — regulärer Lauf, z. B. Seed-Test mit `max_new=3`.
  - `task=check-feeds` — prüft alle Quellen (RSS/Sitemap/Scrape/robots), schreibt `feed_status` in `config/news-sources.json` und gibt einen Report in die Job-Summary.

### Benötigte Secrets

| Secret | Zweck | Pflicht |
|---|---|---|
| `ANTHROPIC_API_KEY` | Relevanz/Übersetzung/Transformation | ja |
| `NCBI_API_KEY` | höheres PubMed-Ratelimit | optional |

### Cron-Sicherung

Der tägliche Cron (Schedule-Trigger) läuft **nur**, wenn die Repo-Variable `NEWS_CRON_ENABLED=true` gesetzt ist. Ohne diese Variable wird der Schedule-Lauf am Gate sauber übersprungen mit einer Warning-Annotation und einem Eintrag in der Job-Summary (»Cron skipped — NEWS_CRON_ENABLED=…«). Manuelles `workflow_dispatch` (`task=check-feeds` und `task=run`) ist davon nicht betroffen und läuft immer.

Sequenz nach Merge: erst `task=check-feeds`, dann Seed mit `task=run` und `max_new=3`, Stilprüfung gemäß `docs/news-seed-check.md`, **erst danach** `NEWS_CRON_ENABLED=true` in `Settings → Secrets and variables → Actions → Variables` setzen.

## Quellen hinzufügen / abschalten

Alles in `config/news-sources.json`. Eine Quelle ist ein Objekt:

```json
{ "name": "…", "url": "https://…", "feed": "https://…/feed/", "type": "rss|pubmed|sitemap|scrape",
  "lang": "en|de|zh|…", "translate": false, "paywall": false, "headline_only": false, "active": true,
  "preprint": false, "queries": ["…"], "notes": "…", "feed_status": "unverified" }
```

- An-/Abschalten: `active`.
- `type`: `rss` versucht zusätzlich Sitemap/Scrape als Fallback. `pubmed` nutzt `queries`. `sitemap`/`scrape` für Quellen ohne Feed.
- Nicht-EN/DE: `lang` setzen und `translate:true`.
- **Paywall im Pressespiegel-Modus:** `paywall:true` + `headline_only:true`. Dann wird nur Titel und frei zugänglicher Anriss verarbeitet (kein Volltext hinter der Paywall), die Meldung wird auf 2–4 Sätze gekürzt und sichtbar als »Pressespiegel« markiert. So laufen Nikkei Asia und SCMP. Just Drinks und Campaign Asia bleiben `active:false`.
- Nach dem Hinzufügen einmal `task=check-feeds` laufen lassen und erst bei `feed_status: ok` scharf schalten.

## Stil nachjustieren

- Hausordnung/Stimme: `pipeline/style/claude.md` (gespiegelt aus dem Monorepo).
- Newsroom-Zusatzregel + Längen + JSON-Format: `pipeline/style/newsroom-rule.md`.
- Themen-Vokabular des Relevanz-Filters: `THEME_VOCAB` in `pipeline/lib/anthropic.mjs`.
- Modelle/Effort/Schwelle über ENV: `RELEVANCE_MODEL`, `TRANSFORM_MODEL`, `TRANSLATE_MODEL`, `TRANSFORM_EFFORT`, `RELEVANCE_THRESHOLD`, `MAX_NEW_PER_RUN`, `PIPELINE_RUBRIKEN`.

> Hinweis: Standardmodell der Transformation ist `claude-opus-4-7` (Briefing). `claude-opus-4-8` ist verfügbar; per `TRANSFORM_MODEL` umstellbar.

## Lokaler Test

```bash
cd pipeline
npm install
ANTHROPIC_API_KEY=sk-… PIPELINE_RUBRIKEN=science MAX_NEW_PER_RUN=3 node run.mjs
# Feed-Check ohne API-Key:
node check-feeds.mjs
```

## SEO & Feeds (automatisch im Renderer)

Alles aus `render.mjs`, bei jedem `build()` neu erzeugt, kein Eingriff pro Item:

- **Meta pro Detailseite:** `<title>` (Item-Titel + „— News — Mut zur Klarheit"), `<meta name="description">` (Lead), `<meta name="robots" content="index, follow">`, `<link rel="canonical">`.
- **Open Graph:** `og:type=article`, `og:title`, `og:description` (Lead), `og:url`, `og:site_name=Hellmuth`. Kein `og:image` (keine Bilder in den Items).
- **JSON-LD:** Schema.org `NewsArticle` mit `headline`, `datePublished`/`dateModified`, `articleSection`, `author`/`publisher` (Hellmuth + Logo-URL), `description`, `mainEntityOfPage` (Canonical). `<` wird zu `<` neutralisiert.
- **Sitemap:** `sitemap.xml` im Root. Vorhandene statische `<url>`-Blöcke (alles ohne `/news/`) bleiben erhalten; News-URLs werden ersetzt/aufgefrischt (`lastmod` = Item-Datum). Der Workflow committet `sitemap.xml` mit.
- **RSS 2.0:** `news/feed.xml` (alle), `news/science/feed.xml`, `news/hellmuth/feed.xml` mit Titel, Lead, `pubDate`, Link, Rubrik als `<category>`. Auf der Startseite per `<link rel="alternate">` im `<head>` und als „RSS"-Link im Footer.
- **robots.txt:** `Allow: /` (nichts blockiert /news/), referenziert `Sitemap: https://hellmuth-soda.de/sitemap.xml`. Bereits korrekt, keine Änderung nötig.

## Recht

Eigenständige Kurzfassung in eigenen Worten, sichtbarer Pflicht-Backlink, Attribution (Quelle, Original-Datum, DOI bei Studien), Preprints gekennzeichnet, im Zweifel kein Bild.

## Bekannte Probleme (Known Issues)

- **Dedup nur per URL, keine Titel-Ähnlichkeit.** `dedup.mjs` hasht ausschließlich die Original-URL (`hashUrl(url)`). Derselbe Artikel unter zwei verschiedenen URLs — etwa identischer Wire-Bericht bei zwei Quellen, oder RSS-URL mit Tracking-Parametern vs. kanonische URL — wird als zwei Items behandelt. Folge: gelegentlich dasselbe Item doppelt in den Near-Misses (gleicher Titel, gleicher Score, zweimal gelistet). Kein Datenschaden, da veröffentlichte Items per URL gesperrt bleiben; betrifft nur die Anzeige/Bewertung. Möglicher Fix später: zusätzlicher Titel-Hash (normalisiert) oder Fuzzy-Vergleich (z.B. Levenshtein/Token-Set) als zweite Dedup-Stufe. Vorerst nicht behoben.

