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
const RUBRIK_LABEL = { hellmuth: 'HELLMUTH', science: 'Wissenschaft' };
const MAX_PER_RUBRIK = 200;

const esc = (s) =>
  String(s || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

// ---- Frontmatter (selbst-konsistentes JSON-pro-Zeile-Format) --------------

const FM_KEYS = ['title', 'date', 'slug', 'rubrik', 'source_url', 'source_name', 'lead', 'doi', 'preprint', 'relevance'];

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
export function writeItem({ rubrik, title, lead, body, sourceUrl, sourceName, doi = null, preprint = false, relevance = null, date }) {
  const d = date || isoDate();
  const s = slug(title) || slug(sourceName + '-' + d);
  const rec = {
    title,
    date: d,
    slug: s,
    rubrik,
    source_url: sourceUrl,
    source_name: sourceName,
    lead,
    doi,
    preprint: !!preprint,
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
    out[rubrik].sort((a, b) => String(b.date).localeCompare(String(a.date)) || String(b.slug).localeCompare(String(a.slug)));
    out[rubrik] = out[rubrik].slice(0, MAX_PER_RUBRIK);
  }
  return out;
}

function detailHtml(rec) {
  const backlink = rec.doi ? rec.source_url : rec.source_url;
  const bodyHtml = String(rec.body || '')
    .split(/\n{2,}/)
    .map((p) => `<p>${esc(p)}</p>`)
    .join('\n        ');
  const preprintTag = rec.preprint ? '<span class="news-tag">Preprint, nicht peer-reviewed</span>' : '';
  return `<!doctype html>
<html lang="de">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${esc(rec.title)} — News — Mut zur Klarheit</title>
  <meta name="description" content="${esc(rec.lead)}" />
  <link rel="canonical" href="https://hellmuth-soda.de/news/${esc(rec.rubrik)}/${esc(rec.slug)}/" />
  <link rel="stylesheet" href="../../../styles.css" />
  <link rel="stylesheet" href="../../news.css" />
</head>
<body>
  <header class="top">
    <div class="title"><span>News</span><em data-tagline></em></div>
    <a href="../../../" class="brand" aria-label="Startseite"><img src="../../../mut-zur-klarheit4.png" alt="Mut zur Klarheit" /></a>
    <button class="menu-toggle" aria-label="Menü" aria-expanded="false"><span></span><span></span><span></span></button>
    <nav class="menu" aria-hidden="true">
      <a href="../../../">Quiz</a>
      <a href="../../../vokabular/">Vokabular</a>
      <a href="../../" class="is-active">News</a>
      <a href="https://1du1ph-j0.myshopify.com" target="_blank" rel="noopener">Shop</a>
      <a href="https://kokos-und-zitrone.de" target="_blank" rel="noopener">Sanatorium</a>
    </nav>
  </header>

  <main class="news-detail">
    <article>
      <p class="news-eyebrow">${esc(RUBRIK_LABEL[rec.rubrik] || rec.rubrik)} · ${esc(rec.date)} ${preprintTag}</p>
      <h1>${esc(rec.title)}</h1>
      <p class="news-lead">${esc(rec.lead)}</p>
      <div class="news-body">
        ${bodyHtml}
      </div>
      <p class="news-source">Quelle: <a href="${esc(backlink)}" target="_blank" rel="noopener nofollow">${esc(rec.source_name)}</a>${rec.doi ? ` · DOI: <a href="${esc(rec.source_url)}" target="_blank" rel="noopener nofollow">${esc(rec.doi)}</a>` : ''}</p>
      <p class="news-back"><a href="../../">← Alle Meldungen</a></p>
    </article>
  </main>

  <footer><a href="../../../impressum/" class="footer-impressum">Impressum</a></footer>
  <script src="../../../site.js"></script>
</body>
</html>
`;
}

function dataJs(all) {
  // Für Frontend: schlanke Records (ohne vollständigen Body) reichen für Übersicht/Startseite.
  const trim = (rec) => ({
    title: rec.title,
    date: rec.date,
    slug: rec.slug,
    rubrik: rec.rubrik,
    lead: rec.lead,
    source_name: rec.source_name,
    source_url: rec.source_url,
    preprint: !!rec.preprint,
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
    for (const rec of all[rubrik]) {
      const dir = join(NEWS, rubrik, rec.slug);
      mkdirSync(dir, { recursive: true });
      writeFileSync(join(dir, 'index.html'), detailHtml(rec), 'utf8');
    }
  }
  mkdirSync(NEWS, { recursive: true });
  writeFileSync(join(NEWS, 'data.js'), dataJs(all), 'utf8');
  return { counts: { hellmuth: all.hellmuth.length, science: all.science.length } };
}
