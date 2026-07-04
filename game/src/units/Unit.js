// ── HELLMUTH · Unit ───────────────────────────────────────────

import {
  gridToScreen, gridToDepth, RenderLayer, TILE_HW, TILE_HH, UNIT_DEFS
} from '../config.js';

let _nextId = 1;

export default class Unit extends Phaser.GameObjects.Container {
  /**
   * @param {Phaser.Scene} scene
   * @param {string} unitType  key into UNIT_DEFS
   * @param {number} gx       grid X
   * @param {number} gy       grid Y
   * @param {string} [factionOverride]
   */
  constructor(scene, unitType, gx, gy, factionOverride) {
    const pos = gridToScreen(gx, gy);
    super(scene, pos.x, pos.y);

    const def = UNIT_DEFS[unitType];
    if (!def) throw new Error(`Unknown unit type: ${unitType}`);

    this.id        = _nextId++;
    this.unitType  = unitType;
    this.faction   = factionOverride || def.faction;
    this.hp        = def.hp;
    this.maxHp     = def.hp;
    this.damage    = def.damage;
    this.range     = def.range;
    this.speed     = def.speed;
    this.massTier  = def.massTier;
    this.massScale = def.massScale || 1.0;
    this.gridX     = gx;
    this.gridY     = gy;
    this.selected  = false;
    this.alive     = true;
    this._moving   = false;
    this.kbVel     = { x: 0, y: 0 };
    this.staggerMs = 0;
    this._atkCooldown = 0;

    // ── Visual: textured sprite ───────────────────────────
    this.sprite = scene.add.image(0, -12, def.texture);
    this.add(this.sprite);

    // ── Health bar background ─────────────────────────────
    this.hpBarBg = scene.add.rectangle(0, -32, 28, 4, 0x222222);
    this.add(this.hpBarBg);

    // ── Health bar fill ───────────────────────────────────
    const barColor = this.faction === 'apotheker' ? 0x44dd44 : 0xdd4444;
    this.hpBarFill = scene.add.rectangle(0, -32, 28, 4, barColor);
    this.add(this.hpBarFill);

    // ── Selection ring (hidden by default) ────────────────
    this.selectionRing = scene.add.ellipse(0, 4, 36, 18, 0xffff00, 0.35);
    this.selectionRing.setVisible(false);
    this.add(this.selectionRing);

    // Depth
    this.setDepth(gridToDepth(gx, gy, RenderLayer.UNIT));

    // Make interactive
    this.setSize(32, 48);
    this.setInteractive();

    scene.add.existing(this);
  }

  // ── Selection ─────────────────────────────────────────────
  setSelected(val) {
    this.selected = val;
    this.selectionRing.setVisible(val);
  }

  // ── Movement ──────────────────────────────────────────────
  moveTo(gx, gy) {
    if (this._moving || !this.alive) return;

    const target = gridToScreen(gx, gy);
    const dx     = target.x - this.x;
    const dy     = target.y - this.y;
    const dist   = Math.sqrt(dx * dx + dy * dy);
    const duration = (dist / (this.speed * TILE_HW)) * 1000;

    this._moving = true;
    this.gridX = gx;
    this.gridY = gy;

    this.scene.tweens.add({
      targets:  this,
      x:        target.x,
      y:        target.y,
      duration: Math.max(100, duration),
      ease:     'Linear',
      onUpdate: () => {
        // Update depth during movement for correct sort order
        const progress = (this.x + this.y) / (TILE_HW + TILE_HH);
        this.setDepth(gridToDepth(gx, gy, RenderLayer.UNIT));
      },
      onComplete: () => {
        this._moving = false;
      }
    });
  }

  // ── Combat ────────────────────────────────────────────────
  takeDamage(amount) {
    if (!this.alive) return;

    this.hp -= amount;
    if (this.hp <= 0) {
      this.hp = 0;
      this.alive = false;
      this.die();
    }
    this._updateHealthBar();
  }

  _updateHealthBar() {
    const ratio = this.hp / this.maxHp;
    this.hpBarFill.setScale(ratio, 1);
    this.hpBarFill.setX(-14 * (1 - ratio));

    // Color shift: green -> yellow -> red
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
      duration: 400,
      onComplete: () => {
        this.destroy();
      }
    });
  }

  /** Distance in grid tiles to another unit or position. */
  gridDistanceTo(gx, gy) {
    const dx = this.gridX - gx;
    const dy = this.gridY - gy;
    return Math.sqrt(dx * dx + dy * dy);
  }

  /** Check if target is in attack range. */
  canAttack(target) {
    if (!target || !target.alive) return false;
    return this.gridDistanceTo(target.gridX, target.gridY) <= this.range;
  }
}
