// Orchestrierung des täglichen Laufs:
//   fetch -> dedup -> (translate) -> relevance(>=8) -> transform -> render -> persist
//
// Welche Rubriken hier verarbeitet werden, steuert PIPELINE_RUBRIKEN
// (Default: nur "science", da HELLMUTH auf der Soda-Seite lebt).
// Auf der Soda-Seite würde dieselbe Pipeline mit PIPELINE_RUBRIKEN=hellmuth laufen.

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { fetchSource } from './fetch.mjs';
import { loadSeen, isSeen, markSeen, saveSeen } from './dedup.mjs';
import { scoreRelevance, translateToGerman, transformToHouseStyle, modelInfo } from './lib/anthropic.mjs';
import { build } from './render.mjs';
import { log } from './lib/log.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CONFIG = join(__dirname, '..', 'config', 'news-sources.json');

const THRESHOLD = Number(process.env.RELEVANCE_THRESHOLD || 8);
const MAX_NEW = Number(process.env.MAX_NEW_PER_RUN || 12);
const RUBRIKEN = (process.env.PIPELINE_RUBRIKEN || 'science')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);
const DRY_RUN = process.env.DRY_RUN === '1';

const doiFromUrl = (url) => {
  const m = String(url || '').match(/doi\.org\/(10\.\S+)$/i);
  return m ? m[1] : null;
};

async function main() {
  if (!process.env.ANTHROPIC_API_KEY) {
    log.error('ANTHROPIC_API_KEY fehlt. Abbruch.');
    process.exit(1);
  }
  log.info(`Modelle: relevance=${modelInfo.relevance} transform=${modelInfo.transform}(effort=${modelInfo.transformEffort}) translate=${modelInfo.translate}`);
  log.info(`Rubriken: ${RUBRIKEN.join(', ')} | Schwelle: >=${THRESHOLD} | Max neu: ${MAX_NEW} | Dry-Run: ${DRY_RUN}`);

  const config = JSON.parse(readFileSync(CONFIG, 'utf8'));
  const state = loadSeen();

  let published = 0;
  const summary = [];

  for (const rubrik of RUBRIKEN) {
    const sources = (config[rubrik] || []).filter((s) => s.active !== false);
    log.step(`Rubrik ${rubrik} — ${sources.length} aktive Quellen`);

    for (const source of sources) {
      if (published >= MAX_NEW) break;
      const res = await fetchSource(source);
      if (res.status !== 'ok' || !res.items.length) {
        log.warn(`  ${source.name}: ${res.status}${res.error ? ' (' + res.error + ')' : ''}`);
        continue;
      }

      for (const item of res.items) {
        if (published >= MAX_NEW) break;
        if (!item.url) continue;
        if (isSeen(state, item.url)) continue;

        // Ab hier gilt das Item als gesehen (auch wenn es später ausscheidet),
        // damit es nicht erneut die API kostet.
        let probe = { title: item.title, summary: item.summary };
        try {
          if (source.translate && !['en', 'de'].includes((item.lang || '').toLowerCase())) {
            probe = await translateToGerman({ title: item.title, summary: item.summary, lang: item.lang });
          }

          const { score, reason } = await scoreRelevance({
            rubrik,
            title: probe.title,
            summary: probe.summary,
            sourceName: item.sourceName,
          });

          if (score < THRESHOLD) {
            markSeen(state, item.url, { rubrik, score, dropped: 'low-relevance' });
            log.info(`  drop (${score}) ${item.title?.slice(0, 70)}`);
            continue;
          }

          const out = await transformToHouseStyle({
            rubrik,
            title: probe.title,
            summary: probe.summary,
            sourceName: item.sourceName,
            sourceUrl: item.url,
            isPreprint: item.isPreprint,
          });

          if (!out.body || !out.title) {
            markSeen(state, item.url, { rubrik, score, dropped: 'empty-transform' });
            log.info(`  drop (leer) ${item.title?.slice(0, 70)}`);
            continue;
          }

          if (!DRY_RUN) {
            const { writeItem } = await import('./render.mjs');
            writeItem({
              rubrik,
              title: out.title,
              lead: out.lead,
              body: out.body,
              sourceUrl: item.url,
              sourceName: item.sourceName,
              doi: doiFromUrl(item.url),
              preprint: item.isPreprint,
              relevance: score,
            });
          }
          markSeen(state, item.url, { rubrik, score, published: true });
          published += 1;
          summary.push(`[${rubrik}] (${score}) ${out.title}`);
          log.info(`  PUBLISH (${score}) ${out.title}`);
        } catch (e) {
          log.error(`  Fehler bei "${item.title?.slice(0, 60)}": ${e.message}`);
          // Nicht als gesehen markieren: transiente Fehler dürfen später erneut probieren.
        }
      }
    }
  }

  if (!DRY_RUN) {
    const { counts } = build();
    saveSeen(state);
    log.step('Fertig');
    log.info(`Veröffentlicht: ${published} | Bestand: hellmuth=${counts.hellmuth} science=${counts.science}`);
  } else {
    log.step('Dry-Run fertig (nichts geschrieben)');
  }

  // Maschinenlesbare Zusammenfassung nach stdout.
  console.log(JSON.stringify({ published, items: summary }, null, 2));
}

main().catch((e) => {
  log.error(e.stack || e.message);
  process.exit(1);
});
