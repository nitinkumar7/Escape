
var Help = function(){
    console.log("helpState");
};

Help.prototype = {
    preload : preloadhelp,
    create : createhelp,
    update : updatehelp
};


function preloadhelp(){
    game.load.image('background', 'assets/images/main.png');
    game.load.image('bac', 'assets/images/bac.png');

}


function createhelp(){
    game.sound.stopAll();
    var background = game.add.sprite(0, 0, 'background');
    var b = game.add.button(600, 500, 'bac', menuGame, this);

    this.track = game.add.audio('track4');
    this.track.play('', 0, 1, true);
   background.scale.setTo(2,2);
    
    helpText = game.add.text(game.world.width/2,game.world.height/4, 'Help', { fontSize: '45px', fill: '#000000' });
    
    helpText.anchor.setTo(0.5,0.5);

    line1Text = game.add.text(game.world.centerX-300, game.world.height/3, 'This is a run and jump over buildings game with limitless adventures', { fontSize: '20px', fill: '#000000' });

    line2Text = game.add.text(game.world.centerX-200, game.world.height - 300, 'IN GAME CONTROLS', { fontSize: '20px', fill: '#000000' });

    line3Text = game.add.text(game.world.centerX-200, game.world.height - 250, 'Move with the arrow keys', { fontSize: '20px', fill: '#000000' });
    line4Text = game.add.text(game.world.centerX-200, game.world.height - 210, 'Escape for menu', { fontSize: '20px', fill: '#000000' });
    line5Text = game.add.text(game.world.centerX-200, game.world.height - 170, 'R to restart', { fontSize: '20px', fill: '#000000' });
    line3Text = game.add.text(game.world.centerX-200, game.world.height - 130, 'Q to quit', { fontSize: '20px', fill: '#000000' });
    line3Text = game.add.text(game.world.centerX-200, game.world.height - 90, 'M to mute', { fontSize: '20px', fill: '#000000' });

}
function updatehelp(){

}

function menuGame(){
    game.state.start('Menu');
}