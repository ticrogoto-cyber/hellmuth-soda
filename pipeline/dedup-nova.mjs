// Dedup für die Nova-Pipeline: dauerhaft, keine TTL.
// Eigene State-Datei, getrennt von der News-Pipeline.
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { hashUrl, isoDate } from './lib/util.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const STATE_PATH = join(__dirname, 'state', 'seen-nova.json');

export function loadSeen() {
  try {
    const data = JSON.parse(readFileSync(STATE_PATH, 'utf8'));
    return data && typeof data === 'object' && data.seen ? data : { version: 1, seen: {} };
  } catch {
    return { version: 1, seen: {} };
  }
}

export function isSeen(state, url) {
  return !!state.seen[hashUrl(url)];
}

export function markSeen(state, url, meta = {}) {
  state.seen[hashUrl(url)] = { url, date: isoDate(), ...meta };
}

export function saveSeen(state) {
  writeFileSync(STATE_PATH, JSON.stringify(state, null, 2) + '\n', 'utf8');
}
