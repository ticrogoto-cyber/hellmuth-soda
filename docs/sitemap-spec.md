# Sitemap Generation Spec — hellmuth-soda.de

Phase 2 spec: extend the existing sitemap generator to enumerate the 168
substance detail pages under `/zutaten/{slug}/` while preserving the news,
top-level and Bildgebung entries that are already shipping.

Implementor of next step: write the generator. Do not redesign URLs.

---

## 1. Current state

**File:** `/home/user/hellmuth-soda/sitemap.xml` (20 454 bytes, last touched
2026-06-20). **Auto-generated.** Built by `pipeline/render.mjs` →
`buildSitemapXml(all)` (lines 132–154) and written at the end of `build()`
(line 507). `render.mjs` is invoked from `pipeline/run.mjs`.

**robots.txt:** present, three lines —

```
User-agent: *
Allow: /

Sitemap: https://hellmuth-soda.de/sitemap.xml
```

**What the sitemap currently contains (576 lines, 88 URLs):**

| Block | Source in render.mjs | Count |
|---|---|---|
| Static pages | `STATIC_PAGES` const (lines 27–35) | 7 |
| `/news/hellmuth/<slug>/` | `readAll().hellmuth` | 41 |
| `/news/science/<slug>/` | `readAll().science` | 40 |

`STATIC_PAGES` already lists `/zutaten/` and `/zutaten/bildgebung/` with
`priority 0.85`, `changefreq weekly`. All static pages get today's `lastmod`
on each build; news entries get `rec.created || rec.date` truncated to
`YYYY-MM-DD`.

**Pages explicitly excluded** (`noindex` set in their head):
`/impressum/` and `/quiz-unternehmer/`. They must stay out of the sitemap.

**Gap:** zero `/zutaten/<slug>/` URLs are emitted today. The 168 substance
detail pages described in `zutaten/substances.js` are not yet rendered as
static pages (no per-slug directories under `/zutaten/` exist), but the
sitemap entries need to be generated in lock-step with that work.

---

## 2. Target sitemap entries

Final URL set after this change. Priorities and changefreqs are bumped
slightly from current values per the brief; alignment notes in the right
column.

| URL | priority | changefreq | lastmod source | notes |
|---|---|---|---|---|
| `https://hellmuth-soda.de/` | 1.0 | daily | build date | unchanged |
| `https://hellmuth-soda.de/zutaten/` | **0.9** | weekly | build date | bump from 0.85 |
| `https://hellmuth-soda.de/zutaten/bildgebung/` | **0.9** | weekly | build date | bump from 0.85 |
| `https://hellmuth-soda.de/zutaten/<slug>/` | **0.7** | monthly | build date | **new**, one per entry in `substances.js` (168) |
| `https://hellmuth-soda.de/zutaten/bildgebung/<slug>/` | 0.6 | monthly | article date | **new** (currently zero such folders exist; enumerate dynamically so future articles auto-appear) |
| `https://hellmuth-soda.de/hellmuth/` | 0.7 | monthly | build date | unchanged |
| `https://hellmuth-soda.de/quiz/` | 0.8 | monthly | build date | unchanged |
| `https://hellmuth-soda.de/vokabular/` | 0.8 | monthly | build date | unchanged |
| `https://hellmuth-soda.de/klarheitskarten/` | 0.9 | weekly | build date | unchanged |
| `https://hellmuth-soda.de/news/hellmuth/<slug>/` | 0.6 | monthly | per article | unchanged (41 today) |
| `https://hellmuth-soda.de/news/science/<slug>/` | 0.6 | monthly | per article | unchanged (40 today) |

**Excluded** (do not emit):
- `/impressum/` — has `<meta name="robots" content="noindex">`
- `/quiz-unternehmer/` — has `<meta name="robots" content="noindex, follow">`
- `/soda-dropin/`, `/cloudflare/`, `/content/`, `/pipeline/`, `/docs/`, `/config/` — repo/build dirs, not served
- Any `feed.xml` (RSS, not HTML)

**Expected total after build:** 7 baseline + 168 substances + 41 hellmuth +
40 science = **256 URLs** plus any future Bildgebung articles. Well under
the 50 000 / 50 MB sitemap limits — keep a single file, no sitemap index
needed.

---

## 3. Generation script design

**Recommendation:** extend `pipeline/render.mjs` rather than introducing a
separate `sitemap-build.mjs`. The sitemap generator already lives there, is
already called from `run.mjs`, and the 168 substance slugs come from a
file (`zutaten/substances.js`) that has to be read regardless. A second
script would duplicate the `STATIC_PAGES` constant, the `SITE` constant
and the XML helpers.

### 3.1 Changes to `pipeline/render.mjs`

