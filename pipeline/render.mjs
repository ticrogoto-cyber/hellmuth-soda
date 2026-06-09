// Persistenz + Build: schreibt kanonische Markdown-Dateien mit Frontmatter,
// generiert statische Detailseiten (echte URLs + Pflicht-Backlink) und die
// von Übersicht + Startseite gelesene news/data.js.
//
// Quelle der Wahrheit sind die Markdown-Dateien unter content/news/<rubrik>/.
// data.js und die Detailseiten werden bei jedem Lauf daraus neu erzeugt.

import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { slug, isoDate } from './lib/util.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const CONTENT = join(ROOT, 'content', 'news');
const NEWS = join(ROOT, 'news');

const RUBRIKEN = ['hellmuth', 'science'];
const RUBRIK_LABEL = { hellmuth: 'HELLMUTH', science: 'Forschung' };
const MAX_PER_RUBRIK = 200;

// SEO/Feeds: kanonische Site-Basis. Muss zur CNAME passen.
const SITE = 'https://hellmuth-soda.de';
const SITE_NAME = 'Hellmuth';
const LOGO_URL = `${SITE}/hellmuth.png`;
// Statische, indexierbare Seiten (ohne /news/, ohne noindex-Seiten wie Impressum).
const STATIC_PAGES = [
  { path: '/', changefreq: 'daily', priority: '1.0' },
  { path: '/hellmuth/', changefreq: 'monthly', priority: '0.7' },
  { path: '/quiz/', changefreq: 'monthly', priority: '0.8' },
  { path: '/klarheitskarten/', changefreq: 'weekly', priority: '0.9' },
  { path: '/vokabular/', changefreq: 'monthly', priority: '0.8' },
];

// Designvariante der generierten Detailseiten:
//   mono = Sucht-Mythen (S/W, Printvetica/Fournier)  [Default, dieses Repo]
//   soda = Hellmuth Botanical Soda (Creme/Gold, Cormorant/Inter)
const NEWS_THEME = process.env.NEWS_THEME || 'mono';

const esc = (s) =>
  String(s || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

// ---- Lesezeit (200 Wörter/Minute) -----------------------------------------

const WORDS_PER_MIN = 200;
export function readingMinutes(body) {
  const words = String(body || '').trim().split(/\s+/).filter(Boolean).length;
  return Math.round(words / WORDS_PER_MIN);
}
export function readingLabel(min) {
  return min < 1 ? 'unter 1 Min.' : `${min} Min.`;
}

// ---- SEO: Meta-Tags, Open Graph, JSON-LD pro Detailseite ------------------

const newsUrl = (rec) => `${SITE}/news/${rec.rubrik}/${rec.slug}/`;

// Robots + Open Graph + Schema.org-NewsArticle. Wird in den <head> beider
// Detail-Templates direkt nach dem Canonical-Link eingehängt.
function seoHead(rec) {
  const url = newsUrl(rec);
  const published = rec.created || rec.date;
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: rec.title,
    description: rec.lead,
    datePublished: published,
    dateModified: published,
    articleSection: RUBRIK_LABEL[rec.rubrik] || rec.rubrik,
    author: { '@type': 'Organization', name: SITE_NAME, url: `${SITE}/` },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: { '@type': 'ImageObject', url: LOGO_URL },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  };
  // </script> und < in JSON-LD neutralisieren, damit das Skript nicht bricht.
  const ldJson = JSON.stringify(ld, null, 2).replace(/</g, '\\u003c');
  return `  <meta name="robots" content="index, follow" />
  <meta property="og:type" content="article" />
  <meta property="og:title" content="${esc(rec.title)}" />
  <meta property="og:description" content="${esc(rec.lead)}" />
  <meta property="og:url" content="${esc(url)}" />
  <meta property="og:site_name" content="${SITE_NAME}" />
  <link rel="alternate" type="application/rss+xml" title="${SITE_NAME} News — ${esc(RUBRIK_LABEL[rec.rubrik] || rec.rubrik)}" href="${SITE}/news/${esc(rec.rubrik)}/feed.xml" />
  <script type="application/ld+json">
${ldJson}
  </script>`;
}

// ---- RSS 2.0 Feeds --------------------------------------------------------

