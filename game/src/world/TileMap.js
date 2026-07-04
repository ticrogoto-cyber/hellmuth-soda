// ── HELLMUTH · TileMap ────────────────────────────────────────

import {
  TILE_HW, TILE_HH,
  MAP_W, MAP_H,
  gridToScreen, gridToDepth, RenderLayer
} from '../config.js';

// ── Simple seeded PRNG for reproducible terrain ───────────────
function mulberry32(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ── Tile colours ──────────────────────────────────────────────
const TILE_COLORS = {
  grass:  0x4a7a3e,
  water:  0x1a3a2e,
  path:   0x8a7a5e,
  stone:  0x6a6a6a
};

export default class TileMap {
  constructor() {
    /** @type {Array<Array<{type:string, elevation:number, corrupted:boolean}>>} */
    this.tiles = [];
    this.graphics = null;

    this._generate();
  }

  // ── Procedural generation ─────────────────────────────────
  _generate() {
    const rng = mulberry32(42);

    for (let y = 0; y < MAP_H; y++) {
      const row = [];
      for (let x = 0; x < MAP_W; x++) {
        let type = 'grass';

        // Water: a river-ish band plus scattered ponds
        const distFromCenter = Math.abs(x - MAP_W / 2) + Math.abs(y - MAP_H / 2);
        if (
          (x >= 16 && x <= 18 && y > 5 && y < MAP_H - 5) ||
          (rng() < 0.03 && distFromCenter > 12)
        ) {
          type = 'water';
        }

        // Stone patches near edges
        if ((x < 3 || x > MAP_W - 4 || y < 3 || y > MAP_H - 4) && rng() < 0.35) {
          type = 'stone';
        }

        // Path from center going south-east
        if (Math.abs(x - y) < 1 && x > 10 && x < 30) {
          type = 'path';
        }

        row.push({
          type,
          elevation: 0,
          corrupted: false
        });
      }
      this.tiles.push(row);
    }

    // Clear the center zone for the HQ
    for (let y = 17; y <= 23; y++) {
      for (let x = 17; x <= 23; x++) {
        if (x < MAP_W && y < MAP_H) {
          this.tiles[y][x].type = 'grass';
        }
      }
    }
  }

  /** Get tile at grid position (null if out of bounds). */
  getTile(gx, gy) {
    if (gx < 0 || gy < 0 || gx >= MAP_W || gy >= MAP_H) return null;
    return this.tiles[gy][gx];
  }

  /** Check if a rectangular footprint is buildable. */
  isBuildable(gx, gy, fw, fh) {
    for (let dy = 0; dy < fh; dy++) {
      for (let dx = 0; dx < fw; dx++) {
        const t = this.getTile(gx + dx, gy + dy);
        if (!t || t.type === 'water' || t.type === 'stone') return false;
      }
    }
    return true;
  }

  /** Check if a tile is walkable. */
  isWalkable(gx, gy) {
    const t = this.getTile(gx, gy);
    return t !== null && t.type !== 'water' && t.type !== 'stone';
  }

  // ── Rendering ─────────────────────────────────────────────
  render(scene) {
    const rng = mulberry32(7);  // consistent per-tile colour wobble

    for (let y = 0; y < MAP_H; y++) {
      for (let x = 0; x < MAP_W; x++) {
        const tile = this.tiles[y][x];
        const pos  = gridToScreen(x, y);

        let baseColor = TILE_COLORS[tile.type] || TILE_COLORS.grass;

        // Slight per-tile colour variation for grass
        if (tile.type === 'grass') {
          const shift = Math.floor((rng() - 0.5) * 20);
          const r = ((baseColor >> 16) & 0xFF) + shift;
          const g = ((baseColor >> 8)  & 0xFF) + shift;
          const b = (baseColor         & 0xFF) + shift;
          baseColor = (clamp(r) << 16) | (clamp(g) << 8) | clamp(b);
        } else {
          rng(); // consume to keep sequence aligned
        }

        if (tile.corrupted) {
          // Purple tint for corrupted tiles
          baseColor = lerpColor(baseColor, 0x6a0060, 0.4);
        }

        const img = scene.add.image(pos.x, pos.y, 'tile_' + tile.type)
          .setTint(baseColor)
          .setDepth(gridToDepth(x, y, RenderLayer.GROUND));

        // Store reference for later updates
        tile._sprite = img;
      }
    }
  }
}

// ── Helpers ───────────────────────────────────────────────────
function clamp(v) {
  return Math.max(0, Math.min(255, v));
}

function lerpColor(c1, c2, t) {
  const r1 = (c1 >> 16) & 0xFF, g1 = (c1 >> 8) & 0xFF, b1 = c1 & 0xFF;
  const r2 = (c2 >> 16) & 0xFF, g2 = (c2 >> 8) & 0xFF, b2 = c2 & 0xFF;
  const r = Math.round(r1 + (r2 - r1) * t);
  const g = Math.round(g1 + (g2 - g1) * t);
  const b = Math.round(b1 + (b2 - b1) * t);
  return (r << 16) | (g << 8) | b;
}
