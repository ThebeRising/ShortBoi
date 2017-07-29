/*
 * `assets` module
 * ===============
 *
 * Declares static asset packs to be loaded using the `Phaser.Loader#pack`
 * method. Use this module to declare game assets.
 */

'use strict';

//  -- Splash screen assets used by the Preloader.
exports.preloaderAssets = [{
  key: 'splash-screen',
  type: 'image'
}, {
  key: 'progress-bar',
  type: 'image'
}];

//  -- General assets used throughout the game.
exports.gameAssets = [{
  key: 'phaser',
  type: 'image'
  },{
  key: 'button_sprite_sheet',
  type: 'spritesheet',
  frameWidth: 193,
  frameHeight: 71
  },{
  key : 'platform',
  type : 'image'
  },{
  key : 'sky',
  type : 'image'
  },{
  key : 'dude',
  type : 'spritesheet',
  frameWidth : 32,
  frameHeight : 48,
  frameMax : 9
  },{
  key : 'star',
  type : 'image'
}];
