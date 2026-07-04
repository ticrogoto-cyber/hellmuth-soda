// ── HELLMUTH · BootScene ──────────────────────────────────────
// Generates all procedural placeholder textures and transitions
// to GameScene after a brief title splash.

export default class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' });
  }

  preload() {
    // Real sprites from iso-pipeline (blender_master_rig.py render).
    // Missing files fall through to procedural placeholders in create().
    const dirs = ['000', '045', '090', '135', '180', '225', '270', '315'];
    for (const d of dirs) {
      this.load.image(
        `bld_apothekenhaus_dir${d}`,
        `assets/buildings/apothekenhaus/apotheke_dir_${d}_preview.png`
      );
    }
    this.load.on('loaderror', (file) => {
      console.warn('[BootScene] asset missing, procedural fallback:', file.key);
    });
  }

  create() {
    const { width, height } = this.cameras.main;

    // ── Title splash ──────────────────────────────────────
    this.add.text(width / 2, height / 2 - 40, 'HELLMUTH', {
      fontFamily: 'monospace',
      fontSize: '48px',
      color: '#FFD700',
      fontStyle: 'bold'
    }).setOrigin(0.5);

    this.add.text(width / 2, height / 2 + 10, 'Isometric RTS', {
      fontFamily: 'monospace',
      fontSize: '16px',
      color: '#AAAAAA'
    }).setOrigin(0.5);

    this.add.text(width / 2, height / 2 + 40, 'Lade...', {
      fontFamily: 'monospace',
      fontSize: '14px',
      color: '#666666'
    }).setOrigin(0.5);

    // ── Generate procedural textures ──────────────────────
    this._genTileTexture('tile_grass', 0x4a7a3e);
    this._genTileTexture('tile_water', 0x1a3a2e);
    this._genTileTexture('tile_path',  0x8a7a5e);
    this._genTileTexture('tile_stone', 0x6a6a6a);

    this._genUnitApo();
    this._genUnitKor();
    this._genUnitBrau();
    this._genUnitDrohne();

    this._genBuildingHQ();
    // Apothekenhaus: prefer iso-rendered sprite (dir045 is the canonical
    // NO-facing angle for yaw=45°/elevation=30°), procedural fallback.
    if (this.textures.exists('bld_apothekenhaus_dir045')) {
      const src = this.textures.get('bld_apothekenhaus_dir045').getSourceImage();
      this.textures.addImage('bld_apothekenhaus', src);
    } else {
      this._genBuildingApothekenhaus();
    }
    this._genBuildingSodabrunnen();
    this._genBuildingHopfengarten();

    // ── Transition to game ────────────────────────────────
    this.time.delayedCall(1000, () => {
      this.scene.start('GameScene');
    });
  }

  // ── Tile textures (isometric diamonds) ────────────────────

  _genTileTexture(key, color) {
    const g = this.make.graphics({ add: false });
    g.fillStyle(color, 1);
    g.beginPath();
    g.moveTo(64,  0);    // top
    g.lineTo(128, 32);   // right
    g.lineTo(64,  64);   // bottom
    g.lineTo(0,   32);   // left
    g.closePath();
    g.fillPath();

    // Subtle edge line
    g.lineStyle(1, 0x000000, 0.15);
    g.beginPath();
    g.moveTo(64,  0);
    g.lineTo(128, 32);
    g.lineTo(64,  64);
    g.lineTo(0,   32);
    g.closePath();
    g.strokePath();

    g.generateTexture(key, 128, 64);
    g.destroy();
  }

  // ── Unit: Apothekerin (gold humanoid) ─────────────────────

  _genUnitApo() {
    const g = this.make.graphics({ add: false });

    // Body (tall oval)
    g.fillStyle(0xFFD700, 1);
    g.fillEllipse(16, 30, 18, 28);

    // Head
    g.fillStyle(0xFFE066, 1);
    g.fillCircle(16, 10, 7);

    // Eyes
    g.fillStyle(0x222222, 1);
    g.fillCircle(13, 9, 1.5);
    g.fillCircle(19, 9, 1.5);

    // Cross symbol (apothecary)
    g.fillStyle(0xFFFFFF, 1);
    g.fillRect(14, 24, 4, 12);
    g.fillRect(10, 28, 12, 4);

    g.generateTexture('unit_apo', 32, 48);
    g.destroy();
  }

  // ── Unit: Korrupte (magenta spiky) ────────────────────────

  _genUnitKor() {
    const g = this.make.graphics({ add: false });

    // Spiky body
    g.fillStyle(0xCC00CC, 1);
    g.beginPath();
    g.moveTo(12, 0);     // top spike
    g.lineTo(18, 6);
    g.lineTo(24, 2);     // top-right spike
    g.lineTo(20, 10);
    g.lineTo(24, 14);    // right spike
    g.lineTo(18, 16);
    g.lineTo(20, 24);    // bottom-right spike
    g.lineTo(12, 18);
    g.lineTo(4,  24);    // bottom-left spike
    g.lineTo(6,  16);
    g.lineTo(0,  14);    // left spike
    g.lineTo(4,  10);
    g.lineTo(0,  2);     // top-left spike
    g.lineTo(6,  6);
    g.closePath();
    g.fillPath();

    // Core
    g.fillStyle(0xFF44FF, 1);
    g.fillCircle(12, 12, 5);

    // Eye
    g.fillStyle(0xFFFF00, 1);
    g.fillCircle(12, 11, 2);

    g.generateTexture('unit_kor', 24, 24);
    g.destroy();
  }

  // ── Unit: Braumeister (gold armored, larger) ──────────────

  _genUnitBrau() {
    const g = this.make.graphics({ add: false });

    // Armored body
    g.fillStyle(0xCC9900, 1);
    g.fillEllipse(20, 32, 24, 34);

    // Helmet
    g.fillStyle(0xBB8800, 1);
    g.fillCircle(20, 10, 9);
    g.fillStyle(0xDDAA22, 1);
    g.fillRect(14, 4, 12, 4);

    // Eyes
    g.fillStyle(0x222222, 1);
    g.fillCircle(16, 10, 2);
    g.fillCircle(24, 10, 2);

    // Brennnessel emblem (serrated leaf shape)
    g.fillStyle(0x44AA44, 1);
    g.beginPath();
    g.moveTo(20, 22);
    g.lineTo(17, 26); g.lineTo(19, 27);
    g.lineTo(16, 31); g.lineTo(18, 32);
    g.lineTo(15, 36); g.lineTo(20, 38);
    g.lineTo(25, 36); g.lineTo(22, 32);
    g.lineTo(24, 31); g.lineTo(21, 27);
    g.lineTo(23, 26);
    g.closePath();
    g.fillPath();

    g.generateTexture('unit_brau', 40, 56);
    g.destroy();
  }

  // ── Unit: Bierhefe-Drohne (small magenta flyer) ──────────

  _genUnitDrohne() {
    const g = this.make.graphics({ add: false });

    // Body
    g.fillStyle(0xAA00AA, 1);
    g.fillEllipse(12, 12, 14, 10);

    // Wings
    g.fillStyle(0xCC44CC, 0.6);
    g.fillEllipse(4, 6, 8, 4);
    g.fillEllipse(20, 6, 8, 4);

    // Eye
    g.fillStyle(0xFF88FF, 1);
    g.fillCircle(12, 10, 3);
    g.fillStyle(0xFFFF00, 1);
    g.fillCircle(12, 10, 1.5);

    g.generateTexture('unit_drohne', 24, 24);
    g.destroy();
  }

  // ── Building: HQ Destillerie (large white) ────────────────

  _genBuildingHQ() {
    const g = this.make.graphics({ add: false });
    const s = 192;

    // Base (isometric box)
    g.fillStyle(0xDDDDDD, 1);
    g.beginPath();
    g.moveTo(s / 2, 20);
    g.lineTo(s - 10, s / 2);
    g.lineTo(s / 2, s - 20);
    g.lineTo(10, s / 2);
    g.closePath();
    g.fillPath();

    // Roof
    g.fillStyle(0xBBBBBB, 1);
    g.beginPath();
    g.moveTo(s / 2, 5);
    g.lineTo(s - 5, s / 2 - 15);
    g.lineTo(s / 2, 40);
    g.lineTo(5, s / 2 - 15);
    g.closePath();
    g.fillPath();

    // Door
    g.fillStyle(0x664422, 1);
    g.fillRect(s / 2 - 8, s / 2 + 10, 16, 24);

    // Sign text area
    g.fillStyle(0xFFD700, 1);
    g.fillRect(s / 2 - 20, s / 2 - 10, 40, 14);

    // Chimney
    g.fillStyle(0x888888, 1);
    g.fillRect(s / 2 + 25, 10, 10, 25);

    g.generateTexture('bld_hq', s, s);
    g.destroy();
  }

  // ── Building: Apothekenhaus (white cottage) ───────────────

  _genBuildingApothekenhaus() {
    const g = this.make.graphics({ add: false });

    // Walls
    g.fillStyle(0xEEEEEE, 1);
    g.beginPath();
    g.moveTo(48, 15);
    g.lineTo(88, 40);
    g.lineTo(48, 80);
    g.lineTo(8, 40);
    g.closePath();
    g.fillPath();

    // Roof
    g.fillStyle(0x44AA44, 1);
    g.beginPath();
    g.moveTo(48, 5);
    g.lineTo(90, 30);
    g.lineTo(48, 35);
    g.lineTo(6, 30);
    g.closePath();
    g.fillPath();

    // Door
    g.fillStyle(0x664422, 1);
    g.fillRect(42, 50, 12, 18);

    // Cross
    g.fillStyle(0x44DD44, 1);
    g.fillRect(46, 25, 4, 10);
    g.fillRect(42, 29, 12, 3);

    g.generateTexture('bld_apothekenhaus', 96, 96);
    g.destroy();
  }

  // ── Building: Sodabrunnen (blue well) ─────────────────────

  _genBuildingSodabrunnen() {
    const g = this.make.graphics({ add: false });

    // Well base
    g.fillStyle(0x777777, 1);
    g.fillEllipse(32, 40, 40, 24);

    // Water
    g.fillStyle(0x2288DD, 1);
    g.fillEllipse(32, 38, 30, 16);

    // Rim
    g.lineStyle(3, 0x555555, 1);
    g.strokeEllipse(32, 40, 42, 26);

    // Support posts
    g.fillStyle(0x664422, 1);
    g.fillRect(14, 10, 4, 30);
    g.fillRect(46, 10, 4, 30);

    // Crossbar
    g.fillRect(14, 10, 36, 4);

    // Bucket
    g.fillStyle(0x888888, 1);
    g.fillRect(28, 16, 8, 8);

    g.generateTexture('bld_sodabrunnen', 64, 64);
    g.destroy();
  }

  // ── Building: Hopfengarten (green garden) ─────────────────

  _genBuildingHopfengarten() {
    const g = this.make.graphics({ add: false });

    // Soil base
    g.fillStyle(0x5a4a2e, 1);
    g.beginPath();
    g.moveTo(48, 8);
    g.lineTo(90, 32);
    g.lineTo(48, 56);
    g.lineTo(6, 32);
    g.closePath();
    g.fillPath();

    // Plant rows
    g.fillStyle(0x44AA33, 1);
    for (let i = 0; i < 4; i++) {
      const ox = 24 + i * 12;
      g.fillCircle(ox, 24 + (i % 2) * 4, 6);
      g.fillCircle(ox + 6, 38 - (i % 2) * 4, 5);
    }

    // Hop vines (vertical lines)
    g.lineStyle(2, 0x338822, 1);
    for (let i = 0; i < 3; i++) {
      const x = 28 + i * 16;
      g.lineBetween(x, 16, x, 48);
    }

    // Fence posts
    g.fillStyle(0x664422, 1);
    g.fillRect(10, 28, 3, 10);
    g.fillRect(83, 28, 3, 10);

    g.generateTexture('bld_hopfengarten', 96, 64);
    g.destroy();
  }
}