function rssItem(rec) {
  const url = newsUrl(rec);
  const pub = new Date(rec.created || rec.date).toUTCString();
  return `    <item>
      <title>${esc(rec.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pub}</pubDate>
      <category>${esc(RUBRIK_LABEL[rec.rubrik] || rec.rubrik)}</category>
      <description>${esc(rec.lead)}</description>
    </item>`;
}

function rssFeed({ title, feedUrl, link, description, items }) {
  const now = new Date().toUTCString();
  const body = items.map(rssItem).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(title)}</title>
    <link>${link}</link>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
    <description>${esc(description)}</description>
    <language>de</language>
    <lastBuildDate>${now}</lastBuildDate>
${body}
  </channel>
</rss>
`;
}

// ---- Sitemap (statische Seiten erhalten, News-URLs auffrischen) -----------

function buildSitemapXml(all) {
  const path = join(ROOT, 'sitemap.xml');
  // Vorhandene statische <url>-Blöcke (alles ohne /news/) unverändert übernehmen,
  // damit handgepflegte Einträge nicht verloren gehen.
  let kept = null;
  try {
    const existing = readFileSync(path, 'utf8');
    kept = (existing.match(/<url>[\s\S]*?<\/url>/g) || []).filter((b) => !b.includes('/news/'));
  } catch {
    kept = null;
  }
  if (!kept || !kept.length) {
    // Fallback: statische Seiten aus der Konstante erzeugen.
    const today = isoDate();
    kept = STATIC_PAGES.map(
      (p) =>
        `<url>\n    <loc>${SITE}${p.path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority}</priority>\n  </url>`
    );
  }
  const newsBlocks = [];
  for (const rubrik of RUBRIKEN) {
    for (const rec of all[rubrik]) {
      const lastmod = String(rec.created || rec.date).slice(0, 10);
      newsBlocks.push(
        `<url>\n    <loc>${newsUrl(rec)}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.6</priority>\n  </url>`
      );
    }
  }
  const all2 = [...kept, ...newsBlocks].map((b) => '  ' + b).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${all2}\n</urlset>\n`;
}

// ---- Frontmatter (selbst-konsistentes JSON-pro-Zeile-Format) --------------

const FM_KEYS = ['title', 'date', 'created', 'slug', 'rubrik', 'source_url', 'source_name', 'lead', 'doi', 'preprint', 'press_review', 'relevance'];

function serialize(rec) {
  const lines = ['---'];
  for (const k of FM_KEYS) lines.push(`${k}: ${JSON.stringify(rec[k] ?? null)}`);
  lines.push('---', '', rec.body || '', '');
  return lines.join('\n');
}

function parse(md) {
  const text = String(md);
  if (!text.startsWith('---')) return null;
  const end = text.indexOf('\n---', 3);
  if (end === -1) return null;
  const head = text.slice(3, end).trim().split(/\r?\n/);
  const body = text.slice(end + 4).replace(/^\s*\n/, '').trimEnd();
  const rec = { body };
  for (const line of head) {
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    try {
      rec[key] = JSON.parse(line.slice(idx + 1).trim());
    } catch {
      rec[key] = line.slice(idx + 1).trim();
    }
  }
  return rec;
}

// ---- Schreiben eines Items ------------------------------------------------

/**
 * @returns {object} der geschriebene Datensatz
 */
export function writeItem({ rubrik, title, lead, body, sourceUrl, sourceName, doi = null, preprint = false, pressReview = false, relevance = null, date }) {
  const d = date || isoDate();
  const s = slug(title) || slug(sourceName + '-' + d);
  const rec = {
    title,
    date: d,
    created: new Date().toISOString(),
    slug: s,
    rubrik,
    source_url: sourceUrl,
    source_name: sourceName,
    lead,
    doi,
    preprint: !!preprint,
    press_review: !!pressReview,
    relevance,
    body,
  };
  const dir = join(CONTENT, rubrik);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, `${d}-${s}.md`), serialize(rec), 'utf8');
  return rec;
}

// ---- Build: data.js + Detailseiten ----------------------------------------

