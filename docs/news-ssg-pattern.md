# News-Module SSG Pattern — Inspection Report

Reverse-engineered from the existing `news/` pipeline so the same shape can be replicated for the planned Substanz-Index under `/zutaten/{slug}/`.

All file paths are absolute. Line references use `path:line`.

---

## 1. How is `render.mjs` invoked?

`render.mjs` exports a `build()` function (`/home/user/hellmuth-soda/pipeline/render.mjs:436`). It is **not** invoked directly by an npm script — the only scripts in `/home/user/hellmuth-soda/pipeline/package.json:13-15` are:

```json
"scripts": {
  "run": "node run.mjs",
  "check-feeds": "node check-feeds.mjs"
}
```

The renderer is the **final stage** of `pipeline/run.mjs`, which is itself driven by GitHub Actions in `/home/user/hellmuth-soda/.github/workflows/news.yml`:

- **Scheduled trigger** — daily cron `17 22 * * *` UTC (`news.yml:7`), gated by the repo variable `NEWS_CRON_ENABLED=true` (gate job at `news.yml:36-60`). If the variable is unset, the scheduled run is skipped with a warning annotation.
- **Manual trigger** — `workflow_dispatch` with inputs `task` (`run` | `check-feeds`), `max_new`, `rubriken`, `dry_run` (`news.yml:8-26`).
- The `news` job runs `cd pipeline && node run.mjs` (`news.yml:92-116`), then a separate step (`news.yml:118-144`) commits **and pushes** the generated artefacts:
  ```
  git add content/news news zutaten sitemap.xml config/news-sources.json pipeline/state/seen.json
  ```
  GitHub Pages picks the push up and deploys. A best-effort Google sitemap-ping follows (`news.yml:136-137`).

There is no commit-time hook and no local pre-commit. The pipeline is a server-side cron + manual dispatch only.

`docs/news-module.md:32-52` documents the same flow.

---

## 2. Input format — `content/news/<rubrik>/<YYYY-MM-DD>-<slug>.md`

`news/data.js` is **not** an input — it is a generated artefact. The source of truth is the Markdown files in `/home/user/hellmuth-soda/content/news/<rubrik>/`. Schema is enforced by `render.mjs`:

- Filename: `${date}-${slug}.md` (`render.mjs:213`).
- Frontmatter keys (`render.mjs:158`):
  ```
  title, date, created, slug, rubrik, source_url, source_name,
  lead, doi, preprint, press_review, relevance
  ```
- Serialization is **JSON-per-line inside `---` fences** (not YAML): each line is `key: <JSON value>` (`render.mjs:160-165`). The parser does `JSON.parse` on the value and falls back to raw string (`render.mjs:167-186`).
- Body follows the closing `---`, free-form prose. Paragraphs are split on blank lines for HTML rendering (`render.mjs:272-275`).
- New items are written via the exported `writeItem({ rubrik, title, lead, body, sourceUrl, ... })` (`render.mjs:193-215`).

`data.js` itself is a flat JS file that assigns `window.NEWS_DATA = {...}` (`render.mjs:408-430`) with a trimmed record shape per item (`title, date, created, slug, rubrik, lead, source_name, source_url, preprint, press_review, minutes, href`). Sample at `/home/user/hellmuth-soda/news/data.js:1-18`.

---

## 3. Output format per article

Folder layout, one directory per article:

```
news/<rubrik>/<slug>/index.html
```

Written at `render.mjs:450-452` (`mkdir -p` then `writeFileSync`).

Per-article HTML (theme `mono` is default, see `NEWS_THEME` at `render.mjs:40`; theme `soda` exists for the cream/gold sister site):

- `<title>` = `"${title} — News — Mut zur Klarheit"` (`render.mjs:283`).
- `<meta name="description">` = lead (`render.mjs:284`).
- `<link rel="canonical">` = `${SITE}/news/${rubrik}/${slug}/` (`render.mjs:285`) — `SITE = 'https://hellmuth-soda.de'` (`render.mjs:23`).
- Google site verification meta (`render.mjs:286`).
- Favicons set (`render.mjs:287-290`).
- Robots + OpenGraph + RSS alternate + JSON-LD `NewsArticle` are all injected by `seoHead(rec)` (`render.mjs:66-97`):
  - `<meta name="robots" content="index, follow" />`
  - `og:type=article`, `og:title`, `og:description`, `og:url`, `og:site_name`
  - `<link rel="alternate" type="application/rss+xml" ...>` pointing at the rubric feed
  - JSON-LD `@type: NewsArticle` with `headline`, `description`, `datePublished`, `dateModified`, `articleSection`, `author`/`publisher` (`Organization` Hellmuth), `mainEntityOfPage`. `<` is escaped to `<` so `</script>` cannot break the page.
