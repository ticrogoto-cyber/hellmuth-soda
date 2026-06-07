// Detailseiten-Interaktion: Aufruf zählen, Like (einmal pro Browser),
// Teilen (navigator.share, sonst Clipboard). Braucht window.Counters.
(() => {
  const bar = document.querySelector('.news-actions');
  if (!bar) return;
  const id = bar.getAttribute('data-news-id');
  if (!id) return;

  const HEART_OUTLINE =
    '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z"/></svg>';
  const HEART_FILLED =
    '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"/></svg>';

  const likeBtn = bar.querySelector('.news-like');
  const likeIcon = bar.querySelector('.news-like-icon');
  const likeCountEl = bar.querySelector('.news-like-count');
  const shareBtn = bar.querySelector('.news-share');
  const viewsWrap = bar.querySelector('.news-views');
  const viewsCountEl = bar.querySelector('.news-views-count');

  const likedKey = 'hl-liked:' + id;
  const viewedKey = 'hl-viewed:' + id;
  let liked = false;
  try { liked = localStorage.getItem(likedKey) === '1'; } catch {}

  const fmt = (n) => (typeof n === 'number' && n > 0 ? String(n) : '');
  const setHeart = () => {
    if (likeIcon) likeIcon.innerHTML = liked ? HEART_FILLED : HEART_OUTLINE;
    if (likeBtn) {
      likeBtn.setAttribute('aria-pressed', liked ? 'true' : 'false');
      likeBtn.classList.toggle('is-liked', liked);
    }
  };
  setHeart();

  // Aufruf zählen: einmal pro Browser-Session pro Artikel (vermeidet
  // Reload-Inflation), persistiert serverseitig als Gesamtzahl.
  let counted = false;
  try { counted = sessionStorage.getItem(viewedKey) === '1'; } catch {}
  const showView = (n) => {
    if (!viewsWrap || !viewsCountEl) return;
    const t = fmt(n);
    if (t) { viewsCountEl.textContent = t; viewsWrap.hidden = false; }
  };

  if (window.Counters) {
    if (!counted) {
      Counters.view(id).then((r) => {
        try { sessionStorage.setItem(viewedKey, '1'); } catch {}
        if (r && typeof r.views === 'number') showView(r.views);
      });
    }
    // Aktuelle Zahlen laden (Like-Count, und View-Count falls nicht gerade gezählt).
    Counters.getCounts([id]).then(({ views, likes }) => {
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
      Counters.like(id).then((r) => {
        if (r && typeof r.likes === 'number' && likeCountEl) likeCountEl.textContent = fmt(r.likes);
      });
    });
  }

  if (shareBtn) {
    shareBtn.addEventListener('click', async () => {
      const url = location.href;
      const title = document.title.replace(/ — News.*$/, '');
      if (navigator.share) {
        try { await navigator.share({ title, url }); } catch {}
        return;
      }
      try {
        await navigator.clipboard.writeText(url);
        const label = shareBtn.querySelector('.news-share-label');
        if (label) {
          const prev = label.textContent;
          label.textContent = 'Link kopiert';
          shareBtn.classList.add('is-copied');
          setTimeout(() => { label.textContent = prev; shareBtn.classList.remove('is-copied'); }, 1800);
        }
      } catch {}
    });
  }
})();
