// ── HELLMUTH · HUD Overlay Scene ──────────────────────────────
// Runs in parallel with GameScene. Renders resource counters,
// build menu, training panel, selection info, and notifications.

import { BUILDING_DEFS, UNIT_DEFS } from '../config.js';

const GOLD   = '#FFD700';
const WHITE  = '#FFFFFF';
const CYAN   = '#44DDFF';
const GREEN  = '#44DD44';
const GRAY   = '#888888';
const MAGENTA = '#FF44FF';

export default class HUDOverlay extends Phaser.Scene {
  constructor() {
    super({ key: 'HUDOverlay', active: false });
  }

  create() {
    const w = this.cameras.main.width;
    const h = this.cameras.main.height;

    // ── Resource display (top-left) ───────────────────────
    this.resTexts = {};
    const resStyle = { fontFamily: 'monospace', fontSize: '16px', color: WHITE };

    this.resTexts.soda      = this.add.text(16, 12, 'Soda: 100', { ...resStyle, color: CYAN });
    this.resTexts.heilkraut = this.add.text(16, 34, 'Heilkraut: 0', { ...resStyle, color: GREEN });
    this.resTexts.klarheit  = this.add.text(16, 56, 'Klarheit: 0', { ...resStyle, color: GOLD });

    // ── Unit / building count (top-left below resources) ──
    this.countText = this.add.text(16, 80, '', {
      fontFamily: 'monospace', fontSize: '12px', color: GRAY
    });

    // ── Wave info (top-center) ───────────────────────────
    this.waveText = this.add.text(w / 2, 12, '', {
      fontFamily: 'monospace', fontSize: '13px', color: MAGENTA
    }).setOrigin(0.5, 0);

    // ── Mission objective (top-right) ─────────────────────
    this.missionText = this.add.text(w - 16, 12,
      'Mission 1: Soda >= 50 + Apothekenhaus',
      { fontFamily: 'monospace', fontSize: '13px', color: GRAY }
    ).setOrigin(1, 0);

    // ── Build menu (bottom-right) ─────────────────────────
    this.buildButtons = [];
    const buildTypes = ['sodabrunnen', 'hopfengarten', 'apothekenhaus'];
    const startY = h - 40;

    for (let i = 0; i < buildTypes.length; i++) {
      const type = buildTypes[i];
      const def  = BUILDING_DEFS[type];
      const y    = startY - i * 36;
      const x    = w - 16;

      const costStr = def.cost
        ? Object.entries(def.cost).map(([k, v]) => `${v} ${k}`).join(', ')
        : 'free';

      const btn = this.add.text(x, y, `[${i + 1}] ${def.name} (${costStr})`, {
        fontFamily: 'monospace', fontSize: '13px', color: WHITE,
        backgroundColor: '#333333', padding: { x: 6, y: 3 }
      }).setOrigin(1, 0.5).setInteractive({ useHandCursor: true });

      btn.on('pointerover', () => btn.setColor(GOLD));
      btn.on('pointerout',  () => btn.setColor(WHITE));
      btn.on('pointerdown', () => {
        this.scene.get('GameScene').events.emit('hud:build', type);
      });

      this.buildButtons.push({ text: btn, type });
    }

    // Build menu label
    this.add.text(w - 16, startY - buildTypes.length * 36, 'BAUEN:',
      { fontFamily: 'monospace', fontSize: '14px', color: GOLD }
    ).setOrigin(1, 0.5);

    // ── Training panel (bottom-left, context-sensitive) ───
    this.trainButtons = [];
    this.trainLabel = this.add.text(16, h - 140, 'AUSBILDEN [T]:', {
      fontFamily: 'monospace', fontSize: '14px', color: GOLD
    }).setVisible(false);

    for (let i = 0; i < 3; i++) {
      const btn = this.add.text(16, h - 110 + i * 28, '', {
        fontFamily: 'monospace', fontSize: '13px', color: WHITE,
        backgroundColor: '#333333', padding: { x: 6, y: 3 }
      }).setInteractive({ useHandCursor: true }).setVisible(false);

      btn.on('pointerover', () => btn.setColor(GOLD));
      btn.on('pointerout',  () => btn.setColor(WHITE));

      this.trainButtons.push(btn);
    }

    // Training progress bar
    this.trainBarBg = this.add.rectangle(16 + 60, h - 30, 120, 8, 0x333333)
      .setOrigin(0, 0.5).setVisible(false);
    this.trainBarFill = this.add.rectangle(16 + 60, h - 30, 0, 8, 0x44AAFF)
      .setOrigin(0, 0.5).setVisible(false);
    this.trainQueueText = this.add.text(16, h - 30, '', {
      fontFamily: 'monospace', fontSize: '11px', color: CYAN
    }).setVisible(false);

    // ── Selection info (bottom-center) ────────────────────
    this.selText = this.add.text(w / 2, h - 16, '', {
      fontFamily: 'monospace', fontSize: '13px', color: WHITE, align: 'center'
    }).setOrigin(0.5, 1);

    // ── Notification log (left, below counts) ─────────────
    this.notifTexts = [];
    for (let i = 0; i < 6; i++) {
      const t = this.add.text(16, 100 + i * 18, '', {
        fontFamily: 'monospace', fontSize: '12px', color: GRAY
      });
      this.notifTexts.push(t);
    }

    // ── Mission complete banner (hidden) ──────────────────
    this.winBanner = this.add.text(w / 2, h / 2,
      'MISSION 1 ABGESCHLOSSEN!',
      { fontFamily: 'monospace', fontSize: '28px', color: GOLD,
        backgroundColor: '#000000aa', padding: { x: 20, y: 12 } }
    ).setOrigin(0.5).setVisible(false).setDepth(100);
  }

