// /news-Übersicht: Rubrik-Filter (Alle / HELLMUTH / Forschung), chronologisch.
// Zusätzlich:
//  - "Klartext der Woche"-Sektion aus config/featured.json (manuell kuratiert)
//  - Sortierung "Neueste" (Default) oder "Meistgelesen" (View-Counts vom Worker)
//  - View-Count je Karte (dezent neben der Lesezeit)
(() => {
  const data = window.NEWS_DATA || { hellmuth: [], science: [] };
  const listEl = document.getElementById('news-list');
  const filterEl = document.getElementById('news-filter');
  const sortEl = document.getElementById('news-sort');
  if (!listEl) return;

  const LABEL = { hellmuth: 'HELLMUTH', science: 'Forschung' };

  const all = []
    .concat((data.hellmuth || []).map((x) => ({ ...x, rubrik: 'hellmuth' })))
    .concat((data.science || []).map((x) => ({ ...x, rubrik: 'science' })));
  const byCreated = (a, b) => String(b.created || b.date).localeCompare(String(a.created || a.date));

  const esc = (s) =>
    String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  const readingLabel = (m) => (!m || m < 1 ? 'unter 1 Min.' : m + ' Min.');

  // Globale View-Map (rubrik/slug -> n), wird von Counters.getCounts gefüllt.
  let viewMap = {};
  const idOf = (it) => `${it.rubrik}/${it.slug}`;
  const fmtViews = (n) => (typeof n === 'number' && n > 0 ? ` · ${n} Aufrufe` : '');

  // Eine Meta-Zeile: Rubrik · Datum · Lesezeit (· Aufrufe) (Preprint-Tag bei Bedarf).
  const card = (it) => {
    const views = viewMap[idOf(it)];
    return `
    <li class="news-card">
      <a class="news-card-link" href="${esc(it.href)}">
        <p class="news-eyebrow">${LABEL[it.rubrik] || it.rubrik} · ${esc(it.date)} · ${esc(readingLabel(it.minutes))}${fmtViews(views)}${
      it.preprint ? '<span class="news-tag">Preprint</span>' : ''
    }</p>
        <h2 class="news-card-title">${esc(it.title)}</h2>
        <p class="news-lead">${esc(it.lead)}</p>
      </a>
    </li>`;
  };

  let currentFilter = 'all';
  let currentSort = 'neueste';

  const sortItems = (items) => {
    if (currentSort === 'meistgelesen') {
      return items.slice().sort((a, b) => (viewMap[idOf(b)] || 0) - (viewMap[idOf(a)] || 0) || byCreated(a, b));
    }
    return items.slice().sort(byCreated);
  };

  const render = () => {
    const items = sortItems(currentFilter === 'all' ? all : all.filter((x) => x.rubrik === currentFilter));
    listEl.innerHTML = items.length
      ? items.map(card).join('')
      : '<li class="news-empty">Noch keine Meldungen.</li>';
    if (filterEl) {
      filterEl.querySelectorAll('button').forEach((b) =>
        b.setAttribute('aria-pressed', b.dataset.filter === currentFilter ? 'true' : 'false')
      );
    }
    if (sortEl) {
      sortEl.querySelectorAll('[data-sort]').forEach((a) =>
        a.setAttribute('aria-pressed', a.dataset.sort === currentSort ? 'true' : 'false')
      );
    }
  };

  if (filterEl) {
    filterEl.addEventListener('click', (ev) => {
      const btn = ev.target.closest('button[data-filter]');
      if (!btn) return;
      currentFilter = btn.dataset.filter;
      render();
    });
  }
  if (sortEl) {
    sortEl.addEventListener('click', (ev) => {
      const a = ev.target.closest('[data-sort]');
      if (!a) return;
      ev.preventDefault();
      currentSort = a.dataset.sort;
      render();
    });
  }

  render();

  // View-Counts asynchron nachladen und Karten + Sortierung aktualisieren.
  if (window.Counters && all.length) {
    Counters.getCounts(all.map(idOf)).then(({ views }) => {
      if (!views) return;
      viewMap = views;
      render();
    });
  }

  // ---- Klartext der Woche (manuell kuratiert) -----------------------------
  // config/featured.json: Array von Slugs (oder { items: [...] }). Leeres
  // Array oder Fehler => Sektion bleibt versteckt. Laufzeit-Fetch, damit
  // eine Aenderung an der Datei sofort ohne Pipeline-Lauf greift.
  const featuredSec = document.getElementById('news-featured');
  const featuredList = document.getElementById('news-featured-list');
  if (featuredSec && featuredList) {
    const bySlug = new Map(all.map((x) => [x.slug, x]));
    fetch('/config/featured.json?v=' + Date.now())
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => {
        const slugs = Array.isArray(j) ? j : j && Array.isArray(j.items) ? j.items : [];
        const picked = slugs.map((s) => bySlug.get(s)).filter(Boolean).slice(0, 3);
        if (!picked.length) return; // bleibt hidden
        featuredList.innerHTML = picked.map(card).join('');
        featuredSec.removeAttribute('hidden');
      })
      .catch(() => {});
  }
})();
