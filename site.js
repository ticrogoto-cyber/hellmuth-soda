// Site-wide UI: Tagline-Rotation, Hamburger-Menü, Mobile-Mount der Suche.
(() => {
  const TAGLINES = [
    "Klarheit ist das neue High.",
    "Intensität statt Intoxikation."
  ];

  const MOBILE_QUERY = '(max-width: 767px)';

  const init = () => {
    // Tagline: zufällig eine der Optionen einsetzen
    const tagline = TAGLINES[Math.floor(Math.random() * TAGLINES.length)];
    document.querySelectorAll('[data-tagline]').forEach(el => {
      el.textContent = tagline;
    });

    // Hamburger-Menü
    const toggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    const top = document.querySelector('.top');
    const search = top ? top.querySelector('.top-search') : null;

    // Suche zwischen Header (Desktop) und Dropdown (Mobile) verschieben.
    const mq = window.matchMedia(MOBILE_QUERY);
    const mountSearch = () => {
      if (!search || !menu || !top) return;
      const inMenu = menu.contains(search);
      if (mq.matches && !inMenu) {
        menu.insertBefore(search, menu.firstChild);
      } else if (!mq.matches && inMenu) {
        // Vor dem Menü zurück in den Header.
        top.insertBefore(search, menu);
      }
    };
    mountSearch();
    if (mq.addEventListener) mq.addEventListener('change', mountSearch);
    else if (mq.addListener) mq.addListener(mountSearch);

    if (toggle && menu) {
      const setOpen = (open) => {
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        menu.setAttribute('aria-hidden', open ? 'false' : 'true');
        if (open) menu.setAttribute('data-open', '');
        else menu.removeAttribute('data-open');
      };

      toggle.addEventListener('click', (ev) => {
        ev.stopPropagation();
        const open = toggle.getAttribute('aria-expanded') !== 'true';
        setOpen(open);
      });

      // Klick außerhalb schließt das Menü (außer auf Suchfeld/Treffer)
      document.addEventListener('click', (ev) => {
        if (toggle.getAttribute('aria-expanded') !== 'true') return;
        if (menu.contains(ev.target) || toggle.contains(ev.target)) return;
        setOpen(false);
      });

      // ESC schließt das Menü
      document.addEventListener('keydown', (ev) => {
        if (ev.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
          setOpen(false);
          toggle.focus();
        }
      });
    }

    // Menü-Dropdowns (Diagnose / Zutaten):
    //  - Desktop (Hover): das CSS regelt das Aufklappen via :hover. JS sorgt nur
    //    fuer Click/Tap-Toggle (Mobile + Touch-Geraete) und ESC/Click-outside.
    //  - aria-expanded wird konsistent gepflegt.
    const groups = top ? Array.from(top.querySelectorAll('.menu-group')) : [];
    const closeAllGroups = (except) => {
      for (const g of groups) {
        if (g === except) continue;
        g.removeAttribute('data-open');
        const t = g.querySelector('.menu-trigger');
        if (t) t.setAttribute('aria-expanded', 'false');
      }
    };
    for (const g of groups) {
      const trigger = g.querySelector('.menu-trigger');
      if (!trigger) continue;
      trigger.addEventListener('click', (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        const wasOpen = g.hasAttribute('data-open');
        closeAllGroups(g);
        if (wasOpen) {
          g.removeAttribute('data-open');
          trigger.setAttribute('aria-expanded', 'false');
        } else {
          g.setAttribute('data-open', '');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    }
    // Klick ausserhalb einer offenen Gruppe schliesst sie.
    document.addEventListener('click', (ev) => {
      const t = ev.target;
      const inside = groups.some(g => g.contains(t));
      if (!inside) closeAllGroups(null);
    });
    // ESC schliesst Dropdowns.
    document.addEventListener('keydown', (ev) => {
      if (ev.key === 'Escape') closeAllGroups(null);
    });

    // Sticky-Header: Schatten ab ein paar Pixel Scroll
    if (top) {
      const onScroll = () => {
        if (window.scrollY > 8) top.classList.add('is-scrolled');
        else top.classList.remove('is-scrolled');
      };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
