// Dedup-Persistenz: Hash der Original-URL gegen pipeline/state/seen.json.
//
// Veröffentlichte Items bleiben dauerhaft gesperrt (keine Doppelveröffentlichung).
// Abgelehnte Items bekommen eine TTL (Default 7 Tage); nach Ablauf dürfen sie
// erneut geprüft werden, damit sich die Pipeline den Nachschub nicht abschneidet.
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { hashUrl, isoDate } from './lib/util.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const STATE_PATH = join(__dirname, 'state', 'seen.json');
const TTL_DAYS = Number(process.env.DEDUP_TTL_DAYS || 7);
const DAY_MS = 86400000;

export function loadSeen() {
  try {
    const data = JSON.parse(readFileSync(STATE_PATH, 'utf8'));
    return data && typeof data === 'object' && data.seen ? data : { version: 1, seen: {} };
  } catch {
    return { version: 1, seen: {} };
  }
}

/**
 * Gesehen = veröffentlicht (dauerhaft) ODER abgelehnt und TTL noch nicht abgelaufen.
 * Abgelehnte Einträge ohne `expires` (Altbestand) gelten als erneut prüfbar.
 */
export function isSeen(state, url) {
  const e = state.seen[hashUrl(url)];
  if (!e) return false;
  if (e.published) return true;
  if (e.expires && Date.parse(e.expires) > Date.now()) return true;
  return false;
}

export function markSeen(state, url, meta = {}) {
  const entry = { url, date: isoDate(), ...meta };
  if (!entry.published) {
    entry.expires = new Date(Date.now() + TTL_DAYS * DAY_MS).toISOString();
  }
  state.seen[hashUrl(url)] = entry;
}

export function saveSeen(state) {
  // Abgelaufene Ablehnungen ausräumen; Veröffentlichtes bleibt für immer.
  const now = Date.now();
  for (const [k, e] of Object.entries(state.seen)) {
    if (!e.published && e.expires && Date.parse(e.expires) <= now) delete state.seen[k];
  }
  writeFileSync(STATE_PATH, JSON.stringify(state, null, 2) + '\n', 'utf8');
}
