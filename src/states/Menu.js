/*
 * Menu state
 * ==========
 *
 * A menu for the game
 */

'use strict';
var text;
var button;
var background;

exports.create = function (game) {

  // TODO: Stub
  //creates blue background on screen


  var bar = game.add.graphics();
  bar.beginFill(0x0000ff, 0.7);
  bar.drawRect(0, 100, 800, 100);

  var style = { font: 'bold 32px Arial', fill: '#fff', boundsAlignH: 'center', boundsAlignV: 'middle' };
  text = game.add.text(0, 0, 'ShortBoi', style);
  text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
  text.setTextBounds(0, 100, 800, 100);

  button = game.add.button(game.world.centerX - 95, 400, 'button_sprite_sheet', actionOnClick, this, 2, 1, 0);
};

exports.update = function (/*game*/) {
  // TODO: Stub
};


function up() {
    console.log('button up', arguments);
}

function over() {
    console.log('button over');
}

function out() {
    console.log('button out');
}

var f
function actionOnClick () {

  //background.visible =! background.visible;
  this.game.state.start('Game')

}
