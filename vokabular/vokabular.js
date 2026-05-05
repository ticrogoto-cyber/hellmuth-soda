(() => {
  const data = window.VOKABULAR_DATA;
  if (!data) return;

  const registerEl = document.getElementById('register');
  const modalEl = document.getElementById('entry-modal');
  const modalContentEl = document.getElementById('entry-modal-content');
  const closeBtn = modalEl.querySelector('.entry-close');

  const slug = (s) => s.toLowerCase()
    .replace(/[äöüß]/g, c => ({ä:'a',ö:'o',ü:'u',ß:'ss'}[c]))
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  // Register: alle Begriffe als kompakte Spaltenliste
  registerEl.innerHTML = data.entries
    .map(e => `<li><a href="#${slug(e.term)}" data-term="${e.term}">${e.term}</a></li>`)
    .join('');

  // Scroll-Reveal: Items fadet beim Eintritt in den Viewport ein, mit leichtem Stagger
  const items = registerEl.querySelectorAll('li');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion || !('IntersectionObserver' in window)) {
    items.forEach(li => li.classList.add('is-visible'));
  } else {
    const io = new IntersectionObserver((entries) => {
      const visible = entries.filter(e => e.isIntersecting);
      visible.forEach((entry, i) => {
        entry.target.style.transitionDelay = `${(i % 10) * 35}ms`;
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -5% 0px' });
    items.forEach(item => io.observe(item));
  }

  // Modal-Inhalt aus Eintrag bauen
  const renderEntry = (e) => {
    const amazon = e.amazon || data.buch_default.amazon;
    const buchTitle = e.buch_title || data.buch_default.title;
    return `
      <h3 class="vokabular-term">${e.term}</h3>
      <p class="vokabular-line"><em>Wie es heißt:</em> ${e.as_called}</p>
      <p class="vokabular-line"><em>Was es ist:</em> ${e.what_it_is}</p>
      <p class="vokabular-ref">${buchTitle}, ${e.ref}</p>
      <div class="vokabular-actions">
        <a class="btn-cta" href="${amazon}" target="_blank" rel="noopener">Klartext bestellen →</a>
        <a class="btn-cta-alt" href="${data.substack}" target="_blank" rel="noopener">Mehr Klartext →</a>
      </div>
    `;
  };

  const openEntry = (termName, updateHash = true) => {
    const entry = data.entries.find(e => e.term === termName);
    if (!entry) return;
    modalContentEl.innerHTML = renderEntry(entry);
    modalContentEl.scrollTop = 0;
    modalEl.removeAttribute('hidden');
    document.body.classList.add('modal-open');
    if (updateHash) {
      history.replaceState(null, '', '#' + slug(entry.term));
    }
    closeBtn.focus();
  };

  const closeEntry = () => {
    modalEl.setAttribute('hidden', '');
    document.body.classList.remove('modal-open');
    if (window.location.hash) {
      history.replaceState(null, '', window.location.pathname);
    }
  };

  // Klick auf Begriff im Register
  registerEl.addEventListener('click', (ev) => {
    const link = ev.target.closest('a[data-term]');
    if (!link) return;
    ev.preventDefault();
    openEntry(link.dataset.term);
  });

  // Klick außerhalb des Modals (auf den Backdrop) schließt
  modalEl.addEventListener('click', (ev) => {
    if (ev.target === modalEl) closeEntry();
  });

  // Schließen-Button
  closeBtn.addEventListener('click', closeEntry);

  // ESC schließt
  document.addEventListener('keydown', (ev) => {
    if (ev.key === 'Escape' && !modalEl.hasAttribute('hidden')) closeEntry();
  });

  // Direkter Aufruf via URL-Hash (#sucht öffnet SUCHT)
  const hash = window.location.hash.slice(1);
  if (hash) {
    const entry = data.entries.find(e => slug(e.term) === hash);
    if (entry) openEntry(entry.term, false);
  }
})();
