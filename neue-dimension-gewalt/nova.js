// Client-side rendering for Nova (Kriminologische Chronik).
// Reads window.NOVA_DATA, renders the table with pagination (40 per page).
(function () {
  'use strict';
  var PER_PAGE = 40;
  var data = (window.NOVA_DATA && window.NOVA_DATA.items) || [];
  var tbody = document.getElementById('nova-tbody');
  var pagination = document.getElementById('nova-pagination');
  var countEl = document.getElementById('nova-count');
  if (!tbody || !data.length) {
    if (countEl) countEl.textContent = 'Keine Einträge vorhanden.';
    return;
  }
  var totalPages = Math.ceil(data.length / PER_PAGE);
  var currentPage = 1;

  // Parse page from URL hash
  var hashPage = parseInt(location.hash.replace('#seite-', ''), 10);
  if (hashPage > 0 && hashPage <= totalPages) currentPage = hashPage;

  function formatDate(iso) {
    if (!iso) return '';
    return String(iso).slice(0, 10);
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
      var tdScore = document.createElement('td');
      tdScore.className = 'nova-td-score';
      tdScore.textContent = item.relevance != null ? item.relevance : '';
      tr.appendChild(tdDate);
      tr.appendChild(tdOrt);
      tr.appendChild(tdTitle);
      tr.appendChild(tdScore);
      tbody.appendChild(tr);
    }

    if (countEl) {
      countEl.textContent = data.length + ' Einträge' + (totalPages > 1 ? ' · Seite ' + page + ' von ' + totalPages : '');
    }

    renderPagination();
    location.hash = page > 1 ? 'seite-' + page : '';
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

  renderPage(currentPage);
})();
