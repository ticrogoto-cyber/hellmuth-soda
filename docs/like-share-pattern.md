# Like / Share Pattern (News-Modul)

Dokumentation der Like (Herz) / Share (Teilen) / Aufrufe-Komponente aus dem News-Modul,
mit Replikationsplan für die Substanz-Detail-Pages (`/zutaten/`).

Quellen:
- `/home/user/hellmuth-soda/news/counters.js` — Worker-Client (`window.Counters`)
- `/home/user/hellmuth-soda/news/detail.js` — Interaktions-Handler (Click → like/view)
- `/home/user/hellmuth-soda/news/news.css` (Z. 303–340) — Styling der `.news-actions`-Leiste
- `/home/user/hellmuth-soda/pipeline/render.mjs` (Funktion `actionsBarHtml`, Z. 255–268) — generiert das Markup beim Build
- Beispiel-Render: `/home/user/hellmuth-soda/news/science/adoleszentes-nikotin-hinterlasst-eine-microglia-spur/index.html`

---

## 1. Markup

Verbatim aus einem gerenderten Artikel. `data-news-id` ist der Schlüssel; der
Heart-Icon-Wrapper, der `.news-like-count`-Span, das Share-SVG mit Label und der
versteckte `.news-views`-Span sind alle Pflicht (das JS hängt sich an diese Klassen).

```html
<div class="news-actions" data-news-id="science/adoleszentes-nikotin-hinterlasst-eine-microglia-spur">
  <button type="button" class="news-act news-like" aria-pressed="false" aria-label="Gefällt mir">
    <span class="news-like-icon">
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path fill="currentColor" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z"/>
      </svg>
    </span>
    <span class="news-like-count"></span>
  </button>
  <button type="button" class="news-act news-share" aria-label="Teilen">
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z"/>
    </svg>
    <span class="news-share-label">Teilen</span>
  </button>
  <span class="news-act news-views" hidden>
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/>
    </svg>
    <span class="news-views-count"></span> Aufrufe
  </span>
</div>
```

Zwei zusätzliche Klassen werden vom JS toggle-weise gesetzt:

- `.news-like.is-liked` → nach Klick, dauerhaft (localStorage)
- `.news-share.is-copied` → kurzzeitig (1800 ms) nach Clipboard-Fallback

Der Heart wechselt sein SVG-Pfad-Markup (outline → filled) durch direktes `innerHTML`-Setzen am `.news-like-icon`.

---

## 2. CSS

Aus `/home/user/hellmuth-soda/news/news.css` (Z. 303–340). Der Scope `.news-detail`
ist die `<main>` der Detailseite.

```css
/* Actions-Bar auf der Detailseite: Like, Teilen, Aufrufe. Dezent, links
   ausgerichtet auf den Satzspiegel. Inline-SVGs erben currentColor. */
.news-detail .news-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.25rem;
  margin: 2rem 0 0;
  padding-top: 1.25rem;
  border-top: 1px solid var(--line);
  max-width: var(--news-measure);
  font-family: 'Printvetica', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.62rem;
  color: var(--muted);
}
.news-detail .news-act {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  background: none;
  border: none;
  color: inherit;
  padding: 0;
  font: inherit;
  letter-spacing: inherit;
  text-transform: inherit;
  cursor: pointer;
}
.news-detail .news-act svg { width: 0.95rem; height: 0.95rem; }
.news-detail .news-like { cursor: pointer; }
.news-detail .news-like:hover,
.news-detail .news-share:hover { color: var(--ink); }
.news-detail .news-like.is-liked { color: var(--ink); }
.news-detail .news-like.is-liked .news-like-icon { color: var(--ink); }
.news-detail .news-share.is-copied { color: var(--ink); }
.news-detail .news-views { cursor: default; }
.news-detail .news-views[hidden] { display: none; }
```

Abhängigkeiten an Custom Properties: `--line`, `--ink`, `--muted`, `--news-measure`.
Erste drei kommen aus `styles.css` (global). `--news-measure` ist news-spezifisch
und müsste für Substanz entweder entfernt oder durch einen eigenen Wert ersetzt werden
(siehe Replikationsplan).

---

## 3. JS-Handler

### `counters.js` — Worker-Client (`window.Counters`)

Definiert die globalen API-Funktionen. Endpoint:
`https://hellmuth-counters.ticro-goto.workers.dev` (mit Custom-Route-Option auf `/api`).

