// ── HELLMUTH · EnemyAI ────────────────────────────────────────
// Wave-based enemy spawning. Korrupte units spawn at map edges
// and attack-move toward the player's HQ.

import { MAP_W, MAP_H, gridToScreen, screenToGrid } from '../config.js';

const WAVE_INTERVAL     = 60;     // seconds between waves
const FIRST_WAVE_DELAY  = 45;     // seconds before first wave
const UNITS_PER_WAVE    = 3;      // base count, scales with wave number
const WAVE_SCALE        = 1.5;    // multiplier per wave

export default class EnemyAI {
  constructor(world) {
    this.world = world;
    this.waveTimer = FIRST_WAVE_DELAY;
    this.waveNumber = 0;
    this.enabled = true;
  }

  tick(dt) {
    if (!this.enabled) return;

    this.waveTimer -= dt;
    if (this.waveTimer <= 0) {
      this._spawnWave();
      this.waveTimer = WAVE_INTERVAL;
    }

    // Move idle enemy units toward HQ
    this._commandEnemyUnits(dt);
  }

  _spawnWave() {
    this.waveNumber++;
    const count = Math.floor(UNITS_PER_WAVE + (this.waveNumber - 1) * WAVE_SCALE);

    this.world.notify(`Welle ${this.waveNumber}: ${count} Korrupte nähern sich!`);

    // Spawn from a random map edge
    const edge = Math.floor(Math.random() * 4);
    for (let i = 0; i < count; i++) {
      const pos = this._getEdgeSpawn(edge, i);
      if (pos) {
        this.world.spawnUnit('korrupte', pos.gx, pos.gy, 'korrupte');
      }
    }
  }

  _getEdgeSpawn(edge, offset) {
    let gx, gy;
    switch (edge) {
      case 0: // north
        gx = 5 + offset * 2;
        gy = 2;
        break;
      case 1: // east
        gx = MAP_W - 3;
        gy = 5 + offset * 2;
        break;
      case 2: // south
        gx = MAP_W - 5 - offset * 2;
        gy = MAP_H - 3;
        break;
      case 3: // west
        gx = 2;
        gy = MAP_H - 5 - offset * 2;
        break;
    }
    gx = Math.max(1, Math.min(MAP_W - 2, gx));
    gy = Math.max(1, Math.min(MAP_H - 2, gy));

    if (this.world.tileMap.isWalkable(gx, gy)) {
      return { gx, gy };
    }
    // Try adjacent tiles
    for (let dy = -1; dy <= 1; dy++) {
      for (let dx = -1; dx <= 1; dx++) {
        if (this.world.tileMap.isWalkable(gx + dx, gy + dy)) {
          return { gx: gx + dx, gy: gy + dy };
        }
      }
    }
    return null;
  }

  _commandEnemyUnits(dt) {
    // Find player HQ
    const hq = this.world.buildings.find(
      b => b.buildingType === 'hq' && b.faction === 'apotheker'
    );
    if (!hq) return;

    const hqGx = hq.gridX + 3;
    const hqGy = hq.gridY + 3;

    for (const unit of this.world.units) {
      if (unit.faction !== 'korrupte' || !unit.alive) continue;
      if (unit._moving) continue;

      // Check if any enemy (Apotheker) unit or building is in range
      const hasTarget = this.world.units.some(
        u => u.alive && u.faction === 'apotheker' &&
          unit.gridDistanceTo(u.gridX, u.gridY) <= unit.range + 2
      );
      if (hasTarget) continue;

      // Move toward HQ
      const dx = hqGx - unit.gridX;
      const dy = hqGy - unit.gridY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 3) continue;

      const stepX = Math.round(dx / dist * 3);
      const stepY = Math.round(dy / dist * 3);
      const tx = Math.max(1, Math.min(MAP_W - 2, unit.gridX + stepX));
      const ty = Math.max(1, Math.min(MAP_H - 2, unit.gridY + stepY));

      if (this.world.tileMap.isWalkable(tx, ty)) {
        unit.moveTo(tx, ty);
      }
    }
  }
}
