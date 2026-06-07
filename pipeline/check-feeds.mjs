// Feed-Prüfung gemäß Raster (RSS? sonst Sitemap? sonst Scrape? robots.txt?).
// Läuft im GitHub-Actions-Lauf mit offenem Egress. Aktualisiert die
// feed_status-Werte in config/news-sources.json und gibt einen Report aus.
// Schaltet KEINE Quellen scharf — nur Statusbericht.

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { fetchSource } from './fetch.mjs';
import { log } from './lib/log.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CONFIG = join(__dirname, '..', 'config', 'news-sources.json');

const WRITE = process.env.WRITE_STATUS === '1';

async function main() {
  const config = JSON.parse(readFileSync(CONFIG, 'utf8'));
  const rows = [];

  for (const rubrik of ['hellmuth', 'science']) {
    for (const source of config[rubrik] || []) {
      const res = await fetchSource({ ...source, active: true }); // auch inaktive testen
      const statusMap = {
        ok: res.mode === 'rss' ? 'ok' : res.mode === 'pubmed' ? 'ok' : `ok via ${res.mode}`,
        missing: 'missing',
        error: `error: ${res.error || '?'}`,
        'robots-disallow': 'robots-disallow',
        inactive: 'inactive',
      };
      const status = statusMap[res.status] || res.status;
      source.feed_status = status;
      if (res.feedUrl && res.mode === 'rss' && !source.feed) source.feed = res.feedUrl;
      rows.push({
        rubrik,
        name: source.name,
        active: source.active !== false,
        mode: res.mode,
        items: res.items.length,
        status,
        feed: res.feedUrl || source.feed || '',
      });
      log.info(`${rubrik.padEnd(9)} ${source.name.padEnd(28)} ${status.padEnd(16)} items=${res.items.length}`);
    }
  }

  if (WRITE) {
    writeFileSync(CONFIG, JSON.stringify(config, null, 2) + '\n', 'utf8');
    log.info('config/news-sources.json mit feed_status aktualisiert.');
  }

  // Report nach stdout (Markdown-Tabelle).
  const lines = ['| Rubrik | Quelle | aktiv | Modus | Items | Status |', '|---|---|---|---|---|---|'];
  for (const r of rows) {
    lines.push(`| ${r.rubrik} | ${r.name} | ${r.active ? 'ja' : 'nein'} | ${r.mode} | ${r.items} | ${r.status} |`);
  }
  console.log(lines.join('\n'));
}

main()
  .then(() => process.exit(0)) // verhindert den Leerlauf-Hang nach dem Report (offene Sockets)
  .catch((e) => {
    log.error(e.stack || e.message);
    process.exit(1);
  });
