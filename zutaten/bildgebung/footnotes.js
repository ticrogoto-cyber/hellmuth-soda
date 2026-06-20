/*
 * bildgebung/footnotes.js
 *
 * Progressive disclosure for source lists.
 *
 * Attaches to every `.bildgebung-sources` element on the page. When the inner
 * `<ol>` holds more than 3 items, items at index 3+ are hidden via the
 * `is-hidden` class and a toggle button is appended after the list. Clicking
 * the button reveals or re-hides the overflow items and updates its label.
 *
 * Phase 1: standalone, no dependencies, no persistence. Safe to load on any
 * page; if no `.bildgebung-sources` is present the script is a no-op.
 */
(function () {
  'use strict';

  var HIDDEN_CLASS = 'is-hidden';
  var VISIBLE_COUNT = 3;
  var LABEL_MORE = 'Mehr sehen';
  var LABEL_LESS = 'Weniger zeigen';

  /**
   * Wire up a single `.bildgebung-sources` container: hide overflow items
   * and append a toggle button when there are more than VISIBLE_COUNT items.
   */
  function enhance(container) {
    // Idempotency guard: skip containers we've already processed.
    if (container.dataset.footnotesReady === '1') return;

    var ol = container.querySelector('ol');
    if (!ol) return;

    // Only direct `<li>` children count — nested lists should not affect totals.
    var items = [];
    for (var i = 0; i < ol.children.length; i++) {
      if (ol.children[i].tagName === 'LI') items.push(ol.children[i]);
    }

    // Nothing to collapse if the list is short enough.
    if (items.length <= VISIBLE_COUNT) {
      container.dataset.footnotesReady = '1';
      return;
    }

    // Hide overflow items beyond the visible threshold.
    var hiddenCount = 0;
    for (var j = VISIBLE_COUNT; j < items.length; j++) {
      items[j].classList.add(HIDDEN_CLASS);
      hiddenCount++;
    }

    // Build the toggle button: "Mehr sehen (<span data-count>N</span>)".
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

    // Toggle handler: flip every overflow item's hidden state, swap label.
    btn.addEventListener('click', function () {
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      var nextExpanded = !expanded;

      for (var k = VISIBLE_COUNT; k < items.length; k++) {
        items[k].classList.toggle(HIDDEN_CLASS, !nextExpanded);
      }

      btn.setAttribute('aria-expanded', String(nextExpanded));
      // Rebuild label while preserving the count span.
      btn.textContent = '';
      btn.appendChild(document.createTextNode(
        (nextExpanded ? LABEL_LESS : LABEL_MORE) + ' ('
      ));
      btn.appendChild(countSpan);
      btn.appendChild(document.createTextNode(')'));
    });

    // Insert directly after the `<ol>` so the button sits inside the container.
    if (ol.nextSibling) {
      ol.parentNode.insertBefore(btn, ol.nextSibling);
    } else {
      ol.parentNode.appendChild(btn);
    }

    container.dataset.footnotesReady = '1';
  }

  /**
   * Find and enhance every `.bildgebung-sources` on the page. Silent no-op
   * when there are none.
   */
  function init() {
    var containers = document.querySelectorAll('.bildgebung-sources');
    for (var i = 0; i < containers.length; i++) {
      enhance(containers[i]);
    }
  }

  // Run at DOMContentLoaded, or immediately if the document is already parsed.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
