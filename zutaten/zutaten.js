(() => {
  const data = window.SUBSTANCES_DATA;
  const icons = window.SUBSTANCE_ICONS || { bySlug: {}, byCategory: {} };
  if (!data) return;

  const gridEl = document.getElementById('grid');
  const filterEl = document.getElementById('filter');
  const detailEl = document.getElementById('detail');
  if (!gridEl || !filterEl || !detailEl) return;

  const slugify = (s) => s.toLowerCase()
    .replace(/[äöüß]/g, c => ({ ä: 'a', ö: 'o', ü: 'u', ß: 'ss' }[c]))
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  // Reihenfolge: Bestand der Daten (Seed zuerst, dann Batches), kein Alphabet.
  const entries = data.entries.slice();

  // ── Icon-Lookup ────────────────────────────────────────────
  const iconFor = (entry) => {
    if (icons.bySlug[entry.slug]) return icons.bySlug[entry.slug];
    if (icons.byCategory[entry.kategorie]) return icons.byCategory[entry.kategorie];
    return icons.byCategory['Substanz'] || '';
  };

  // ── Kachel-Rendering ──────────────────────────────────────
  const tile = (entry) => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'zutaten-tile';
    btn.dataset.slug = entry.slug;
    btn.dataset.kategorie = entry.kategorie;
    btn.setAttribute('aria-pressed', 'false');
    btn.innerHTML = `
      <span class="zutaten-tile-icon" aria-hidden="true">${iconFor(entry)}</span>
      <span class="zutaten-tile-name">${entry.name}</span>
      <span class="zutaten-tile-cat">${(entry.unterkategorie || entry.kategorie || '').toUpperCase()}</span>
    `;
    li.appendChild(btn);
    return li;
  };

  const renderGrid = (filterKey) => {
    gridEl.innerHTML = '';
    const filtered = filterKey === 'all'
      ? entries
      : entries.filter(e => e.kategorie === filterKey);
    if (filtered.length === 0) {
      const li = document.createElement('li');
      li.className = 'zutaten-empty';
      li.textContent = 'Keine Einträge in dieser Rubrik.';
      gridEl.appendChild(li);
      return;
    }
    filtered.forEach(e => gridEl.appendChild(tile(e)));
  };

  // ── Querverlinkung im Wirkungs-Text ────────────────────────
  const escapeRegex = (s) => s.replace(/[.*+?^${}()|[\]\\\/]/g, '\\$&');
  const buildLinkifier = (currentName) => {
    const others = entries
      .map(en => en.name)
      .filter(t => t !== currentName)
      .sort((a, b) => b.length - a.length);
    if (others.length === 0) return (text) => text;
    const pattern = '(?<![A-ZÄÖÜ0-9-])(' + others.map(escapeRegex).join('|') + ')(?![A-ZÄÖÜ0-9-])';
    const regex = new RegExp(pattern, 'g');
    return (text) => text.replace(regex, '<a class="zutaten-xref" data-term="$1" href="#">$1</a>');
  };

  // ── Detail-Bereich ────────────────────────────────────────
  const renderDetail = (entry) => {
    const link = buildLinkifier(entry.name);
    const wirkungParas = (entry.wirkung || '')
      .split(/\n\n+/)
      .map((p, i) => {
        const label = i === 0 ? '<em class="zutaten-field-label">Wirkung:</em> ' : '';
        return `<p class="zutaten-line">${label}${link(p)}</p>`;
      })
      .join('');
    const ref = entry.related_article
      ? `<p class="zutaten-ref"><a href="${entry.related_article}" target="_blank" rel="noopener">Mehr lesen →</a></p>`
      : '';
    detailEl.innerHTML = `
      <div class="zutaten-detail-icon" aria-hidden="true">${iconFor(entry)}</div>
      <div class="zutaten-detail-body">
        <h2 class="zutaten-detail-name">${entry.name}</h2>
        <p class="zutaten-detail-meta">${entry.kategorie} · ${entry.unterkategorie || ''}</p>
        <p class="zutaten-line"><em class="zutaten-field-label">Werbung:</em> ${link(entry.werbung)}</p>
        ${wirkungParas}
        ${ref}
      </div>
    `;
    detailEl.hidden = false;
  };

  const closeDetail = () => {
    detailEl.hidden = true;
    detailEl.innerHTML = '';
    gridEl.querySelectorAll('.zutaten-tile[aria-pressed="true"]')
      .forEach(b => b.setAttribute('aria-pressed', 'false'));
    if (window.location.hash) {
      history.replaceState(null, '', window.location.pathname);
    }
  };

  const openEntry = (slug, updateHash = true) => {
    const entry = entries.find(e => e.slug === slug);
    if (!entry) return;
    renderDetail(entry);
    gridEl.querySelectorAll('.zutaten-tile').forEach(b => {
      b.setAttribute('aria-pressed', b.dataset.slug === slug ? 'true' : 'false');
    });
    if (updateHash) history.replaceState(null, '', '#' + slug);
    detailEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // ── Filter-Buttons ────────────────────────────────────────
  filterEl.addEventListener('click', (ev) => {
    const btn = ev.target.closest('button[data-filter]');
    if (!btn) return;
    filterEl.querySelectorAll('button').forEach(b =>
      b.setAttribute('aria-pressed', b === btn ? 'true' : 'false')
    );
    closeDetail();
    renderGrid(btn.dataset.filter);
  });

  // ── Grid-Klicks (Kachel öffnen/schließen) ─────────────────
  gridEl.addEventListener('click', (ev) => {
    const btn = ev.target.closest('.zutaten-tile');
    if (!btn) return;
    const slug = btn.dataset.slug;
    const isOpen = btn.getAttribute('aria-pressed') === 'true';
    if (isOpen) closeDetail();
    else openEntry(slug);
  });

  // ── Querverlinkung im Detail-Text ─────────────────────────
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
    const entry = entries.find(en => en.name === link.dataset.term);
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

  detailEl.addEventListener('mouseover', (ev) => {
    const link = ev.target.closest('.zutaten-xref');
    if (!link) return;
    clearTimeout(hideTimer);
    clearTimeout(showTimer);
    showTimer = setTimeout(() => showTooltip(link), 220);
  });
  detailEl.addEventListener('mouseout', (ev) => {
    if (!ev.target.closest('.zutaten-xref')) return;
    clearTimeout(showTimer);
    hideTimer = setTimeout(hideTooltip, 120);
  });
  detailEl.addEventListener('click', (ev) => {
    const link = ev.target.closest('.zutaten-xref');
    if (!link) return;
    ev.preventDefault();
    clearTimeout(showTimer);
    hideTooltip();
    const entry = entries.find(en => en.name === link.dataset.term);
    if (entry) openEntry(entry.slug);
  });

  // ── Initial-Render ────────────────────────────────────────
  renderGrid('all');

  const hash = window.location.hash.slice(1);
  if (hash) {
    const entry = entries.find(e => e.slug === hash);
    if (entry) openEntry(entry.slug, false);
  }
})();
