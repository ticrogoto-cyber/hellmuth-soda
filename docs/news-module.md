# News-Modul

Automatisiertes, täglich aktualisiertes News-Modul mit zwei Rubriken:

- **Wissenschaft** — begutachtete Studien zu Substanzen, Pharmakologie, Bewusstsein. Läuft in **diesem** Repo (`hellmuth-soda`), S/W-Design.
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

- `news/index.html` — Übersicht mit Rubrik-Filter (Alle / Wissenschaft / HELLMUTH).
- `news/<rubrik>/<slug>/index.html` — generierte Detailseite mit Pflicht-Backlink + DOI.
- Startseite: `<section id="news-band">` zwischen Quiz und Footer, befüllt von `news/news-home.js` aus `news/data.js` (3 jüngste Wissenschaft-Items). Der Quiz-Code bleibt unangetastet.

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

## Recht

Eigenständige Kurzfassung in eigenen Worten, sichtbarer Pflicht-Backlink, Attribution (Quelle, Original-Datum, DOI bei Studien), Preprints gekennzeichnet, im Zweifel kein Bild.
