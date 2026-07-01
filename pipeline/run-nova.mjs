// Orchestrierung der Nova-Pipeline (Kriminologische Chronik):
//   fetch -> dedup -> (translate) -> relevance(>=7) -> transform -> render -> persist

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { fetchSource } from './fetch.mjs';
import { loadSeen, isSeen, markSeen, saveSeen } from './dedup-nova.mjs';
import { scoreRelevance, translateToGerman, transformToHouseStyle, modelInfo } from './lib/anthropic.mjs';
import { build, writeItem } from './render-nova.mjs';
import { log } from './lib/log.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CONFIG = join(__dirname, '..', 'config', 'nova-sources.json');

const THRESHOLD = Number(process.env.RELEVANCE_THRESHOLD || 7);
const MAX_NEW = Number(process.env.MAX_NEW_PER_RUN || 12);
const DRY_RUN = process.env.DRY_RUN === '1';
const RUBRIK = 'nova';

async function main() {
  if (!process.env.ANTHROPIC_API_KEY) {
    log.error('ANTHROPIC_API_KEY fehlt. Abbruch.');
    process.exit(1);
  }
  log.info(`Modelle: relevance=${modelInfo.relevance} transform=${modelInfo.transform}(effort=${modelInfo.transformEffort}) translate=${modelInfo.translate}`);
  log.info(`Nova-Pipeline | Schwelle: >=${THRESHOLD} | Max neu: ${MAX_NEW} | Dry-Run: ${DRY_RUN}`);

  const config = JSON.parse(readFileSync(CONFIG, 'utf8'));
  const state = loadSeen();
  const sources = (config.nova || []).filter((s) => s.active !== false);

  let published = 0;
  const summary = [];
  const stats = { fetched: 0, afterDedup: 0, scored: 0, gePass: 0, mid: 0, ltLow: 0, nearMiss: [] };

  log.step(`Nova — ${sources.length} aktive Quellen`);

  for (const source of sources) {
    if (published >= MAX_NEW) break;
    const res = await fetchSource(source);
    if (res.status !== 'ok' || !res.items.length) {
      log.warn(`  ${source.name}: ${res.status}${res.error ? ' (' + res.error + ')' : ''}`);
      continue;
    }
    stats.fetched += res.items.length;

    for (const item of res.items) {
      if (published >= MAX_NEW) break;
      if (!item.url) continue;
      if (isSeen(state, item.url)) continue;
      stats.afterDedup += 1;

      let probe = { title: item.title, summary: item.summary };
      try {
        if (source.translate && !['de'].includes((item.lang || '').toLowerCase())) {
          probe = await translateToGerman({ title: item.title, summary: item.summary, lang: item.lang });
        }

        const { score, reason } = await scoreRelevance({
          rubrik: RUBRIK,
          title: probe.title,
          summary: probe.summary,
          sourceName: item.sourceName,
        });

        stats.scored += 1;
        if (score >= THRESHOLD) stats.gePass += 1;
        else if (score >= THRESHOLD - 2) {
          stats.mid += 1;
          stats.nearMiss.push({ score, title: probe.title });
        } else stats.ltLow += 1;

        const minScore = item.headlineOnly ? Math.max(THRESHOLD, 9) : THRESHOLD;
        if (score < minScore) {
          markSeen(state, item.url, { score, dropped: 'low-relevance' });
          log.info(`  drop (${score}${item.headlineOnly ? ', presse min 9' : ''}) ${item.title?.slice(0, 70)}`);
          continue;
        }

        const out = await transformToHouseStyle({
          rubrik: RUBRIK,
          title: probe.title,
          summary: probe.summary,
          sourceName: item.sourceName,
          sourceUrl: item.url,
          isPreprint: false,
          headlineOnly: item.headlineOnly,
        });

        if (!out.body || !out.title) {
          markSeen(state, item.url, { score, dropped: 'empty-transform' });
          log.info(`  drop (leer) ${item.title?.slice(0, 70)}`);
          continue;
        }

        if (!DRY_RUN) {
          writeItem({
            title: out.title,
            lead: out.lead,
            body: out.body,
            sourceUrl: item.url,
            sourceName: item.sourceName,
            relevance: score,
            pressReview: item.headlineOnly,
          });
        }
        markSeen(state, item.url, { score, published: true });
        published += 1;
        summary.push(`(${score}) ${out.title}`);
        log.info(`  PUBLISH (${score}) ${out.title}`);
      } catch (e) {
        log.error(`  Fehler bei "${item.title?.slice(0, 60)}": ${e.message}`);
      }
    }
  }

  if (!DRY_RUN) {
    const { count } = build();
    saveSeen(state);
    log.step('Fertig');
    log.info(`Veröffentlicht: ${published} | Bestand: ${count}`);
  } else {
    log.step('Dry-Run fertig (nichts geschrieben)');
  }

  const md = ['## Nova-Pipeline-Statistik', '', `Schwelle: Score >= ${THRESHOLD} | Veröffentlicht: ${published}${DRY_RUN ? ' (Dry-Run)' : ''}`, ''];
  md.push(`| gefetcht | nach Dedup | geprüft | ≥${THRESHOLD} | ${THRESHOLD - 2}–${THRESHOLD - 1} | <${THRESHOLD - 2} |`, '|---|---|---|---|---|---|');
  md.push(`| ${stats.fetched} | ${stats.afterDedup} | ${stats.scored} | ${stats.gePass} | ${stats.mid} | ${stats.ltLow} |`);
  if (stats.nearMiss.length) {
    md.push('', `**Knapp verfehlt (${THRESHOLD - 2}–${THRESHOLD - 1}):**`);
    for (const n of stats.nearMiss.sort((a, b) => b.score - a.score)) {
      md.push(`- (${n.score}) ${n.title}`);
    }
  }
  console.log(md.join('\n'));
  console.log('\n' + JSON.stringify({ published, items: summary }, null, 2));
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    log.error(e.stack || e.message);
    process.exit(1);
  });
