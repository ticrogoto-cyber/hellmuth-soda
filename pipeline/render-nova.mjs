// Persistenz + Build für die Nova-Pipeline (Kriminologische Chronik).
// Schreibt Markdown-Dateien unter content/nova/, generiert statische
// Detailseiten unter /neue-dimension-gewalt/{slug}/, die Datendatei
// neue-dimension-gewalt/data.js, RSS-Feed und Sitemap-Einträge.

import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { slug, isoDate } from './lib/util.mjs';
import { rebuildSitemap } from './render.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const CONTENT = join(ROOT, 'content', 'nova');
const PAGE_DIR = join(ROOT, 'neue-dimension-gewalt');

const MAX_ITEMS = 500;

const SITE = 'https://hellmuth-soda.de';
const SITE_NAME = 'Hellmuth';
const LOGO_URL = `${SITE}/hellmuth.png`;

const esc = (s) =>
  String(s || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const WORDS_PER_MIN = 200;
function readingMinutes(body) {
  const text = String(body || '').replace(/<[\s\S]*?>/g, ' ');
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.round(words / WORDS_PER_MIN);
}
function readingLabel(min) {
  return min < 1 ? 'unter 1 Min.' : `${min} Min.`;
}

const FM_KEYS = ['title', 'date', 'created', 'slug', 'rubrik', 'source_url', 'source_name', 'lead', 'relevance', 'ort', 'press_review'];

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

const newsUrl = (rec) => `${SITE}/neue-dimension-gewalt/${rec.slug}/`;

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
    articleSection: 'Kriminologische Nova',
    author: { '@type': 'Organization', name: SITE_NAME, url: `${SITE}/` },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: { '@type': 'ImageObject', url: LOGO_URL },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  };
  const ldJson = JSON.stringify(ld, null, 2).replace(/</g, '\\u003c');
  return `  <meta name="robots" content="index, follow" />
  <meta property="og:type" content="article" />
  <meta property="og:title" content="${esc(rec.title)}" />
  <meta property="og:description" content="${esc(rec.lead)}" />
  <meta property="og:url" content="${esc(url)}" />
  <meta property="og:site_name" content="${SITE_NAME}" />
  <link rel="alternate" type="application/rss+xml" title="Kriminologische Nova" href="${SITE}/neue-dimension-gewalt/feed.xml" />
  <script type="application/ld+json">
${ldJson}
  </script>`;
}

function rssItem(rec) {
  const url = newsUrl(rec);
  const pub = new Date(rec.created || rec.date).toUTCString();
  return `    <item>
      <title>${esc(rec.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pub}</pubDate>
      <category>Kriminologische Nova</category>
      <description>${esc(rec.lead)}</description>
    </item>`;
}

