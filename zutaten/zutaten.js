(() => {
  const data = window.SUBSTANCES_DATA;
  if (!data) return;

  const registerEl = document.getElementById('register');
  const modalEl = document.getElementById('entry-modal');
  const modalContentEl = document.getElementById('entry-modal-content');
  const closeBtn = modalEl.querySelector('.entry-close');

  const slug = (s) => s.toLowerCase()
    .replace(/[äöüß]/g, c => ({ä:'a',ö:'o',ü:'u',ß:'ss'}[c]))
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  // Register: alle Zutaten alphabetisch als kompakte Spaltenliste
  const sortedEntries = [...data.entries].sort((a, b) =>
    a.name.localeCompare(b.name, 'de', { sensitivity: 'base' })
  );
  registerEl.innerHTML = sortedEntries
    .map(e => `<li><a href="#${slug(e.name)}" data-term="${e.name}">${e.name}</a></li>`)
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

  // Querverlinkung: andere Zutaten im Fließtext zu klickbaren Links machen
  const escapeRegex = (s) => s.replace(/[.*+?^${}()|[\]\\\/]/g, '\\$&');
  const buildLinkifier = (currentName) => {
    const others = data.entries
      .map(en => en.name)
      .filter(t => t !== currentName)
      .sort((a, b) => b.length - a.length);
    if (others.length === 0) return (text) => text;
    const pattern = '(?<![A-ZÄÖÜ0-9-])(' + others.map(escapeRegex).join('|') + ')(?![A-ZÄÖÜ0-9-])';
    const regex = new RegExp(pattern, 'g');
    return (text) => text.replace(regex, '<a class="zutaten-xref" data-term="$1" href="#">$1</a>');
  };

  // Modal-Inhalt aus Eintrag bauen
  const renderEntry = (e) => {
    const link = buildLinkifier(e.name);
    const ref = e.related_article
      ? `<p class="zutaten-ref"><a href="${e.related_article}" target="_blank" rel="noopener">Mehr lesen →</a></p>`
      : '';
    return `
      <h3 class="zutaten-term">${e.name}</h3>
      <p class="zutaten-line"><em class="zutaten-field-label">Werbung:</em> ${link(e.werbung)}</p>
      <p class="zutaten-line"><em class="zutaten-field-label">Wirkung:</em> ${link(e.wirkung)}</p>
      ${ref}
    `;
  };

  const openEntry = (termName, updateHash = true) => {
    const entry = data.entries.find(e => e.name === termName);
    if (!entry) return;
    modalContentEl.innerHTML = renderEntry(entry);
    modalContentEl.scrollTop = 0;
    modalEl.removeAttribute('hidden');
    document.body.classList.add('modal-open');
    if (updateHash) {
      history.replaceState(null, '', '#' + slug(entry.name));
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

  // Klick auf Zutat im Register
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

  // Querverlinkungs-Tooltip: Hover-Vorschau auf andere Zutaten im Fließtext
  const tooltip = document.createElement('div');
  tooltip.className = 'zutaten-xref-tooltip';
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
    const entry = data.entries.find(en => en.name === link.dataset.term);
    if (!entry) return;
    tooltip.innerHTML = `
      <span class="zutaten-xref-tooltip-term">${entry.name}</span>
      <span class="zutaten-xref-tooltip-line">${entry.werbung}</span>
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
    const link = ev.target.closest('.zutaten-xref');
    if (!link) return;
    clearTimeout(hideTimer);
    clearTimeout(showTimer);
    showTimer = setTimeout(() => showTooltip(link), 220);
  });
  modalContentEl.addEventListener('mouseout', (ev) => {
    if (!ev.target.closest('.zutaten-xref')) return;
    clearTimeout(showTimer);
    hideTimer = setTimeout(hideTooltip, 120);
  });

  modalContentEl.addEventListener('click', (ev) => {
    const link = ev.target.closest('.zutaten-xref');
    if (!link) return;
    ev.preventDefault();
    clearTimeout(showTimer);
    hideTooltip();
    openEntry(link.dataset.term);
  });

  // Direkter Aufruf via URL-Hash (#hopfen öffnet Hopfen)
  const hash = window.location.hash.slice(1);
  if (hash) {
    const entry = data.entries.find(e => slug(e.name) === hash);
    if (entry) openEntry(entry.name, false);
  }
})();
