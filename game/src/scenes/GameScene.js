// ── HELLMUTH · GameScene ──────────────────────────────────────

import GameWorld from '../game/GameWorld.js';
import { gridToScreen, screenToGrid, gridToDepth, RenderLayer,
         MAP_W, MAP_H, BUILDING_DEFS, UNIT_DEFS } from '../config.js';

const EDGE_ZONE   = 24;      // px from screen edge to trigger scroll
const SCROLL_SPEED = 800;    // px/s
const ZOOM_MIN     = 0.35;
const ZOOM_MAX     = 2;
const TICK_RATE    = 1 / 30;  // 30 Hz fixed timestep

export default class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

  create() {
    // ── World ─────────────────────────────────────────────
    this.world = new GameWorld(this);

    // Render tile map
    this.world.tileMap.render(this);

    // ── Camera setup ──────────────────────────────────────
    const mapCenter = gridToScreen(MAP_W / 2, MAP_H / 2);
    this.cameras.main.centerOn(mapCenter.x, mapCenter.y);
    this.cameras.main.setZoom(0.8);

    // Expand world bounds so camera can pan freely
    const margin = 1600;
    const topLeft     = gridToScreen(0, MAP_H);
    const topRight    = gridToScreen(MAP_W, 0);
    const bottomLeft  = gridToScreen(0, 0);
    const bottomRight = gridToScreen(MAP_W, MAP_H);
    const minX = topLeft.x - margin;
    const maxX = topRight.x + margin;
    const minY = bottomLeft.y - margin;
    const maxY = bottomRight.y + margin;
    this.cameras.main.setBounds(minX, minY, maxX - minX, maxY - minY);

    // ── Selection state ───────────────────────────────────
    this.selectedUnit     = null;
    this.selectedBuilding = null;
    this.boxSelecting     = false;
    this.boxStart         = { x: 0, y: 0 };
    this.selectionBox     = this.add.rectangle(0, 0, 0, 0, 0xFFFF00, 0.15)
      .setStrokeStyle(1, 0xFFFF00, 0.6)
      .setDepth(gridToDepth(0, 0, RenderLayer.UI))
      .setVisible(false)
      .setOrigin(0, 0);

    // ── Building placement ghost ──────────────────────────
    this.placingType  = null;
    this.placeGhost   = null;

    // ── Spawn initial entities ────────────────────────────
    this._spawnInitialSetup();

    // ── Input bindings ────────────────────────────────────
    this._setupInput();

    // ── Fixed timestep accumulator ────────────────────────
    this._tickAccum = 0;

    // ── Start HUD overlay scene ───────────────────────────
    this.scene.launch('HUDOverlay');
    this.hudScene = this.scene.get('HUDOverlay');

    // ── Listen for build commands from HUD ────────────────
    this.events.on('hud:build', (type) => {
      this._startPlacing(type);
    });

    // ── Listen for train commands from HUD ───────────────
    this.events.on('hud:train', (unitType) => {
      if (this.selectedBuilding) {
        this.world.trainUnit(this.selectedBuilding, unitType);
      }
    });

    // ── Middle-mouse panning state ────────────────────────
    this._panning      = false;
    this._panLastX     = 0;
    this._panLastY     = 0;
  }

  // ── Initial setup ─────────────────────────────────────────

  _spawnInitialSetup() {
    // HQ at map center
    const hqX = 17, hqY = 17;
    this.world.placeBuilding('hq', hqX, hqY, true);

    // Sodabrunnen near HQ
    this.world.placeBuilding('sodabrunnen', hqX + 7, hqY + 2, true);

    // Apothekerin near HQ
    this.world.spawnUnit('apothekerin', hqX + 3, hqY + 7, 'apotheker');

    this.world.notify('Willkommen bei HELLMUTH.');
    this.world.notify('Baue ein Apothekenhaus und sammle 50 Soda.');
  }

  // ── Input ─────────────────────────────────────────────────

  _setupInput() {
    this.input.on('pointerdown', (pointer) => {
      if (pointer.button === 0) {
        this._onLeftDown(pointer);
      } else if (pointer.button === 1) {
        // Middle mouse: start panning
        this._panning  = true;
        this._panLastX = pointer.x;
        this._panLastY = pointer.y;
      } else if (pointer.button === 2) {
        this._onRightDown(pointer);
      }
    });

    this.input.on('pointermove', (pointer) => {
      if (this._panning) {
        const dx = pointer.x - this._panLastX;
        const dy = pointer.y - this._panLastY;
        this.cameras.main.scrollX -= dx / this.cameras.main.zoom;
        this.cameras.main.scrollY -= dy / this.cameras.main.zoom;
        this._panLastX = pointer.x;
        this._panLastY = pointer.y;
      }

      if (this.boxSelecting) {
        this._updateBoxSelection(pointer);
      }

      if (this.placingType) {
        this._updatePlaceGhost(pointer);
      }
    });

    this.input.on('pointerup', (pointer) => {
      if (pointer.button === 0) {
        this._onLeftUp(pointer);
      } else if (pointer.button === 1) {
        this._panning = false;
      }
    });

    // Zoom with mouse wheel
    this.input.on('wheel', (pointer, gameObjects, dx, dy) => {
      const cam  = this.cameras.main;
      const zoom = Phaser.Math.Clamp(cam.zoom - dy * 0.001, ZOOM_MIN, ZOOM_MAX);
      cam.setZoom(zoom);
    });

    // Keyboard shortcuts
    this.input.keyboard.on('keydown-ESC', () => {
      this._cancelPlacing();
      this._deselectAll();
    });

    // Build hotkeys: 1=Sodabrunnen, 2=Hopfengarten, 3=Apothekenhaus
    this.input.keyboard.on('keydown-ONE',   () => this._startPlacing('sodabrunnen'));
    this.input.keyboard.on('keydown-TWO',   () => this._startPlacing('hopfengarten'));
    this.input.keyboard.on('keydown-THREE', () => this._startPlacing('apothekenhaus'));

    // Train hotkey: T = train first available unit at selected building
    this.input.keyboard.on('keydown-T', () => {
      if (this.selectedBuilding && this.selectedBuilding.trains) {
        const unitType = this.selectedBuilding.trains[0];
        if (unitType) {
          this.world.trainUnit(this.selectedBuilding, unitType);
        }
      }
    });

    // Prevent context menu
    this.input.mouse.disableContextMenu();
  }

  // ── Left click ────────────────────────────────────────────

  _onLeftDown(pointer) {
    // If placing a building, attempt to place
    if (this.placingType) {
      this._confirmPlacement(pointer);
      return;
    }

    // Start box selection
    const worldPos = this.cameras.main.getWorldPoint(pointer.x, pointer.y);
    this.boxSelecting = true;
    this.boxStart = { x: worldPos.x, y: worldPos.y };
    this.selectionBox.setPosition(worldPos.x, worldPos.y);
    this.selectionBox.setSize(0, 0);
    this.selectionBox.setVisible(true);
  }

  _onLeftUp(pointer) {
    if (!this.boxSelecting) return;
    this.boxSelecting = false;
    this.selectionBox.setVisible(false);

    const worldPos = this.cameras.main.getWorldPoint(pointer.x, pointer.y);
    const x1 = Math.min(this.boxStart.x, worldPos.x);
    const y1 = Math.min(this.boxStart.y, worldPos.y);
    const x2 = Math.max(this.boxStart.x, worldPos.x);
    const y2 = Math.max(this.boxStart.y, worldPos.y);
    const boxW = x2 - x1;
    const boxH = y2 - y1;

    this._deselectAll();

    // If the box is tiny, treat as a click-select
    if (boxW < 8 && boxH < 8) {
      this._clickSelect(worldPos.x, worldPos.y);
      return;
    }

    // Box select: grab all player units inside the rectangle
    for (const u of this.world.units) {
      if (u.alive && u.faction === 'apotheker' &&
          u.x >= x1 && u.x <= x2 && u.y >= y1 && u.y <= y2) {
        u.setSelected(true);
        this.selectedUnit = u; // last one as "primary"
      }
    }
  }

  _updateBoxSelection(pointer) {
    const worldPos = this.cameras.main.getWorldPoint(pointer.x, pointer.y);
    const x = Math.min(this.boxStart.x, worldPos.x);
    const y = Math.min(this.boxStart.y, worldPos.y);
    const w = Math.abs(worldPos.x - this.boxStart.x);
    const h = Math.abs(worldPos.y - this.boxStart.y);
    this.selectionBox.setPosition(x, y);
    this.selectionBox.setSize(w, h);
  }

  _clickSelect(wx, wy) {
    const grid = screenToGrid(wx, wy);

    // Try to select a unit
    const unit = this.world.getUnitAt(grid.gx, grid.gy);
    if (unit && unit.faction === 'apotheker') {
      unit.setSelected(true);
      this.selectedUnit = unit;
      return;
    }

    // Try to select a building
    const building = this.world.getBuildingAt(grid.gx, grid.gy);
    if (building) {
      building.setSelected(true);
      this.selectedBuilding = building;
      return;
    }
  }

  // ── Right click (move / attack) ───────────────────────────

  _onRightDown(pointer) {
    if (this.placingType) {
      this._cancelPlacing();
      return;
    }

    const worldPos = this.cameras.main.getWorldPoint(pointer.x, pointer.y);
    const grid     = screenToGrid(worldPos.x, worldPos.y);

    // Move all selected units
    const selected = this.world.getSelectedUnits();
    if (selected.length > 0 && this.world.tileMap.isWalkable(grid.gx, grid.gy)) {
      // Simple formation: offset each unit slightly
      for (let i = 0; i < selected.length; i++) {
        const ox = i % 3;
        const oy = Math.floor(i / 3);
        const tx = Math.min(MAP_W - 1, grid.gx + ox);
        const ty = Math.min(MAP_H - 1, grid.gy + oy);
        selected[i].moveTo(tx, ty);
      }

      // Move-confirm visual feedback
      this._showMoveMarker(worldPos.x, worldPos.y);
    }
  }

  _showMoveMarker(wx, wy) {
    const marker = this.add.circle(wx, wy, 8, 0x44FF44, 0.6)
      .setDepth(gridToDepth(0, 0, RenderLayer.VFX));
    this.tweens.add({
      targets: marker,
      alpha: 0,
      scale: 2.5,
      duration: 500,
      onComplete: () => marker.destroy()
    });
  }

  // ── Deselect ──────────────────────────────────────────────

  _deselectAll() {
    for (const u of this.world.units) {
      if (u.alive) u.setSelected(false);
    }
    for (const b of this.world.buildings) {
      b.setSelected(false);
    }
    this.selectedUnit     = null;
    this.selectedBuilding = null;
  }

  // ── Building placement ────────────────────────────────────

  _startPlacing(type) {
    const def = BUILDING_DEFS[type];
    if (!def) return;

    if (!this.world.player.canAfford(def.cost)) {
      this.world.notify('Nicht genug Ressourcen!');
      return;
    }

    this._cancelPlacing();
    this.placingType = type;

    // Create ghost sprite
    this.placeGhost = this.add.image(0, 0, def.texture)
      .setAlpha(0.6)
      .setDepth(gridToDepth(0, 0, RenderLayer.UI));
  }

  _updatePlaceGhost(pointer) {
    if (!this.placeGhost) return;

    const worldPos = this.cameras.main.getWorldPoint(pointer.x, pointer.y);
    const grid     = screenToGrid(worldPos.x, worldPos.y);
    const snapped  = gridToScreen(grid.gx, grid.gy);

    this.placeGhost.setPosition(snapped.x, snapped.y);

    const def  = BUILDING_DEFS[this.placingType];
    const ok   = this.world.tileMap.isBuildable(grid.gx, grid.gy, def.footprint.w, def.footprint.h);
    const free = !this.world.getBuildingAt(grid.gx, grid.gy);

    if (ok && free) {
      this.placeGhost.setTint(0x44FF44);
    } else {
      this.placeGhost.setTint(0xFF4444);
    }
  }

  _confirmPlacement(pointer) {
    const worldPos = this.cameras.main.getWorldPoint(pointer.x, pointer.y);
    const grid     = screenToGrid(worldPos.x, worldPos.y);

    const result = this.world.placeBuilding(this.placingType, grid.gx, grid.gy);
    if (result) {
      this._cancelPlacing();
    }
  }

  _cancelPlacing() {
    this.placingType = null;
    if (this.placeGhost) {
      this.placeGhost.destroy();
      this.placeGhost = null;
    }
  }

  // ── Update loop ───────────────────────────────────────────

  update(time, delta) {
    const dt = delta / 1000;

    // ── Edge-scroll camera ────────────────────────────────
    this._edgeScroll(dt);

    // ── Fixed-timestep game logic ─────────────────────────
    this._tickAccum += dt;
    while (this._tickAccum >= TICK_RATE) {
      this.world.tick(TICK_RATE);
      this._tickAccum -= TICK_RATE;
    }

    // ── Update HUD ────────────────────────────────────────
    if (this.hudScene && this.hudScene.scene.isActive()) {
      this.hudScene.updateHUD(this.world, {
        unit:     this.selectedUnit,
        building: this.selectedBuilding
      });
    }
  }

  _edgeScroll(dt) {
    const pointer = this.input.activePointer;
    const cam     = this.cameras.main;
    const speed   = SCROLL_SPEED / cam.zoom;

    if (pointer.x < EDGE_ZONE)                         cam.scrollX -= speed * dt;
    if (pointer.x > cam.width - EDGE_ZONE)              cam.scrollX += speed * dt;
    if (pointer.y < EDGE_ZONE)                         cam.scrollY -= speed * dt;
    if (pointer.y > cam.height - EDGE_ZONE)             cam.scrollY += speed * dt;
  }
}
