// Site-wide UI: Tagline-Rotation und Hamburger-Menü.
(() => {
  const TAGLINES = [
    "Klarheit ist das neue High.",
    "Intensität statt Intoxikation."
  ];

  const init = () => {
    // Tagline: zufällig eine der Optionen einsetzen
    const tagline = TAGLINES[Math.floor(Math.random() * TAGLINES.length)];
    document.querySelectorAll('[data-tagline]').forEach(el => {
      el.textContent = tagline;
    });

    // Hamburger-Menü
    const toggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    if (!toggle || !menu) return;

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

    // Klick außerhalb schließt das Menü
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

    // Sticky-Header: Schatten ab ein paar Pixel Scroll
    const top = document.querySelector('.top');
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
