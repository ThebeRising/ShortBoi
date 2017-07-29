/*
 * Block
 * =====
 *
 * Pieces of a world puzzle
 */

'use strict';

module.exports = Block;

function Block(game,x,y) {
  Phaser.Sprite.call(this, game, x, y, 'platform');

  // TODO:
  //   1. Edit constructor parameters accordingly.
  //   2. Adjust object properties.
}
Block.prototype = Object.create(Phaser.Sprite.prototype);
Block.prototype.constructor = Block;

Block.prototype.update = function () {
  // TODO: Stub.
};
