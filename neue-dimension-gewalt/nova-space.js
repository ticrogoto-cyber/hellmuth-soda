// Latent-Space-Visualisierung der Nova-Merkmalsprojektion.
// Three.js-Punktwolke über window.NOVA_DATA (coords aus dem Build-Schritt).
// Monochrom, Grauabstufungen nach Tatmittel, Score-10 leicht größer.
// Kompaktes Fenster + Overlay in voller Größe (Mechanik der Vokabular-Seite).
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

(() => {
  const items = (window.NOVA_DATA && window.NOVA_DATA.items) || [];
  const points = items.filter((it) => Array.isArray(it.coords) && it.coords.length === 3);
  const section = document.getElementById('nova-space');
  if (!section || points.length < 4) return;

  // WebGL-Verfügbarkeit prüfen; ohne WebGL bleibt die Sektion verborgen.
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
  // Grauabstufungen: dunkel bis hell, gleichmäßig über die Kategorien.
  const GRAYS = ['#1f1f1f', '#333333', '#474747', '#5b5b5b', '#6f6f6f', '#838383', '#979797', '#ababab'];
  const grayOf = (m) => {
    const i = m && m.tatmittel ? TATMITTEL.indexOf(m.tatmittel) : -1;
    return GRAYS[i === -1 ? GRAYS.length - 1 : i];
  };

  const tooltip = document.getElementById('nova-space-tooltip');
  const modal = document.getElementById('nova-space-modal');

  // Geteilter Hervorhebungszustand (nur eine Kategorie gleichzeitig aktiv).
  let highlighted = null;
  const spaces = [];

  function setHighlight(cat) {
    highlighted = highlighted === cat ? null : cat;
    spaces.forEach((s) => { s.recolor(); s.syncLegend(); });
  }

  function buildLegend(el) {
    el.innerHTML = '';
    TATMITTEL.forEach((cat) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.setAttribute('aria-pressed', 'false');
      btn.dataset.cat = cat;
      const dot = document.createElement('span');
      dot.className = 'nova-space-dot';
      dot.style.background = GRAYS[TATMITTEL.indexOf(cat)];
      btn.appendChild(dot);
      btn.appendChild(document.createTextNode(LABELS[cat]));
      btn.addEventListener('click', () => setHighlight(cat));
      el.appendChild(btn);
    });
  }

  class Space {
    constructor(stageEl, legendEl, opts) {
      this.stage = stageEl;
      this.legend = legendEl;
      this.opts = opts || {};
      this.running = false;
      this.lastInteraction = 0;
      buildLegend(legendEl);

      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(38, 1, 0.01, 50);
      this.camera.position.set(0, 0.35, 3.1);
      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      this.renderer.setClearColor(0x000000, 0);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      stageEl.appendChild(this.renderer.domElement);

      this.group = new THREE.Group();
      this.scene.add(this.group);

      // Dezente Lichtführung: weiches Ambient + eine Richtquelle, damit die
      // Kugeln plastisch bleiben, ohne Glanz oder Farbe.
      this.scene.add(new THREE.AmbientLight(0xffffff, 0.9));
      const dir = new THREE.DirectionalLight(0xffffff, 0.7);
      dir.position.set(2, 3, 4);
      this.scene.add(dir);

      const geo = new THREE.SphereGeometry(0.028, 16, 12);
      const mat = new THREE.MeshLambertMaterial();
      this.mesh = new THREE.InstancedMesh(geo, mat, points.length);
      this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      const dummy = new THREE.Object3D();
      points.forEach((p, i) => {
        dummy.position.set(p.coords[0], p.coords[1], p.coords[2]);
        const s = p.relevance === 10 ? 1.7 : 1.0;
        dummy.scale.set(s, s, s);
        dummy.updateMatrix();
        this.mesh.setMatrixAt(i, dummy.matrix);
      });
      this.group.add(this.mesh);
      this.recolor();

      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.enableDamping = true;
      this.controls.dampingFactor = 0.08;
      this.controls.enablePan = false;
      this.controls.enableZoom = !!this.opts.zoom;
      this.controls.rotateSpeed = 0.7;
      this.controls.addEventListener('start', () => { this.lastInteraction = performance.now(); });
      this.controls.addEventListener('change', () => { this.lastInteraction = performance.now(); });

      this.raycaster = new THREE.Raycaster();
      this.pointer = new THREE.Vector2();
      this.hovered = -1;
      this.downAt = null;

      const canvas = this.renderer.domElement;
      canvas.addEventListener('pointermove', (ev) => this.onPointerMove(ev));
      canvas.addEventListener('pointerleave', () => this.clearHover());
      canvas.addEventListener('pointerdown', (ev) => { this.downAt = [ev.clientX, ev.clientY]; });
      canvas.addEventListener('pointerup', (ev) => this.onPointerUp(ev));

      this.resize = this.resize.bind(this);
      this.loop = this.loop.bind(this);
      new ResizeObserver(this.resize).observe(stageEl);
      this.resize();
    }

    resize() {
      const w = this.stage.clientWidth;
      const h = this.stage.clientHeight;
      if (!w || !h) return;
      this.camera.aspect = w / h;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(w, h, false);
    }

    recolor() {
      const c = new THREE.Color();
      points.forEach((p, i) => {
        if (highlighted) {
          const active = p.merkmale && p.merkmale.tatmittel === highlighted;
          c.set(active ? '#000000' : '#d9d9d9');
        } else {
          c.set(grayOf(p.merkmale));
        }
        this.mesh.setColorAt(i, c);
      });
      if (this.mesh.instanceColor) this.mesh.instanceColor.needsUpdate = true;
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
      const hits = this.raycaster.intersectObject(this.mesh);
      return hits.length ? hits[0].instanceId : -1;
    }

    onPointerMove(ev) {
      const id = this.pick(ev);
      this.hovered = id;
      this.renderer.domElement.style.cursor = id >= 0 ? 'pointer' : '';
      if (id >= 0 && tooltip) {
        const p = points[id];
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
      this.hovered = -1;
      if (tooltip) tooltip.setAttribute('hidden', '');
    }

    onPointerUp(ev) {
      if (!this.downAt) return;
      const dx = ev.clientX - this.downAt[0];
      const dy = ev.clientY - this.downAt[1];
      this.downAt = null;
      if (Math.hypot(dx, dy) > 5) return; // Drag, kein Klick
      const id = this.pick(ev);
      if (id >= 0) location.href = points[id].href;
    }

    start() {
      if (this.running) return;
      this.running = true;
      this.resize();
      this.loop();
    }

    stop() {
      this.running = false;
      this.clearHover();
    }

    loop() {
      if (!this.running) return;
      requestAnimationFrame(this.loop);
      // Langsame Idle-Rotation, pausiert 2,5 s nach jeder Interaktion.
      if (performance.now() - this.lastInteraction > 2500) {
        this.group.rotation.y += 0.0016;
      }
      this.controls.update();
      this.renderer.render(this.scene, this.camera);
    }
  }

  // Kompaktes Fenster: immer initialisiert, läuft nur wenn sichtbar.
  const compact = new Space(
    document.getElementById('nova-space-stage'),
    document.getElementById('nova-space-legend'),
    { zoom: false }
  );
  spaces.push(compact);
  section.removeAttribute('hidden');
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

  // Overlay: Mechanik der Vokabular-Seite (hidden-Attribut, Klick auf den
  // Backdrop schließt, Escape schließt, body.modal-open sperrt Scroll).
  let full = null;
  const expandBtn = document.getElementById('nova-space-expand');
  const closeBtn = modal ? modal.querySelector('.nova-space-close') : null;

  function openModal() {
    if (!modal) return;
    if (!full) {
      full = new Space(
        document.getElementById('nova-space-stage-full'),
        document.getElementById('nova-space-legend-full'),
        { zoom: true }
      );
      spaces.push(full);
    }
    modal.removeAttribute('hidden');
    document.body.classList.add('modal-open');
    compact.stop();
    full.syncLegend();
    full.recolor();
    full.start();
    if (closeBtn) closeBtn.focus();
  }

  function closeModal() {
    if (!modal) return;
    modal.setAttribute('hidden', '');
    document.body.classList.remove('modal-open');
    if (full) full.stop();
    compact.start();
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