- **No Twitter Card meta tags.** Only OpenGraph. **No `og:image`** either — the news items carry no images (intentional, see `docs/news-module.md:94`).
- Stylesheet links: `../../../styles.css?v=13` + `../../news.css` (`render.mjs:292-293`).
- Full site header (with navigation including `/zutaten/` and `/zutaten/bildgebung/`) is inlined (`render.mjs:296-313`).
- Footer + script tags at the bottom (`render.mjs:328-333`): `site.js`, `search.js`, `counters.js`, `detail.js`.

Sample output: `/home/user/hellmuth-soda/news/science/adoleszentes-nikotin-hinterlasst-eine-microglia-spur/index.html` confirms all of the above.

---

## 4. Sitemap generation

Single root file `/home/user/hellmuth-soda/sitemap.xml`, fully regenerated on every `build()` (`render.mjs:507`).

Builder: `buildSitemapXml(all)` (`render.mjs:134-154`).

- **Static pages** are sourced from the `STATIC_PAGES` constant array (`render.mjs:27-35`):
  ```js
  const STATIC_PAGES = [
    { path: '/',                       changefreq: 'daily',   priority: '1.0' },
    { path: '/hellmuth/',              changefreq: 'monthly', priority: '0.7' },
    { path: '/quiz/',                  changefreq: 'monthly', priority: '0.8' },
    { path: '/klarheitskarten/',       changefreq: 'weekly',  priority: '0.9' },
    { path: '/vokabular/',             changefreq: 'monthly', priority: '0.8' },
    { path: '/zutaten/',               changefreq: 'weekly',  priority: '0.85' },
    { path: '/zutaten/bildgebung/',    changefreq: 'weekly',  priority: '0.85' },
  ];
  ```
  Each gets today's `lastmod` so Google sees a fresh crawl signal.
- **News URLs** are appended per item: `<loc>${newsUrl(rec)}</loc>` with `lastmod = rec.created || rec.date` (first 10 chars) (`render.mjs:144-151`).
- **Nothing is added manually.** No partial-update or merge logic — the file is overwritten on every run. There is currently **no entry per `/zutaten/{slug}/`** — only the index page `/zutaten/` is listed.

---

## 5. Like / Share / Views component

Three-button bar emitted by `actionsBarHtml(rec)` (`render.mjs:255-268`). Identifier convention: `data-news-id="${rubrik}/${slug}"` — that exact string is the KV key on the Cloudflare Worker side.

### HTML markup (rendered into the article)

```html
<div class="news-actions" data-news-id="science/<slug>">
  <button class="news-act news-like" aria-pressed="false" aria-label="Gefällt mir">
    <span class="news-like-icon"><svg>...heart outline...</svg></span>
    <span class="news-like-count"></span>
  </button>
  <button class="news-act news-share" aria-label="Teilen">
    <svg>...share...</svg><span class="news-share-label">Teilen</span>
  </button>
  <span class="news-act news-views" hidden>
    <svg>...eye...</svg><span class="news-views-count"></span> Aufrufe
  </span>
</div>
```

Inline SVGs (heart outline, share, eye) are constants in `render.mjs:258-262`. Filled heart (when liked) lives in `news/detail.js:11-12`.

CSS: `.news-actions`, `.news-act`, `.news-like`, `.news-share`, `.news-views` in `/home/user/hellmuth-soda/news/news.css:305-340`.

### JS handler — `/home/user/hellmuth-soda/news/detail.js`

- Reads `data-news-id` from `.news-actions` (`detail.js:6-7`).
- **localStorage key pattern**: `hl-liked:${id}` (e.g. `hl-liked:science/<slug>`) at `detail.js:21`. One-shot — a liked article cannot be unliked.
- **sessionStorage key pattern**: `hl-viewed:${id}` at `detail.js:22`. Prevents reload-inflation; one view counts per browser session per article.
- On load: if not yet viewed, calls `Counters.view(id)`; in parallel fetches current totals via `Counters.getCounts([id])` and writes the like count + view count into the DOM (`detail.js:46-58`).
- Like click: sets localStorage, swaps to filled heart, POSTs `Counters.like(id)` (`detail.js:60-70`).
- Share click: uses `navigator.share` when present, otherwise copies `location.href` to clipboard and briefly toggles "Link kopiert" (`detail.js:72-91`).

### Storage / fetch backend — `/home/user/hellmuth-soda/news/counters.js`

