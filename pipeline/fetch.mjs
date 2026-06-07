// Fetch-Adapter pro Quellentyp. Liefert je Quelle normalisierte Items:
//   { title, summary, url, publishedAt, lang, sourceName, isPreprint }
// und Metadaten für den Feed-Report (mode, feedUrl, status, error).
//
// Reihenfolge laut Raster: RSS/Atom -> sitemap.xml -> konservatives Scraping.
// Vor jedem Zugriff wird robots.txt respektiert.

import Parser from 'rss-parser';
import { isAllowed, USER_AGENT } from './lib/robots.mjs';
import { stripHtml, clip, sleep } from './lib/util.mjs';
import { log } from './lib/log.mjs';

const MAX_PER_SOURCE = Number(process.env.MAX_PER_SOURCE || 15);
const NCBI_API_KEY = process.env.NCBI_API_KEY || '';
const NCBI_EMAIL = process.env.NCBI_EMAIL || 'hallo@hellmuth-soda.de';

// Browser-Fallback-UA für Quellen, die den Bot-UA mit 4xx blocken.
const BROWSER_UA =
  process.env.NEWS_BROWSER_UA ||
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Safari/605.1.15';

// Statuscodes, bei denen ein zweiter Versuch mit Browser-UA sinnvoll ist.
const UA_RETRY = new Set([401, 403, 404, 406, 429, 451]);

const parser = new Parser({ timeout: 20000 });

// Holt Text mit Bot-UA; bei typischen Bot-Sperren ein Retry mit Browser-UA.
const httpGet = async (url, accept = 'text/html,application/xhtml+xml,*/*') => {
  const tryOnce = (ua) =>
    fetch(url, {
      headers: { 'User-Agent': ua, Accept: accept },
      redirect: 'follow',
      signal: AbortSignal.timeout(20000),
    });
  let res = await tryOnce(USER_AGENT);
  if (!res.ok && UA_RETRY.has(res.status)) {
    res = await tryOnce(BROWSER_UA);
  }
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.text();
};

const normItem = (source, { title, summary, url, publishedAt }) => ({
  title: stripHtml(title),
  // Bei Paywall-Pressespiegel nur den frei zugänglichen Anriss knapp halten.
  summary: clip(stripHtml(summary), source.headline_only ? 400 : 1200),
  url: String(url || '').trim(),
  publishedAt: publishedAt || null,
  lang: source.lang || 'en',
  sourceName: source.name,
  isPreprint: !!source.preprint,
  headlineOnly: !!source.headline_only,
});

// ---- RSS / Atom -----------------------------------------------------------

const rssCandidates = (source) => {
  const c = [];
  if (source.feed) c.push(source.feed);
  const base = String(source.url || '').replace(/\/+$/, '');
  c.push(base + '/feed/', base + '/rss', base + '/feed', base + '/rss.xml', base + '/atom.xml');
  return [...new Set(c)];
};

const RSS_ACCEPT = 'application/rss+xml, application/atom+xml, application/xml, text/xml, */*';

