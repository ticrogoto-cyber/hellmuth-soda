(function () {
  'use strict';
  var PER_PAGE = 40;
  var allData = (window.NOVA_DATA && window.NOVA_DATA.items) || [];
  var tbody = document.getElementById('nova-tbody');
  var pagination = document.getElementById('nova-pagination');
  var countEl = document.getElementById('nova-count');
  var filterEl = document.getElementById('nova-filter');
  if (!tbody || !allData.length) {
    if (countEl) countEl.textContent = 'Keine Einträge vorhanden.';
    return;
  }

  // Filterzustand: je Dimension ein Set gewählter Werte. Leeres Set = keine
  // Einschränkung. Innerhalb einer Dimension ODER, zwischen Dimensionen UND.
  var DIMS = ['tatmittel', 'tatkontext', 'betroffene', 'systemversagen'];
  var selected = { tatmittel: {}, tatkontext: {}, betroffene: {}, systemversagen: {} };

  function dimActive(dim) {
    for (var k in selected[dim]) if (selected[dim][k]) return true;
    return false;
  }

  function anyFilterActive() {
    for (var i = 0; i < DIMS.length; i++) if (dimActive(DIMS[i])) return true;
    return false;
  }

  function matches(item) {
    var m = item.merkmale;
    for (var i = 0; i < DIMS.length; i++) {
      var dim = DIMS[i];
      if (!dimActive(dim)) continue;
      if (!m || !selected[dim][m[dim]]) return false;
    }
    return true;
  }

  var data = allData.slice();
  var totalPages = Math.ceil(data.length / PER_PAGE);
  var currentPage = 1;

  var hashPage = parseInt(location.hash.replace('#seite-', ''), 10);
  if (hashPage > 0 && hashPage <= totalPages) currentPage = hashPage;

  function formatDate(iso) {
    if (!iso) return '';
    return String(iso).slice(0, 10);
  }

  function applyFilters() {
    data = allData.filter(matches);
    totalPages = Math.max(1, Math.ceil(data.length / PER_PAGE));
    renderPage(1);
  }

  function renderPage(page) {
    currentPage = page;
    var start = (page - 1) * PER_PAGE;
    var slice = data.slice(start, start + PER_PAGE);
    tbody.innerHTML = '';
    for (var i = 0; i < slice.length; i++) {
      var item = slice[i];
      var tr = document.createElement('tr');
      var tdDate = document.createElement('td');
      tdDate.className = 'nova-td-date';
      tdDate.textContent = formatDate(item.date);
      var tdOrt = document.createElement('td');
      tdOrt.className = 'nova-td-ort';
      tdOrt.textContent = item.ort || '';
      var tdTitle = document.createElement('td');
      tdTitle.className = 'nova-td-title';
      var a = document.createElement('a');
      a.href = item.href;
      a.textContent = item.title;
      tdTitle.appendChild(a);
      if (item.relevance === 10) {
        var dagger = document.createElement('span');
        dagger.className = 'nova-dagger';
        dagger.textContent = ' ‡';
        tdTitle.appendChild(dagger);
      }
      tr.appendChild(tdDate);
      tr.appendChild(tdOrt);
      tr.appendChild(tdTitle);
      tbody.appendChild(tr);
    }

    if (!slice.length) {
      var trEmpty = document.createElement('tr');
      var tdEmpty = document.createElement('td');
      tdEmpty.colSpan = 3;
      tdEmpty.className = 'nova-td-empty';
      tdEmpty.textContent = 'Keine Einträge mit dieser Merkmalskombination.';
      trEmpty.appendChild(tdEmpty);
      tbody.appendChild(trEmpty);
    }

    if (countEl) {
      var label = anyFilterActive()
        ? data.length + ' von ' + allData.length + ' Einträgen'
        : data.length + ' Einträge';
      if (totalPages > 1) label += ' · Seite ' + page + ' von ' + totalPages;
      countEl.textContent = label;
    }

    renderPagination();
    if (page > 1) {
      location.hash = 'seite-' + page;
    } else if (location.hash) {
      history.replaceState(null, '', location.pathname + location.search);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function renderPagination() {
    pagination.innerHTML = '';
    if (totalPages <= 1) return;

    var prev = document.createElement('button');
    prev.textContent = '←';
    prev.disabled = currentPage <= 1;
    prev.addEventListener('click', function () { renderPage(currentPage - 1); });
    pagination.appendChild(prev);

    for (var p = 1; p <= totalPages; p++) {
      var btn = document.createElement('button');
      btn.textContent = p;
      if (p === currentPage) btn.setAttribute('aria-current', 'page');
      (function (pg) {
        btn.addEventListener('click', function () { renderPage(pg); });
      })(p);
      pagination.appendChild(btn);
    }

    var next = document.createElement('button');
    next.textContent = '→';
    next.disabled = currentPage >= totalPages;
    next.addEventListener('click', function () { renderPage(currentPage + 1); });
    pagination.appendChild(next);
  }

  // Filter-UI: Mehrfachauswahl per Chip-Toggle, »Alle« setzt alles zurück.
  // Zustand lebt im DOM (aria-pressed) und im selected-Objekt.
  if (filterEl) {
    filterEl.addEventListener('click', function (ev) {
      var btn = ev.target.closest('button');
      if (!btn) return;

      if (btn.hasAttribute('data-reset')) {
        selected = { tatmittel: {}, tatkontext: {}, betroffene: {}, systemversagen: {} };
        filterEl.querySelectorAll('button[data-val]').forEach(function (b) {
          b.setAttribute('aria-pressed', 'false');
        });
        btn.setAttribute('aria-pressed', 'true');
        applyFilters();
        return;
      }

      var dim = btn.dataset.dim;
      var val = btn.dataset.val;
      if (!dim || !val) return;
      var nowOn = btn.getAttribute('aria-pressed') !== 'true';
      btn.setAttribute('aria-pressed', nowOn ? 'true' : 'false');
      selected[dim][val] = nowOn;

      var resetBtn = filterEl.querySelector('button[data-reset]');
      if (resetBtn) resetBtn.setAttribute('aria-pressed', anyFilterActive() ? 'false' : 'true');
      applyFilters();
    });
  }

  renderPage(currentPage);
})();