- Worker base URL hardcoded: `https://hellmuth-counters.ticro-goto.workers.dev` (`counters.js:7`). Comment notes the alternative `'/api'` if a custom route on `hellmuth-soda.de/api/*` is wired up.
- Endpoints:
  - `GET /counts?ids=<csv>` → `{ views: {id:n}, likes: {id:n} }` (`counters.js:10-21`).
  - `POST /view` body `{ id }` → `{ views: n }` (`counters.js:23-36, 41`).
  - `POST /like` body `{ id }` → `{ likes: n }` (`counters.js:42`).
- All errors are swallowed (`counters.js:18, 33`) — UI degrades silently.
- Exposes `window.Counters = { base, getCounts, view, like }` (`counters.js:38-43`).

The list page `/home/user/hellmuth-soda/news/news.js:157-163` also calls `Counters.getCounts(...)` to hydrate per-card view counts and enable the "Meistgelesen" sort.

The Worker itself is **not in this repo**; the `cloudflare/` folder presumably holds its config (not inspected here — out of scope).

---

## 6. RSS feeds

Generated by `rssFeed(...)` (`render.mjs:114-130`) and `rssItem(...)` (`render.mjs:101-112`). Standard RSS 2.0 with `<atom:link rel="self">`.

Three feeds for news (`render.mjs:464-488`):

- `/home/user/hellmuth-soda/news/feed.xml` — combined (both rubrics).
- `/home/user/hellmuth-soda/news/hellmuth/feed.xml`.
- `/home/user/hellmuth-soda/news/science/feed.xml`.

Each item carries `<title>`, `<link>`, `<guid isPermaLink="true">`, `<pubDate>` (from `created || date`), `<category>` (rubric label), `<description>` (lead).

Additionally, a **placeholder** `/home/user/hellmuth-soda/zutaten/bildgebung/feed.xml` is created as an empty channel (`render.mjs:493-504`) — comment at `render.mjs:490-492` explicitly calls this "Phase 1, leerer Channel" so that sitemap/`rel=alternate` links can already point at it.

There is **no feed for the Substanz-Index** (`/zutaten/`) yet.

---

## 7. Static HTML or shell + hydration?

**Fully static HTML.** Every `index.html` under `news/<rubrik>/<slug>/` contains the entire article body, server-rendered by `render.mjs` (`detailHtmlMono` at `render.mjs:270-336`, `detailHtmlSoda` at `render.mjs:338-404`). Paragraphs are split on blank lines and each wrapped in `<p>` (`render.mjs:272-275`).

Verified against `/home/user/hellmuth-soda/news/science/adoleszentes-nikotin-hinterlasst-eine-microglia-spur/index.html:77-80` — body paragraphs are in the served HTML, not loaded via JS.

What client-side JS does (additive only — page is fully readable without JS):

- `detail.js` — wires up Like / Share / Views interactivity and counter fetches.
- `counters.js` — exposes `window.Counters`.
- `site.js`, `search.js` — global menu, site-wide search overlay (independent of news).

The list page `/home/user/hellmuth-soda/news/index.html` is the **only** shell — it is genuinely empty and gets populated client-side by `news.js` from `window.NEWS_DATA`. Detail pages are not shells.

---

## What we need to replicate for the Substanz-Index

Goal: each Substanz under `/zutaten/{slug}/` should be a fully static, indexable HTML page with the same SEO, sitemap entry, and Like/Share affordance as a news article. Below is the concrete edit list, scoped to the existing pipeline.

The current state (`docs/zutaten-module.md`) plans an overlay register for substances (no per-substance URL). What's requested here is the **opposite** — a per-substance static page. So this is additive.

### Files to create

1. **`/home/user/hellmuth-soda/content/zutaten/substances/<slug>.md`** (new directory) — one Markdown per substance. Mirror the news frontmatter convention (JSON-per-line inside `---`):
   ```
   ---
   name: "Name"
   slug: "name"
   date: "YYYY-MM-DD"
   created: "ISO-8601"
   werbung: "1-3 Sätze"
   wirkung: "3-6 Sätze"
   filters: ["…"]
   related_article: "/news/science/…/"
   sources: [...]
   ---
   <optional long-form body / Fließtext>
   ```
   Source of truth, same pattern as `content/news/`.

