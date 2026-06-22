/*
 * bildgebung/footnotes.js
 *
 * Zweiteilige Logik fuer den Fussnoten-Apparat der Bildgebung-Detailseiten.
 *
 * Teil A — Progressive Disclosure ("Mehr sehen"-Toggle)
 *   Wenn ein `.bildgebung-sources`-Block mehr als 3 Eintraege hat, werden
 *   Eintraege ab Index 3 versteckt und ein Button blendet den Rest ein.
 *
 * Teil B — Substack-Stil-Fussnoten (Tooltip / Bottom-Sheet)
 *   Inline-Marker `<sup class="bildgebung-fn" data-fn="N">N</sup>` oeffnen
 *   beim Klick ein Popover mit dem Vollzitat aus `<li id="bildgebung-fn-N">`.
 *   Auf <=720px wird daraus eine Bottom-Sheet. Reverse-Links im Quellen-
 *   block (`<a class="bildgebung-source-back" href="#bildgebung-fnref-N">`)
 *   scrollen smooth zum ersten Marker im Text.
 *
 * Beide Teile sind no-ops, wenn die jeweils erforderlichen DOM-Knoten
 * nicht existieren — die Datei kann gefahrlos auf jeder Seite geladen
 * werden.
 */
(function () {
  'use strict';

  /* ============================================================
     Teil A — Mehr-sehen-Toggle
     ============================================================ */

  var HIDDEN_CLASS = 'is-hidden';
  var VISIBLE_COUNT = 3;
  var LABEL_MORE = 'Mehr sehen';
  var LABEL_LESS = 'Weniger zeigen';

  function enhanceProgressive(container) {
    if (container.dataset.footnotesReady === '1') return;
    var ol = container.querySelector('ol');
    if (!ol) return;
    var items = [];
    for (var i = 0; i < ol.children.length; i++) {
      if (ol.children[i].tagName === 'LI') items.push(ol.children[i]);
    }
    if (items.length <= VISIBLE_COUNT) {
      container.dataset.footnotesReady = '1';
      return;
    }
    var hiddenCount = 0;
    for (var j = VISIBLE_COUNT; j < items.length; j++) {
      items[j].classList.add(HIDDEN_CLASS);
      hiddenCount++;
    }
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'bildgebung-sources-toggle';
    btn.setAttribute('aria-expanded', 'false');
    btn.appendChild(document.createTextNode(LABEL_MORE + ' ('));
    var countSpan = document.createElement('span');
    countSpan.setAttribute('data-count', '');
    countSpan.textContent = String(hiddenCount);
    btn.appendChild(countSpan);
    btn.appendChild(document.createTextNode(')'));
    btn.addEventListener('click', function () {
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      var nextExpanded = !expanded;
      for (var k = VISIBLE_COUNT; k < items.length; k++) {
        items[k].classList.toggle(HIDDEN_CLASS, !nextExpanded);
      }
      btn.setAttribute('aria-expanded', String(nextExpanded));
      btn.textContent = '';
      btn.appendChild(document.createTextNode(
        (nextExpanded ? LABEL_LESS : LABEL_MORE) + ' ('
      ));
      btn.appendChild(countSpan);
      btn.appendChild(document.createTextNode(')'));
    });
    if (ol.nextSibling) ol.parentNode.insertBefore(btn, ol.nextSibling);
    else ol.parentNode.appendChild(btn);
    container.dataset.footnotesReady = '1';
  }

  /* ============================================================
     Teil B — Tooltip / Bottom-Sheet fuer Inline-Marker
     ============================================================ */

  var tooltipEl = null;
  var overlayEl = null;
  var currentTrigger = null;

  // Liest das Vollzitat aus `<li id="bildgebung-fn-N">`. Die fuehrende
  // Reverse-Link-Span ("1.") wird abgeschnitten — sie gehoert zur
  // Quellenliste, nicht ins Tooltip. Rueckgabe ist HTML, damit `<em>`
  // (Journal kursiv) erhalten bleibt.
  function citationHtmlForFn(n) {
    var li = document.getElementById('bildgebung-fn-' + n);
    if (!li) return '';
    var clone = li.cloneNode(true);
    var back = clone.querySelector('.bildgebung-source-back');
    if (back) back.remove();
    return clone.innerHTML.trim();
  }

  function ensureTooltip() {
    if (tooltipEl) return tooltipEl;
    tooltipEl = document.createElement('div');
    tooltipEl.className = 'bildgebung-fn-tooltip';
    tooltipEl.setAttribute('role', 'tooltip');
    tooltipEl.setAttribute('aria-live', 'polite');
    var close = document.createElement('button');
    close.type = 'button';
    close.className = 'bildgebung-fn-tooltip-close';
    close.setAttribute('aria-label', 'Schliessen');
    close.textContent = '×'; // ×
    close.addEventListener('click', function (ev) {
      ev.stopPropagation();
      hideTooltip();
    });
    tooltipEl.appendChild(close);
    var content = document.createElement('div');
    content.className = 'bildgebung-fn-tooltip-content';
    tooltipEl.appendChild(content);
    document.body.appendChild(tooltipEl);
    return tooltipEl;
  }

  function ensureOverlay() {
    if (overlayEl) return overlayEl;
    overlayEl = document.createElement('div');
    overlayEl.className = 'bildgebung-fn-overlay';
    overlayEl.addEventListener('click', hideTooltip);
    document.body.appendChild(overlayEl);
    return overlayEl;
  }

  function isMobile() {
    return window.matchMedia && window.matchMedia('(max-width: 720px)').matches;
  }

  // Positioniert den Tooltip (Desktop). Versucht oberhalb des Triggers,
  // faellt auf unterhalb zurueck, wenn nicht genug Platz. Begrenzt
  // horizontal so, dass der Tooltip nicht ueber den Viewport-Rand laeuft.
  function positionTooltip(trigger) {
    var rect = trigger.getBoundingClientRect();
    var ttRect = tooltipEl.getBoundingClientRect();
    var scrollY = window.scrollY || window.pageYOffset;
    var scrollX = window.scrollX || window.pageXOffset;
    var GAP = 8;
    var preferTop = rect.top - GAP - ttRect.height;
    var top = preferTop >= 0
      ? preferTop + scrollY
      : rect.bottom + GAP + scrollY;
    var left = rect.left + scrollX + (rect.width / 2) - (ttRect.width / 2);
    // Horizontal clamping mit 8px Sicherheits-Padding vom Viewport-Rand.
    var minLeft = scrollX + 8;
    var maxLeft = scrollX + window.innerWidth - ttRect.width - 8;
    if (left < minLeft) left = minLeft;
    if (left > maxLeft) left = maxLeft;
    tooltipEl.style.top = top + 'px';
    tooltipEl.style.left = left + 'px';
  }

  function showTooltip(trigger) {
    var n = trigger.getAttribute('data-fn');
    if (!n) return;
    var html = citationHtmlForFn(n);
    if (!html) return;
    ensureTooltip();
    if (isMobile()) ensureOverlay();
    currentTrigger = trigger;
    var content = tooltipEl.querySelector('.bildgebung-fn-tooltip-content');
    content.innerHTML = '<span class="bildgebung-fn-tooltip-num">' + n + '.</span>' + html;
    // Mobile bekommt fixed bottom-sheet; Desktop wird per JS positioniert.
    if (isMobile()) {
      tooltipEl.style.top = '';
      tooltipEl.style.left = '';
      document.body.classList.add('bildgebung-fn-open');
    } else {
      // Vor dem Sichtbarmachen: erst rendern (visibility hidden, opacity 0
      // aber dim, damit getBoundingClientRect korrekte Werte liefert).
      tooltipEl.style.visibility = 'hidden';
      tooltipEl.style.opacity = '0';
      // Reflow: sicherstellen, dass content gemessen wird.
      // (display ist nicht none, also misst der Browser.)
      tooltipEl.classList.add('is-visible');
      positionTooltip(trigger);
      tooltipEl.style.visibility = '';
      tooltipEl.style.opacity = '';
    }
    tooltipEl.classList.add('is-visible');
  }

  function hideTooltip() {
    if (!tooltipEl) return;
    tooltipEl.classList.remove('is-visible');
    document.body.classList.remove('bildgebung-fn-open');
    currentTrigger = null;
  }

  // Klick irgendwohin ausserhalb von Tooltip oder Trigger schliesst.
  function onDocClick(ev) {
    if (!tooltipEl || !tooltipEl.classList.contains('is-visible')) return;
    if (tooltipEl.contains(ev.target)) return;
    if (currentTrigger && currentTrigger.contains(ev.target)) return;
    // Trigger-Klick auf einen anderen Marker faengt der Marker-Handler ab.
    hideTooltip();
  }

  // ESC schliesst, Enter/Space auf einem Marker oeffnet.
  function onKeyDown(ev) {
    if (ev.key === 'Escape') {
      hideTooltip();
      return;
    }
    var t = ev.target;
    if (t && t.classList && t.classList.contains('bildgebung-fn')) {
      if (ev.key === 'Enter' || ev.key === ' ') {
        ev.preventDefault();
        if (currentTrigger === t && tooltipEl && tooltipEl.classList.contains('is-visible')) {
          hideTooltip();
        } else {
          showTooltip(t);
        }
      }
    }
  }

  // Hauptklick-Handler. Delegiert vom document, damit dynamisch eingefuegte
  // Marker auch funktionieren (kein Re-Wiring noetig).
  function onClick(ev) {
    var t = ev.target;
    if (!t) return;
    // 1) Inline-Marker im Fliesstext oeffnet Tooltip
    var marker = t.closest && t.closest('.bildgebung-fn');
    if (marker) {
      ev.preventDefault();
      if (currentTrigger === marker && tooltipEl && tooltipEl.classList.contains('is-visible')) {
        hideTooltip();
      } else {
        showTooltip(marker);
      }
      return;
    }
    // 2) Reverse-Link aus dem Quellenblock scrollt zur ersten Marker-Stelle
    var back = t.closest && t.closest('.bildgebung-source-back');
    if (back) {
      var href = back.getAttribute('href') || '';
      var m = href.match(/#bildgebung-fnref-(\d+)/);
      if (m) {
        ev.preventDefault();
        var target = document.getElementById('bildgebung-fnref-' + m[1]);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'center' });
          // Kurze Hervorhebung, damit die Augen das Ziel finden.
          target.style.background = 'rgba(107, 15, 26, 0.18)';
          setTimeout(function () { target.style.background = ''; }, 1100);
        }
      }
      return;
    }
  }

  /* ============================================================
     Boot
     ============================================================ */

  function init() {
    // Teil A: Mehr-sehen-Toggle pro Quellenblock.
    var containers = document.querySelectorAll('.bildgebung-sources');
    for (var i = 0; i < containers.length; i++) enhanceProgressive(containers[i]);

    // Teil B: Globale Click-/Key-Listener fuer Marker und Reverse-Links.
    // Nur wenn es ueberhaupt einen Marker oder Reverse-Link gibt — sonst
    // hat das Skript auf Listenseiten oder Index nichts zu tun.
    if (document.querySelector('.bildgebung-fn, .bildgebung-source-back')) {
      document.addEventListener('click', onClick);
      document.addEventListener('keydown', onKeyDown);
      // Klick-ausserhalb schliesst — separat, damit der Marker-Klick
      // selbst nicht vom outside-Handler abgefangen wird (siehe guards).
      document.addEventListener('click', onDocClick, true);
      // Beim Resize neu positionieren, wenn ein Tooltip offen ist.
      window.addEventListener('resize', function () {
        if (currentTrigger && tooltipEl && tooltipEl.classList.contains('is-visible')) {
          if (!isMobile()) positionTooltip(currentTrigger);
        }
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
