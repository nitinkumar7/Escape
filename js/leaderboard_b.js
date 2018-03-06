

var LeaderBoard = function(){
    console.log("leaderBoardState");
};

LeaderBoard.prototype = {
    preload : preloadLeaderBoard,
    create : createLeaderBoard,
    update : updateLeaderBoard
};



function preloadLeaderBoard(){

    game.load.image('homeButton', 'assets/images/home.png');
    game.load.image('retryButton', 'assets/images/return.png');
}

var score;


function createLeaderBoard(){

    socket.emit('getHighScore');
    socket.on('sendHighScore', function(counter){
      // console.log(score);
       for(var i=0; i<5;i++)
       {
            var obj = counter[i];
            scoreText = game.add.text(100, 200+50*i, (i+1)+" "+obj.name, {fontSize: '25px', fill: '#070707'});
            scoreText = game.add.text(550, 200+50*i, obj.score, {fontSize: '25px', fill: '#070707'});
       }
    });


    game.add.sprite(0, 0, 'main');
    
    game.sound.stopAll();


    var fullbutton = game.input.keyboard.addKey(Phaser.Keyboard.F);
    fullbutton.onDown.add(goFull, this);

    fullButton = game.add.button(40, 40, 'fullButton', goFull, this, 2, 1, 0);
    fullButton.scale.setTo(0.5,0.5);

    var mutebutton = game.input.keyboard.addKey(Phaser.Keyboard.M);
    mutebutton.onDown.add(mute, this);

    muteButton = game.add.button(80, 32, 'muteUnmuteButton', mute, this);
    muteButton.scale.setTo(0.6, 0.6);

    homeButton = game.add.button(300, 500, 'homeButton', backMenu, this);
    homeButton.scale.setTo(0.6, 0.6);
    
    retryButton = game.add.button(480, 500, 'retryButton', againGame, this);
    retryButton.scale.setTo(0.6, 0.6);

    text = game.add.text(340, 580, 'Main Menu', {fontSize: '24px', fill: '#070707'});
    text.anchor.setTo(0.5,0.5);
    
    text1 = game.add.text(515, 580, 'Retry', {fontSize: '24px', fill: '#070707'});
    text1.anchor.setTo(0.5,0.5);

    this.leaderSound = game.add.audio('win');
    this.leaderSound.play('', 0, 1, true);

  
    this.leaderBoardText = game.add.text(400,100, 'Game Over', { fontSize: '32px', fill: '#070707' });
  this.leaderBoardText.anchor.setTo(0.5,0.5);


    this.nameText = game.add.text(100,150, 'Name', { fontSize: '32px', fill: '#090a30' });
    //nameText.anchor.setTo(0.5,0.5);


    scoreText = game.add.text(520,150, 'Score', { fontSize: '32px', fill: '#090a30' });
  
    

}
function updateLeaderBoard(){
  if (game.scale.isFullScreen){
            fullButton.frame = 1;
    }
    
    else{    
        fullButton.frame = 0;
    }

    if(game.sound.mute){
        muteButton.frame = 0;
    }
    else{
        muteButton.frame = 1;
    }

}

function goFull() {

    if (game.scale.isFullScreen){
            game.scale.stopFullScreen();
    }
    
    else{    
        game.scale.startFullScreen(false);
    }
}

function mute() {
    if(game.sound.mute){
         game.sound.mute = false;
         muteButton.frame = 1;
        }
    
    else{

    game.sound.mute = true;
        muteButton.frame = 0;
    }
}

function againGame(){
  score = 0;
  game.state.start('Game');
}

function backMenu() {
        game.state.start('Menu');
        score = 0;
        game.sound.stopAll();
}