2. **`/home/user/hellmuth-soda/pipeline/render-zutaten.mjs`** (new sibling to `render.mjs`) — or, simpler, **extend `render.mjs`** with a `buildZutaten()` function and call it from `build()`. Recommended: extend, to keep one entry point.

   The renderer needs:
   - `readAllSubstances()` analogous to `readAll()` (`render.mjs:219-237`).
   - A `detailHtmlSubstance(rec, nav)` template — copy `detailHtmlMono` (`render.mjs:270-336`) and adjust:
     - `<title>` = `"${name} — Zutaten — Mut zur Klarheit"`.
     - `canonical` = `${SITE}/zutaten/${slug}/`.
     - Stylesheet paths: `../../styles.css?v=13`, `../zutaten.css` (one fewer `..` than news).
     - Script paths for `counters.js` and `detail.js` need to resolve — easiest path is to also copy/include `news/counters.js` + `news/detail.js` from `../news/...` or move them to root. Recommendation: leave them in `/news/` and reference `../../news/counters.js` from `/zutaten/<slug>/`, OR (cleaner) move them to root as `/counters.js` + `/detail.js` and update all references. **Either way, `data-news-id` becomes `zutaten/${slug}` — and the Cloudflare Worker KV must accept that namespace** (it likely already does, since the key is opaque, but verify).
     - JSON-LD `@type` should change from `NewsArticle` to something appropriate — `DefinedTerm` (matches a glossary entry) or `Article`. Update `articleSection` to "Zutaten".
     - Different body shape: two labelled sections (Werbung / Wirkung) rather than free paragraphs. Add a Quellen list.
   - Write to `/home/user/hellmuth-soda/zutaten/${slug}/index.html` via `mkdirSync` + `writeFileSync`.

3. **`/home/user/hellmuth-soda/zutaten/feed.xml`** (optional, to match news) — extend `build()` to emit an RSS 2.0 feed of new substances, parallel to `news/feed.xml`.

### Files to modify

4. **`/home/user/hellmuth-soda/pipeline/render.mjs`**:
   - Append a per-substance loop to `build()` (`render.mjs:436-510`) — for each substance write `/zutaten/${slug}/index.html`.
   - Extend `buildSitemapXml()` (`render.mjs:134-154`) to add a `<url>` block per substance: `/zutaten/${slug}/` with `lastmod = rec.date`, `changefreq=monthly`, `priority=0.6` (same shape as news, lines 144-151).
   - The `STATIC_PAGES` entry for `/zutaten/` already exists (`render.mjs:33`), so the index page is covered.
   - If a per-substance RSS feed is wanted, replicate the `rssFeed(...)` block at `render.mjs:475-488`.

5. **`/home/user/hellmuth-soda/.github/workflows/news.yml`**:
   - The commit step (`news.yml:124`) already does `git add ... zutaten sitemap.xml ...`, so generated `/zutaten/<slug>/index.html` files will be picked up automatically. **No workflow change needed**, assuming `buildZutaten()` is called from `build()` which is already on the daily path.
   - If the substance corpus is hand-authored (not Anthropic-generated), consider a second `workflow_dispatch` task like `task=render-only` that skips fetch/relevance/transform and just re-runs `render.build()`. Optional.

6. **`/home/user/hellmuth-soda/news/counters.js`** + **`/home/user/hellmuth-soda/news/detail.js`** — no code change needed if the substance template references them via relative paths (`../../news/counters.js`, `../../news/detail.js` from `/zutaten/<slug>/`). The `data-news-id` namespace `zutaten/<slug>` will Just Work because the scripts are id-agnostic (`detail.js:6`).

   If those scripts are moved to root for cleanliness, update the four `<script src="...">` references in `render.mjs:331-332` and `render.mjs:392-393` too.

### Like/Share component — required HTML to inject in the substance template

Copy verbatim from `actionsBarHtml` (`render.mjs:255-268`), changing only the `data-news-id` namespace:

```html
<div class="news-actions" data-news-id="zutaten/<slug>">
  <button class="news-act news-like" ...>...</button>
  <button class="news-act news-share" ...>...</button>
  <span class="news-act news-views" hidden>...</span>
</div>
```

The CSS rules at `news.css:305-340` are scoped `.news-detail .news-actions ...`. Either re-use the `.news-detail` wrapper class on the substance page or duplicate/rescope the rules to `.zutaten-detail .news-actions`. Re-using `.news-detail` is the lowest-friction option.

### Sitemap entries — concrete snippet to add to `buildSitemapXml`

Inside the function (`render.mjs:134`), after the news loop, before joining:

```js
if (substances && substances.length) {
  for (const rec of substances) {
    const lastmod = String(rec.created || rec.date).slice(0, 10);
    newsBlocks.push(
      `<url>\n    <loc>${SITE}/zutaten/${rec.slug}/</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.6</priority>\n  </url>`
    );
  }
}
```

That's the entire SEO-surface delta. The Cloudflare Worker, the favicon set, the canonical-host setup (`SITE` constant), the JSON-LD escaping, robots.txt — all already in place and reusable as-is.
