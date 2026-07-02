// Latent-Space-Visualisierung, Ausbaustufe 2: von Punktwolke zu Instrument.
// THREE.Points mit weichen Sprite-Punkten (radialer Gradient), Tiefennebel
// auf Hintergrundfarbe, sizeAttenuation, Bodengitter, Kamera-Fit auf die
// Bounding-Sphere. Einheitlich dunkle Punkte; Hervorhebung ausschließlich
// über Filter-Kopplung (Tabelle und Wolke zeigen dieselbe Menge) oder
// Legende. Cluster-Labels und Zeitachse nur im Overlay.
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

(() => {
  const items = (window.NOVA_DATA && window.NOVA_DATA.items) || [];
  const clusters = (window.NOVA_DATA && window.NOVA_DATA.clusters) || [];
  const pts = items.filter((it) => Array.isArray(it.coords) && it.coords.length === 3);
  const section = document.getElementById('nova-space');
  if (!section || pts.length < 4) return;

  try {
    const probe = document.createElement('canvas');
    if (!probe.getContext('webgl2') && !probe.getContext('webgl')) return;
  } catch { return; }

  const TATMITTEL = ['Fahrzeug', 'Messer', 'Machete-Hiebwaffe', 'Schusswaffe', 'Körpergewalt', 'Sprengsatz', 'Säure', 'Sonstiges'];
  const LABELS = {
    'Fahrzeug': 'Fahrzeug', 'Messer': 'Messer', 'Machete-Hiebwaffe': 'Machete / Hiebwaffe',
    'Schusswaffe': 'Schusswaffe', 'Körpergewalt': 'Körpergewalt', 'Sprengsatz': 'Sprengsatz',
    'Säure': 'Säure', 'Sonstiges': 'Sonstiges',
  };
  const FOG_COLOR = new THREE.Color('#f8f8f8');
  const INK = new THREE.Color('#1c1c1c');
  // Designrot aus der CSS-Variable (Hervorhebung aktiver Auswahl).
  const rotVar = getComputedStyle(document.documentElement).getPropertyValue('--nova-rot').trim();
  const ROT = new THREE.Color(rotVar || '#7b1f2a');
  const DIM_FILTER = 0.08;
  const DIM_LEGEND = 0.12;

  // Zeitachse: reale Zeitpositionen (Verdichtung soll sichtbar werden).
  const times = pts.map((p) => new Date(p.date).getTime());
  const tMin = Math.min(...times);
  const tMax = Math.max(...times);
  const birth = times.map((t) => (tMax > tMin ? (t - tMin) / (tMax - tMin) : 0));
  const FADE = 0.012; // Einblendlänge in Zeitachsen-Einheiten (~0,4 s bei 32 s)
  const T_END = 1 + FADE * 2;

  const tooltip = document.getElementById('nova-space-tooltip');
  const modal = document.getElementById('nova-space-modal');

  // Geteilter Zustand: Legende (eine Kategorie) + Filter (aus nova.js).
  let highlighted = null;
  const spaces = [];

  const filterMatched = () => {
    const st = window.NOVA_FILTER;
    return st && st.matched instanceof Set ? st.matched : null;
  };

  // Zustand eines Punkts: Opazität plus Rot-Markierung. Bei aktiver
  // Auswahl (Filter oder Legende) färben sich betroffene Punkte im
  // Designrot, nicht betroffene bleiben abgeblendet grau.
  function currentState(p) {
    const matched = filterMatched();
    const fOk = matched === null || matched.has(p.slug);
    const lOk = highlighted === null || (p.merkmale && p.merkmale.tatmittel === highlighted);
    const selectionActive = matched !== null || highlighted !== null;
    const alpha = Math.min(fOk ? 1 : DIM_FILTER, lOk ? 1 : DIM_LEGEND);
    return { alpha, hot: selectionActive && fOk && lOk ? 1 : 0 };
  }

  function setHighlight(cat) {
    highlighted = highlighted === cat ? null : cat;
    spaces.forEach((s) => { s.updateAlphas(); s.syncLegend(); });
  }

  function buildLegend(el) {
    el.innerHTML = '';
    TATMITTEL.forEach((cat) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.setAttribute('aria-pressed', 'false');
      btn.dataset.cat = cat;
      btn.textContent = LABELS[cat];
      btn.addEventListener('click', () => setHighlight(cat));
      el.appendChild(btn);
    });
  }

  // Weicher Punkt-Sprite mit Tiefennebel; Größe mit Distanz-Attenuation.
  const VERT = `
    attribute float aSize;
    attribute float aAlpha;
    attribute float aHot;
    attribute float aBirth;
    attribute float aIndex;
    uniform float uScale;
    uniform float uPixelRatio;
    uniform float uTime;
    uniform float uFade;
    uniform float uPulseIndex;
    uniform float uPulseAmp;
    varying float vAlpha;
    varying float vHot;
    varying float vFogDepth;
    void main() {
      vec4 mv = modelViewMatrix * vec4(position, 1.0);
      float fadeIn = clamp((uTime - aBirth) / uFade, 0.0, 1.0);
      float isPulse = step(abs(aIndex - uPulseIndex), 0.5);
      float size = aSize * (1.0 + isPulse * uPulseAmp);
      gl_PointSize = size * uScale * uPixelRatio / max(0.12, -mv.z);
      vAlpha = aAlpha * fadeIn;
      vHot = aHot;
      vFogDepth = -mv.z;
      gl_Position = projectionMatrix * mv;
    }`;
  const FRAG = `
    precision mediump float;
    uniform vec3 uColor;
    uniform vec3 uHotColor;
    uniform vec3 uFogColor;
    uniform float uFogNear;
    uniform float uFogFar;
    varying float vAlpha;
    varying float vHot;
    varying float vFogDepth;
    void main() {
      float d = distance(gl_PointCoord, vec2(0.5));
      float disc = smoothstep(0.5, 0.16, d);
      if (disc * vAlpha < 0.01) discard;
      float fogF = smoothstep(uFogNear, uFogFar, vFogDepth);
      vec3 base = mix(uColor, uHotColor, vHot);
      vec3 col = mix(base, uFogColor, fogF * 0.72 * (1.0 - vHot * 0.5));
      gl_FragColor = vec4(col, disc * vAlpha * 0.9);
    }`;

  // Cluster-Label als Canvas-Sprite (Versalien, Laufweite, Hellgrau).
  function makeLabelSprite(text) {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    const fontPx = 26 * ratio;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const setFont = () => {
      ctx.font = `${fontPx}px Printvetica, sans-serif`;
      if ('letterSpacing' in ctx) ctx.letterSpacing = `${6 * ratio}px`;
    };
    setFont();
    const label = text.toUpperCase();
    const w = Math.ceil(ctx.measureText(label).width + 24 * ratio);
    const h = Math.ceil(fontPx * 1.7);
    canvas.width = w;
    canvas.height = h;
    setFont();
    ctx.fillStyle = '#b8b8b8';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.fillText(label, w / 2, h / 2);
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    const mat = new THREE.SpriteMaterial({
      map: tex,
      transparent: true,
      depthTest: false,
      depthWrite: false,
      opacity: 0.9,
    });
    const sprite = new THREE.Sprite(mat);
    const worldH = 0.14;
    sprite.scale.set(worldH * (w / h), worldH, 1);
    sprite.renderOrder = -1; // vor den Punkten gezeichnet: verdeckt nie
    return sprite;
  }

  class Space {
    constructor(stageEl, legendEl, opts) {
      this.stage = stageEl;
      this.legend = legendEl;
      this.opts = opts || {};
      this.running = false;
      this.lastInteraction = 0;
      this.playing = false;
      this.playT = T_END;
      buildLegend(legendEl);

      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(38, 1, 0.01, 60);
      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      this.renderer.setClearColor(0x000000, 0);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      stageEl.appendChild(this.renderer.domElement);

      this.group = new THREE.Group();
      this.scene.add(this.group);

      // Bounding-Sphere der Wolke für Kamera-Fit und Nebel-Distanzen.
      const bs = new THREE.Sphere();
      bs.setFromPoints(pts.map((p) => new THREE.Vector3(...p.coords)));
      this.sphere = bs;

      // Punkte
      const n = pts.length;
      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array(n * 3);
      const size = new Float32Array(n);
      const alpha = new Float32Array(n);
      const hot = new Float32Array(n);
      const birthA = new Float32Array(n);
      const indexA = new Float32Array(n);
      pts.forEach((p, i) => {
        pos.set(p.coords, i * 3);
        size[i] = p.relevance === 10 ? 1.75 : 1.0;
        alpha[i] = 1.0;
        hot[i] = 0.0;
        birthA[i] = birth[i];
        indexA[i] = i;
      });
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      geo.setAttribute('aSize', new THREE.BufferAttribute(size, 1));
      geo.setAttribute('aAlpha', new THREE.BufferAttribute(alpha, 1));
      geo.setAttribute('aHot', new THREE.BufferAttribute(hot, 1));
      geo.setAttribute('aBirth', new THREE.BufferAttribute(birthA, 1));
      geo.setAttribute('aIndex', new THREE.BufferAttribute(indexA, 1));

      this.uniforms = {
        uColor: { value: INK },
        uHotColor: { value: ROT },
        uFogColor: { value: FOG_COLOR },
        uFogNear: { value: 1 },
        uFogFar: { value: 6 },
        uScale: { value: 26 },
        uPixelRatio: { value: Math.min(window.devicePixelRatio || 1, 2) },
        uTime: { value: T_END },
        uFade: { value: FADE },
        uPulseIndex: { value: -1 },
        uPulseAmp: { value: 0 },
      };
      const mat = new THREE.ShaderMaterial({
        vertexShader: VERT,
        fragmentShader: FRAG,
        uniforms: this.uniforms,
        transparent: true,
        depthWrite: false,
      });
      this.points = new THREE.Points(geo, mat);
      this.points.renderOrder = 1;
      this.group.add(this.points);
      this.alphaAttr = geo.getAttribute('aAlpha');
      this.hotAttr = geo.getAttribute('aHot');

      // Bodengitter als räumlicher Anker, kaum sichtbar.
      const grid = new THREE.GridHelper(3.4, 17, 0xe7e7e7, 0xeeeeee);
      grid.position.y = -(this.sphere.radius + 0.18);
      grid.material.transparent = true;
      grid.material.opacity = 0.55;
      this.group.add(grid);

      // Cluster-Labels: nur im Overlay sichtbar.
      if (this.opts.labels && clusters.length) {
        const lg = new THREE.Group();
        clusters.forEach((c) => {
          const s = makeLabelSprite(c.label);
          s.position.set(c.center[0], c.center[1], c.center[2]);
          lg.add(s);
        });
        this.group.add(lg);
      }

      // Kamera-Fit: Wolke füllt ~78 % des Fensters, Startwinkel leicht erhöht.
      this.fitCamera();

      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.enableDamping = true;
      this.controls.dampingFactor = 0.08;
      this.controls.enablePan = false;
      this.controls.enableZoom = !!this.opts.zoom;
      this.controls.rotateSpeed = 0.7;
      this.controls.addEventListener('start', () => { this.lastInteraction = performance.now(); });
      this.controls.addEventListener('change', () => { this.lastInteraction = performance.now(); });

      this.raycaster = new THREE.Raycaster();
      this.raycaster.params.Points = { threshold: 0.05 };
      this.pointer = new THREE.Vector2();
      this.downAt = null;
      this.pulse = null;

      const canvas = this.renderer.domElement;
      canvas.addEventListener('pointermove', (ev) => this.onPointerMove(ev));
      canvas.addEventListener('pointerleave', () => this.clearHover());
      canvas.addEventListener('pointerdown', (ev) => { this.downAt = [ev.clientX, ev.clientY]; });
      canvas.addEventListener('pointerup', (ev) => this.onPointerUp(ev));

      this.resize = this.resize.bind(this);
      this.loop = this.loop.bind(this);
      new ResizeObserver(this.resize).observe(stageEl);
      this.resize();
      this.updateAlphas();
    }

    fitCamera() {
      const r = this.sphere.radius * 1.06;
      const fovY = (this.camera.fov * Math.PI) / 180;
      const aspect = Math.max(this.camera.aspect, 0.6);
      const fovX = 2 * Math.atan(Math.tan(fovY / 2) * aspect);
      const dist = r / (Math.sin(Math.min(fovY, fovX) / 2) * 0.78);
      // Leicht erhöhter Startwinkel statt frontal.
      const phi = THREE.MathUtils.degToRad(64);
      const theta = THREE.MathUtils.degToRad(-24);
      this.camera.position.setFromSphericalCoords(dist, phi, theta);
      this.camera.lookAt(0, 0, 0);
      this.uniforms.uFogNear.value = Math.max(0.1, dist - r * 0.55);
      this.uniforms.uFogFar.value = dist + r * 1.25;
      this.uniforms.uScale.value = this.stage.clientHeight * 0.115;
    }

    resize() {
      const w = this.stage.clientWidth;
      const h = this.stage.clientHeight;
      if (!w || !h) return;
      this.camera.aspect = w / h;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(w, h, false);
      this.fitCamera();
    }

    updateAlphas() {
      pts.forEach((p, i) => {
        const st = currentState(p);
        this.alphaAttr.array[i] = st.alpha;
        this.hotAttr.array[i] = st.hot;
      });
      this.alphaAttr.needsUpdate = true;
      this.hotAttr.needsUpdate = true;
    }

    syncLegend() {
      this.legend.querySelectorAll('button[data-cat]').forEach((b) => {
        b.setAttribute('aria-pressed', b.dataset.cat === highlighted ? 'true' : 'false');
      });
    }

    pick(ev) {
      const rect = this.renderer.domElement.getBoundingClientRect();
      this.pointer.x = ((ev.clientX - rect.left) / rect.width) * 2 - 1;
      this.pointer.y = -((ev.clientY - rect.top) / rect.height) * 2 + 1;
      this.raycaster.setFromCamera(this.pointer, this.camera);
      const hits = this.raycaster.intersectObject(this.points);
      for (const h of hits) {
        const i = h.index;
        // Ausgeblendete (Filter/Zeitachse) Punkte nicht treffen.
        if (this.alphaAttr.array[i] > 0.5 && birth[i] <= this.playT) return i;
      }
      return -1;
    }

    onPointerMove(ev) {
      const id = this.pick(ev);
      this.renderer.domElement.style.cursor = id >= 0 ? 'pointer' : '';
      if (id >= 0 && tooltip) {
        const p = pts[id];
        tooltip.innerHTML = '';
        const t = document.createElement('span');
        t.className = 'nova-space-tt-title';
        t.textContent = p.title;
        const d = document.createElement('span');
        d.className = 'nova-space-tt-date';
        d.textContent = String(p.date).slice(0, 10);
        tooltip.appendChild(t);
        tooltip.appendChild(d);
        tooltip.style.left = ev.clientX + 14 + 'px';
        tooltip.style.top = ev.clientY + 14 + 'px';
        tooltip.removeAttribute('hidden');
      } else if (tooltip) {
        tooltip.setAttribute('hidden', '');
      }
    }

    clearHover() {
      if (tooltip) tooltip.setAttribute('hidden', '');
    }

    onPointerUp(ev) {
      if (!this.downAt) return;
      const dx = ev.clientX - this.downAt[0];
      const dy = ev.clientY - this.downAt[1];
      this.downAt = null;
      if (Math.hypot(dx, dy) > 5) return;
      const id = this.pick(ev);
      if (id >= 0) location.href = pts[id].href;
    }

    pulsePoint(index) {
      this.pulse = index >= 0 ? { index, t0: performance.now() } : null;
      if (index < 0) {
        this.uniforms.uPulseIndex.value = -1;
        this.uniforms.uPulseAmp.value = 0;
      }
    }

    setPlayT(t) {
      this.playT = t;
      this.uniforms.uTime.value = t;
    }

    start() {
      if (this.running) return;
      this.running = true;
      this.resize();
      this.lastFrame = performance.now();
      this.loop();
    }

    stop() {
      this.running = false;
      this.clearHover();
    }

    loop() {
      if (!this.running) return;
      requestAnimationFrame(this.loop);
      const now = performance.now();
      const dt = Math.min(0.1, (now - this.lastFrame) / 1000);
      this.lastFrame = now;

      if (now - this.lastInteraction > 2500 && !this.playing) {
        this.group.rotation.y += 0.0016;
      }
      // Zeitachsen-Abspielen (nur Overlay-Instanz nutzt playing).
      if (this.playing) {
        this.setPlayT(Math.min(T_END, this.playT + dt / this.opts.playSeconds * (1 + FADE * 2)));
        if (this.onPlayTick) this.onPlayTick(this.playT);
        if (this.playT >= T_END) {
          this.playing = false;
          if (this.onPlayEnd) this.onPlayEnd();
        }
      }
      // Puls (Tabellen-Hover): zwei weiche Wellen, dann aus.
      if (this.pulse) {
        const el = (now - this.pulse.t0) / 900;
        if (el >= 1) {
          this.pulse = null;
          this.uniforms.uPulseIndex.value = -1;
          this.uniforms.uPulseAmp.value = 0;
        } else {
          this.uniforms.uPulseIndex.value = this.pulse.index;
          this.uniforms.uPulseAmp.value = Math.abs(Math.sin(el * Math.PI * 2)) * 1.1;
        }
      }
      this.controls.update();
      this.renderer.render(this.scene, this.camera);
    }
  }

  // ── Kompaktes Fenster ─────────────────────────────────────────────
  const compact = new Space(
    document.getElementById('nova-space-stage'),
    document.getElementById('nova-space-legend'),
    { zoom: false }
  );
  spaces.push(compact);
  section.removeAttribute('hidden');
  const noteEl = document.getElementById('nova-space-note');
  if (noteEl) noteEl.removeAttribute('hidden');
  compact.resize();

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (modal && !modal.hasAttribute('hidden')) return;
      if (e.isIntersecting) compact.start(); else compact.stop();
    });
  }, { threshold: 0.05 });
  io.observe(section);

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { spaces.forEach((s) => s.stop()); }
    else if (modal && !modal.hasAttribute('hidden')) { full && full.start(); }
    else { compact.start(); }
  });

  // ── Filter-Kopplung: Tabelle und Wolke zeigen dieselbe Menge ─────
  document.addEventListener('nova:filterchange', () => {
    spaces.forEach((s) => s.updateAlphas());
  });

  // ── Tabellen-Hover: zugehörigen Punkt aufpulsieren ────────────────
  const slugIndex = new Map(pts.map((p, i) => [p.slug, i]));
  document.addEventListener('nova:rowhover', (ev) => {
    const slug = ev.detail && ev.detail.slug;
    const idx = slug != null && slugIndex.has(slug) ? slugIndex.get(slug) : -1;
    compact.pulsePoint(idx);
  });

  // ── Overlay mit Zeitachse ─────────────────────────────────────────
  let full = null;
  const expandBtn = document.getElementById('nova-space-expand');
  const closeBtn = modal ? modal.querySelector('.nova-space-close') : null;
  const playBtn = document.getElementById('nova-time-play');
  const slider = document.getElementById('nova-time-slider');
  const yearEl = document.getElementById('nova-time-year');
  const PLAY_SECONDS = 32;

  const yearOf = (t) => {
    const ms = tMin + Math.min(1, Math.max(0, t)) * (tMax - tMin);
    return new Date(ms).getFullYear();
  };

  function syncTimeUi(t) {
    if (slider) slider.value = String(Math.round(Math.min(1, t / (1 + FADE * 2)) * 1000));
    if (yearEl) yearEl.textContent = String(yearOf(t));
  }

  function setPlayButton(on) {
    if (!playBtn) return;
    playBtn.setAttribute('aria-pressed', on ? 'true' : 'false');
    playBtn.querySelector('.icon-play').toggleAttribute('hidden', on);
    playBtn.querySelector('.icon-pause').toggleAttribute('hidden', !on);
  }

  function openModal() {
    if (!modal) return;
    if (!full) {
      full = new Space(
        document.getElementById('nova-space-stage-full'),
        document.getElementById('nova-space-legend-full'),
        { zoom: true, labels: true, playSeconds: PLAY_SECONDS }
      );
      full.onPlayTick = (t) => syncTimeUi(t);
      full.onPlayEnd = () => { setPlayButton(false); syncTimeUi(T_END); };
      spaces.push(full);
    }
    modal.removeAttribute('hidden');
    document.body.classList.add('modal-open');
    compact.stop();
    full.syncLegend();
    full.updateAlphas();
    full.setPlayT(T_END);
    full.playing = false;
    setPlayButton(false);
    syncTimeUi(T_END);
    full.start();
    if (closeBtn) closeBtn.focus();
  }

  function closeModal() {
    if (!modal) return;
    modal.setAttribute('hidden', '');
    document.body.classList.remove('modal-open');
    if (full) { full.playing = false; full.setPlayT(T_END); full.stop(); }
    setPlayButton(false);
    compact.start();
  }

  if (playBtn) {
    playBtn.addEventListener('click', () => {
      if (!full) return;
      if (full.playing) {
        full.playing = false;
        setPlayButton(false);
      } else {
        if (full.playT >= T_END - 0.001) full.setPlayT(0);
        full.playing = true;
        setPlayButton(true);
      }
    });
  }
  if (slider) {
    slider.addEventListener('input', () => {
      if (!full) return;
      full.playing = false;
      setPlayButton(false);
      const t = (Number(slider.value) / 1000) * (1 + FADE * 2);
      full.setPlayT(t);
      if (yearEl) yearEl.textContent = String(yearOf(t));
    });
  }

  if (expandBtn) expandBtn.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (ev) => {
      if (ev.target === modal) closeModal();
    });
  }
  document.addEventListener('keydown', (ev) => {
    if (ev.key === 'Escape' && modal && !modal.hasAttribute('hidden')) closeModal();
  });
})();
