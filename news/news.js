// /news-Übersicht: Rubrik-Filter (Alle / HELLMUTH / Forschung), chronologisch.
// Zusätzlich:
//  - "Klartext der Woche"-Sektion aus config/featured.json (manuell kuratiert)
//  - Sortierung "Neueste" (Default) oder "Meistgelesen" (View-Counts vom Worker)
//  - View-Count je Karte (dezent neben der Lesezeit)
//  - Pagination: max. 20 Items pro Seite, Seitenzahlen + Vor/Zurück (clientseitig)
(() => {
  const data = window.NEWS_DATA || { hellmuth: [], science: [] };
  const listEl = document.getElementById('news-list');
  const filterEl = document.getElementById('news-filter');
  const sortEl = document.getElementById('news-sort');
  const pagerEl = document.getElementById('news-pagination');
  if (!listEl) return;

  const PAGE_SIZE = 20;
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
  let currentPage = 1;

  const sortItems = (items) => {
    if (currentSort === 'meistgelesen') {
      return items.slice().sort((a, b) => (viewMap[idOf(b)] || 0) - (viewMap[idOf(a)] || 0) || byCreated(a, b));
    }
    return items.slice().sort(byCreated);
  };

  const currentItems = () =>
    sortItems(currentFilter === 'all' ? all : all.filter((x) => x.rubrik === currentFilter));

  // Kompakte Seitenliste: 1 … (p-1) p (p+1) … last. Lücken als 'gap'.
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
      // Nach Seitenwechsel an den Listenanfang scrollen (ohne Sprung in die Tiefe).
      const top = document.querySelector('.news-main');
      if (top) window.scrollTo({ top: top.offsetTop - 20, behavior: 'smooth' });
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
