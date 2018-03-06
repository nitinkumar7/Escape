
var Menu = function(){
    console.log("menuState");
};

Menu.prototype = {
    preload : preloadMenu,
    create : createMenu,
    update : updateMenu
};

function preloadMenu(){
    
}


var back;
var moving;
var start;
var instruct;
var cred;


function createMenu(){
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.sound.stopAll();
    //Add background
    back = game.add.tileSprite(0,0,800,600, 'main');
    moving = 1;

    this.menuSound = game.add.audio('main');
    this.menuSound.play('', 0, 1, true);

    var fullbutton = game.input.keyboard.addKey(Phaser.Keyboard.F);
    fullbutton.onDown.add(goFull, this);

    fullButton = game.add.button(50, 50, 'fullButton', goFull, this, 2, 1, 0);
    fullButton.scale.setTo(0.5,0.5);

    game.add.sprite(100,50,'logo');
    start = game.add.button(330, 250, 'play', startGame, this);
    instruct = game.add.button(260, 320, 'instructions', instructGame, this);
    cred = game.add.button(300,390, 'credits', creditGame, this);
    this.soundButton = game.add.button(700,500, 'sound', toggleMute, this);
    if (!this.game.sound.mute) {
    this.soundButton.tint = 16777215;
} else {
    this.soundButton.tint = 16711680;
}

     var enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    enterKey.onDown.addOnce(startGame, this);
    
}


function updateMenu() {
    back.tilePosition.y -= moving;

    if (game.scale.isFullScreen){
            fullButton.frame = 1;
    }
    
    else{    
        fullButton.frame = 0;
    }
    
   
}

function startGame(){

    game.state.start('Game');
}


function instructGame(){
    game.state.start('Help');
}

function creditGame(){
    game.state.start('Credit');
}

function goFull() {

    if (game.scale.isFullScreen){
            game.scale.stopFullScreen();
    }
    
    else{    
        game.scale.startFullScreen(false);
    }
}

function toggleMute() {
    if (!this.game.sound.mute) {
        this.game.sound.mute = true;
        this.soundButton.tint = 16711680;
    } else {
        this.game.sound.mute = false;
        this.soundButton.tint = 16777215;
    }
}