function readAll() {
  const out = { hellmuth: [], science: [] };
  for (const rubrik of RUBRIKEN) {
    const dir = join(CONTENT, rubrik);
    if (!existsSync(dir)) continue;
    for (const f of readdirSync(dir)) {
      if (!f.endsWith('.md')) continue;
      const rec = parse(readFileSync(join(dir, f), 'utf8'));
      if (rec && rec.title) out[rubrik].push(rec);
    }
    out[rubrik].sort(
      (a, b) =>
        String(b.created || b.date).localeCompare(String(a.created || a.date)) ||
        String(b.slug).localeCompare(String(a.slug))
    );
    out[rubrik] = out[rubrik].slice(0, MAX_PER_RUBRIK);
  }
  return out;
}

// Prev/Next-Navigation. nav = { prev: {href,title}|null, next: {href,title}|null }.
// Vorheriger = älterer Artikel (links), Nächster = neuerer Artikel (rechts).
function prevNextHtml(nav) {
  if (!nav || (!nav.prev && !nav.next)) return '';
  const prev = nav.prev
    ? `<a class="news-pn news-pn-prev" href="${esc(nav.prev.href)}"><span class="news-pn-dir">← Vorheriger</span><span class="news-pn-title">${esc(nav.prev.title)}</span></a>`
    : '<span class="news-pn news-pn-empty"></span>';
  const next = nav.next
    ? `<a class="news-pn news-pn-next" href="${esc(nav.next.href)}"><span class="news-pn-dir">Nächster →</span><span class="news-pn-title">${esc(nav.next.title)}</span></a>`
    : '<span class="news-pn news-pn-empty"></span>';
  return `\n      <nav class="news-prevnext" aria-label="Weitere Meldungen">\n        ${prev}\n        ${next}\n      </nav>`;
}

// Actions-Bar (Like, Teilen, Aufrufe) auf Detailseiten. Statisches Markup;
// counters.js (Worker-Client) + detail.js (Interaktion) hängen sich an der
// data-news-id an. data-news-id = rubrik/slug — derselbe Identifier landet im KV.
function actionsBarHtml(rec) {
  const id = `${rec.rubrik}/${rec.slug}`;
  const HEART =
    '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z"/></svg>';
  const SHARE =
    '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z"/></svg>';
  const EYE =
    '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>';
  return `\n      <div class="news-actions" data-news-id="${esc(id)}">
        <button type="button" class="news-act news-like" aria-pressed="false" aria-label="Gefällt mir"><span class="news-like-icon">${HEART}</span><span class="news-like-count"></span></button>
        <button type="button" class="news-act news-share" aria-label="Teilen">${SHARE}<span class="news-share-label">Teilen</span></button>
        <span class="news-act news-views" hidden>${EYE}<span class="news-views-count"></span> Aufrufe</span>
      </div>`;
}

