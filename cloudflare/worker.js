/**
 * hellmuth-counters — Aufruf- und Like-Zähler für das News-Modul.
 * Cloudflare Worker (ES-Module-Format) + KV-Namespace.
 *
 * DEPLOY per Dashboard:
 *   Workers & Pages → hellmuth-counters → Quick Edit → diesen Code einfügen → Deploy.
 *
 * KV-BINDING (zwingend, sonst 500):
 *   Settings → Bindings → Add → KV Namespace
 *     Variable name: HELLMUTH_COUNTERS
 *     KV namespace:  (den Namespace mit ID 87e4647195c84fb3917f673758959d42 wählen)
 *
 * OPTIONALE Custom Route (statt *.workers.dev):
 *   hellmuth-soda.de ist bereits auf Cloudflare. Workers & Pages → hellmuth-counters
 *   → Settings → Domains & Routes → Add → Route:
 *     Zone:  hellmuth-soda.de
 *     Route: hellmuth-soda.de/api/*
 *   Danach im Frontend (news/counters.js) WORKER_BASE auf "/api" umstellen.
 *   Der Worker akzeptiert Pfade mit und ohne führendes /api, also funktioniert
 *   beides ohne Code-Änderung am Worker.
 *
 * API:
 *   GET  /counts?ids=a,b,c   -> { views: {id:n,...}, likes: {id:n,...} }
 *   POST /view   {"id":"…"}  -> { id, views: n }
 *   POST /like   {"id":"…"}  -> { id, likes: n }
 *   (jeweils auch unter /api/… erreichbar)
 *
 * Hinweis: KV ist eventually consistent und kennt keine atomaren Inkremente
 * (read-modify-write, last-write-wins). Für ein redaktionelles Low-Traffic-
 * News-Modul ausreichend; bei sehr hoher Parallelität könnten einzelne Zähler
 * minimal untertreiben. Bewusst einfach gehalten, kein Overengineering.
 */

const ALLOWED_ORIGIN = 'https://hellmuth-soda.de';
const MAX_IDS = 100;

// Erlaubte Zeichen für Item-IDs (rubrik/slug). Alles andere wird entfernt.
function sanitizeId(raw) {
  return String(raw || '').replace(/[^a-z0-9/_-]/gi, '').slice(0, 200);
}

export default {
  async fetch(request, env) {
    const cors = {
      'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
      Vary: 'Origin',
    };
    const json = (obj, status = 200) =>
      new Response(JSON.stringify(obj), {
        status,
        headers: { 'Content-Type': 'application/json', ...cors },
      });

    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });

    const kv = env.HELLMUTH_COUNTERS;
    if (!kv) return json({ error: 'KV binding HELLMUTH_COUNTERS fehlt' }, 500);

    const url = new URL(request.url);
    // /api-Präfix (Custom Route) und Trailing-Slash tolerieren.
    const path = url.pathname.replace(/^\/api/, '').replace(/\/+$/, '') || '/';

    try {
      if (request.method === 'GET' && path === '/counts') {
        const ids = (url.searchParams.get('ids') || '')
          .split(',')
          .map(sanitizeId)
          .filter(Boolean)
          .slice(0, MAX_IDS);
        const views = {};
        const likes = {};
        await Promise.all(
          ids.flatMap((id) => [
            kv.get('views:' + id).then((v) => {
              views[id] = parseInt(v || '0', 10) || 0;
            }),
            kv.get('likes:' + id).then((v) => {
              likes[id] = parseInt(v || '0', 10) || 0;
            }),
          ])
        );
        return json({ views, likes });
      }

      if (request.method === 'POST' && (path === '/view' || path === '/like')) {
        const body = await request.json().catch(() => ({}));
        const id = sanitizeId(body && body.id);
        if (!id) return json({ error: 'missing id' }, 400);
        const field = path === '/view' ? 'views' : 'likes';
        const key = field + ':' + id;
        const cur = parseInt((await kv.get(key)) || '0', 10) || 0;
        const next = cur + 1;
        await kv.put(key, String(next));
        return json({ id, [field]: next });
      }

      return json({ error: 'not found', path }, 404);
    } catch (e) {
      return json({ error: String((e && e.message) || e) }, 500);
    }
  },
};
