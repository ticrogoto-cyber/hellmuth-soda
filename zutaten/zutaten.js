(() => {
  const data = window.SUBSTANCES_DATA;
  const icons = window.SUBSTANCE_ICONS || { bySlug: {}, byCategory: {} };
  if (!data) return;

  const gridEl = document.getElementById('grid');
  const filterEl = document.getElementById('filter');
  if (!gridEl || !filterEl) return;

  const entries = data.entries.slice();

  // ── Actions-Bar SVGs (Heart outline/filled, Share, Eye) ──
  // Verbatim aus pipeline/render.mjs (actionsBarHtml). Heart-Filled
  // wird beim Like-Toggle via innerHTML auf .zutaten-like-icon gesetzt.
  const SVG_HEART_OUTLINE =
    '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z"/></svg>';
  const SVG_HEART_FILLED =
    '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"/></svg>';
  const SVG_SHARE =
    '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z"/></svg>';
  const SVG_EYE =
    '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>';

  // ID-Schema: zutaten/<slug> — landet so im Worker-KV und in
  // localStorage-Keys (hl-liked:zutaten/<slug>, hl-viewed:zutaten/<slug>).
  // Feature-Flag-Spiegel zu render.mjs:SHOW_VIEW_COUNT. Worker-Zählung
  // läuft trotzdem (counters.view wird unten weiter gepingt), nur das
  // Markup wird unterdrückt. Toggle als One-Liner.
  const SHOW_VIEW_COUNT = false;

  const actionsBarHtml = (slug, name) => {
    const id = `zutaten/${slug}`;
    const viewsSpan = SHOW_VIEW_COUNT
      ? `<span class="zutaten-act zutaten-views" hidden>${SVG_EYE}<span class="zutaten-views-count"></span> Aufrufe</span>`
      : '';
    return `
      <div class="zutaten-actions" data-news-id="${id}">
        <button type="button" class="zutaten-act zutaten-like" aria-pressed="false" aria-label="Gefällt mir"><span class="zutaten-like-icon">${SVG_HEART_OUTLINE}</span><span class="zutaten-like-count"></span></button>
        <button type="button" class="zutaten-act zutaten-share" aria-label="Teilen">${SVG_SHARE}<span class="zutaten-share-label">Teilen</span></button>
        ${viewsSpan}
      </div>`;
  };

  // ── Icon-Lookup ────────────────────────────────────────────
  const iconFor = (entry) => {
    if (icons.bySlug[entry.slug]) return icons.bySlug[entry.slug];
    if (icons.byCategory[entry.kategorie]) return icons.byCategory[entry.kategorie];
    return icons.byCategory['Substanz'] || '';
  };

  // ── Querverlinkung ────────────────────────────────────────
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

  // ── Kachel-Rendering ──────────────────────────────────────
  const tile = (entry) => {
    const li = document.createElement('li');
    li.dataset.slug = entry.slug;
    const sz = String(entry.szenario || '');
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'zutaten-tile';
    btn.dataset.slug = entry.slug;
    btn.dataset.kategorie = entry.kategorie;
    if (sz) btn.dataset.szenario = sz;
    if (entry.featured) btn.dataset.featured = 'true';
    btn.setAttribute('aria-pressed', 'false');
    btn.innerHTML = `
      <span class="zutaten-tile-icon" aria-hidden="true">${iconFor(entry)}</span>
      <span class="zutaten-tile-name">${entry.shortName || entry.name}</span>
      <span class="zutaten-tile-cat">${(entry.unterkategorie || entry.kategorie || '').toUpperCase()}</span>
    `;
    li.appendChild(btn);
    return li;
  };

  const renderGrid = (filterKey) => {
    // Detail entfernen, wenn vorhanden
    const oldDetail = gridEl.querySelector('.zutaten-detail-row');
    if (oldDetail) oldDetail.remove();

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

  // ── Detail-Bereich, inline nach der Reihe der geklickten Kachel ────
  const renderDetailContent = (entry) => {
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
    return `
      <div class="zutaten-detail-icon" aria-hidden="true">${iconFor(entry)}</div>
      <div class="zutaten-detail-body">
        <h2 class="zutaten-detail-name">${entry.name}</h2>
        <p class="zutaten-detail-meta">${entry.kategorie} · ${entry.unterkategorie || ''}</p>
        <p class="zutaten-line"><em class="zutaten-field-label">Werbung:</em> ${link(entry.werbung)}</p>
        ${wirkungParas}
        ${actionsBarHtml(entry.slug, entry.name)}
        ${ref}
      </div>
    `;
  };

  /**
   * Finde alle <li>-Kacheln in derselben visuellen Zeile wie tileLi.
   * Die <li> sind selbst Grid-Items, gemessen wird direkt am <li>.
   */
  const findRowSiblings = (tileLi) => {
    const allTiles = Array.from(gridEl.querySelectorAll('li[data-slug]'));
    const rowTop = tileLi.getBoundingClientRect().top;
    return allTiles.filter(l => Math.abs(l.getBoundingClientRect().top - rowTop) < 2);
  };

  // ── Actions-Bar Wire-Up ───────────────────────────────────
  // Wird pro openEntry() aufgerufen, weil das Detail bei jedem Klick
  // frisch in den DOM injiziert wird (kein einmaliger Page-Load wie bei
  // news/detail.js). Idempotente Likes via localStorage + Worker-POST.
  const wireActionsBar = (root, entry) => {
    const bar = root.querySelector('.zutaten-actions');
    if (!bar) return;
    const id = bar.getAttribute('data-news-id');
    if (!id) return;

    const likeBtn      = bar.querySelector('.zutaten-like');
    const likeIcon     = bar.querySelector('.zutaten-like-icon');
    const likeCountEl  = bar.querySelector('.zutaten-like-count');
    const shareBtn     = bar.querySelector('.zutaten-share');
    const viewsWrap    = bar.querySelector('.zutaten-views');
    const viewsCountEl = bar.querySelector('.zutaten-views-count');

    const likedKey  = 'hl-liked:'  + id;
    const viewedKey = 'hl-viewed:' + id;
    let liked = false;
    try { liked = localStorage.getItem(likedKey) === '1'; } catch {}

    const fmt = (n) => (typeof n === 'number' && n > 0 ? String(n) : '');
    const setHeart = () => {
      if (likeIcon) likeIcon.innerHTML = liked ? SVG_HEART_FILLED : SVG_HEART_OUTLINE;
      if (likeBtn) {
        likeBtn.setAttribute('aria-pressed', liked ? 'true' : 'false');
        likeBtn.classList.toggle('is-liked', liked);
      }
    };
    setHeart();

    let counted = false;
    try { counted = sessionStorage.getItem(viewedKey) === '1'; } catch {}
    const showView = (n) => {
      if (!viewsWrap || !viewsCountEl) return;
      const t = fmt(n);
      if (t) { viewsCountEl.textContent = t; viewsWrap.hidden = false; }
    };

    if (window.Counters) {
      if (!counted) {
        window.Counters.view(id).then((r) => {
          try { sessionStorage.setItem(viewedKey, '1'); } catch {}
          if (r && typeof r.views === 'number') showView(r.views);
        });
      }
      window.Counters.getCounts([id]).then(({ views, likes }) => {
        if (likeCountEl) likeCountEl.textContent = fmt(likes[id]);
        if (counted) showView(views[id]);
      });
    }

    if (likeBtn) {
      likeBtn.addEventListener('click', () => {
        if (liked || !window.Counters) return;
        liked = true;
        try { localStorage.setItem(likedKey, '1'); } catch {}
        setHeart();
        window.Counters.like(id).then((r) => {
          if (r && typeof r.likes === 'number' && likeCountEl)
            likeCountEl.textContent = fmt(r.likes);
        });
      });
    }

    if (shareBtn) {
      shareBtn.addEventListener('click', async () => {
        const url = location.origin + location.pathname + '#' + entry.slug;
        const title = entry.name + ' — Substanz-Index — Mut zur Klarheit';
        if (navigator.share) {
          try { await navigator.share({ title, url }); } catch {}
          return;
        }
        try {
          await navigator.clipboard.writeText(url);
          const label = shareBtn.querySelector('.zutaten-share-label');
          if (label) {
            const prev = label.textContent;
            label.textContent = 'Link kopiert';
            shareBtn.classList.add('is-copied');
            setTimeout(() => {
              label.textContent = prev;
              shareBtn.classList.remove('is-copied');
            }, 1800);
          }
        } catch {}
      });
    }
  };

  const closeDetail = () => {
    const existing = gridEl.querySelector('.zutaten-detail-row');
    if (existing) existing.remove();
    gridEl.querySelectorAll('.zutaten-tile[aria-pressed="true"]')
      .forEach(b => b.setAttribute('aria-pressed', 'false'));
    if (window.location.hash) {
      history.replaceState(null, '', window.location.pathname);
    }
  };

  const openEntry = (slug, updateHash = true) => {
    const entry = entries.find(e => e.slug === slug);
    if (!entry) return;

    const tileLi = gridEl.querySelector(`li[data-slug="${slug}"]`);
    if (!tileLi) return;

    // Existierendes Detail entfernen
    const oldDetail = gridEl.querySelector('.zutaten-detail-row');
    if (oldDetail) oldDetail.remove();

    // Alle Kacheln entaktivieren
    gridEl.querySelectorAll('.zutaten-tile[aria-pressed="true"]')
      .forEach(b => b.setAttribute('aria-pressed', 'false'));

    // Reihe der geklickten Kachel finden
    const rowSiblings = findRowSiblings(tileLi);
    const lastInRow = rowSiblings[rowSiblings.length - 1];

    // Detail-Reihe konstruieren
    const detailRow = document.createElement('li');
    detailRow.className = 'zutaten-detail-row';
    const detail = document.createElement('article');
    detail.className = 'zutaten-detail';
    detail.setAttribute('aria-live', 'polite');
    detail.innerHTML = renderDetailContent(entry);
    detailRow.appendChild(detail);

    // Nach der letzten Kachel der Reihe einfügen
    lastInRow.insertAdjacentElement('afterend', detailRow);

    // Like/Share/Views verdrahten (pro openEntry, weil Detail bei jedem
    // Klick frisch in den DOM injiziert wird).
    wireActionsBar(detail, entry);

    // Kachel als aktiv markieren
    const btn = tileLi.querySelector('.zutaten-tile');
    if (btn) btn.setAttribute('aria-pressed', 'true');

    if (updateHash) history.replaceState(null, '', '#' + slug);
  };

  // ── Filter-Buttons ────────────────────────────────────────
  filterEl.addEventListener('click', (ev) => {
    const btn = ev.target.closest('button[data-filter]');
    if (!btn) return;
    filterEl.querySelectorAll('button').forEach(b =>
      b.setAttribute('aria-pressed', b === btn ? 'true' : 'false')
    );
    renderGrid(btn.dataset.filter);
  });

  // ── Grid-Klicks ───────────────────────────────────────────
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

  gridEl.addEventListener('mouseover', (ev) => {
    const link = ev.target.closest('.zutaten-xref');
    if (!link) return;
    clearTimeout(hideTimer);
    clearTimeout(showTimer);
    showTimer = setTimeout(() => showTooltip(link), 220);
  });
  gridEl.addEventListener('mouseout', (ev) => {
    if (!ev.target.closest('.zutaten-xref')) return;
    clearTimeout(showTimer);
    hideTimer = setTimeout(hideTooltip, 120);
  });
  gridEl.addEventListener('click', (ev) => {
    const link = ev.target.closest('.zutaten-xref');
    if (!link) return;
    ev.preventDefault();
    clearTimeout(showTimer);
    hideTooltip();
    const entry = entries.find(en => en.name === link.dataset.term);
    if (entry) openEntry(entry.slug);
  });

  // Bei Viewport-Resize Detail neu positionieren (Reihen verschieben sich)
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const activeBtn = gridEl.querySelector('.zutaten-tile[aria-pressed="true"]');
      if (activeBtn) openEntry(activeBtn.dataset.slug, false);
    }, 150);
  });

  // ── Initial-Render ────────────────────────────────────────
  // Erst nach DOMContentLoaded rendern, damit Stylesheet und Container-Breite
  // beim Layout-Pass des Grids final sind. Verhindert das Initial-Render-2-Spalten-
  // Phänomen, das durch zu früh berechnetes auto-fill ausgelöst wurde.
  const init = () => {
    // SSG-Markup respektieren: wenn das Listing bereits server-side mit
    // Kacheln gefüllt ist, nicht überschreiben. Nur bei leerem Grid (z.B.
    // beim ersten lokalen Laden ohne Build) clientseitig rendern.
    if (gridEl.children.length === 0) renderGrid('all');
    const hash = window.location.hash.slice(1);
    if (hash) {
      const entry = entries.find(e => e.slug === hash);
      if (entry) openEntry(entry.slug, false);
    }
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
