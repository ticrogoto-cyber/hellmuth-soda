// /news-Übersicht: Rubrik-Filter (Alle / HELLMUTH / Wissenschaft), chronologisch.
(() => {
  const data = window.NEWS_DATA || { hellmuth: [], science: [] };
  const listEl = document.getElementById('news-list');
  const filterEl = document.getElementById('news-filter');
  if (!listEl) return;

  const LABEL = { hellmuth: 'HELLMUTH', science: 'Wissenschaft' };

  const all = []
    .concat((data.hellmuth || []).map((x) => ({ ...x, rubrik: 'hellmuth' })))
    .concat((data.science || []).map((x) => ({ ...x, rubrik: 'science' })))
    .sort((a, b) => String(b.date).localeCompare(String(a.date)));

  const esc = (s) =>
    String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  const card = (it) => `
    <li class="news-card">
      <a class="news-card-link" href="${esc(it.href)}">
        <p class="news-eyebrow">${LABEL[it.rubrik] || it.rubrik} · ${esc(it.date)}${
    it.preprint ? '<span class="news-tag">Preprint</span>' : ''
  }${it.press_review ? '<span class="news-tag">Pressespiegel</span>' : ''}</p>
        <h2>${esc(it.title)}</h2>
        <p class="news-lead">${esc(it.lead)}</p>
      </a>
    </li>`;

  const render = (filter) => {
    const items = filter === 'all' ? all : all.filter((x) => x.rubrik === filter);
    listEl.innerHTML = items.length
      ? items.map(card).join('')
      : '<li class="news-empty">Noch keine Meldungen.</li>';
    if (filterEl) {
      filterEl.querySelectorAll('button').forEach((b) =>
        b.setAttribute('aria-pressed', b.dataset.filter === filter ? 'true' : 'false')
      );
    }
  };

  if (filterEl) {
    filterEl.addEventListener('click', (ev) => {
      const btn = ev.target.closest('button[data-filter]');
      if (btn) render(btn.dataset.filter);
    });
  }

  render('all');
})();