// Feed-Discovery aus dem HTML der Hauptseite: <link rel="alternate" type="application/rss+xml">.
const discoverFeeds = async (sourceUrl) => {
  try {
    const html = await httpGet(sourceUrl, 'text/html,application/xhtml+xml,*/*');
    const out = [];
    const re = /<link\b[^>]*type=["']application\/(?:rss|atom)\+xml["'][^>]*>/gi;
    let m;
    while ((m = re.exec(html)) && out.length < 8) {
      const href = (m[0].match(/href=["']([^"']+)["']/i) || [])[1];
      if (!href) continue;
      try {
        out.push(new URL(href, sourceUrl).toString());
      } catch {}
    }
    return [...new Set(out)];
  } catch {
    return [];
  }
};

const parseFeed = async (feedUrl) => {
  const xml = await httpGet(feedUrl, RSS_ACCEPT);
  return parser.parseString(xml);
};

const rssItems = (source, feed) =>
  (feed.items || []).slice(0, MAX_PER_SOURCE).map((it) =>
    normItem(source, {
      title: it.title,
      summary: it.contentSnippet || it.content || it.summary || '',
      url: it.link || it.guid,
      publishedAt: it.isoDate || it.pubDate || null,
    })
  );

async function fetchRss(source) {
  let lastErr = null;
  // 1) Geratene Kandidaten (inkl. konfigurierter feed-URL), mit UA-Fallback in httpGet.
  for (const feedUrl of rssCandidates(source)) {
    try {
      if (!(await isAllowed(feedUrl))) {
        lastErr = new Error('robots-disallow');
        continue;
      }
      const items = rssItems(source, await parseFeed(feedUrl));
      if (items.length) return { items, mode: 'rss', feedUrl, status: 'ok' };
      lastErr = new Error('feed leer');
    } catch (e) {
      lastErr = e;
    }
  }
  // 2) Echte Discovery aus der Hauptseite, falls die Kandidaten scheitern.
  for (const feedUrl of await discoverFeeds(source.url)) {
    try {
      if (!(await isAllowed(feedUrl))) continue;
      const items = rssItems(source, await parseFeed(feedUrl));
      if (items.length) return { items, mode: 'rss-discovered', feedUrl, status: 'ok' };
    } catch (e) {
      lastErr = e;
    }
  }
  return { items: [], mode: 'rss', feedUrl: source.feed || null, status: 'missing', error: lastErr?.message };
}

// ---- PubMed E-Utilities ---------------------------------------------------

const eutils = (path, params) => {
  const u = new URL('https://eutils.ncbi.nlm.nih.gov/entrez/eutils/' + path);
  u.searchParams.set('tool', 'hellmuth-news');
  u.searchParams.set('email', NCBI_EMAIL);
  if (NCBI_API_KEY) u.searchParams.set('api_key', NCBI_API_KEY);
  for (const [k, v] of Object.entries(params)) u.searchParams.set(k, v);
  return u.toString();
};

async function fetchPubmed(source) {
  const queries = source.queries || [];
  const perQuery = Math.max(1, Math.floor(MAX_PER_SOURCE / Math.max(1, queries.length)));
  const items = [];
  try {
    for (const q of queries) {
      const searchUrl = eutils('esearch.fcgi', {
        db: 'pubmed',
        term: q,
        retmax: String(perQuery),
        retmode: 'json',
        sort: 'date',
      });
      const search = JSON.parse(await httpGet(searchUrl, 'application/json'));
      const ids = search?.esearchresult?.idlist || [];
      if (!ids.length) {
        await sleep(NCBI_API_KEY ? 120 : 400);
        continue;
      }
      const sumUrl = eutils('esummary.fcgi', { db: 'pubmed', id: ids.join(','), retmode: 'json' });
      const sum = JSON.parse(await httpGet(sumUrl, 'application/json'));
      const result = sum?.result || {};
      for (const id of result.uids || ids) {
        const doc = result[id];
        if (!doc) continue;
        const doi = (doc.articleids || []).find((a) => a.idtype === 'doi')?.value;
        const journal = doc.fulljournalname || doc.source || '';
        items.push(
          normItem(source, {
            title: doc.title,
            summary: `${journal}${doc.pubdate ? ', ' + doc.pubdate : ''}${doi ? ', DOI ' + doi : ''}`,
            url: doi ? `https://doi.org/${doi}` : `https://pubmed.ncbi.nlm.nih.gov/${id}/`,
            publishedAt: doc.sortpubdate || doc.pubdate || null,
          })
        );
      }
      await sleep(NCBI_API_KEY ? 120 : 400); // NCBI-Ratelimit höflich einhalten
    }
    return { items: items.slice(0, MAX_PER_SOURCE), mode: 'pubmed', feedUrl: null, status: items.length ? 'ok' : 'missing' };
  } catch (e) {
    return { items, mode: 'pubmed', feedUrl: null, status: 'error', error: e.message };
  }
}

// ---- Sitemap --------------------------------------------------------------

const sitemapCandidates = (source) => {
  const base = String(source.url || '');
  let origin = base;
  try {
    origin = new URL(base).origin;
  } catch {}
  return [...new Set([origin + '/sitemap.xml', origin + '/sitemap_index.xml', base.replace(/\/+$/, '') + '/sitemap.xml'])];
};

const extractLocs = (xml) => {
  const out = [];
  const re = /<url>([\s\S]*?)<\/url>/gi;
  let m;
  while ((m = re.exec(xml)) && out.length < 200) {
    const block = m[1];
    const loc = (block.match(/<loc>([\s\S]*?)<\/loc>/i) || [])[1];
    const lastmod = (block.match(/<lastmod>([\s\S]*?)<\/lastmod>/i) || [])[1];
    if (loc) out.push({ url: stripHtml(loc), lastmod: lastmod ? stripHtml(lastmod) : null });
  }
  return out;
};

const pageMeta = async (url) => {
  const html = await httpGet(url);
  const title =
    (html.match(/<meta[^>]+property=["']og:title["'][^>]*content=["']([^"']+)["']/i) || [])[1] ||
    (html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1] ||
    '';
  const desc =
    (html.match(/<meta[^>]+name=["']description["'][^>]*content=["']([^"']+)["']/i) || [])[1] ||
    (html.match(/<meta[^>]+property=["']og:description["'][^>]*content=["']([^"']+)["']/i) || [])[1] ||
    '';
  return { title: stripHtml(title), desc: stripHtml(desc) };
};

async function fetchSitemap(source) {
  let lastErr = null;
  for (const sm of sitemapCandidates(source)) {
    try {
      if (!(await isAllowed(sm))) {
        lastErr = new Error('robots-disallow');
        continue;
      }
      const xml = await httpGet(sm, 'application/xml,text/xml,*/*');
      let locs = extractLocs(xml);
      // Nach lastmod sortieren (neueste zuerst), auf Quell-Pfad eingrenzen.
      let prefix = '';
      try {
        prefix = new URL(source.url).pathname.replace(/\/+$/, '');
      } catch {}
      if (prefix && prefix !== '') locs = locs.filter((l) => l.url.includes(prefix));
      locs.sort((a, b) => String(b.lastmod || '').localeCompare(String(a.lastmod || '')));
      locs = locs.slice(0, Math.min(MAX_PER_SOURCE, 8));
      const items = [];
      for (const l of locs) {
        if (!(await isAllowed(l.url))) continue;
        try {
          const meta = await pageMeta(l.url);
          if (!meta.title) continue;
          items.push(normItem(source, { title: meta.title, summary: meta.desc, url: l.url, publishedAt: l.lastmod }));
          await sleep(800); // konservatives Intervall
        } catch (e) {
          log.warn(`sitemap page fail ${l.url}: ${e.message}`);
        }
      }
      if (items.length) return { items, mode: 'sitemap', feedUrl: sm, status: 'ok' };
      lastErr = new Error('sitemap ohne nutzbare Seiten');
    } catch (e) {
      lastErr = e;
    }
  }
  return { items: [], mode: 'sitemap', feedUrl: null, status: 'missing', error: lastErr?.message };
}

// ---- Konservatives Scraping (letzter Ausweg) ------------------------------

async function fetchScrape(source) {
  try {
    if (!(await isAllowed(source.url))) {
      return { items: [], mode: 'scrape', feedUrl: null, status: 'robots-disallow' };
    }
    const html = await httpGet(source.url);
    const seen = new Set();
    const items = [];
    const re = /<a[^>]+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
    let m;
    while ((m = re.exec(html)) && items.length < MAX_PER_SOURCE) {
      let href = m[1];
      const text = stripHtml(m[2]);
      if (!href || text.length < 35) continue; // nur überschriftartige Links
      try {
        href = new URL(href, source.url).toString();
      } catch {
        continue;
      }
      if (!href.startsWith('http') || seen.has(href)) continue;
      seen.add(href);
      items.push(normItem(source, { title: text, summary: '', url: href, publishedAt: null }));
    }
    return { items, mode: 'scrape', feedUrl: null, status: items.length ? 'ok' : 'missing' };
  } catch (e) {
    return { items: [], mode: 'scrape', feedUrl: null, status: 'error', error: e.message };
  }
}

/**
 * Holt eine Quelle gemäß ihrem Typ, mit Fallback-Kette.
 * @returns {Promise<{items:Array, mode:string, feedUrl:?string, status:string, error?:string}>}
 */
export async function fetchSource(source) {
  if (source.active === false) return { items: [], mode: source.type, feedUrl: source.feed || null, status: 'inactive' };
  log.info(`fetch: ${source.name} (${source.type})`);
  try {
    if (source.type === 'pubmed') return await fetchPubmed(source);
    if (source.type === 'rss') {
      const r = await fetchRss(source);
      if (r.status === 'ok') return r;
      // Fallback auf Sitemap, dann Scrape.
      const s = await fetchSitemap(source);
      if (s.status === 'ok') return s;
      return await fetchScrape(source);
    }
    if (source.type === 'sitemap') {
      const s = await fetchSitemap(source);
      return s.status === 'ok' ? s : await fetchScrape(source);
    }
    return await fetchScrape(source);
  } catch (e) {
    return { items: [], mode: source.type, feedUrl: source.feed || null, status: 'error', error: e.message };
  }
}
