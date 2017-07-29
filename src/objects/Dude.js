/*
 * Dude
 * ====
 *
 * The minion from beyond
 */

'use strict';

module.exports = Dude;

function Dude(game,x,y) {
  Phaser.Sprite.call(this, game,x,y,'dude');
  this.frame = 4;
  // TODO:
  //   1. Edit constructor parameters accordingly.
  //   2. Adjust object properties.
}
Dude.prototype = Object.create(Phaser.Sprite.prototype);
Dude.prototype.constructor = Dude;

Dude.prototype.update = function () {
  // TODO: Stub.


};
