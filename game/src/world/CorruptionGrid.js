// ── HELLMUTH · CorruptionGrid ─────────────────────────────────
// Float32Array cellular automaton for corruption spread.
// Ticks at 500ms intervals. Corruption sources seed cells,
// neighbors accumulate, threshold triggers visual change.

import { MAP_W, MAP_H } from '../config.js';

const TICK_INTERVAL   = 0.5;     // seconds
const SPREAD_RATE     = 0.08;    // per-neighbor contribution per tick
const DECAY_RATE      = 0.01;    // natural decay per tick (without source)
const CORRUPT_THRESH  = 0.4;     // threshold to mark tile as corrupted
const CLEAN_THRESH    = 0.15;    // threshold to unmark corruption

export default class CorruptionGrid {
  constructor(tileMap) {
    this.tileMap = tileMap;
    this.grid = new Float32Array(MAP_W * MAP_H);
    this._accum = 0;
    this.sources = [];
  }

  addSource(gx, gy, strength = 1.0) {
    this.sources.push({ gx, gy, strength });
  }

  removeSource(gx, gy) {
    this.sources = this.sources.filter(s => s.gx !== gx || s.gy !== gy);
  }

  getCorruption(gx, gy) {
    if (gx < 0 || gy < 0 || gx >= MAP_W || gy >= MAP_H) return 0;
    return this.grid[gy * MAP_W + gx];
  }

  tick(dt) {
    this._accum += dt;
    if (this._accum < TICK_INTERVAL) return false;
    this._accum -= TICK_INTERVAL;

    // Seed sources
    for (const src of this.sources) {
      const idx = src.gy * MAP_W + src.gx;
      this.grid[idx] = Math.min(1, this.grid[idx] + src.strength * 0.2);
    }

    // Spread: each cell gains from neighbors, loses to decay
    const next = new Float32Array(this.grid.length);
    for (let y = 0; y < MAP_H; y++) {
      for (let x = 0; x < MAP_W; x++) {
        const idx = y * MAP_W + x;
        const tile = this.tileMap.getTile(x, y);
        if (!tile || tile.type === 'water') {
          next[idx] = 0;
          continue;
        }

        let neighborSum = 0;
        let neighborCount = 0;
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            if (dx === 0 && dy === 0) continue;
            const nx = x + dx, ny = y + dy;
            if (nx >= 0 && ny >= 0 && nx < MAP_W && ny < MAP_H) {
              neighborSum += this.grid[ny * MAP_W + nx];
              neighborCount++;
            }
          }
        }

        const avg = neighborCount > 0 ? neighborSum / neighborCount : 0;
        const current = this.grid[idx];
        let val = current + avg * SPREAD_RATE - DECAY_RATE;
        next[idx] = Math.max(0, Math.min(1, val));
      }
    }

    this.grid = next;

    // Update tile corruption flags
    let changed = false;
    for (let y = 0; y < MAP_H; y++) {
      for (let x = 0; x < MAP_W; x++) {
        const tile = this.tileMap.getTile(x, y);
        if (!tile) continue;
        const val = this.grid[y * MAP_W + x];
        const wasCorrupted = tile.corrupted;
        if (val >= CORRUPT_THRESH && !tile.corrupted) {
          tile.corrupted = true;
          changed = true;
        } else if (val < CLEAN_THRESH && tile.corrupted) {
          tile.corrupted = false;
          changed = true;
        }

        // Update sprite tint
        if (tile._sprite && tile.corrupted !== wasCorrupted) {
          if (tile.corrupted) {
            tile._sprite.setTint(lerpColor(tile._sprite.tintTopLeft || 0x4a7a3e, 0x6a0060, 0.4));
          } else {
            tile._sprite.clearTint();
          }
        }
      }
    }

    return changed;
  }
}

function lerpColor(c1, c2, t) {
  const r1 = (c1 >> 16) & 0xFF, g1 = (c1 >> 8) & 0xFF, b1 = c1 & 0xFF;
  const r2 = (c2 >> 16) & 0xFF, g2 = (c2 >> 8) & 0xFF, b2 = c2 & 0xFF;
  const r = Math.round(r1 + (r2 - r1) * t);
  const g = Math.round(g1 + (g2 - g1) * t);
  const b = Math.round(b1 + (b2 - b1) * t);
  return (r << 16) | (g << 8) | b;
}
