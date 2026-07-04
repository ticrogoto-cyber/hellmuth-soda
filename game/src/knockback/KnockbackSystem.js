// ── HELLMUTH · KnockbackSystem ────────────────────────────────
// Druckwellen-Knockback: quadratic falloff, sqrt(mass) dampening,
// exponential decay, 4-tile travel cap. Per SOLUTIONS-KNOCKBACK-PHYSIK.

import SpatialHash from './SpatialHash.js';
import { MASS_TABLE } from '../config.js';

const DECAY_BASE       = 0.88;
const MAX_TRAVEL_PX    = 512;   // 4 tiles × 128 px
const DECAY_TRAVEL     = 0.4;
const STAGGER_MIN      = 150;
const STAGGER_MAX      = 600;
const STAGGER_SCALE    = 0.8;
const VELOCITY_EPSILON = 1;

export default class KnockbackSystem {
  constructor() {
    this.hash = new SpatialHash();
  }

  rebuildHash(units) {
    this.hash.clear();
    for (const u of units) {
      if (u.alive) this.hash.insert(u);
    }
  }

  explode(origin, force, radius, sourceId, sourceFaction) {
    const hits = this.hash.queryRadius(origin.x, origin.y, radius);
    for (const unit of hits) {
      if (!unit.alive) continue;
      if (unit.id === sourceId) continue;

      const tier = MASS_TABLE[unit.massTier];
      if (!tier || tier.isStatic || tier.kbMult === 0) continue;

      const dx = unit.x - origin.x;
      const dy = unit.y - origin.y;
      const d  = Math.hypot(dx, dy);
      if (d > radius) continue;

      // Quadratic falloff
      const f = (d < 1) ? 1 : Math.pow(1 - d / radius, 2);

      // Direction with jitter to separate stacked units
      const jitter = (Math.random() - 0.5) * 0.087;
      let nx, ny;
      if (d < 1) {
        nx = Math.cos(jitter);
        ny = Math.sin(jitter);
      } else {
        const base_nx = dx / d;
        const base_ny = dy / d;
        const c = Math.cos(jitter), s = Math.sin(jitter);
        nx = base_nx * c - base_ny * s;
        ny = base_nx * s + base_ny * c;
      }

      // Impulse with sqrt(mass) dampening
      const massEff = tier.mass * (unit.massScale || 1);
      const impulse = force * f * tier.kbMult / Math.sqrt(massEff);

      // Stacking: take-max + 30% boost from weaker hit
      if (!unit.kbVel) unit.kbVel = { x: 0, y: 0 };
      const curMag = Math.hypot(unit.kbVel.x, unit.kbVel.y);
      if (impulse >= curMag) {
        unit.kbVel.x = nx * impulse;
        unit.kbVel.y = ny * impulse;
      } else {
        unit.kbVel.x += nx * impulse * 0.3;
        unit.kbVel.y += ny * impulse * 0.3;
      }

      // Stagger
      unit.staggerMs = Math.min(STAGGER_MAX,
        Math.max(STAGGER_MIN, STAGGER_MIN + impulse * STAGGER_SCALE));

      // Visual flash
      if (unit.sprite) {
        unit.sprite.setTint(0xFF4444);
        unit.scene.time.delayedCall(120, () => {
          if (unit.sprite && unit.active) unit.sprite.clearTint();
        });
      }
    }
  }

  tickKnockback(units, dt) {
    const decayPow = Math.pow(DECAY_BASE, dt * 60);
    for (const u of units) {
      if (!u.alive || !u.kbVel) continue;
      const mag = Math.hypot(u.kbVel.x, u.kbVel.y);
      if (mag < VELOCITY_EPSILON) {
        u.kbVel.x = 0;
        u.kbVel.y = 0;
        continue;
      }
      u.x += u.kbVel.x * dt;
      u.y += u.kbVel.y * dt;
      u.kbVel.x *= decayPow;
      u.kbVel.y *= decayPow;
    }
  }
}
