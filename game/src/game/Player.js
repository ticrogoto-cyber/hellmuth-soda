// ── HELLMUTH · Player ─────────────────────────────────────────

export default class Player {
  constructor() {
    /** @type {{ soda: number, heilkraut: number, klarheit: number }} */
    this.resources = {
      soda:      100,
      heilkraut: 0,
      klarheit:  0
    };

    /** @type {import('../units/Unit.js').default[]} */
    this.units = [];

    /** @type {import('../buildings/Building.js').default[]} */
    this.buildings = [];
  }

  // ── Resource management ───────────────────────────────────

  /**
   * Check if player can afford a cost object.
   * @param {{ soda?: number, heilkraut?: number, klarheit?: number }} costs
   */
  canAfford(costs) {
    if (!costs) return true;
    for (const [key, amount] of Object.entries(costs)) {
      if ((this.resources[key] || 0) < amount) return false;
    }
    return true;
  }

  /**
   * Deduct resources. Returns true if successful.
   * @param {{ soda?: number, heilkraut?: number, klarheit?: number }} costs
   */
  spend(costs) {
    if (!this.canAfford(costs)) return false;
    for (const [key, amount] of Object.entries(costs)) {
      this.resources[key] -= amount;
    }
    return true;
  }

  /**
   * Add a resource.
   * @param {'soda'|'heilkraut'|'klarheit'} type
   * @param {number} amount
   */
  addResource(type, amount) {
    this.resources[type] = (this.resources[type] || 0) + amount;
  }

  // ── Entity tracking ───────────────────────────────────────

  addUnit(unit) {
    this.units.push(unit);
  }

  removeUnit(unit) {
    const idx = this.units.indexOf(unit);
    if (idx !== -1) this.units.splice(idx, 1);
  }

  addBuilding(building) {
    this.buildings.push(building);
  }

  removeBuilding(building) {
    const idx = this.buildings.indexOf(building);
    if (idx !== -1) this.buildings.splice(idx, 1);
  }

  /** Count active buildings of a given type. */
  countBuildings(type) {
    return this.buildings.filter(b => b.buildingType === type && b.status === 'active').length;
  }
}