function detailHtmlMono(rec, nav) {
  const backlink = rec.doi ? rec.source_url : rec.source_url;
  const bodyHtml = String(rec.body || '')
    .split(/\n{2,}/)
    .map((p) => `<p>${esc(p)}</p>`)
    .join('\n        ');
  const preprintTag = rec.preprint ? '<span class="news-tag">Preprint, nicht peer-reviewed</span>' : '';
  const readTime = readingLabel(readingMinutes(rec.body));
  return `<!doctype html>
<html lang="de">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${esc(rec.title)} — News — Mut zur Klarheit</title>
  <meta name="description" content="${esc(rec.lead)}" />
  <link rel="canonical" href="${SITE}/news/${esc(rec.rubrik)}/${esc(rec.slug)}/" />
  <link rel="icon" href="/favicon.ico?v=9" sizes="any" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png?v=9" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png?v=9" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=9" />
${seoHead(rec)}
  <link rel="stylesheet" href="../../../styles.css?v=7" />
  <link rel="stylesheet" href="../../news.css" />
</head>
<body>
  <header class="top">
    <div class="title"><span>News</span><em data-tagline></em></div>
    <a href="../../../" class="brand" aria-label="Hellmuth — Startseite"><img src="../../../hellmuth.png" alt="Hellmuth" /></a>
    <form class="top-search" role="search" autocomplete="off">
      <svg class="top-search-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"/></svg>
      <input type="search" placeholder="Suchen" aria-label="Site-Suche" />
      <ul class="top-search-results" hidden></ul>
    </form>
    <button class="menu-toggle" aria-label="Menü" aria-expanded="false"><span></span><span></span><span></span></button>
    <nav class="menu" aria-hidden="true">
      <a href="../../../" class="is-active">Start</a>
      <a href="../../../quiz/">Quiz</a>
      <a href="../../../vokabular/">Vokabular</a>
      <a href="../../../klarheitskarten/">Klarheitskarten</a>
      <a href="https://www.redbubble.com/de/people/kokos-u-zitrone/shop" target="_blank" rel="noopener noreferrer">Plakate<svg class="ext-mark" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:.78em;height:.78em;margin-left:.28em;vertical-align:-0.02em"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg></a>
      <a href="../../../hellmuth/">Über</a>
    </nav>
  </header>

  <main class="news-detail">
    <article>
      <p class="news-eyebrow">${esc(RUBRIK_LABEL[rec.rubrik] || rec.rubrik)} · ${esc(rec.date)} · ${esc(readTime)} ${preprintTag}</p>
      <h1>${esc(rec.title)}</h1>
      <p class="news-lead">${esc(rec.lead)}</p>
      <div class="news-body">
        ${bodyHtml}
      </div>
      <p class="news-source">Quelle: <a href="${esc(backlink)}" target="_blank" rel="noopener nofollow">${esc(rec.source_name)}</a>${rec.doi ? ` · DOI: <a href="${esc(rec.source_url)}" target="_blank" rel="noopener nofollow">${esc(rec.doi)}</a>` : ''}</p>${actionsBarHtml(rec)}${prevNextHtml(nav)}
      <p class="news-back"><a href="../../../">← Alle Meldungen</a></p>
    </article>
  </main>

  <footer><a href="../../../impressum/" class="footer-impressum">Impressum</a></footer>
  <script src="../../../site.js?v=6"></script>
  <script src="../../../search.js?v=1"></script>
  <script src="../../counters.js?v=1"></script>
  <script src="../../detail.js?v=1"></script>
</body>
</html>
`;
}

function detailHtmlSoda(rec, nav) {
  const bodyHtml = String(rec.body || '')
    .split(/\n{2,}/)
    .map((p) => `<p>${esc(p)}</p>`)
    .join('\n        ');
  const tags = rec.preprint ? '<span class="news-tag">Preprint</span>' : '';
  const readTime = readingLabel(readingMinutes(rec.body));
  return `<!doctype html>
<html lang="de">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${esc(rec.title)} — News — Hellmuth</title>
  <meta name="description" content="${esc(rec.lead)}" />
  <link rel="canonical" href="${SITE}/news/${esc(rec.rubrik)}/${esc(rec.slug)}/" />
  <link rel="icon" href="/favicon.ico?v=9" sizes="any" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png?v=9" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png?v=9" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=9" />
${seoHead(rec)}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="../../../styles.css" />
  <link rel="stylesheet" href="../../news.css" />
</head>
<body>
  <header class="nav">
    <a class="brand" href="../../../" aria-label="Hellmuth — Startseite">
      <span class="brand-mark">Hellmuth<sup>™</sup></span>
      <span class="brand-sub">Botanical Soda</span>
    </a>
    <nav>
      <a href="../../../#produkt">Produkt</a>
      <a href="../../../#zutaten">Zutaten</a>
      <a href="../../">News</a>
      <a href="../../../#kontakt">Kontakt</a>
    </nav>
  </header>

  <main class="news-detail">
    <article>
      <p class="news-eyebrow">${esc(RUBRIK_LABEL[rec.rubrik] || rec.rubrik)} · ${esc(rec.date)} · ${esc(readTime)} ${tags}</p>
      <h1>${esc(rec.title)}</h1>
      <p class="news-lead">${esc(rec.lead)}</p>
      <div class="news-body">
        ${bodyHtml}
      </div>
      <p class="news-source">Quelle: <a href="${esc(rec.source_url)}" target="_blank" rel="noopener nofollow">${esc(rec.source_name)}</a>${rec.doi ? ` · DOI: <a href="${esc(rec.source_url)}" target="_blank" rel="noopener nofollow">${esc(rec.doi)}</a>` : ''}</p>${actionsBarHtml(rec)}${prevNextHtml(nav)}
      <p class="news-back"><a href="../../">← Alle Meldungen</a></p>
    </article>
  </main>

  <script src="../../counters.js?v=1"></script>
  <script src="../../detail.js?v=1"></script>

  <footer class="site-foot">
    <div class="foot-inner">
      <div><p class="foot-mark">Hellmuth<sup>™</sup> · Botanical Soda</p></div>
      <div><p><a href="../../">News</a></p></div>
    </div>
  </footer>
</body>
</html>
`;
}

