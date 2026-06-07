// /news-Übersicht: Rubrik-Filter (Alle / HELLMUTH / Forschung), chronologisch.
// Zusätzlich: optionale "Klartext der Woche"-Sektion aus config/featured.json.
(() => {
  const data = window.NEWS_DATA || { hellmuth: [], science: [] };
  const listEl = document.getElementById('news-list');
  const filterEl = document.getElementById('news-filter');
  if (!listEl) return;

  const LABEL = { hellmuth: 'HELLMUTH', science: 'Forschung' };

  const all = []
    .concat((data.hellmuth || []).map((x) => ({ ...x, rubrik: 'hellmuth' })))
    .concat((data.science || []).map((x) => ({ ...x, rubrik: 'science' })))
    .sort((a, b) => String(b.created || b.date).localeCompare(String(a.created || a.date)));

  const esc = (s) =>
    String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  const readingLabel = (m) => (!m || m < 1 ? 'unter 1 Min.' : m + ' Min.');

  // Eine Meta-Zeile: Rubrik · Datum · Lesezeit (Preprint-Tag bei Bedarf).
  const card = (it) => `
    <li class="news-card">
      <a class="news-card-link" href="${esc(it.href)}">
        <p class="news-eyebrow">${LABEL[it.rubrik] || it.rubrik} · ${esc(it.date)} · ${esc(readingLabel(it.minutes))}${
    it.preprint ? '<span class="news-tag">Preprint</span>' : ''
  }</p>
        <h2 class="news-card-title">${esc(it.title)}</h2>
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
