export const BUILDINGS = {
  destillerie_hq: {
    id: 'destillerie_hq', name: 'HQ Destillerie', faction: 'apotheker',
    footprint: { w: 6, h: 6 }, spriteKey: 'bld_hq',
    costs: { soda: 0, heilkraut: 0, klarheit: 0 },
    buildTime: 0, hp: 2000, tier: 2,
    production: null, training: ['apothekerin']
  },
  apothekenhaus: {
    id: 'apothekenhaus', name: 'Apothekenhaus', faction: 'apotheker',
    footprint: { w: 3, h: 3 }, spriteKey: 'bld_apothekenhaus',
    costs: { soda: 150, heilkraut: 80, klarheit: 0 },
    buildTime: 25, hp: 700, tier: 1,
    production: null, training: null,
    effect: { resourceCap: { soda: 200 } }
  },
  sodabrunnen: {
    id: 'sodabrunnen', name: 'Sodabrunnen', faction: 'apotheker',
    footprint: { w: 2, h: 2 }, spriteKey: 'bld_sodabrunnen',
    costs: { soda: 80, heilkraut: 40, klarheit: 0 },
    buildTime: 18, hp: 400, tier: 1,
    production: { resource: 'soda', rate: 1 }, training: null
  },
  hopfengarten: {
    id: 'hopfengarten', name: 'Hopfengarten', faction: 'apotheker',
    footprint: { w: 4, h: 3 }, spriteKey: 'bld_hopfengarten',
    costs: { soda: 60, heilkraut: 0, klarheit: 0 },
    buildTime: 15, hp: 300, tier: 0,
    production: { resource: 'heilkraut', rate: 0.3 }, training: null
  }
};