```js
async function getCounts(ids) {
  const list = (ids || []).filter(Boolean);
  if (!list.length) return { views: {}, likes: {} };
  try {
    const res = await fetch(WORKER_BASE + '/counts?ids=' + encodeURIComponent(list.join(',')));
    if (!res.ok) throw new Error('bad status');
    const data = await res.json();
    return { views: data.views || {}, likes: data.likes || {} };
  } catch { return { views: {}, likes: {} }; }
}

async function bump(kind, id) {
  if (!id) return null;
  try {
    const res = await fetch(WORKER_BASE + '/' + kind, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    if (!res.ok) throw new Error('bad status');
    return await res.json();
  } catch { return null; }
}

window.Counters = {
  base: WORKER_BASE,
  getCounts,
  view: (id) => bump('view', id),
  like: (id) => bump('like', id),
};
```

### `detail.js` — Interaktion auf der Detailseite

Komplettes Modul (gekürzte Zitate für Lesbarkeit, vollständig in `/home/user/hellmuth-soda/news/detail.js`):

```js
(() => {
  const bar = document.querySelector('.news-actions');
  if (!bar) return;
  const id = bar.getAttribute('data-news-id');
  if (!id) return;

  const HEART_OUTLINE = '<svg ...>...</svg>';  // Outline-Pfad
  const HEART_FILLED  = '<svg ...>...</svg>';  // Filled-Pfad

  const likeBtn      = bar.querySelector('.news-like');
  const likeIcon     = bar.querySelector('.news-like-icon');
  const likeCountEl  = bar.querySelector('.news-like-count');
  const shareBtn     = bar.querySelector('.news-share');
  const viewsWrap    = bar.querySelector('.news-views');
  const viewsCountEl = bar.querySelector('.news-views-count');

  const likedKey  = 'hl-liked:'  + id;
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

  // View pro Browser-Session nur einmal bumpen (gegen Reload-Inflation).
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
        if (r && typeof r.likes === 'number' && likeCountEl)
          likeCountEl.textContent = fmt(r.likes);
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
          setTimeout(() => {
            label.textContent = prev;
            shareBtn.classList.remove('is-copied');
          }, 1800);
        }
      } catch {}
    });
  }
})();
```

Verhalten in Stichworten:

- **Like**: idempotent pro Browser. Erster Klick → `localStorage['hl-liked:<id>'] = '1'`, Heart füllt sich, POST `/like`. Folgende Klicks: no-op (Guard `if (liked) return`).
- **Share**: bevorzugt `navigator.share({title, url})` (mobile native sheet). Fallback: `navigator.clipboard.writeText(url)`, Label-Swap auf „Link kopiert" für 1800 ms plus Klasse `.is-copied`. Der Titel wird per Regex `/ — News.*$/` aus `document.title` extrahiert.
- **View**: 1× pro Tab-Session (`sessionStorage`-Guard), persistiert serverseitig als Summe. Anzeige erst, wenn der Worker eine Zahl > 0 zurückgibt.

---

## 4. Identification key (`data-news-id`)

Das einzige Identifier-Feld ist das `data-news-id`-Attribut auf `.news-actions`.

- **Format**: `${rubrik}/${slug}` — z. B. `science/adoleszentes-nikotin-hinterlasst-eine-microglia-spur` oder `hellmuth/<slug>`.
- **Quelle**: In `pipeline/render.mjs` Z. 256 generiert: `` const id = `${rec.rubrik}/${rec.slug}` ``.
- **Verwendung**: derselbe String wird als KV-Schlüssel im Worker abgelegt und als Bestandteil der localStorage-Keys (`hl-liked:<id>`, `hl-viewed:<id>`) verwendet.

Es ist also weder die URL-Pathname noch ein DB-Primärschlüssel, sondern eine
explizit gewählte, stabile, slug-basierte ID. Für die Substanz-Pages bietet sich
analog `substanz/<slug>` an (siehe Replikationsplan).

---

## 5. Persistence

Zweischichtig:

| Layer | Was | Wo |
|---|---|---|
| Client | Liked-Flag pro Artikel | `localStorage['hl-liked:<id>']` = `'1'` |
| Client | View-Throttle pro Tab | `sessionStorage['hl-viewed:<id>']` = `'1'` |
| Server | Like-Summe + View-Summe | Cloudflare-Worker `hellmuth-counters` (KV-backed) |

### Worker-Endpoints

Basis: `https://hellmuth-counters.ticro-goto.workers.dev`
(alternativ `/api`, falls Custom Route eingerichtet).

| Methode | Pfad | Body / Query | Response-Form |
|---|---|---|---|
| GET  | `/counts?ids=a,b,c` | comma-separated IDs in der URL | `{ views: { id: n, ... }, likes: { id: n, ... } }` |
| POST | `/view` | JSON `{ id }` | `{ views: <number> }` (neue Summe) |
| POST | `/like` | JSON `{ id }` | `{ likes: <number> }` (neue Summe) |

