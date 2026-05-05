(() => {
  const data = window.VOKABULAR_DATA;
  if (!data) return;

  const list = document.getElementById('list');
  const azstrip = document.getElementById('azstrip');
  const search = document.getElementById('search');
  const empty = document.getElementById('empty');

  const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

  // Build A–Z strip
  const presentLetters = [...new Set(data.entries.map(e => e.term[0].toUpperCase()))].sort();
  azstrip.innerHTML = presentLetters
    .map(l => `<a href="#letter-${l}" data-letter="${l}">${l}</a>`)
    .join('');

  // Render entries grouped by letter
  let html = '';
  let currentLetter = '';
  data.entries.forEach(e => {
    const letter = e.term[0].toUpperCase();
    if (letter !== currentLetter) {
      currentLetter = letter;
      html += `<h2 class="vokabular-letter" id="letter-${letter}">${letter}</h2>`;
    }
    const amazon = e.amazon || data.buch_default.amazon;
    const buchTitle = e.buch_title || data.buch_default.title;
    html += `
      <article class="vokabular-entry" id="term-${slug(e.term)}" data-term="${e.term.toLowerCase()}">
        <h3 class="vokabular-term">${e.term}</h3>
        <p class="vokabular-line"><em>Wie es heißt:</em> ${e.as_called}</p>
        <p class="vokabular-line"><em>Was es ist:</em> ${e.what_it_is}</p>
        <p class="vokabular-ref">${buchTitle}, ${e.ref}</p>
        <div class="vokabular-actions">
          <a class="btn-cta" href="${amazon}" target="_blank" rel="noopener">Klartext bestellen →</a>
          <a class="btn-cta-alt" href="${data.substack}" target="_blank" rel="noopener">Mehr Klartext →</a>
        </div>
      </article>
    `;
  });
  list.innerHTML = html;

  // Search filter
  const norm = (s) => s.toLowerCase().replace(/[^a-zäöüß0-9 ]/g, ' ').trim();

  search.addEventListener('input', () => {
    const q = norm(search.value);
    let visibleCount = 0;
    document.querySelectorAll('.vokabular-entry').forEach(el => {
      const text = norm(el.textContent);
      const match = !q || text.includes(q);
      el.hidden = !match;
      if (match) visibleCount++;
    });
    // Hide letter headers whose entries are all hidden
    document.querySelectorAll('.vokabular-letter').forEach(h => {
      let n = h.nextElementSibling;
      let anyVisible = false;
      while (n && !n.classList.contains('vokabular-letter')) {
        if (!n.hidden) { anyVisible = true; break; }
        n = n.nextElementSibling;
      }
      h.hidden = !anyVisible;
    });
    // Hide A–Z strip letters that have no visible entries
    document.querySelectorAll('.vokabular-azstrip a').forEach(a => {
      const letter = a.dataset.letter;
      const header = document.getElementById(`letter-${letter}`);
      a.classList.toggle('is-empty', !header || header.hidden);
    });
    empty.hidden = visibleCount > 0;
  });

  // Smooth-scroll for A–Z strip clicks (offset for sticky header)
  azstrip.addEventListener('click', (ev) => {
    const a = ev.target.closest('a[href^="#letter-"]');
    if (!a) return;
    ev.preventDefault();
    const target = document.getElementById(a.getAttribute('href').slice(1));
    if (!target) return;
    const headerOffset = document.querySelector('.top').offsetHeight + document.querySelector('.vokabular-controls').offsetHeight + 16;
    const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top, behavior: 'smooth' });
    history.replaceState(null, '', a.getAttribute('href'));
  });
})();
