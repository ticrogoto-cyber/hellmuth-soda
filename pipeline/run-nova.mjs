// Orchestrierung der Nova-Pipeline (Kriminologische Chronik):
//   fetch -> dedup(URL) -> (translate) -> relevance(>=7) -> fall-dedup ->
//   transform -> nachvalidierung (max. 2 Regenerationen) -> render -> persist
//
// Härtung für den Cron-Betrieb: Fall-Dedup mit Justiz-Ausnahme, Nachvalidierung
// als harte Schranke zwischen Transformation und Persistenz, lückenlose
// Verwerfungs-Protokollierung in der Job-Summary. Ein verworfener Eintrag ist
// besser als ein regelwidriger.

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { fetchSource } from './fetch.mjs';
import { loadSeen, isSeen, markSeen, saveSeen } from './dedup-nova.mjs';
import { scoreRelevance, translateToGerman, transformToHouseStyle, modelInfo } from './lib/anthropic.mjs';
import { classifyMerkmale } from './lib/classify-nova.mjs';
import { classifyFallDedup, dedupModelInfo } from './lib/dedup-fall.mjs';
import { validateEntry, formatViolations, violationSummary, validateModelInfo } from './lib/validate-nova.mjs';
import { isBlacklistedSource } from './lib/source-policy.mjs';
import { build, writeItem, listExisting } from './render-nova.mjs';
import { log } from './lib/log.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CONFIG = join(__dirname, '..', 'config', 'nova-sources.json');

const THRESHOLD = Number(process.env.RELEVANCE_THRESHOLD || 7);
const MAX_NEW = Number(process.env.MAX_NEW_PER_RUN || 12);
const DRY_RUN = process.env.DRY_RUN === '1';
const MAX_REGENERATIONS = 2; // Nachvalidierung: Erstversuch + maximal 2 Regenerationen
const RUBRIK = 'nova';

