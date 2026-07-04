// ── HELLMUTH · CombatSystem ───────────────────────────────────
// Handles target acquisition, auto-attack, and attack execution.

import { gridToScreen, RenderLayer, gridToDepth } from '../config.js';

const ACQUIRE_RANGE_BONUS = 2;
const ATTACK_COOLDOWN_BASE = 1.2;

export default class CombatSystem {
  constructor(scene) {
    this.scene = scene;
  }

  tick(dt, units) {
    for (const attacker of units) {
      if (!attacker.alive) continue;
      if (attacker._moving) continue;
      if (attacker.staggerMs > 0) {
        attacker.staggerMs -= dt * 1000;
        continue;
      }

      // Cooldown
      if (!attacker._atkCooldown) attacker._atkCooldown = 0;
      attacker._atkCooldown -= dt;
      if (attacker._atkCooldown > 0) continue;

      // Find target
      const target = this._acquireTarget(attacker, units);
      if (!target) continue;

      // Attack
      this._executeAttack(attacker, target);
      attacker._atkCooldown = ATTACK_COOLDOWN_BASE;
    }
  }

  _acquireTarget(attacker, allUnits) {
    let best = null;
    let bestDist = Infinity;
    const maxRange = attacker.range + ACQUIRE_RANGE_BONUS;

    for (const other of allUnits) {
      if (!other.alive) continue;
      if (other.faction === attacker.faction) continue;

      const dist = attacker.gridDistanceTo(other.gridX, other.gridY);
      if (dist <= maxRange && dist < bestDist) {
        bestDist = dist;
        best = other;
      }
    }
    return best;
  }

  _executeAttack(attacker, target) {
    if (!attacker.canAttack(target)) return;

    target.takeDamage(attacker.damage);

    // Attack beam VFX
    this._drawAttackBeam(attacker, target);

    // Face toward target
    if (attacker.sprite) {
      attacker.sprite.setFlipX(target.x < attacker.x);
    }
  }

  _drawAttackBeam(from, to) {
    const color = from.faction === 'apotheker' ? 0x44FF44 : 0xFF44FF;
    const g = this.scene.add.graphics();
    g.setDepth(gridToDepth(0, 0, RenderLayer.VFX));
    g.lineStyle(2, color, 0.8);
    g.lineBetween(from.x, from.y - 12, to.x, to.y - 12);

    // Impact flash
    const impact = this.scene.add.circle(to.x, to.y - 12, 6, color, 0.7)
      .setDepth(gridToDepth(0, 0, RenderLayer.VFX));

    this.scene.tweens.add({
      targets: [g, impact],
      alpha: 0,
      duration: 200,
      onComplete: () => { g.destroy(); impact.destroy(); }
    });
  }
}
