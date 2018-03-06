
var Boot = function(){
	console.log("BootState");
};

Boot.prototype = {
	init : init,
	preload : preloadBoot,
	create : createBoot,
	update : updateBoot
};

function init(){
	game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.scale.refresh();
}

function preloadBoot(){

    game.load.image('progressbar', 'assets/images/progressbar.png');
    game.load.bitmapFont('engeexpa', 'assets/fonts/engeexpa.png', 'assets/fonts/engeexpa.fnt');
}

function createBoot(){
	 game.stage.backgroundColor = '#000';
   
    game.state.start('Load');
}

function updateBoot(){

}