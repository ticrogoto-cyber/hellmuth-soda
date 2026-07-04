// ── HELLMUTH · Game Constants ──────────────────────────────────

export const TILE_W = 128;
export const TILE_H = 64;
export const TILE_HW = 64;
export const TILE_HH = 32;
export const MAP_W = 40;
export const MAP_H = 40;

export const RenderLayer = {
  GROUND:      0,
  CORRUPTION:  1,
  DECAL:       2,
  PATH:        3,
  WATER_FX:    4,
  PROPS:       5,
  BUILDING:    6,
  UNIT:        7,
  VFX:         8,
  FOG_AMBIENT: 9,
  UI:          10
};

// ── Mass Table (per SOLUTIONS-KNOCKBACK-PHYSIK) ──────────────
export const MASS_TABLE = {
  featherweight: { mass: 0.5,      kbMult: 2.0,  isStatic: false },
  light:         { mass: 0.5,      kbMult: 2.0,  isStatic: false },
  medium:        { mass: 1.0,      kbMult: 1.0,  isStatic: false },
  heavy:         { mass: 4.0,      kbMult: 0.35, isStatic: false },
  bulwark:       { mass: 20.0,     kbMult: 0.05, isStatic: false },
  immovable:     { mass: Infinity, kbMult: 0,    isStatic: true  },
};

/** Convert grid coordinates to isometric screen position. */
export function gridToScreen(gx, gy) {
  return {
    x: (gx - gy) * TILE_HW,
    y: (gx + gy) * TILE_HH
  };
}

/** Convert screen position back to grid coordinates. */
export function screenToGrid(sx, sy) {
  const a = sx / TILE_HW;
  const b = sy / TILE_HH;
  return {
    gx: Math.floor((a + b) / 2),
    gy: Math.floor((b - a) / 2)
  };
}

/** Compute a depth value for Phaser depth-sorting. */
export function gridToDepth(gx, gy, layer, yOffset = 0) {
  return layer * 10000 + (gx + gy) * 10 + yOffset;
}

// ── Building Definitions ──────────────────────────────────────

export const BUILDING_DEFS = {
  hq: {
    name:      'HQ Destillerie',
    footprint: { w: 6, h: 6 },
    hp:        2000,
    cost:      null,            // pre-placed
    buildTime: 0,
    texture:   'bld_hq',
    generates: null,
    trains:    ['apothekerin', 'braumeister']
  },
  apothekenhaus: {
    name:      'Apothekenhaus',
    footprint: { w: 3, h: 3 },
    hp:        700,
    cost:      { soda: 150, heilkraut: 80 },
    buildTime: 25,
    texture:   'bld_apothekenhaus',
    generates: null,
    trains:    ['apothekerin']
  },
  sodabrunnen: {
    name:      'Sodabrunnen',
    footprint: { w: 2, h: 2 },
    hp:        400,
    cost:      { soda: 80, heilkraut: 40 },
    buildTime: 18,
    texture:   'bld_sodabrunnen',
    generates: { resource: 'soda', rate: 1 }
  },
  hopfengarten: {
    name:      'Hopfengarten',
    footprint: { w: 4, h: 3 },
    hp:        300,
    cost:      { soda: 60 },
    buildTime: 15,
    texture:   'bld_hopfengarten',
    generates: { resource: 'heilkraut', rate: 0.3 }
  }
};

// ── Unit Definitions ──────────────────────────────────────────

export const UNIT_DEFS = {
  apothekerin: {
    name:     'Apothekerin',
    hp:       70,
    damage:   18,
    range:    6,
    speed:    2.5,
    massTier: 'medium',
    massScale: 1.0,
    faction:  'apotheker',
    texture:  'unit_apo',
    cost:     { soda: 50, heilkraut: 20 },
    trainTime: 12
  },
  braumeister: {
    name:     'Braumeister',
    hp:       120,
    damage:   25,
    range:    4,
    speed:    1.8,
    massTier: 'heavy',
    massScale: 1.0,
    faction:  'apotheker',
    texture:  'unit_brau',
    cost:     { soda: 100, heilkraut: 50, klarheit: 10 },
    trainTime: 20
  },
  korrupte: {
    name:     'Korrupte',
    hp:       50,
    damage:   12,
    range:    1,
    speed:    3,
    massTier: 'light',
    massScale: 1.0,
    faction:  'korrupte',
    texture:  'unit_kor',
    cost:     { schlick: 30 },
    trainTime: 8
  },
  bierhefe_drohne: {
    name:     'Bierhefe-Drohne',
    hp:       35,
    damage:   8,
    range:    5,
    speed:    4,
    massTier: 'featherweight',
    massScale: 0.7,
    faction:  'korrupte',
    texture:  'unit_drohne',
    cost:     { schlick: 40 },
    trainTime: 6
  }
};