  // ── Called each frame from GameScene ─────────────────────

  updateHUD(world, selection) {
    if (!world) return;

    const res = world.player.resources;
    this.resTexts.soda.setText(`Soda: ${Math.floor(res.soda)}`);
    this.resTexts.heilkraut.setText(`Heilkraut: ${Math.floor(res.heilkraut)}`);
    this.resTexts.klarheit.setText(`Klarheit: ${Math.floor(res.klarheit)}`);

    // Counts
    const playerUnits = world.units.filter(u => u.alive && u.faction === 'apotheker').length;
    const enemyUnits  = world.units.filter(u => u.alive && u.faction === 'korrupte').length;
    this.countText.setText(
      `Einheiten: ${playerUnits} | Gegner: ${enemyUnits} | Gebäude: ${world.player.buildings.length}`
    );

    // Wave info
    if (world.enemyAI) {
      const nextWave = Math.max(0, Math.ceil(world.enemyAI.waveTimer));
      if (world.enemyAI.waveNumber > 0) {
        this.waveText.setText(`Welle ${world.enemyAI.waveNumber} | Nächste: ${nextWave}s`);
      } else {
        this.waveText.setText(`Erste Welle in ${nextWave}s`);
      }
    }

    // Build button availability
    for (const { text, type } of this.buildButtons) {
      const def = BUILDING_DEFS[type];
      text.setAlpha(world.player.canAfford(def.cost) ? 1 : 0.4);
    }

    // Selection info
    if (selection.unit) {
      const u = selection.unit;
      this.selText.setText(
        `${u.unitType.toUpperCase()} | HP: ${u.hp}/${u.maxHp} | DMG: ${u.damage} | RNG: ${u.range}`
      );
    } else if (selection.building) {
      const b = selection.building;
      const statusStr = b.status === 'constructing'
        ? ` | Bau: ${Math.floor(b.progress * 100)}%`
        : '';
      this.selText.setText(
        `${b.buildingType.toUpperCase()} | HP: ${b.hp}/${b.maxHp}${statusStr}`
      );
    } else {
      this.selText.setText('');
    }

    // Training panel
    this._updateTrainingPanel(selection.building, world);

    // Notifications
    const notes = world.notifications;
    for (let i = 0; i < this.notifTexts.length; i++) {
      if (i < notes.length) {
        this.notifTexts[i].setText(notes[i].msg);
        const age = (Date.now() - notes[i].time) / 1000;
        this.notifTexts[i].setAlpha(Math.max(0.2, 1 - age / 15));
      } else {
        this.notifTexts[i].setText('');
      }
    }

    // Win banner
    if (world.missionComplete && !this.winBanner.visible) {
      this.winBanner.setVisible(true);
      this.tweens.add({
        targets: this.winBanner,
        scale: { from: 0.5, to: 1 },
        duration: 600,
        ease: 'Back.easeOut'
      });
    }
  }

  _updateTrainingPanel(building, world) {
    const showTraining = building && building.trains && building.status === 'active';
    this.trainLabel.setVisible(showTraining);

    if (!showTraining) {
      for (const btn of this.trainButtons) btn.setVisible(false);
      this.trainBarBg.setVisible(false);
      this.trainBarFill.setVisible(false);
      this.trainQueueText.setVisible(false);
      return;
    }

    // Show trainable units
    for (let i = 0; i < this.trainButtons.length; i++) {
      const btn = this.trainButtons[i];
      if (i < building.trains.length) {
        const unitType = building.trains[i];
        const def = UNIT_DEFS[unitType];
        if (!def) { btn.setVisible(false); continue; }

        const costStr = def.cost
          ? Object.entries(def.cost).map(([k, v]) => `${v}${k.charAt(0).toUpperCase()}`).join(' ')
          : 'free';
        btn.setText(`[${def.name}] ${costStr} (${def.trainTime}s)`);
        btn.setVisible(true);
        btn.setAlpha(world.player.canAfford(def.cost || {}) ? 1 : 0.4);

        // Remove old listeners and add new
        btn.removeAllListeners('pointerdown');
        btn.on('pointerdown', () => {
          this.scene.get('GameScene').events.emit('hud:train', unitType);
        });
        btn.on('pointerover', () => btn.setColor(GOLD));
        btn.on('pointerout',  () => btn.setColor(WHITE));
      } else {
        btn.setVisible(false);
      }
    }

    // Training progress
    if (building.trainQueue.length > 0) {
      const progress = building.getTrainProgress();
      this.trainBarBg.setVisible(true);
      this.trainBarFill.setVisible(true);
      this.trainBarFill.setSize(Math.max(1, 120 * progress), 8);
      this.trainQueueText.setVisible(true);
      this.trainQueueText.setText(`Warteschlange: ${building.trainQueue.length}`);
    } else {
      this.trainBarBg.setVisible(false);
      this.trainBarFill.setVisible(false);
      this.trainQueueText.setVisible(false);
    }
  }
}
