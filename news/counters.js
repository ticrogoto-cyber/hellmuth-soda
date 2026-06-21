// Client für den hellmuth-counters Worker (Aufrufe + Likes).
// Definiert window.Counters. Fehler sind nie fatal: schlägt der Dienst fehl,
// bleiben Zähler einfach leer/unsichtbar, die Seite funktioniert weiter.
(() => {
  // Worker-Endpoint. Bei eingerichteter Custom Route (hellmuth-soda.de/api/*)
  // einfach auf '/api' umstellen — der Worker akzeptiert beide Pfade.
  const WORKER_BASE = 'https://hellmuth-counters.ticro-goto.workers.dev';
  // const WORKER_BASE = '/api';

  async function getCounts(ids) {
    const list = (ids || []).filter(Boolean);
    if (!list.length) return { views: {}, likes: {} };
    try {
      const res = await fetch(WORKER_BASE + '/counts?ids=' + encodeURIComponent(list.join(',')));
      if (!res.ok) throw new Error('bad status');
      const data = await res.json();
      return { views: data.views || {}, likes: data.likes || {} };
    } catch {
      return { views: {}, likes: {} };
    }
  }

  async function bump(kind, id) {
    if (!id) return null;
    try {
      const res = await fetch(WORKER_BASE + '/' + kind, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      if (!res.ok) throw new Error('bad status');
      return await res.json();
    } catch {
      return null;
    }
  }

  window.Counters = {
    base: WORKER_BASE,
    getCounts,
    view: (id) => bump('view', id),
    like: (id) => bump('like', id),
  };
})();
