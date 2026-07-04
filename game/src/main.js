// ── HELLMUTH · Entry Point ────────────────────────────────────

import BootScene  from './scenes/BootScene.js';
import GameScene  from './scenes/GameScene.js';
import HUDOverlay from './hud/HUDOverlay.js';

const config = {
  type:   Phaser.AUTO,
  width:  window.innerWidth,
  height: window.innerHeight,
  parent: 'game-container',
  backgroundColor: '#0f1117',
  scale: {
    mode:       Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  physics: {
    default: 'arcade',
    arcade: { debug: false }
  },
  scene: [BootScene, GameScene, HUDOverlay],
  input: {
    mouse: {
      target: window
    }
  },
  render: {
    pixelArt: false,
    antialias: true
  }
};

const game = new Phaser.Game(config);

export default game;
