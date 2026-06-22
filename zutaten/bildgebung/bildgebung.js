// /zutaten/bildgebung/-Uebersicht: Filter nach Tag + Sortierung
// (Neueste/Meistgelesen) + View-Counts vom Worker. Selbe Logik wie
// die News-Uebersicht in news/news.js, nur mit eigener Daten- und
// id-Schiene (bildgebung/<slug>).
// Pagination: max. 20 pro Seite, kompakte Seitenliste (1 ... p-1 p p+1 ... last).
(() => {
  const data = window.BILDGEBUNG_DATA || { items: [] };
  const listEl = document.getElementById('bildgebung-list');
  const filterEl = document.getElementById('bildgebung-filter');
  const sortEl = document.getElementById('bildgebung-sort');
  const pagerEl = document.getElementById('bildgebung-pagination');
  if (!listEl) return;

  const PAGE_SIZE = 20;
  const LABELS = {
    unterschaetzt: 'Unterschätzt',
    unklar: 'Unklar',
    ueberschaetzt: 'Überschätzt',
  };

  const all = (data.items || []).slice();
  const byCreated = (a, b) =>
    String(b.created || b.date).localeCompare(String(a.created || a.date));

  const esc = (s) =>
    String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  const readingLabel = (m) => (!m || m < 1 ? 'unter 1 Min.' : m + ' Min.');

  // Eyebrow: Filter-Labels (z. B. "Ruhe · Klarheit") · Datum · Lesezeit.
  const filterPrefix = (it) => {
    const tags = Array.isArray(it.filters) ? it.filters : [];
    const labels = tags.map((t) => LABELS[t] || t).filter(Boolean);
    return labels.join(' · ');
  };

  const card = (it) => {
    const prefix = filterPrefix(it);
    // Bildgebung-Kacheln zeigen kein Datum (anders als News): nur Filter-Tag + Lesezeit.
    const eyebrow = [prefix, esc(readingLabel(it.minutes))]
      .filter(Boolean)
      .join(' · ');
    return `
    <li class="news-card">
      <a class="news-card-link" href="${esc(it.href)}">
        <p class="news-eyebrow">${eyebrow}</p>
        <h2 class="news-card-title">${esc(it.title)}</h2>
        <p class="news-lead">${esc(it.lead)}</p>
      </a>
    </li>`;
  };

  let currentFilter = 'all';
  let currentSort = 'neueste';
  let currentPage = 1;

  // View-Counter-Schiene: gleicher id-Namespace wie die Like/Share-Bar
  // auf den Detailseiten (bildgebung/<slug>). href endet auf "/", den
  // strippen wir, um den reinen Slug zu bekommen.
  let viewMap = {};
  const idOf = (it) => 'bildgebung/' + String(it.href || '').replace(/\/$/, '');

  const matches = (it, f) =>
    f === 'all' || (Array.isArray(it.filters) && it.filters.indexOf(f) !== -1);

  const sortItems = (items) => {
    if (currentSort === 'meistgelesen') {
      return items
        .slice()
        .sort((a, b) => (viewMap[idOf(b)] || 0) - (viewMap[idOf(a)] || 0) || byCreated(a, b));
    }
    return items.slice().sort(byCreated);
  };

  const currentItems = () =>
    sortItems(all.filter((x) => matches(x, currentFilter)));

  // Kompakte Seitenliste: 1 ... (p-1) p (p+1) ... last. Luecken als 'gap'.
  const pageSequence = (page, pages) => {
    const seq = new Set([1, pages, page, page - 1, page + 1]);
    const sorted = [...seq].filter((n) => n >= 1 && n <= pages).sort((a, b) => a - b);
    const out = [];
    let prev = 0;
    for (const n of sorted) {
      if (n - prev > 1) out.push('gap');
      out.push(n);
      prev = n;
    }
    return out;
  };

  const renderPagination = (pages) => {
    if (!pagerEl) return;
    if (pages <= 1) {
      pagerEl.innerHTML = '';
      return;
    }
    const btn = (label, attrs, disabled, active) =>
      `<button type="button" class="news-page${active ? ' is-current' : ''}" ${attrs}${
        disabled ? ' disabled' : ''
      }${active ? ' aria-current="page"' : ''}>${label}</button>`;
    let html = btn('←', `data-rel="prev" aria-label="Vorherige Seite"`, currentPage <= 1, false);
    for (const n of pageSequence(currentPage, pages)) {
      html += n === 'gap'
        ? '<span class="news-page-gap" aria-hidden="true">…</span>'
        : btn(String(n), `data-page="${n}"`, false, n === currentPage);
    }
    html += btn('→', `data-rel="next" aria-label="Nächste Seite"`, currentPage >= pages, false);
    pagerEl.innerHTML = html;
  };

  const render = () => {
    const items = currentItems();
    const pages = Math.max(1, Math.ceil(items.length / PAGE_SIZE));
    if (currentPage > pages) currentPage = pages;
    if (currentPage < 1) currentPage = 1;
    const start = (currentPage - 1) * PAGE_SIZE;
    const pageItems = items.slice(start, start + PAGE_SIZE);
    listEl.innerHTML = pageItems.length
      ? pageItems.map(card).join('')
      : '<li class="news-empty">Noch keine Bildgebung-Artikel.</li>';
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
    renderPagination(pages);
  };

  // Filter/Sortierung setzen die Seite zurueck auf 1.
  if (filterEl) {
    filterEl.addEventListener('click', (ev) => {
      const b = ev.target.closest('button[data-filter]');
      if (!b) return;
      currentFilter = b.dataset.filter;
      currentPage = 1;
      render();
    });
  }
  if (sortEl) {
    sortEl.addEventListener('click', (ev) => {
      const a = ev.target.closest('[data-sort]');
      if (!a) return;
      ev.preventDefault();
      currentSort = a.dataset.sort;
      currentPage = 1;
      render();
    });
  }
  if (pagerEl) {
    pagerEl.addEventListener('click', (ev) => {
      const b = ev.target.closest('button[data-page], button[data-rel]');
      if (!b || b.disabled) return;
      const pages = Math.max(1, Math.ceil(currentItems().length / PAGE_SIZE));
      if (b.dataset.page) currentPage = parseInt(b.dataset.page, 10);
      else if (b.dataset.rel === 'prev') currentPage = Math.max(1, currentPage - 1);
      else if (b.dataset.rel === 'next') currentPage = Math.min(pages, currentPage + 1);
      render();
      // Nach Seitenwechsel an den Listenanfang scrollen.
      const top = document.querySelector('.news-main');
      if (top) window.scrollTo({ top: top.offsetTop - 20, behavior: 'smooth' });
    });
  }

  render();

  // View-Counts asynchron nachladen und die Sortierung aktualisieren,
  // damit "Meistgelesen" beim ersten Render sofort die echten Zahlen
  // benutzt, sobald sie da sind.
  if (window.Counters && all.length) {
    Counters.getCounts(all.map(idOf)).then((res) => {
      if (!res || !res.views) return;
      viewMap = res.views;
      render();
    });
  }
})();
