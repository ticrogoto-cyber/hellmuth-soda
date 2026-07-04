export const UNITS = {
  apothekerin: {
    id: 'apothekerin', name: 'Apothekerin', faction: 'apotheker',
    spriteKey: 'unit_apo', spriteW: 64, spriteH: 96,
    hp: 70, damage: 18, range: 6, speed: 2.5,
    massTier: 'medium', massScale: 1.0,
    costs: { soda: 50, heilkraut: 20, klarheit: 0 },
    trainTime: 12,
    abilities: ['heal_cast']
  },
  bierhefe_drohne: {
    id: 'bierhefe_drohne', name: 'Bierhefe-Drohne', faction: 'korrupte',
    spriteKey: 'unit_kor', spriteW: 32, spriteH: 32,
    hp: 60, damage: 8, range: 3, speed: 1.2,
    massTier: 'featherweight', massScale: 1.0,
    costs: { schlick: 40, korruption: 0, aufmerksamkeit: 0 },
    trainTime: 8,
    abilities: ['schaum_splash']
  }
};
