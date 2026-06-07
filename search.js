// Site-Suche: durchsucht News-Items, Vokabular-Begriffe und statische Seiten.
// Index wird per Lazy-Load aus /news/data.js und /vokabular/data.js gezogen
// (Skripte setzen window.NEWS_DATA bzw. window.VOKABULAR_DATA).
(() => {
  const form = document.querySelector('.top-search');
  if (!form) return;
  const input = form.querySelector('input[type="search"]');
  const resultsEl = form.querySelector('.top-search-results');
  if (!input || !resultsEl) return;

  // Pfade relativ zum Site-Root (führender Slash); überall identisch nutzbar.
  const NEWS_DATA_URL = '/news/data.js';
  const VOKABULAR_DATA_URL = '/vokabular/data.js';

  // Statische Seiten — Klartext-Liste, ohne Lazy-Load.
  const STATIC_PAGES = [
    { kind: 'Seite', title: 'News', summary: 'Klartext aus Forschung und Getränkewelt.', url: '/' },
    { kind: 'Seite', title: 'Hellmuth — Botanical Soda', summary: 'Functional Clarity. Alkoholfrei, zuckerfrei, koffeinfrei.', url: '/hellmuth/' },
    { kind: 'Seite', title: 'Quiz — Sucht-Mythen', summary: 'Zwölf Fragen, drei Antworten, eine Diagnose.', url: '/quiz/' },
    { kind: 'Seite', title: 'Klarheitskarten I — Selbstbetrug', summary: 'Kartenspiel gegen Ausreden und Selbstsabotage.', url: '/klarheitskarten/' },
    { kind: 'Seite', title: 'Vokabular', summary: 'Begriffe, die die Industrie missbraucht.', url: '/vokabular/' },
    { kind: 'Seite', title: 'Sanatorium Kokos & Zitrone', summary: 'Substack mit Texten von Ticro Goto.', url: 'https://kokos-und-zitrone.de/' },
    { kind: 'Seite', title: 'Impressum', summary: '', url: '/impressum/' },
  ];

  const slug = (s) => String(s || '')
    .toLowerCase()
    .replace(/[äöüß]/g, (c) => ({ ä: 'a', ö: 'o', ü: 'u', ß: 'ss' }[c]))
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  const esc = (s) => String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const RUBRIK_LABEL = { hellmuth: 'HELLMUTH', science: 'Forschung' };

  // Lazy-Load: setzt globale Variable durch <script>-Inject; wartet auf onload.
  let indexPromise = null;
  function buildIndex() {
    if (indexPromise) return indexPromise;
    indexPromise = (async () => {
      const items = [...STATIC_PAGES];

      const ensureScript = (src, globalName) => new Promise((resolve) => {
        if (window[globalName]) return resolve(window[globalName]);
        const s = document.createElement('script');
        s.src = src;
        s.async = true;
        s.onload = () => resolve(window[globalName] || null);
        s.onerror = () => resolve(null);
        document.head.appendChild(s);
      });

      const [news, vokab] = await Promise.all([
        ensureScript(NEWS_DATA_URL, 'NEWS_DATA'),
        ensureScript(VOKABULAR_DATA_URL, 'VOKABULAR_DATA'),
      ]);

      if (news) {
        for (const r of ['hellmuth', 'science']) {
          for (const it of news[r] || []) {
            items.push({
              kind: RUBRIK_LABEL[r] || r,
              title: it.title,
              summary: it.lead,
              url: it.href || `/news/${r}/${it.slug}/`,
              extra: it.date,
            });
          }
        }
      }
      if (vokab && Array.isArray(vokab.entries)) {
        for (const e of vokab.entries) {
          items.push({
            kind: 'Vokabular',
            title: e.term,
            summary: e.as_called,
            url: '/vokabular/#' + slug(e.term),
          });
        }
      }
      return items;
    })();
    return indexPromise;
  }

  function normalize(s) {
    return String(s || '')
      .toLowerCase()
      .replace(/[äöüß]/g, (c) => ({ ä: 'a', ö: 'o', ü: 'u', ß: 'ss' }[c]));
  }

  function score(item, tokens) {
    const hay = normalize(item.title + ' ' + (item.summary || ''));
    const title = normalize(item.title);
    let s = 0;
    for (const t of tokens) {
      if (!t) continue;
      if (title.startsWith(t)) s += 5;
      if (title.includes(t)) s += 3;
      if (hay.includes(t)) s += 1;
    }
    return s;
  }

  function search(query, items) {
    const tokens = normalize(query).split(/\s+/).filter(Boolean);
    if (!tokens.length) return [];
    return items
      .map((it) => ({ it, s: score(it, tokens) }))
      .filter((x) => x.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, 12)
      .map((x) => x.it);
  }

  function render(items) {
    if (!items.length) {
      resultsEl.innerHTML = '<li class="ts-empty">Nichts gefunden.</li>';
      resultsEl.removeAttribute('hidden');
      return;
    }
    resultsEl.innerHTML = items
      .map((it) => `<li><a href="${esc(it.url)}"${/^https?:/.test(it.url) ? ' target="_blank" rel="noopener"' : ''}><span class="ts-kind">${esc(it.kind)}</span>${esc(it.title)}</a></li>`)
      .join('');
    resultsEl.removeAttribute('hidden');
  }

  function clear() {
    resultsEl.setAttribute('hidden', '');
    resultsEl.innerHTML = '';
  }

  let pending = 0;
  async function onInput() {
    const q = input.value.trim();
    if (q.length < 2) { clear(); return; }
    const myToken = ++pending;
    const items = await buildIndex();
    if (myToken !== pending) return; // veraltet
    render(search(q, items));
  }

  input.addEventListener('input', onInput);
  input.addEventListener('focus', () => {
    if (input.value.trim().length >= 2) onInput();
  });
  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    onInput();
  });

  document.addEventListener('click', (ev) => {
    if (form.contains(ev.target)) return;
    clear();
  });
  document.addEventListener('keydown', (ev) => {
    if (ev.key === 'Escape') { clear(); input.blur(); }
  });
})();
