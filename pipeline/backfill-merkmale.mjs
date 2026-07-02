// Backfill: klassifiziert alle Bestandseinträge ohne merkmale-Frontmatter
// nach (Haiku, ein Call pro Eintrag). Wird manuell oder als Reparaturlauf
// ausgeführt; der Normalbetrieb klassifiziert in run-nova.mjs beim Anlegen.
//
//   node backfill-merkmale.mjs          klassifiziert fehlende Einträge
//   DRY_RUN=1 node backfill-merkmale.mjs  zeigt nur, was fehlen würde

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { classifyMerkmale } from './lib/classify-nova.mjs';
import { log } from './lib/log.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CONTENT = join(__dirname, '..', 'content', 'nova');
const DRY_RUN = process.env.DRY_RUN === '1';

function parseFrontmatter(text) {
  const end = text.indexOf('\n---', 3);
  const head = text.slice(3, end).trim().split(/\r?\n/);
  const body = text.slice(end + 4).replace(/^\s*\n/, '').trimEnd();
  const rec = { body };
  for (const line of head) {
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    try { rec[key] = JSON.parse(line.slice(idx + 1).trim()); }
    catch { rec[key] = line.slice(idx + 1).trim(); }
  }
  return rec;
}

async function main() {
  if (!process.env.ANTHROPIC_API_KEY) {
    log.error('ANTHROPIC_API_KEY fehlt. Abbruch.');
    process.exit(1);
  }
  if (!existsSync(CONTENT)) {
    log.error(`Kein Content-Verzeichnis: ${CONTENT}`);
    process.exit(1);
  }
  let done = 0;
  let failed = 0;
  for (const f of readdirSync(CONTENT).sort()) {
    if (!f.endsWith('.md')) continue;
    const path = join(CONTENT, f);
    const text = readFileSync(path, 'utf8');
    if (/^merkmale: \{/m.test(text)) continue;
    const rec = parseFrontmatter(text);
    if (DRY_RUN) {
      log.info(`fehlt: ${f}`);
      done += 1;
      continue;
    }
    try {
      const merkmale = await classifyMerkmale({ title: rec.title, lead: rec.lead, body: rec.body });
      const line = `merkmale: ${JSON.stringify(merkmale)}`;
      // Nach press_review einfügen (Position gemäß FM_KEYS in render-nova.mjs).
      const updated = text.replace(/^(press_review:.*)$/m, `$1\n${line}`);
      if (updated === text) throw new Error('press_review-Zeile nicht gefunden');
      writeFileSync(path, updated, 'utf8');
      log.info(`klassifiziert: ${f} -> ${merkmale.tatmittel} | ${merkmale.tatkontext}`);
      done += 1;
    } catch (err) {
      log.error(`Fehler bei ${f}: ${err.message}`);
      failed += 1;
    }
  }
  log.info(`Backfill fertig: ${done} klassifiziert, ${failed} Fehler.`);
}

main().then(() => process.exit(0)).catch((e) => {
  log.error(e.stack || e.message);
  process.exit(1);
});
