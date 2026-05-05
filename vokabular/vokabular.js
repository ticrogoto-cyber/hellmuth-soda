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

  // Querverlinkung: andere Begriffe im Fließtext zu klickbaren Links machen
  const escapeRegex = (s) => s.replace(/[.*+?^${}()|[\]\\\/]/g, '\\$&');
  const buildLinkifier = (currentTerm) => {
    const others = data.entries
      .map(en => en.term)
      .filter(t => t !== currentTerm)
      .sort((a, b) => b.length - a.length);
    if (others.length === 0) return (text) => text;
    const pattern = '(?<![A-ZÄÖÜ0-9-])(' + others.map(escapeRegex).join('|') + ')(?![A-ZÄÖÜ0-9-])';
    const regex = new RegExp(pattern, 'g');
    return (text) => text.replace(regex, '<a class="vokabular-xref" data-term="$1" href="#">$1</a>');
  };

  // Modal-Inhalt aus Eintrag bauen
  const renderEntry = (e) => {
    const amazon = e.amazon || data.buch_default.amazon;
    const buchTitle = e.buch_title || data.buch_default.title;
    const link = buildLinkifier(e.term);
    return `
      <h3 class="vokabular-term">${e.term}</h3>
      <p class="vokabular-line"><em>Wie es heißt:</em> ${link(e.as_called)}</p>
      <p class="vokabular-line"><em>Was es ist:</em> ${link(e.what_it_is)}</p>
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

  // Querverlinkungs-Tooltip: Hover-Vorschau auf andere Begriffe im Fließtext
  const tooltip = document.createElement('div');
  tooltip.className = 'vokabular-xref-tooltip';
  tooltip.setAttribute('hidden', '');
  document.body.appendChild(tooltip);

  let showTimer, hideTimer;
  const positionTooltip = (link) => {
    const r = link.getBoundingClientRect();
    const tr = tooltip.getBoundingClientRect();
    let top = r.top - tr.height - 10;
    if (top < 10) top = r.bottom + 10;
    let left = r.left + r.width / 2 - tr.width / 2;
    left = Math.max(10, Math.min(left, window.innerWidth - tr.width - 10));
    tooltip.style.top = top + 'px';
    tooltip.style.left = left + 'px';
  };
  const showTooltip = (link) => {
    const entry = data.entries.find(en => en.term === link.dataset.term);
    if (!entry) return;
    tooltip.innerHTML = `
      <span class="vokabular-xref-tooltip-term">${entry.term}</span>
      <span class="vokabular-xref-tooltip-line">${entry.as_called}</span>
    `;
    tooltip.removeAttribute('hidden');
    positionTooltip(link);
    requestAnimationFrame(() => tooltip.classList.add('is-visible'));
  };
  const hideTooltip = () => {
    tooltip.classList.remove('is-visible');
    setTimeout(() => {
      if (!tooltip.classList.contains('is-visible')) tooltip.setAttribute('hidden', '');
    }, 220);
  };

  modalContentEl.addEventListener('mouseover', (ev) => {
    const link = ev.target.closest('.vokabular-xref');
    if (!link) return;
    clearTimeout(hideTimer);
    clearTimeout(showTimer);
    showTimer = setTimeout(() => showTooltip(link), 220);
  });
  modalContentEl.addEventListener('mouseout', (ev) => {
    if (!ev.target.closest('.vokabular-xref')) return;
    clearTimeout(showTimer);
    hideTimer = setTimeout(hideTooltip, 120);
  });

  modalContentEl.addEventListener('click', (ev) => {
    const link = ev.target.closest('.vokabular-xref');
    if (!link) return;
    ev.preventDefault();
    clearTimeout(showTimer);
    hideTooltip();
    openEntry(link.dataset.term);
  });

  // Direkter Aufruf via URL-Hash (#sucht öffnet SUCHT)
  const hash = window.location.hash.slice(1);
  if (hash) {
    const entry = data.entries.find(e => slug(e.term) === hash);
    if (entry) openEntry(entry.term, false);
  }
})();
