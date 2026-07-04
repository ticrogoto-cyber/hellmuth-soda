// ── HELLMUTH · Building ───────────────────────────────────────

import {
  gridToScreen, gridToDepth, RenderLayer, BUILDING_DEFS, UNIT_DEFS,
  TILE_HW, TILE_HH
} from '../config.js';

let _nextId = 1;

export default class Building extends Phaser.GameObjects.Container {
  /**
   * @param {Phaser.Scene} scene
   * @param {string} buildingType  key into BUILDING_DEFS
   * @param {number} gx            grid X (top-left corner of footprint)
   * @param {number} gy            grid Y
   * @param {string} [faction]     'apotheker' or 'korrupte'
   * @param {boolean} [prebuilt]   true to skip construction phase
   */
  constructor(scene, buildingType, gx, gy, faction = 'apotheker', prebuilt = false) {
    const def = BUILDING_DEFS[buildingType];
    if (!def) throw new Error(`Unknown building type: ${buildingType}`);

    // Anchor at the footprint center
    const cx = gx + def.footprint.w / 2;
    const cy = gy + def.footprint.h / 2;
    const pos = gridToScreen(cx, cy);

    super(scene, pos.x, pos.y);

    this.id           = _nextId++;
    this.buildingType = buildingType;
    this.faction      = faction;
    this.hp           = def.hp;
    this.maxHp        = def.hp;
    this.footprint    = { ...def.footprint };
    this.gridX        = gx;
    this.gridY        = gy;
    this.generates    = def.generates ? { ...def.generates } : null;
    this.trains       = def.trains || null;
    this.status       = prebuilt ? 'active' : 'placing';
    this.progress     = prebuilt ? 1 : 0;
    this.buildTime    = def.buildTime;
    this._accum       = 0;

    // Training queue
    this.trainQueue    = [];   // array of unit type keys
    this.trainProgress = 0;
    this.trainTime     = 0;

    // ── Visual: textured sprite ─────────────────────────
    this.buildingSprite = scene.add.image(0, -20, def.texture);
    // High-res iso-rendered sprites (>200px) get downsized to the
    // building's footprint diamond so they don't swamp the map.
    if (this.buildingSprite.width > 200) {
      const w = (def.footprint.w + def.footprint.h) * TILE_HW;
      const h = (def.footprint.w + def.footprint.h) * TILE_HH * 1.5;
      this.buildingSprite.setDisplaySize(w, h);
    }
    if (!prebuilt) {
      this.buildingSprite.setAlpha(0.5);
    }
    this.add(this.buildingSprite);

    // ── Construction progress bar ───────────────────────
    this.progressBarBg = scene.add.rectangle(0, -50, 40, 5, 0x222222);
    this.progressBarFill = scene.add.rectangle(0, -50, 40, 5, 0x44aaff);
    this.add(this.progressBarBg);
    this.add(this.progressBarFill);

    if (prebuilt) {
      this.progressBarBg.setVisible(false);
      this.progressBarFill.setVisible(false);
    }

    // ── Health bar ──────────────────────────────────────
    this.hpBarBg   = scene.add.rectangle(0, -56, 40, 4, 0x222222);
    this.hpBarFill = scene.add.rectangle(0, -56, 40, 4, 0x44dd44);
    this.add(this.hpBarBg);
    this.add(this.hpBarFill);

    // ── Selection highlight (hidden) ────────────────────
    this.selectionGlow = scene.add.ellipse(0, 8, 50, 26, 0xffff00, 0.25);
    this.selectionGlow.setVisible(false);
    this.add(this.selectionGlow);

    // Depth
    this.setDepth(gridToDepth(cx, cy, RenderLayer.BUILDING));

    // Interactive
    this.setSize(64, 64);
    this.setInteractive();

    this.selected = false;
    scene.add.existing(this);
  }

  // ── Selection ─────────────────────────────────────────────
  setSelected(val) {
    this.selected = val;
    this.selectionGlow.setVisible(val);
  }

  // ── Construction / resource tick ──────────────────────────
  startConstruction() {
    this.status   = 'constructing';
    this.progress = 0;
  }

  /** Called every frame with dt in seconds. */
  tick(dt) {
    // ── Construction ──────────────────────────────────────
    if (this.status === 'constructing' && this.buildTime > 0) {
      this.progress += dt / this.buildTime;
      if (this.progress >= 1) {
        this.progress = 1;
        this.status = 'active';
        this.buildingSprite.setAlpha(1);
        this.progressBarBg.setVisible(false);
        this.progressBarFill.setVisible(false);
      } else {
        this._updateProgressBar();
      }
    }

    // ── Resource generation ──────────────────────────────
    if (this.status === 'active' && this.generates) {
      this._accum += this.generates.rate * dt;
      if (this._accum >= 1) {
        const harvest = Math.floor(this._accum);
        this._accum -= harvest;
        return { resource: this.generates.resource, amount: harvest };
      }
    }

    // ── Training queue ──────────────────────────────────
    if (this.status === 'active' && this.trainQueue.length > 0) {
      const currentType = this.trainQueue[0];
      const unitDef = UNIT_DEFS[currentType];
      if (unitDef) {
        this.trainProgress += dt;
        if (this.trainProgress >= (unitDef.trainTime || 10)) {
          this.trainQueue.shift();
          this.trainProgress = 0;
          return { trained: currentType };
        }
      }
    }

    return null;
  }

  _updateProgressBar() {
    const ratio = Math.min(1, this.progress);
    this.progressBarFill.setScale(ratio, 1);
    this.progressBarFill.setX(-20 * (1 - ratio));
  }

  // ── Damage ────────────────────────────────────────────────
  takeDamage(amount) {
    this.hp -= amount;
    if (this.hp <= 0) {
      this.hp = 0;
      this.die();
    }
    this._updateHealthBar();
  }

  _updateHealthBar() {
    const ratio = this.hp / this.maxHp;
    this.hpBarFill.setScale(ratio, 1);
    this.hpBarFill.setX(-20 * (1 - ratio));
    if (ratio > 0.5) {
      this.hpBarFill.setFillStyle(0x44dd44);
    } else if (ratio > 0.25) {
      this.hpBarFill.setFillStyle(0xdddd44);
    } else {
      this.hpBarFill.setFillStyle(0xdd4444);
    }
  }

  die() {
    this.scene.tweens.add({
      targets: this,
      alpha:   0,
      duration: 600,
      onComplete: () => {
        this.destroy();
      }
    });
  }

  // ── Training ──────────────────────────────────────────────
  canTrain(unitType) {
    return this.trains && this.trains.includes(unitType) &&
           this.status === 'active' && this.trainQueue.length < 5;
  }

  queueTraining(unitType) {
    if (!this.canTrain(unitType)) return false;
    this.trainQueue.push(unitType);
    return true;
  }

  getTrainProgress() {
    if (this.trainQueue.length === 0) return 0;
    const unitDef = UNIT_DEFS[this.trainQueue[0]];
    if (!unitDef) return 0;
    return this.trainProgress / (unitDef.trainTime || 10);
  }

  /** Check if a grid cell is inside this building's footprint. */
  occupies(gx, gy) {
    return gx >= this.gridX && gx < this.gridX + this.footprint.w &&
           gy >= this.gridY && gy < this.gridY + this.footprint.h;
  }
}
