
//var option;
var cursorSound;
var selectSound;
var pauseKeyUp;
var pauseKeyDown;
var pauseKeyEnter;

var IngameMenu = function(Game) {
  this.Game = Game;
  this.option = 0;

  cursorSound = game.add.audio('option');
  selectSound = game.add.audio('select');

  pauseKeyUp = game.input.keyboard.addKey(Phaser.Keyboard.UP);
  pauseKeyDown = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
  pauseKeyEnter = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

  //console.log("Hello");
};

IngameMenu.prototype.constructor = IngameMenu;

IngameMenu.prototype.update = function() {
  //console.log("Hi");
  if (this.option === 0) {
      this.cursor.y = 165;
  } else if (this.option === 1) {
      this.cursor.y = 225;
  } else if (this.option === 2) {
      this.cursor.y = 285;
  }
};

IngameMenu.prototype.show = function() {
  this.option = 0;

  this.mask = game.add.graphics(game.world.x, game.world.y);
  this.mask.beginFill(0x000000, 1);
  this.mask.drawRect(game.world.x, game.world.y, game.width, game.height);
  this.mask.alpha = 0.5;
  this.mask.endFill();

  this.menuBg = game.add.sprite(195, 100, 'menu');
  this.cursor = game.add.sprite(243, 165, 'cursor');
  this.continueLabel = game.add.bitmapText(245, 162 ,'engeexpa', 'Continue', 30);
  this.restartLabel = game.add.bitmapText(245, 222,'engeexpa', 'Restart', 30);
  this.quitLabel = game.add.bitmapText(244, 282,'engeexpa', 'Quit', 30);

  this.menuBg.fixedToCamera = true;
  this.cursor.fixedToCamera =true;
  this.continueLabel.fixedToCamera =true;
  this.restartLabel.fixedToCamera =true;
  this.quitLabel.fixedToCamera = true;
  this.mask.fixedToCamera =true;

  pauseKeyUp.onDown.add(this.moveCursorUp, this);
  pauseKeyDown.onDown.add(this.moveCursorDown, this);
  pauseKeyEnter.onDown.add(this.executeMenuOption, this);
  //console.log("Hello");
  
};

IngameMenu.prototype.hide = function() {
  this.mask.destroy();
  this.menuBg.destroy();
  this.continueLabel.destroy();
  this.restartLabel.destroy();
  this.quitLabel.destroy();
  this.cursor.destroy();

  pauseKeyUp.onDown.removeAll();
  pauseKeyDown.onDown.removeAll();
  pauseKeyEnter.onDown.removeAll();
};

IngameMenu.prototype.moveCursorDown = function() {
  //console.log("down");
  
  cursorSound.play();
  this.option += 1;
  if (this.option > 2) this.option = 0;
  this.update();
console.log(this.option);
};

IngameMenu.prototype.moveCursorUp = function() {
  //console.log("up");
  
  cursorSound.play();
  this.option -= 1;
  if (this.option < 0) this.option = 2;
  this.update();
  
};

IngameMenu.prototype.executeMenuOption = function() {
 

  selectSound.play();

  if (this.option == 1) {
    game.state.start('Game');
  } else if (this.option == 2) {
    game.state.start('Menu');
  }
  //this.togglePause();
 
};
