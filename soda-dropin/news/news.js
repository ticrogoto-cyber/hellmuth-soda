// Soda /news-Übersicht: HELLMUTH-Rubrik (Getränke), chronologisch.
// Forschung lebt auf hellmuth-soda.de; hier nur ein Querverweis.
(() => {
  const data = window.NEWS_DATA || { hellmuth: [] };
  const listEl = document.getElementById('news-list');
  if (!listEl) return;

  const items = (data.hellmuth || []).slice().sort((a, b) => String(b.created || b.date).localeCompare(String(a.created || a.date)));

  const esc = (s) =>
    String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  const card = (it) => `
    <li class="news-card">
      <a class="news-card-link" href="${esc(it.href)}">
        <p class="news-eyebrow">HELLMUTH · ${esc(it.date)}</p>
        <h2>${esc(it.title)}</h2>
        <p class="news-lead">${esc(it.lead)}</p>
      </a>
    </li>`;

  listEl.innerHTML = items.length
    ? items.map(card).join('')
    : '<li class="news-empty">Noch keine Meldungen.</li>';
})();
