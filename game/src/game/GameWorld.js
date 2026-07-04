// ── HELLMUTH · GameWorld ──────────────────────────────────────

import TileMap from '../world/TileMap.js';
import CorruptionGrid from '../world/CorruptionGrid.js';
import Player from './Player.js';
import Building from '../buildings/Building.js';
import Unit from '../units/Unit.js';
import KnockbackSystem from '../knockback/KnockbackSystem.js';
import CombatSystem from '../combat/CombatSystem.js';
import EnemyAI from '../ai/EnemyAI.js';
import { BUILDING_DEFS, UNIT_DEFS } from '../config.js';

export default class GameWorld {
  /**
   * @param {Phaser.Scene} scene
   */
  constructor(scene) {
    this.scene    = scene;
    this.tileMap  = new TileMap();
    this.player   = new Player();

    /** @type {Building[]} */
    this.buildings = [];

    /** @type {Unit[]} */
    this.units = [];

    /** @type {{ msg: string, time: number }[]} */
    this.notifications = [];

    this.missionComplete = false;

    // ── Subsystems ────────────────────────────────────────
    this.knockback  = new KnockbackSystem();
    this.combat     = new CombatSystem(scene);
    this.enemyAI    = new EnemyAI(this);
    this.corruption = new CorruptionGrid(this.tileMap);
  }

  // ── Notifications ─────────────────────────────────────────

  notify(msg) {
    this.notifications.push({ msg, time: Date.now() });
    if (this.notifications.length > 6) {
      this.notifications.shift();
    }
  }

  // ── Building placement ────────────────────────────────────

  placeBuilding(type, gx, gy, prebuilt = false) {
    const def = BUILDING_DEFS[type];
    if (!def) return null;

    if (!prebuilt && def.cost) {
      if (!this.player.canAfford(def.cost)) {
        this.notify('Nicht genug Ressourcen!');
        return null;
      }
    }

    if (!this.tileMap.isBuildable(gx, gy, def.footprint.w, def.footprint.h)) {
      this.notify('Kann hier nicht bauen!');
      return null;
    }

    for (const b of this.buildings) {
      for (let dy = 0; dy < def.footprint.h; dy++) {
        for (let dx = 0; dx < def.footprint.w; dx++) {
          if (b.occupies(gx + dx, gy + dy)) {
            this.notify('Platz belegt!');
            return null;
          }
        }
      }
    }

    if (!prebuilt && def.cost) {
      this.player.spend(def.cost);
    }

    const building = new Building(this.scene, type, gx, gy, 'apotheker', prebuilt);
    if (!prebuilt) {
      building.startConstruction();
    }

    this.buildings.push(building);
    this.player.addBuilding(building);

    if (!prebuilt) {
      this.notify(`${def.name} wird gebaut...`);
    }

    return building;
  }

  // ── Unit spawning ─────────────────────────────────────────

  spawnUnit(type, gx, gy, faction) {
    const unit = new Unit(this.scene, type, gx, gy, faction);
    this.units.push(unit);
    if (unit.faction === 'apotheker') {
      this.player.addUnit(unit);
    }
    return unit;
  }

  // ── Training ──────────────────────────────────────────────

  trainUnit(building, unitType) {
    if (!building || !building.canTrain(unitType)) {
      this.notify('Kann hier nicht ausbilden!');
      return false;
    }
    const unitDef = UNIT_DEFS[unitType];
    if (!unitDef) return false;

    if (unitDef.cost && !this.player.canAfford(unitDef.cost)) {
      this.notify('Nicht genug Ressourcen!');
      return false;
    }

    if (unitDef.cost) {
      this.player.spend(unitDef.cost);
    }

    building.queueTraining(unitType);
    this.notify(`${unitDef.name} in Ausbildung...`);
    return true;
  }

  // ── Tick ──────────────────────────────────────────────────

  tick(dt) {
    // Update buildings
    for (let i = this.buildings.length - 1; i >= 0; i--) {
      const b = this.buildings[i];
      if (!b.active) {
        this.buildings.splice(i, 1);
        this.player.removeBuilding(b);
        continue;
      }
      const result = b.tick(dt);
      if (result) {
        if (result.resource) {
          this.player.addResource(result.resource, result.amount);
        }
        if (result.trained) {
          this._onUnitTrained(b, result.trained);
        }
      }
    }

    // Remove dead units
    for (let i = this.units.length - 1; i >= 0; i--) {
      const u = this.units[i];
      if (!u.alive || !u.active) {
        this.units.splice(i, 1);
        this.player.removeUnit(u);
      }
    }

    // ── Combat ────────────────────────────────────────────
    this.combat.tick(dt, this.units);

    // ── Knockback ─────────────────────────────────────────
    this.knockback.rebuildHash(this.units);
    this.knockback.tickKnockback(this.units, dt);

    // ── Enemy AI ──────────────────────────────────────────
    this.enemyAI.tick(dt);

    // ── Corruption ────────────────────────────────────────
    this.corruption.tick(dt);

    // ── Mission check ─────────────────────────────────────
    if (!this.missionComplete) {
      this._checkMission1();
    }
  }

  _onUnitTrained(building, unitType) {
    const spawnGx = building.gridX + building.footprint.w;
    const spawnGy = building.gridY + Math.floor(building.footprint.h / 2);

    // Find walkable tile near building
    let gx = spawnGx, gy = spawnGy;
    for (let r = 0; r < 4; r++) {
      for (let dy = -r; dy <= r; dy++) {
        for (let dx = -r; dx <= r; dx++) {
          if (this.tileMap.isWalkable(spawnGx + dx, spawnGy + dy)) {
            gx = spawnGx + dx;
            gy = spawnGy + dy;
            r = 99; dy = 99; break;
          }
        }
      }
    }

    const unit = this.spawnUnit(unitType, gx, gy, building.faction);
    this.notify(`${UNIT_DEFS[unitType].name} bereit.`);
  }

  // ── Mission 1 ─────────────────────────────────────────────

  _checkMission1() {
    const hasSoda = this.player.resources.soda >= 50;
    const hasApothekenhaus = this.player.countBuildings('apothekenhaus') >= 1;

    if (hasSoda && hasApothekenhaus) {
      this.missionComplete = true;
      this.notify('MISSION 1 ABGESCHLOSSEN!');
    }
  }

  // ── Queries ───────────────────────────────────────────────

  getBuildingAt(gx, gy) {
    return this.buildings.find(b => b.occupies(gx, gy)) || null;
  }

  getUnitAt(gx, gy) {
    return this.units.find(u => u.alive && u.gridX === gx && u.gridY === gy) || null;
  }

  getSelectedUnits() {
    return this.units.filter(u => u.alive && u.selected);
  }
}