Fehler sind nie fatal — der Client schluckt sie und zeigt einfach keinen Counter
(`fmt(n)` rendert `0` als Leerstring, der View-Span bleibt `hidden`, bis eine Zahl > 0 ankommt).

---

## 6. Replikationsplan: Substanz-Detail

Die Substanz-Pages sind eine Single-Page-App: `/zutaten/index.html` rendert das
Grid, beim Klick wird das Detail (`.zutaten-detail`) inline als `<li class="zutaten-detail-row">`
in den Grid-Container injiziert (siehe `openEntry()` in `zutaten.js`, Z. 118–154).
Es gibt **keine** separaten Detail-HTML-Files — jede Substanz wird durch
`#<slug>`-Hash adressiert.

Daraus folgt: die Actions-Bar muss bei jedem `openEntry()` neu in das frisch
gerenderte Detail eingefügt **und** ihre Click-Handler müssen neu verdrahtet
werden (im Gegensatz zum News-Modul, wo `detail.js` einmal pro Seitenaufruf läuft).

### A. `/zutaten/index.html`

1. **Counters-Skript einbinden** (vor `zutaten.js`):

   ```html
   <script src="../news/counters.js?v=1"></script>
   ```

   Anmerkung: `counters.js` ist news-agnostisch — es definiert nur `window.Counters`.
   Es liegt aktuell unter `/news/`; bei Verwendung außerhalb des News-Moduls
   wäre eine Verschiebung nach `/site/counters.js` o. ä. sauberer, aber nicht zwingend.

   Reihenfolge der Skripte am Seitenende:
   ```html
   <script src="icons.js"></script>
   <script src="substances.js"></script>
   <script src="../site.js?v=7"></script>
   <script src="../search.js?v=1"></script>
   <script src="../news/counters.js?v=1"></script>   <!-- NEU -->
   <script src="zutaten.js"></script>
   ```

   Keine Änderung am sonstigen Markup nötig — die Bar wird per JS injiziert.

### B. `/zutaten/zutaten.js`

1. **Markup-Helper hinzufügen** (oben im IIFE, neben den anderen Konstanten):

   ```js
   const SVG_HEART_OUTLINE = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z"/></svg>';
   const SVG_HEART_FILLED  = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"/></svg>';
   const SVG_SHARE = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z"/></svg>';
   const SVG_EYE   = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>';

   const actionsBarHtml = (slug) => {
     const id = `substanz/${slug}`;
     return `
       <div class="zutaten-actions" data-substanz-id="${id}">
         <button type="button" class="zutaten-act zutaten-like" aria-pressed="false" aria-label="Gefällt mir"><span class="zutaten-like-icon">${SVG_HEART_OUTLINE}</span><span class="zutaten-like-count"></span></button>
         <button type="button" class="zutaten-act zutaten-share" aria-label="Teilen">${SVG_SHARE}<span class="zutaten-share-label">Teilen</span></button>
         <span class="zutaten-act zutaten-views" hidden>${SVG_EYE}<span class="zutaten-views-count"></span> Aufrufe</span>
       </div>`;
   };
   ```

2. **`renderDetailContent(entry)` ergänzen** (Z. 74–96), Actions-Bar an das
   Ende des `.zutaten-detail-body` anhängen:

   ```js
   return `
     <div class="zutaten-detail-icon" aria-hidden="true">${iconFor(entry)}</div>
     <div class="zutaten-detail-body">
       <h2 class="zutaten-detail-name">${entry.name}</h2>
       <p class="zutaten-detail-meta">${entry.kategorie} · ${entry.unterkategorie || ''}</p>
       <p class="zutaten-line"><em class="zutaten-field-label">Werbung:</em> ${link(entry.werbung)}</p>
       ${wirkungParas}
       ${ref}
       ${actionsBarHtml(entry.slug)}    <!-- NEU -->
     </div>
   `;
   ```