async function main() {
  if (!process.env.ANTHROPIC_API_KEY) {
    log.error('ANTHROPIC_API_KEY fehlt. Abbruch.');
    process.exit(1);
  }
  log.info(
    `Modelle: relevance=${modelInfo.relevance} transform=${modelInfo.transform}(effort=${modelInfo.transformEffort}) ` +
      `translate=${modelInfo.translate} falldedup=${dedupModelInfo.model} validate=${validateModelInfo.model}`
  );
  log.info(`Nova-Pipeline | Schwelle: >=${THRESHOLD} | Max neu: ${MAX_NEW} | Dry-Run: ${DRY_RUN}`);

  const config = JSON.parse(readFileSync(CONFIG, 'utf8'));
  const state = loadSeen();
  const sources = (config.nova || []).filter((s) => s.active !== false);

  // Bestand für den Fall-Dedup: Titel, Ort, Datum aller dokumentierten Fälle.
  const bestand = listExisting();
  log.info(`Fall-Dedup-Bestand: ${bestand.length} Einträge`);

  let published = 0;
  const publishedItems = [];
  const angenommen = []; // in diesem Lauf angenommene Kandidaten (zählen im Fall-Dedup wie Bestand)
  const verworfen = []; // { score, title, grund } — jede Verwerfung ab dem Score-Gate
  const fehler = []; // { title, message } — Items bleiben ungesehen, nächster Lauf prüft erneut
  const quellenFehler = [];
  let capReached = false;
  const stats = { fetched: 0, ohneUrl: 0, afterDedup: 0, scored: 0, gePass: 0, mid: 0, ltLow: 0, nearMiss: [] };

  log.step(`Nova — ${sources.length} aktive Quellen`);

  for (const source of sources) {
    if (published >= MAX_NEW) {
      capReached = true;
      break;
    }
    const res = await fetchSource(source);
    if (res.status !== 'ok') {
      log.warn(`  ${source.name}: ${res.status}${res.error ? ' (' + res.error + ')' : ''}`);
      quellenFehler.push(`${source.name}: ${res.status}${res.error ? ' (' + res.error + ')' : ''}`);
      continue;
    }
    if (!res.items.length) {
      log.info(`  ${source.name}: keine Items`);
      continue;
    }
    stats.fetched += res.items.length;

    for (const item of res.items) {
      if (published >= MAX_NEW) {
        capReached = true;
        break;
      }
      if (!item.url) {
        stats.ohneUrl += 1;
        continue;
      }
      if (isSeen(state, item.url)) continue;
      stats.afterDedup += 1;

      // Quellen-Ausschlussliste greift vor jeder Modellstufe: Items von
      // Blacklist-Portalen werden weder gescort noch transformiert.
      if (isBlacklistedSource(item.url)) {
        markSeen(state, item.url, { dropped: 'blacklisted-source' });
        verworfen.push({ score: null, title: item.title, grund: 'Quelle auf Ausschlussliste' });
        log.info(`  drop (Blacklist) ${item.title?.slice(0, 70)}`);
        continue;
      }

      let probe = { title: item.title, summary: item.summary };
      try {
        if (source.translate && !['de'].includes((item.lang || '').toLowerCase())) {
          probe = await translateToGerman({ title: item.title, summary: item.summary, lang: item.lang });
        }

        const { score } = await scoreRelevance({
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
          // Ab dem Score-Gate ist jede Verwerfung summary-pflichtig: Items über
          // der Schwelle, die an der Pressespiegel-Mindestschwelle scheitern.
          if (score >= THRESHOLD) {
            verworfen.push({ score, title: probe.title, grund: 'Pressespiegel-Quelle, Mindestscore 9' });
          }
          continue;
        }

        // Fall-Dedup mit Justiz-Ausnahme: Folgeberichte zu dokumentierten
        // Fällen werden verworfen, außer das justizielle/behördliche Ergebnis
        // ist selbst ein eigenständiges Systemversagen.
        const dedup = await classifyFallDedup({
          title: probe.title,
          summary: probe.summary,
          bestand,
          angenommen,
        });
        if (dedup.klassifikation === 'FOLGEBERICHT') {
          markSeen(state, item.url, { score, dropped: 'folgebericht', match: dedup.matchTitel });
          verworfen.push({
            score,
            title: probe.title,
            grund: `Folgebericht zu »${dedup.matchTitel || 'Bestandsfall'}«`,
          });
          log.info(`  drop (Folgebericht: ${(dedup.matchTitel || '?').slice(0, 50)}) ${probe.title?.slice(0, 60)}`);
          continue;
        }
        let folgeberichtKontext = null;
        if (dedup.klassifikation === 'FOLGEBERICHT_JUSTIZANOMALIE') {
          const match = bestand.find((e) => e.title === dedup.matchTitel) || null;
          folgeberichtKontext = {
            titel: dedup.matchTitel || 'dokumentierter Bestandsfall',
            ort: match?.ort || '',
            datum: match?.date || '',
          };
          log.info(
            `  Justiz-Ausnahme (Ursprungsfall: ${folgeberichtKontext.titel.slice(0, 50)}) ${probe.title?.slice(0, 60)}`
          );
        }

        // Transformation mit Nachvalidierung als harter Schranke: Verstöße
        // führen zur Regeneration mit explizitem Fehlerhinweis, nach
        // MAX_REGENERATIONS erfolglosen Korrekturen wird verworfen.
        let out = null;
        let violations = [];
        let korrekturHinweis = null;
        let attempt = 0; // 0 = Erstversuch
        let leer = false;
        for (;;) {
          out = await transformToHouseStyle({
            rubrik: RUBRIK,
            title: probe.title,
            summary: probe.summary,
            sourceName: item.sourceName,
            sourceUrl: item.url,
            isPreprint: false,
            headlineOnly: item.headlineOnly,
            folgeberichtKontext,
            korrekturHinweis,
          });
          if (!out.body || !out.title) {
            leer = true;
            break;
          }
          violations = await validateEntry({
            title: out.title,
            lead: out.lead,
            body: out.body,
            sources: [{ name: item.sourceName, url: item.url }],
          });
          if (!violations.length) break;
          log.warn(
            `  Validierung (Versuch ${attempt + 1}/${MAX_REGENERATIONS + 1}): ${violationSummary(violations)}`
          );
          const fatal = violations.some((v) => !v.regenerierbar);
          if (fatal || attempt >= MAX_REGENERATIONS) break;
          attempt += 1;
          korrekturHinweis = formatViolations(violations);
        }

        if (leer) {
          markSeen(state, item.url, { score, dropped: 'empty-transform' });
          verworfen.push({ score, title: probe.title, grund: 'leerer Body (Transformation ohne Substanz)' });
          log.info(`  drop (leer) ${item.title?.slice(0, 70)}`);
          continue;
        }
        if (violations.length) {
          const regeln = violationSummary(violations);
          markSeen(state, item.url, { score, dropped: 'validation', regeln });
          verworfen.push({
            score,
            title: out.title || probe.title,
            grund: `Validierungsverstoß nach ${attempt + 1} ${attempt === 0 ? 'Versuch' : 'Versuchen'}: ${regeln}`,
          });
          log.info(`  drop (Validierung: ${regeln}) ${probe.title?.slice(0, 60)}`);
          continue;
        }

        // Merkmalsklassifikation (Haiku, ein Call pro Eintrag). Ein Fehler
        // hier blockiert die Veröffentlichung nicht; der Eintrag erscheint
        // dann ohne Merkmale und wird beim nächsten Backfill nachgeholt.
        let merkmale = null;
        try {
          merkmale = await classifyMerkmale({ title: out.title, lead: out.lead, body: out.body });
        } catch (err) {
          log.warn(`  Klassifikation fehlgeschlagen: ${err.message}`);
        }

        if (!DRY_RUN) {
          writeItem({
            title: out.title,
            lead: out.lead,
            body: out.body,
            sourceUrl: item.url,
            sourceName: item.sourceName,
            relevance: score,
            ort: dedup.ort || null,
            pressReview: item.headlineOnly,
            merkmale,
          });
        }
        markSeen(state, item.url, { score, published: true });
        angenommen.push({ title: out.title, ort: dedup.ort || null });
        published += 1;
        const marker = [
          attempt ? `nach ${attempt} Regeneration${attempt > 1 ? 'en' : ''}` : '',
          folgeberichtKontext ? `Justiz-Ausnahme zu »${folgeberichtKontext.titel}«` : '',
        ].filter(Boolean);
        publishedItems.push(`(${score}) ${out.title}${marker.length ? ` [${marker.join('; ')}]` : ''}`);
        log.info(`  PUBLISH (${score}) ${out.title}`);
      } catch (e) {
        fehler.push({ title: String(probe.title || item.title || '').slice(0, 90), message: e.message });
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

  const md = [
    '## Nova-Pipeline-Statistik',
    '',
    `Schwelle: Score >= ${THRESHOLD} | Veröffentlicht: ${published}${DRY_RUN ? ' (Dry-Run)' : ''}`,
    '',
  ];
  md.push(
    `| gefetcht | nach Dedup | geprüft | ≥${THRESHOLD} | ${THRESHOLD - 2}–${THRESHOLD - 1} | <${THRESHOLD - 2} |`,
    '|---|---|---|---|---|---|'
  );
  md.push(`| ${stats.fetched} | ${stats.afterDedup} | ${stats.scored} | ${stats.gePass} | ${stats.mid} | ${stats.ltLow} |`);
  if (publishedItems.length) {
    md.push('', '**Veröffentlicht:**');
    for (const p of publishedItems) md.push(`- ${p}`);
  }
  if (verworfen.length) {
    md.push('', `**Verworfen (${verworfen.length}):**`);
    for (const v of verworfen) {
      md.push(`- ${v.score != null ? `(${v.score}) ` : ''}${v.title} · Grund: ${v.grund}`);
    }
  }
  if (fehler.length) {
    md.push('', `**Fehler (${fehler.length}), Items bleiben ungesehen und laufen im nächsten Lauf erneut:**`);
    for (const f of fehler) md.push(`- ${f.title} · ${f.message}`);
  }
  if (capReached) {
    md.push(
      '',
      `Cap erreicht (MAX_NEW_PER_RUN=${MAX_NEW}): verbleibende Kandidaten wurden nicht mehr geprüft und bleiben für den nächsten Lauf ungesehen.`
    );
  }
  if (stats.ohneUrl) md.push('', `Items ohne URL übersprungen: ${stats.ohneUrl}`);
  if (quellenFehler.length) {
    md.push('', `**Quellen ohne Lieferung (${quellenFehler.length}):**`);
    for (const q of quellenFehler) md.push(`- ${q}`);
  }
  if (stats.nearMiss.length) {
    md.push('', `**Knapp verfehlt (${THRESHOLD - 2}–${THRESHOLD - 1}):**`);
    for (const n of stats.nearMiss.sort((a, b) => b.score - a.score)) {
      md.push(`- (${n.score}) ${n.title}`);
    }
  }
  console.log(md.join('\n'));
  console.log('\n```json\n' + JSON.stringify({ published, items: publishedItems }, null, 2) + '\n```');
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    log.error(e.stack || e.message);
    process.exit(1);
  });
