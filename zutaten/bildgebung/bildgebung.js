// /zutaten/bildgebung/-Uebersicht: Filter nach Tag, chronologisch.
// Phase 1: keine View-Counter, keine Sortierumschaltung, kein Featured.
// Pagination: max. 20 pro Seite, kompakte Seitenliste (1 ... p-1 p p+1 ... last).
(() => {
  const data = window.BILDGEBUNG_DATA || { items: [] };
  const listEl = document.getElementById('bildgebung-list');
  const filterEl = document.getElementById('bildgebung-filter');
  const pagerEl = document.getElementById('bildgebung-pagination');
  if (!listEl) return;

  const PAGE_SIZE = 20;
  const LABELS = {
    ruhe: 'Ruhe',
    klarheit: 'Klarheit',
    substanz: 'Substanz',
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
    const eyebrow = [prefix, esc(it.date), esc(readingLabel(it.minutes))]
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
  let currentPage = 1;

  const matches = (it, f) =>
    f === 'all' || (Array.isArray(it.filters) && it.filters.indexOf(f) !== -1);

  const currentItems = () =>
    all.filter((x) => matches(x, currentFilter)).sort(byCreated);

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
    renderPagination(pages);
  };

  // Filter setzt die Seite zurueck auf 1.
  if (filterEl) {
    filterEl.addEventListener('click', (ev) => {
      const b = ev.target.closest('button[data-filter]');
      if (!b) return;
      currentFilter = b.dataset.filter;
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
})();