function rssFeed(items) {
  const now = new Date().toUTCString();
  const body = items.map(rssItem).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Kriminologische Nova in Deutschland</title>
    <link>${SITE}/neue-dimension-gewalt/</link>
    <atom:link href="${SITE}/neue-dimension-gewalt/feed.xml" rel="self" type="application/rss+xml" />
    <description>Strukturelle Anomalien in der Gewaltkriminalität seit 2023.</description>
    <language>de</language>
    <lastBuildDate>${now}</lastBuildDate>
${body}
  </channel>
</rss>
`;
}

function prevNextHtml(nav) {
  if (!nav || (!nav.prev && !nav.next)) return '';
  const prev = nav.prev
    ? `<a class="news-pn news-pn-prev" href="${esc(nav.prev.href)}"><span class="news-pn-dir">← Vorheriger</span><span class="news-pn-title">${esc(nav.prev.title)}</span></a>`
    : '<span class="news-pn news-pn-empty"></span>';
  const next = nav.next
    ? `<a class="news-pn news-pn-next" href="${esc(nav.next.href)}"><span class="news-pn-dir">Nächster →</span><span class="news-pn-title">${esc(nav.next.title)}</span></a>`
    : '<span class="news-pn news-pn-empty"></span>';
  return `\n      <nav class="news-prevnext" aria-label="Weitere Einträge">\n        ${prev}\n        ${next}\n      </nav>`;
}

function inlineMarkdown(text) {
  return esc(text).replace(/\*([^*]+)\*/g, '<em>$1</em>');
}

function detailHtml(rec, nav) {
  const bodyHtml = String(rec.body || '')
    .split(/\n{2,}/)
    .map((p) => `<p>${inlineMarkdown(p)}</p>`)
    .join('\n        ');
  const readTime = readingLabel(readingMinutes(rec.body));
  return `<!doctype html>
<html lang="de">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${esc(rec.title)} — Kriminologische Nova — Mut zur Klarheit</title>
  <meta name="description" content="${esc(rec.lead)}" />
  <link rel="canonical" href="${SITE}/neue-dimension-gewalt/${esc(rec.slug)}/" />
  <meta name="google-site-verification" content="ar5d_npNuZhmgCXrZdy-tU5cXO58GYic5yykv7to0B0" />
  <link rel="icon" href="/favicon.ico?v=9" sizes="any" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png?v=9" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png?v=9" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=9" />
${seoHead(rec)}
  <link rel="stylesheet" href="../../styles.css?v=14" />
  <link rel="stylesheet" href="../nova.css?v=1" />
</head>
<body>
  <header class="top">
    <div class="title"><span>Kriminologische Nova</span><em data-tagline></em></div>
    <a href="../../" class="brand" aria-label="Hellmuth — Startseite"><img src="../../hellmuth.png" alt="Hellmuth" /></a>
    <form class="top-search" role="search" autocomplete="off">
      <svg class="top-search-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"/></svg>
      <input type="search" placeholder="Suchen" aria-label="Site-Suche" />
      <ul class="top-search-results" hidden></ul>
    </form>
    <button class="menu-toggle" aria-label="Menü" aria-expanded="false"><span></span><span></span><span></span></button>
    <nav class="menu" aria-hidden="true" aria-label="Hauptnavigation">
      <a href="../../">Start</a>
      <a href="../../zutaten/">Index</a>
      <a href="../../zutaten/bildgebung/">Bildgebung</a>
      <a href="https://kokos-und-zitrone.de" target="_blank" rel="noopener">Hausbesuch<svg class="ext-mark" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:.78em;height:.78em;margin-left:.28em;vertical-align:-0.02em"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg></a>
      <div class="menu-group" data-dropdown="diagnose"><button class="menu-trigger" type="button" aria-haspopup="true" aria-expanded="false">Diagnose <svg class="menu-caret" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:.78em;height:.78em;margin-left:.28em;vertical-align:-0.02em"><path d="m6 9 6 6 6-6"/></svg></button><ul class="menu-dropdown"><li><a href="../../diagnose/suchttypen/">Suchttypen</a></li><li><a href="../../quiz/">Quiz</a></li><li><a href="../../vokabular/">Vokabular</a></li><li><a href="../../klarheitskarten/">Klarheitskarten</a></li><li><a href="https://www.redbubble.com/de/people/kokos-u-zitrone/shop" target="_blank" rel="noopener noreferrer">Plakate<svg class="ext-mark" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:.78em;height:.78em;margin-left:.28em;vertical-align:-0.02em"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg></a></li></ul></div>
      <a href="../../hellmuth/">Über</a>
    </nav>
  </header>

  <main class="news-detail nova-detail">
    <article>
      <p class="news-eyebrow">Kriminologische Nova · ${esc(rec.date)}${rec.ort ? ' · ' + esc(rec.ort) : ''} · ${esc(readTime)}</p>
      <h1>${esc(rec.title)}</h1>
      <p class="news-lead">${esc(rec.lead)}</p>
      <div class="news-body">
        ${bodyHtml}
      </div>
      <hr class="nova-source-rule" />
      <p class="news-source">Quelle: <a href="${esc(rec.source_url)}" target="_blank" rel="noopener nofollow">${esc(rec.source_name)}</a></p>${prevNextHtml(nav)}
      <p class="news-back"><a href="../">← Alle Einträge</a></p>
    </article>
  </main>

  <footer><a href="../../impressum/" class="footer-impressum">Impressum</a></footer>
  <script src="../../site.js?v=7"></script>
  <script src="../../search.js?v=3"></script>
</body>
</html>
`;
}

function readAll() {
  const out = [];
  if (!existsSync(CONTENT)) return out;
  for (const f of readdirSync(CONTENT)) {
    if (!f.endsWith('.md')) continue;
    const rec = parse(readFileSync(join(CONTENT, f), 'utf8'));
    if (rec && rec.title) out.push(rec);
  }
  out.sort(
    (a, b) =>
      String(b.date || b.created).localeCompare(String(a.date || a.created)) ||
      String(b.slug).localeCompare(String(a.slug))
  );
  return out.slice(0, MAX_ITEMS);
}

export function writeItem({ title, lead, body, sourceUrl, sourceName, relevance = null, date, ort = null, pressReview = false }) {
  const d = date || isoDate();
  const s = slug(title) || slug(sourceName + '-' + d);
  const rec = {
    title,
    date: d,
    created: new Date().toISOString(),
    slug: s,
    rubrik: 'nova',
    source_url: sourceUrl,
    source_name: sourceName,
    lead,
    relevance,
    ort,
    press_review: !!pressReview,
    body,
  };
  mkdirSync(CONTENT, { recursive: true });
  writeFileSync(join(CONTENT, `${d}-${s}.md`), serialize(rec), 'utf8');
  return rec;
}

function dataJs(all) {
  const trim = (rec) => ({
    title: rec.title,
    date: rec.date,
    created: rec.created || null,
    slug: rec.slug,
    lead: rec.lead,
    source_name: rec.source_name,
    source_url: rec.source_url,
    ort: rec.ort || null,
    relevance: rec.relevance || null,
    minutes: readingMinutes(rec.body),
    href: `/neue-dimension-gewalt/${rec.slug}/`,
  });
  const payload = {
    generated: new Date().toISOString(),
    items: all.map(trim),
  };
  return 'window.NOVA_DATA =\n' + JSON.stringify(payload, null, 2) + '\n;\n';
}

export function build() {
  const all = readAll();

  for (let i = 0; i < all.length; i++) {
    const rec = all[i];
    const newer = all[i - 1];
    const older = all[i + 1];
    const nav = {
      prev: older ? { href: `../${older.slug}/`, title: older.title } : null,
      next: newer ? { href: `../${newer.slug}/`, title: newer.title } : null,
    };
    const dir = join(PAGE_DIR, rec.slug);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'index.html'), detailHtml(rec, nav), 'utf8');
  }

  mkdirSync(PAGE_DIR, { recursive: true });
  writeFileSync(join(PAGE_DIR, 'data.js'), dataJs(all), 'utf8');
  writeFileSync(join(PAGE_DIR, 'feed.xml'), rssFeed(all), 'utf8');

  rebuildSitemap();

  return { count: all.length };
}
