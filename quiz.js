(() => {
  const root = document.getElementById('app');
  const progressEl = document.getElementById('progress');

  const data = window.QUIZ_DATA;
  if (!data) {
    root.innerHTML = '<p style="text-align:center;font-style:italic">Daten konnten nicht geladen werden.</p>';
    return;
  }
  const total = data.questions.length;

  let i = 0;
  let score = 0;

  const setProgress = (n) => {
    if (n < 0) { progressEl.textContent = ''; return; }
    progressEl.textContent = `Frage ${String(n + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
  };

  const renderIntro = () => {
    setProgress(-1);
    root.innerHTML = `
      <section class="intro">
        <h1>${data.title}</h1>
        <h2>${data.subtitle}</h2>
        <p>${data.intro}</p>
        <div class="center"><button class="btn" id="start">Beginnen</button></div>
      </section>`;
    document.getElementById('start').addEventListener('click', () => {
      i = 0; score = 0; renderQuestion();
    });
  };

  const renderQuestion = () => {
    setProgress(i);
    const q = data.questions[i];
    const shuffled = q.options
      .map((o, idx) => ({ ...o, idx }))
      .sort(() => Math.random() - 0.5);

    root.innerHTML = `
      <section class="q-screen">
        <h2 class="question">${q.q}</h2>
        <div class="options">
          ${shuffled.map(o => `<button class="option" data-s="${o.s}">${o.t}</button>`).join('')}
        </div>
      </section>`;

    root.querySelectorAll('.option').forEach(btn => {
      btn.addEventListener('click', () => {
        score += parseInt(btn.dataset.s, 10);
        i++;
        if (i < total) renderQuestion();
        else renderResult();
      });
    });
  };

  const renderResult = () => {
    setProgress(-1);
    const result = data.results.find(r => score <= r.max) || data.results[data.results.length - 1];
    const max = total * Math.max(...data.questions.flatMap(q => q.options.map(o => o.s)));

    const shareUrl = 'https://hellmuth-soda.de/';
    const shareText = `Ich bin »${result.label}« — ${result.tag} Sucht-Mythen-Quiz:`;
    const hasNativeShare = typeof navigator !== 'undefined' && typeof navigator.share === 'function';

    root.innerHTML = `
      <section class="result">
        <div class="score-num">${score}</div>
        <div class="score-of">von ${max} Punkten</div>
        <div class="label">${result.label}</div>
        <div class="tag">${result.tag}</div>
        <hr class="divider" />
        <p class="text">${result.text}</p>
        <div class="share">
          <div class="share-label">Ergebnis teilen</div>
          <div class="share-row">
            ${hasNativeShare ? '<button class="share-btn" id="share-native" type="button">Teilen</button>' : ''}
            <button class="share-btn" id="share-substack" type="button">Substack Notes</button>
            <a class="share-btn" id="share-whatsapp" href="https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}" target="_blank" rel="noopener">WhatsApp</a>
            <a class="share-btn" id="share-x" href="https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}" target="_blank" rel="noopener">X / Twitter</a>
            <button class="share-btn" id="share-copy" type="button">Link kopieren</button>
          </div>
          <div class="share-hint" id="share-hint" aria-live="polite"></div>
        </div>
        <button class="btn" id="restart">Noch einmal</button>
      </section>`;

    document.getElementById('restart').addEventListener('click', () => {
      i = 0; score = 0; renderQuestion();
    });

    const payload = `${shareText} ${shareUrl}`;
    const hintEl = document.getElementById('share-hint');

    const copyToClipboard = async (text) => {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.setAttribute('readonly', '');
        ta.style.position = 'absolute';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.select();
        let ok = false;
        try { ok = document.execCommand('copy'); } catch {}
        document.body.removeChild(ta);
        return ok;
      }
    };

    const flashBtn = (btn, label = 'Kopiert') => {
      const original = btn.dataset.original || btn.textContent;
      btn.dataset.original = original;
      btn.textContent = label;
      btn.classList.add('is-copied');
      setTimeout(() => {
        btn.textContent = original;
        btn.classList.remove('is-copied');
      }, 1600);
    };

    const showHint = (msg) => {
      if (!hintEl) return;
      hintEl.textContent = msg;
      clearTimeout(showHint._t);
      showHint._t = setTimeout(() => { hintEl.textContent = ''; }, 4000);
    };

    if (hasNativeShare) {
      document.getElementById('share-native').addEventListener('click', () => {
        navigator.share({ title: data.title, text: shareText, url: shareUrl }).catch(() => {});
      });
    }

    document.getElementById('share-substack').addEventListener('click', async (e) => {
      const btn = e.currentTarget;
      await copyToClipboard(payload);
      flashBtn(btn, 'Kopiert');
      showHint('Text kopiert — bei Substack Notes einfügen (Cmd/Strg+V).');
      window.open('https://substack.com/notes', '_blank', 'noopener');
    });

    document.getElementById('share-copy').addEventListener('click', async (e) => {
      await copyToClipboard(payload);
      flashBtn(e.currentTarget, 'Kopiert');
    });
  };

  renderIntro();
})();