```
// 1. Bump priorities/freqs in STATIC_PAGES.
const STATIC_PAGES = [
  { path: '/',                     changefreq: 'daily',   priority: '1.0' },
  { path: '/hellmuth/',            changefreq: 'monthly', priority: '0.7' },
  { path: '/quiz/',                changefreq: 'monthly', priority: '0.8' },
  { path: '/klarheitskarten/',     changefreq: 'weekly',  priority: '0.9' },
  { path: '/vokabular/',           changefreq: 'monthly', priority: '0.8' },
  { path: '/zutaten/',             changefreq: 'weekly',  priority: '0.9'  }, // was 0.85
  { path: '/zutaten/bildgebung/',  changefreq: 'weekly',  priority: '0.9'  }, // was 0.85
];

// 2. New: load substance slugs.
// substances.js assigns window.SUBSTANCES_DATA = {...}. Evaluate in a
// sandboxed shim so the IIFE runs in Node.
import vm from 'node:vm';
function readSubstanceSlugs() {
  const src = readFileSync(join(ROOT, 'zutaten', 'substances.js'), 'utf8');
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(src, ctx);
  const entries = ctx.window.SUBSTANCES_DATA?.entries || [];
  // De-dupe defensively; substances.js is hand-edited.
  const seen = new Set();
  return entries
    .map((e) => e.slug)
    .filter((s) => s && !seen.has(s) && seen.add(s));
}

// 3. New: walk bildgebung subfolders that contain index.html.
function readBildgebungSlugs() {
  const dir = join(ROOT, 'zutaten', 'bildgebung');
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .filter((d) => existsSync(join(dir, d.name, 'index.html')))
    .map((d) => d.name)
    .sort();
}

// 4. Extend buildSitemapXml.
function buildSitemapXml(all) {
  const today = isoDate();
  const blocks = [];

  // 4a. Static pages — unchanged loop.
  for (const p of STATIC_PAGES) {
    blocks.push(urlBlock(`${SITE}${p.path}`, today, p.changefreq, p.priority));
  }

  // 4b. Substance detail pages.
  for (const slug of readSubstanceSlugs()) {
    blocks.push(urlBlock(`${SITE}/zutaten/${slug}/`, today, 'monthly', '0.7'));
  }

  // 4c. Bildgebung article pages (empty today, future-proof).
  for (const slug of readBildgebungSlugs()) {
    blocks.push(urlBlock(`${SITE}/zutaten/bildgebung/${slug}/`, today, 'monthly', '0.6'));
  }

  // 4d. News — existing loop, unchanged.
  for (const rubrik of RUBRIKEN) {
    for (const rec of all[rubrik]) {
      const lastmod = String(rec.created || rec.date).slice(0, 10);
      blocks.push(urlBlock(newsUrl(rec), lastmod, 'monthly', '0.6'));
    }
  }

  const body = blocks.map((b) => '  ' + b).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}

// helper, deduplicates the existing inline template:
function urlBlock(loc, lastmod, changefreq, priority) {
  return `<url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
}
```

### 3.2 Loading `substances.js` — pitfalls

- The file is a browser script that assigns to `window.SUBSTANCES_DATA`. It
  does not export anything. Three viable strategies, in preference order:
  1. **Recommended:** `vm.runInContext` with `{ window: {} }` (above). No
     file edits required, survives future entries automatically.
  2. Regex-scrape `slug: "..."` — brittle; substances.js mixes
     `slug: "foo"` (entry) with `slug: foo` mentions in prose strings.
     Use only if 1 fails.
  3. Convert `substances.js` to dual-export (`if (typeof module …) module.exports
     = window.SUBSTANCES_DATA`). Touches a 168-entry browser asset; avoid.

- 168 entries are present today (verified `grep -cE "^\s+name:" 
  zutaten/substances.js → 168`). Sanity-check after load: assert
  `entries.length >= 168` to catch parse regressions.

### 3.3 Output shape

Validates against `http://www.sitemaps.org/schemas/sitemap/0.9`. One
`<url>` per entry, four children (`loc`, `lastmod`, `changefreq`,
`priority`), two-space indent for `<url>`, four-space indent for children
— matches today's file so the diff stays small.

### 3.4 Sort order inside the XML

Static block first, then substance block in `substances.js` order (the
hand-curated reading order — keep it), then bildgebung, then news (already
sorted newest-first by `readAll`). Search engines don't care; humans
diff-reviewing the file will.

---

## 4. robots.txt

**Keep as-is.** The current file is correct:

```
User-agent: *
Allow: /

Sitemap: https://hellmuth-soda.de/sitemap.xml
```

`/zutaten/` is implicitly allowed by `Allow: /`; no rule change needed.

**Do not add disallows for `/docs/`, `/pipeline/`, `/content/`, etc.** —
the site is statically served via Cloudflare Pages and these directories
are not deployed (CNAME + Pages config controls publish, not robots). Adding
disallows would leak internal directory names. Verify with the Pages
build output if uncertain.

**One optional hardening** (low priority): if Cloudflare Pages does ship
the repo's source dirs, add:

```
Disallow: /docs/
Disallow: /pipeline/
Disallow: /content/
Disallow: /config/
```

— but the better fix is a Pages `_redirects` or `.cloudflareignore`, not
robots.txt. Out of scope for this spec.

---

## 5. Canonical URL strategy (per substance page)

Each rendered `/zutaten/<slug>/index.html` must contain in `<head>`:

