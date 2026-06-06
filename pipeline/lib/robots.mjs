// Minimaler robots.txt-Respekt. Holt /robots.txt der Quelle, parst die
// Disallow-Regeln für unseren User-Agent (und *), und beantwortet isAllowed(path).
// Eine Quelle, die den Pfad ausschließt, fliegt raus, kein Workaround.

import { log } from './log.mjs';

export const USER_AGENT =
  process.env.NEWS_USER_AGENT ||
  'hellmuth-news-bot/1.0 (+https://hellmuth-soda.de; mailto:hallo@hellmuth-soda.de)';

const cache = new Map(); // origin -> {groups}

const parseRobots = (txt) => {
  const lines = String(txt || '').split(/\r?\n/);
  const groups = [];
  let current = null;
  for (let raw of lines) {
    const line = raw.replace(/#.*$/, '').trim();
    if (!line) continue;
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const field = line.slice(0, idx).trim().toLowerCase();
    const value = line.slice(idx + 1).trim();
    if (field === 'user-agent') {
      if (current && current.rules.length === 0) {
        current.agents.push(value.toLowerCase());
      } else {
        current = { agents: [value.toLowerCase()], rules: [] };
        groups.push(current);
      }
    } else if ((field === 'disallow' || field === 'allow') && current) {
      current.rules.push({ allow: field === 'allow', path: value });
    }
  }
  return groups;
};

const matches = (path, rule) => {
  if (rule === '') return false;
  // Sehr einfache Präfix-Übereinstimmung (ignoriert Wildcards bewusst konservativ).
  return path.startsWith(rule);
};

async function loadRobots(origin) {
  if (cache.has(origin)) return cache.get(origin);
  let groups = [];
  try {
    const res = await fetch(origin + '/robots.txt', {
      headers: { 'User-Agent': USER_AGENT },
      redirect: 'follow',
      signal: AbortSignal.timeout(15000),
    });
    if (res.ok) groups = parseRobots(await res.text());
  } catch (e) {
    log.warn(`robots.txt nicht ladbar für ${origin}: ${e.message}`);
  }
  cache.set(origin, groups);
  return groups;
}

/**
 * @returns {Promise<boolean>} true, wenn der Pfad gecrawlt werden darf.
 */
export async function isAllowed(targetUrl) {
  let u;
  try {
    u = new URL(targetUrl);
  } catch {
    return false;
  }
  const groups = await loadRobots(u.origin);
  if (!groups.length) return true; // keine robots.txt = erlaubt

  const uaLower = USER_AGENT.toLowerCase();
  // Spezifische Gruppe für unseren UA bevorzugen, sonst *.
  let group =
    groups.find((g) => g.agents.some((a) => a !== '*' && uaLower.includes(a))) ||
    groups.find((g) => g.agents.includes('*'));
  if (!group) return true;

  const path = u.pathname + (u.search || '');
  let decision = true; // default allow
  let longest = -1;
  for (const r of group.rules) {
    if (matches(path, r.path) && r.path.length > longest) {
      longest = r.path.length;
      decision = r.allow;
    }
  }
  return decision;
}
