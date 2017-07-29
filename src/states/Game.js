/*
 * Game state
 * ==========
 *
 * A sample Game state, displaying the Phaser logo.
 */

'use strict';

var Logo = require('../objects/Logo');
var Block = require('../objects/Block');
var Dude = require('../objects/Dude');
var Star = require('../objects/Star');

var logo;
var ground;
var platforms;
var dude;
var star;

var cursors;
exports.create = function (game) {
  //  TODO: Replace this content with really cool game code here :)
  //Sets phsysics properties of game
  game.physics.startSystem(Phaser.Physics.ARCADE);

  //adds a static sprite, a sky background image
  game.add.sprite(0, 0, 'sky');

  //Demo spinning logo of phaser, with listener for click
  var x = game.world.centerX;
  var y = game.world.centerY;
  logo = game.add.existing(new Logo(game, x, y));
  logo.scale.setTo(0.3,0.3);
  logo.inputEnabled = true;
  logo.events.onInputDown.add(listener, logo);

  //Adding blocks to screen.
  //  The platforms group contains the ground and the 2 ledges we can jump on
  platforms = game.add.group();

  //  We will enable physics for any object that is created in this group
  platforms.enableBody = true;
  ground = platforms.add(new Block(game, 0, game.world.height - 64));
  //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
  ground.scale.setTo(2, 2);

  //  This stops it from falling away when you jump on it
  ground.body.immovable = true;

  //Adding the Dude
  dude = game.add.existing(new Dude(game,0, game.world.height - 150));
  game.physics.arcade.enable(dude);

  //  dude physics properties. Give the little guy a slight bounce.
  dude.body.bounce.y = 0.1;
  dude.body.gravity.y = 400;
  dude.body.collideWorldBounds = true;


  //  Our two animations, walking left and right.
  dude.animations.add('left', [0, 1, 2, 3], 10, true);
  dude.animations.add('right', [5, 6, 7, 8], 10, true);

  star = game.add.existing(new Star(game,game.world.width/2,29));
  game.physics.arcade.enable(star);
  //  Our controls.
  cursors = game.input.keyboard.createCursorKeys();

};

exports.update = function(game) {
  game.physics.arcade.collide(dude, platforms);

  dude.body.velocity.x = 0;

  if (cursors.left.isDown)
  {
    //  Move to the left
    dude.body.velocity.x = -110;

    dude.animations.play('left');
  }
  else if (cursors.right.isDown)
  {
    //  Move to the right
    dude.body.velocity.x = 110;
    dude.animations.play('right');
  }
  else
  {
    //  Stand still
    dude.animations.stop();
    dude.frame = 4;
  }

  if (cursors.up.isDown && dude.body.touching.down)
  {
      dude.body.velocity.y = -250;
  }

};

function listener () {
  var current = logo.speed;

  console.log(logo.speed);
  current += 0.2;
  logo.speed = current;

}