const detailHtml = (rec, nav) => (NEWS_THEME === 'soda' ? detailHtmlSoda(rec, nav) : detailHtmlMono(rec, nav));

function dataJs(all) {
  // Für Frontend: schlanke Records (ohne vollständigen Body) reichen für Übersicht/Startseite.
  const trim = (rec) => ({
    title: rec.title,
    date: rec.date,
    created: rec.created || null,
    slug: rec.slug,
    rubrik: rec.rubrik,
    lead: rec.lead,
    source_name: rec.source_name,
    source_url: rec.source_url,
    preprint: !!rec.preprint,
    press_review: !!rec.press_review,
    minutes: readingMinutes(rec.body),
    href: `/news/${rec.rubrik}/${rec.slug}/`,
  });
  const payload = {
    generated: new Date().toISOString(),
    hellmuth: all.hellmuth.map(trim),
    science: all.science.map(trim),
  };
  return 'window.NEWS_DATA =\n' + JSON.stringify(payload, null, 2) + '\n;\n';
}

/**
 * Baut data.js und alle Detailseiten aus dem Markdown-Bestand neu.
 * @returns {{counts:{hellmuth:number, science:number}}}
 */
export function build() {
  const all = readAll();
  for (const rubrik of RUBRIKEN) {
    const list = all[rubrik]; // neuestes zuerst
    for (let i = 0; i < list.length; i++) {
      const rec = list[i];
      const newer = list[i - 1]; // chronologisch nächster (neuer)
      const older = list[i + 1]; // chronologisch vorheriger (älter)
      // Nachbarn innerhalb derselben Rubrik; Detailseiten liegen unter
      // ../<slug>/ relativ zueinander.
      const nav = {
        prev: older ? { href: `../${older.slug}/`, title: older.title } : null,
        next: newer ? { href: `../${newer.slug}/`, title: newer.title } : null,
      };
      const dir = join(NEWS, rubrik, rec.slug);
      mkdirSync(dir, { recursive: true });
      writeFileSync(join(dir, 'index.html'), detailHtml(rec, nav), 'utf8');
    }
  }
  mkdirSync(NEWS, { recursive: true });
  writeFileSync(join(NEWS, 'data.js'), dataJs(all), 'utf8');

  // RSS-Feeds: kombiniert + je Rubrik. Chronologisch, neuestes zuerst.
  const combined = [...all.hellmuth, ...all.science].sort(
    (a, b) =>
      String(b.created || b.date).localeCompare(String(a.created || a.date)) ||
      String(b.slug).localeCompare(String(a.slug))
  );
  writeFileSync(
    join(NEWS, 'feed.xml'),
    rssFeed({
      title: `${SITE_NAME} News`,
      feedUrl: `${SITE}/news/feed.xml`,
      link: `${SITE}/`,
      description: 'Klartext aus Forschung und Getränkewelt.',
      items: combined,
    }),
    'utf8'
  );
  for (const rubrik of RUBRIKEN) {
    mkdirSync(join(NEWS, rubrik), { recursive: true });
    writeFileSync(
      join(NEWS, rubrik, 'feed.xml'),
      rssFeed({
        title: `${SITE_NAME} News — ${RUBRIK_LABEL[rubrik] || rubrik}`,
        feedUrl: `${SITE}/news/${rubrik}/feed.xml`,
        link: `${SITE}/`,
        description: `${RUBRIK_LABEL[rubrik] || rubrik} — Kurzmeldungen in eigenen Worten.`,
        items: all[rubrik],
      }),
      'utf8'
    );
  }

  // Sitemap im Root aktualisieren (statische Seiten erhalten, News auffrischen).
  writeFileSync(join(ROOT, 'sitemap.xml'), buildSitemapXml(all), 'utf8');

  return { counts: { hellmuth: all.hellmuth.length, science: all.science.length } };
}