```html
<link rel="canonical" href="https://hellmuth-soda.de/zutaten/<slug>/" />
```

Mirrors the pattern already used by news detail pages (`render.mjs` line
285 in mono template, 352 in soda template). Use the same `SITE` constant
as render.mjs (`https://hellmuth-soda.de`, no trailing slash) and always
emit the trailing slash on the path — matches the sitemap entries and
avoids canonical-vs-sitemap mismatch warnings in Search Console.

`index.html` (homepage) already has a canonical to `https://hellmuth-soda.de/`
— no change needed there.

---

## 6. OpenGraph + Twitter Card meta tags (per substance page)

Insert in `<head>` after the canonical link. Field-to-source mapping:

```html
<meta property="og:type"        content="article" />
<meta property="og:title"       content="{entry.name}" />
<meta property="og:description" content="{entry.werbung}" />
<meta property="og:url"         content="https://hellmuth-soda.de/zutaten/{entry.slug}/" />
<meta property="og:site_name"   content="Hellmuth" />
<meta property="og:image"       content="https://hellmuth-soda.de/hellmuth.png" />

<meta name="twitter:card"        content="summary" />
<meta name="twitter:title"       content="{entry.name}" />
<meta name="twitter:description" content="{entry.werbung}" />
<meta name="twitter:image"       content="https://hellmuth-soda.de/hellmuth.png" />

<meta name="description" content="{entry.werbung}" />
<meta name="robots" content="index, follow" />
```

### Field rules

- **`og:title` / `twitter:title`:** `entry.name` verbatim (e.g.
  `"Hopfen (Humulus lupulus)"`). Do not truncate — Hellmuth names include
  the Latin binomial in parentheses, which is part of the brand voice.
- **`og:description` / `twitter:description` / `<meta name=description>`:**
  `entry.werbung` (the "Verpackungsrückseite"-tone marketing line, always
  1–3 sentences, present on every entry). Strip the German guillemets
  (`»…«`) for the meta attribute — they hurt snippet rendering on social
  cards. Truncate to 200 chars hard, ending at the last sentence boundary
  before the cut, to keep under the OG 300-char soft cap.
- Do not use `entry.pointe` — field does not exist on the substance
  schema (verified against the schema comment at the top of
  `substances.js`; the term comes from `docs/pointe-proposal.md`, a
  separate proposal that has not landed in the data). `werbung` is the
  correct source.
- Do not use `entry.wirkung` — multi-paragraph diagnosis text, too long
  for OG and the wrong register for a snippet.
- **`og:image`:** reuse `/hellmuth.png` (already used as `LOGO_URL` in
  render.mjs line 25). Per-substance images don't exist; switching to
  per-entry imagery is a separate project.
- **Escaping:** use the existing `esc()` helper in render.mjs — it
  handles `&`, `<`, `>`, `"`. Apply to every interpolated string.

### Consider also (optional, matches news detail pages)

`render.mjs` line 88+ also emits `<script type="application/ld+json">` with
a `NewsArticle` schema.org block. For substance pages the right
counterpart is `@type: "Article"` or `@type: "MedicalWebPage"`. Decide
during implementation; out of scope here. If skipped, the page is still
valid SEO — OG + Twitter Card + canonical is the floor.

---

## 7. Wiring + acceptance checks

- Call site: `pipeline/run.mjs` already invokes `render.build()`. Adding
  substance enumeration inside `buildSitemapXml` means **no new entry
  point.** Run the existing pipeline; the new URLs appear automatically.
- **Smoke test after first run:**
  - `grep -c "<loc>https://hellmuth-soda.de/zutaten/[^b]" sitemap.xml`
    → 168 (counts substance URLs, excludes `/zutaten/bildgebung/`).
  - `grep -c "<loc>" sitemap.xml` → 256 (today's 88 − 0 removed + 168
    substances + 0 bildgebung-articles).
  - `xmllint --noout sitemap.xml` (if available) → passes.
  - Re-run twice; output should be byte-identical for the same content
    (no time-of-day drift — `isoDate()` is date-granular per existing
    helper).
- Search Console: resubmit sitemap.xml after deploy. New URLs will only be
  crawled once the substance pages actually exist (HTTP 200 with the
  canonical/OG head from §5–§6). Until then, expect "discovered, not
  indexed" — acceptable for a one-deploy lag, not for longer.

---

## 8. Files referenced

- `/home/user/hellmuth-soda/sitemap.xml` (current output)
- `/home/user/hellmuth-soda/robots.txt`
- `/home/user/hellmuth-soda/pipeline/render.mjs` (lines 27–35
  `STATIC_PAGES`, 132–154 `buildSitemapXml`, 285/352 canonical pattern,
  87–96 `seoHead`)
- `/home/user/hellmuth-soda/pipeline/run.mjs` (entry point — no edit)
- `/home/user/hellmuth-soda/zutaten/substances.js` (168 entries, schema
  comment in header)
- `/home/user/hellmuth-soda/index.html` (canonical reference example)
- `/home/user/hellmuth-soda/zutaten/bildgebung/` (article subfolders not
  yet present — generator must enumerate dynamically)
