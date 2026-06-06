// Startseiten-Band: zeigt die 3 jüngsten Wissenschaft-Meldungen.
// Liest /news/data.js (window.NEWS_DATA). Greift NICHT in den Quiz ein.
(() => {
  const band = document.getElementById('news-band');
  if (!band) return;
  const data = window.NEWS_DATA || {};
  const items = (data.science || []).slice(0, 3);
  if (!items.length) {
    band.setAttribute('hidden', '');
    return;
  }

  const esc = (s) =>
    String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  const card = (it) => `
    <a class="news-band-card" href="${esc(it.href)}">
      <p class="news-eyebrow">Wissenschaft · ${esc(it.date)}</p>
      <h3>${esc(it.title)}</h3>
      <p>${esc(it.lead)}</p>
    </a>`;

  band.innerHTML = `
    <div class="news-band-head">
      <h2>Neueste Befunde</h2>
      <a href="news/">Alle Meldungen →</a>
    </div>
    <div class="news-band-grid">${items.map(card).join('')}</div>`;
  band.removeAttribute('hidden');
})();