3. **Wire-Up-Funktion hinzufügen** und am Ende von `openEntry()` aufrufen
   (nach `detailRow.appendChild(detail)`):

   ```js
   const wireActionsBar = (root, entry) => {
     const bar = root.querySelector('.zutaten-actions');
     if (!bar) return;
     const id = bar.getAttribute('data-substanz-id');
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
       likeIcon.innerHTML = liked ? SVG_HEART_FILLED : SVG_HEART_OUTLINE;
       likeBtn.setAttribute('aria-pressed', liked ? 'true' : 'false');
       likeBtn.classList.toggle('is-liked', liked);
     };
     setHeart();

     let counted = false;
     try { counted = sessionStorage.getItem(viewedKey) === '1'; } catch {}
     const showView = (n) => {
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
       Counters.getCounts([id]).then(({ views, likes }) => {
         likeCountEl.textContent = fmt(likes[id]);
         if (counted) showView(views[id]);
       });
     }

     likeBtn.addEventListener('click', () => {
       if (liked || !window.Counters) return;
       liked = true;
       try { localStorage.setItem(likedKey, '1'); } catch {}
       setHeart();
       Counters.like(id).then((r) => {
         if (r && typeof r.likes === 'number')
           likeCountEl.textContent = fmt(r.likes);
       });
     });

     shareBtn.addEventListener('click', async () => {
       // Deep-Link auf die Kachel via Hash
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
   };
   ```

   Aufruf in `openEntry()`, direkt nach dem Einfügen der Detail-Row:

   ```js
   lastInRow.insertAdjacentElement('afterend', detailRow);
   wireActionsBar(detail, entry);   // NEU
   ```

   Wichtig: weil das Detail bei jedem Substanz-Wechsel neu gerendert wird, muss
   `wireActionsBar` bei **jedem** `openEntry()` neu laufen — anders als im
   News-Modul, wo `detail.js` einmal beim Page-Load läuft.

### C. `/zutaten/zutaten.css`

CSS 1:1 aus `news.css` portieren, Selektor-Prefix `news-` → `zutaten-`:

```css
/* Actions-Bar im Substanz-Detail: Like, Teilen, Aufrufe. */
.zutaten-detail .zutaten-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.25rem;
  margin: 1.5rem 0 0;
  padding-top: 1.25rem;
  border-top: 1px solid var(--line);
  font-family: 'Printvetica', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.62rem;
  color: var(--muted);
}
.zutaten-detail .zutaten-act {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  background: none;
  border: none;
  color: inherit;
  padding: 0;
  font: inherit;
  letter-spacing: inherit;
  text-transform: inherit;
  cursor: pointer;
}
.zutaten-detail .zutaten-act svg { width: 0.95rem; height: 0.95rem; }
.zutaten-detail .zutaten-like { cursor: pointer; }
.zutaten-detail .zutaten-like:hover,
.zutaten-detail .zutaten-share:hover { color: var(--ink); }
.zutaten-detail .zutaten-like.is-liked,
.zutaten-detail .zutaten-like.is-liked .zutaten-like-icon { color: var(--ink); }
.zutaten-detail .zutaten-share.is-copied { color: var(--ink); }
.zutaten-detail .zutaten-views { cursor: default; }
.zutaten-detail .zutaten-views[hidden] { display: none; }
```

Unterschiede zur News-Variante:

- `max-width: var(--news-measure)` **entfernt** — im Zutaten-Detail bestimmt das
  Grid-Layout die Breite, nicht ein news-eigener Lesemaß.
- `margin: 1.5rem 0 0` statt `2rem 0 0` — die Bar sitzt eng am Ende des
  Detail-Body und nicht am Seitenende.

### D. Identification key für Substanzen

ID-Schema: **`substanz/<entry.slug>`** (analog `science/<slug>`, `hellmuth/<slug>`).

Beispiel: `substanz/ashwagandha` → Worker-KV-Key, localStorage-Keys
`hl-liked:substanz/ashwagandha`, `hl-viewed:substanz/ashwagandha`.

Damit kollidieren News- und Substanz-IDs garantiert nicht — selbst wenn ein
Substanz-Slug zufällig identisch zu einem News-Slug ist, trennt das Rubrik-Präfix.

### E. Server-Seite

Keine Server-Änderung nötig — der Worker akzeptiert beliebige IDs als Strings
(KV ist schemafrei). Sobald Substanz-Likes/Views eintreffen, legt der Worker
neue KV-Einträge unter dem Präfix `substanz/` an.

### F. Checkliste

- [ ] `<script src="../news/counters.js?v=1"></script>` in `zutaten/index.html` vor `zutaten.js`.
- [ ] In `zutaten/zutaten.js`: SVG-Konstanten + `actionsBarHtml()` + `wireActionsBar()` hinzufügen.
- [ ] `renderDetailContent()` um `${actionsBarHtml(entry.slug)}` ergänzen.
- [ ] `openEntry()` ruft `wireActionsBar(detail, entry)` nach dem Einfügen auf.
- [ ] CSS-Block (`.zutaten-actions` etc.) ans Ende von `zutaten/zutaten.css` anhängen.
- [ ] Smoke-Test: Detail öffnen → Heart klicken → Reload → Heart bleibt gefüllt; Share klickt → Native Sheet (Mobile) bzw. „Link kopiert" (Desktop); Aufruf-Counter erscheint nach Worker-Response.
- [ ] Smoke-Test: andere Substanz öffnen → eigene Counter, kein Bleed-over.
