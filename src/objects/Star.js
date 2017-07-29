/*
 * Star
 * ====
 *
 * Glowing, bouncy, balls of light.
 */

'use strict';

module.exports = Star;

function Star(game,x,y) {
  Phaser.Sprite.call(this, game,x,y,'star');

  // TODO:
  //   1. Edit constructor parameters accordingly.
  //   2. Adjust object properties.
}
Star.prototype = Object.create(Phaser.Sprite.prototype);
Star.prototype.constructor = Star;

Star.prototype.update = function () {
  // TODO: Stub.
};
