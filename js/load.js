
var Load = function(){
    console.log("loadState");
};

Load.prototype = {
    preload : preloadLoad,
    create : createLoad,
    update : updateLoad
};

function preloadLoad(){
    //game.add.text(game.world.centerX-200, game.world.height/3, 'Loading.....', { fontSize: '32px', fill: '#FFF' });

    game.add.bitmapText(game.world.centerX - 50,150, 'engeexpa', 'Loading...', 30);

    var progressBar = game.add.sprite(game.world.centerX, 200, 'progressbar');
    progressBar.anchor.setTo(0.5, 0.5);
    game.load.setPreloadSprite(progressBar);

    game.load.image('menu', 'assets/images/menu.png');
    game.load.image('cursor', 'assets/images/cursor.png');
    game.load.image('water', 'assets/images/wave.png');
    game.load.image('flame1', 'assets/images/flame1.png');
    game.load.image('coins', 'assets/images/coin.png');
    game.load.spritesheet('meteor', 'assets/images/meteor.png',149.4,290);
    game.load.spritesheet('fullButton', 'assets/images/fullScreen.png', 100, 100);
    game.load.spritesheet('muteUnmuteButton', 'assets/images/musicOnOff.png', 100, 100);
    game.load.image('pause_button','assets/images/pause.png');

    game.load.image('background1', 'assets/images/back.png');  
    game.load.spritesheet('hero', 'assets/images/char.png', 75, 74);
    game.load.image('build1', 'assets/images/build1.png');
    game.load.image('build2', 'assets/images/build2.png');
    game.load.image('build3', 'assets/images/build3.png');
    game.load.image('build4', 'assets/images/build4.png');
    game.load.image('wave1', 'assets/images/wave1.png');
    game.load.image('wave2', 'assets/images/wave2.png');
    
    game.load.image('main', 'assets/images/main.png');
    game.load.image('logo', 'assets/images/log.png');
    game.load.image('play', 'assets/images/play.png');
    game.load.image('instructions', 'assets/images/instructions.png');
    game.load.image('credits', 'assets/images/credits.png');
    game.load.image('sound', 'assets/images/sound.png');

    game.load.bitmapFont('zerothre', 'assets/fonts/zerothre.png', 'assets/fonts/zerothre.fnt');
    game.load.bitmapFont('record', 'assets/fonts/record.png', 'assets/fonts/record.fnt');
    game.load.bitmapFont('instructions', 'assets/fonts/instructions.png', 'assets/fonts/instructions.fnt');

    game.load.audio('track1', 'assets/sounds/track1.mp3');
    game.load.audio('track2', 'assets/sounds/finish.mp3');
    game.load.audio('track3', 'assets/sounds/track3.mp3');
    game.load.audio('bomb', 'assets/sounds/bomb.mp3');
    game.load.audio('comet', 'assets/sounds/comet.mp3');
    game.load.audio('track4', 'assets/sounds/track4.mp3');
    
    game.load.audio('main', 'assets/sounds/main.mp3', 0.75, true);
    game.load.audio('start', 'assets/sounds/start.mp3', 0.75, true);
    game.load.audio('win', 'assets/sounds/win.mp3', 0.75, true);
    game.load.audio('select', 'assets/sounds/select.mp3', 0.75, true);
    game.load.audio('option', 'assets/sounds/cursor.mp3', 0.75, true);
    
}

function createLoad(){
    game.physics.startSystem(Phaser.Physics.ARCADE);
    
    game.state.start('Menu');
}

function updateLoad(){

}
