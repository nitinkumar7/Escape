
var Game = {};

Game.preload = function(){

}

var scoreX = 7;

var buildings;
var player;
var cursors;

var ingameMenu;
var pauseKey;
var pausedGame;
var restartKey;
var quitKey;
var water;
var scoreText;
var pause_button;

var back;
var meteor;
var counter = 0;
var build = ['build1','build2','build3','build4'];
var condition = [true,false,true];
var coins;
var coin;
var meteors;
var score = 0;
var wave1;
var wave2;


socket = io.connect();
    socket.emit('test');   

    socket.on('Hello', function(){
        console.log('Server said Hello');
    });

Game.create = function(){
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.physics.startSystem(Phaser.Physics.ARCADE);
    //game.physics.startSystem(Phaser.Physics.P2JS);
    
    game.sound.stopAll();
    music = game.add.audio('track2');
    music.play('', 0, 1, true);  
    
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;
    this.game.scale.refresh();

    //Add background
    back = game.add.tileSprite(0, 0, 2395, 600,'background1');
    back.scale.setTo(1,1);

    coins = game.add.group();
    coins.enableBody = true;
    coins.destroy(true,true);

    x = 400;
    y = game.world.height - game.rnd.integerInRange(270,360);
    buildings = game.add.group();
    buildings.enableBody = true;
    buildings.destroy(true,true);

    for (var i = 0; i <= 10; i++) {
        var name = build[game.rnd.integerInRange(0,3)];
        if(name == 'build1') 
            y = game.world.height - 250;
        if(name == 'build2') 
            y = game.world.height - 278;
        if(name == 'build3') 
            y = game.world.height - 190;
        if(name == 'build4') 
            y = game.world.height - 300;
            coin = coins.create(x+35,y-35,'coins');
        building = buildings.create(x,y,name);
        building.enableBody = true;
        if(i<3){
            building.body.immovable =true;
        }
        else{
        building.body.immovable =condition[game.rnd.integerInRange(0,1)];
        }
        x += game.rnd.integerInRange(250,350);
    }        
    
    game.physics.arcade.enable(buildings);
     
    

    //Add Player
    player = game.add.sprite(400, game.world.height - 450, 'hero');
    game.physics.arcade.enable(player);
    player.body.setSize(31,60,20,14);

    game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
    
    player.body.bounce.y = 0.1;
    player.body.gravity.y = 500 ;
    player.body.collideWorldBounds = true;

    //player.fixedToCamera = true;
    
    player.animations.add('right', [4, 5, 6, 7, 8, 9, 10, 11,12], 10, true);
    player.animations.add('up', [13, 14, 15, 16, 24, 26, 27, 28], 10, true);

    buildings.outOfBoundsKill = true;
    player.enableBody = true;
    game.camera.follow(player);
    
     wave1 = game.add.sprite(-400,150, 'wave1');
    game.physics.arcade.enable( wave1);
    wave1.body.setSize(465,120,0,0);
    wave2 = game.add.sprite(-400,296, 'wave2');
    game.physics.arcade.enable( wave2);
    wave2.body.setSize(330,403,0,0);
    

    //Ingame Menu
    quitKey = game.input.keyboard.addKey(Phaser.Keyboard.Q);
    quitKey.onUp.add(quitGame, this);

    restartKey = game.input.keyboard.addKey(Phaser.Keyboard.R);
    restartKey.onUp.add(restartGame, this);

    pausedGame = false;
    pauseKey = game.input.keyboard.addKey(Phaser.Keyboard.ESC);
    pauseKey.onUp.add(togglePause, this);

    pause_button = game.add.button(150, 40, 'pause_button', pauseGame, this, 2, 1, 0);
    pause_button.scale.setTo(0.5,0.5);

    var pauseButton = game.input.keyboard.addKey(Phaser.Keyboard.P);
    pauseButton.onDown.add(pauseGame, this);

    var fullbutton = game.input.keyboard.addKey(Phaser.Keyboard.F);
    fullbutton.onDown.add(goFull, this);

    fullButton = game.add.button(40, 40, 'fullButton', goFull, this, 2, 1, 0);
    fullButton.scale.setTo(0.5,0.5);

    var mutebutton = game.input.keyboard.addKey(Phaser.Keyboard.M);
    mutebutton.onDown.add(mute, this);

    muteButton = game.add.button(80, 32, 'muteUnmuteButton', mute, this);
    muteButton.scale.setTo(0.6, 0.6);


    ingameMenu = new IngameMenu(this);
    //IngameMenu.fixedToCamera = true;

    //Keep record of score through time elapsed
    scoreText = game.add.text(730, 30, 'Score: 0', { font: "24px Arial", fill: "#ffffff", align: "center" });
    scoreText.anchor.setTo(0.5, 0.5);
    scoreText.fixedToCamera = true;
    game.time.events.loop(Phaser.Timer.SECOND, updateCounter, this);

    

    //To fade the screen
    game.camera.onFadeComplete.add(resetFade, this);
   // game.input.onDown.add(fade, this);
    

    cursors = game.input.keyboard.createCursorKeys();
}

var score = 0;

Game.update = function(){
    game.physics.arcade.collide(player, buildings); 

    game.physics.arcade.overlap(player, this.burn1, burnPlayer, null, this);
    game.physics.arcade.overlap(player, this.burn2, burnPlayer, null, this);
    game.physics.arcade.overlap(player, coins, collectCoin, null, this);
    game.physics.arcade.overlap(player, wave1, burnPlayer, null, this);
    game.physics.arcade.overlap(player, wave2, burnPlayer, null, this);

     wave1.x += 1.1;
     wave2.x += 1.1;


    scoreText.setText('score: ' + score);


    if(player.body.onFloor()){

        burnPlayer();
    }

   player.body.velocity.x = 0;

    if (cursors.right.isDown)
    {
        //  Move to the right
        wave1.x -=1.5;
        wave2.x -=1.5;
        scoreX += 7;
        back.tilePosition.x -= 1;
        buildings.x -= 4.5;
        coins.x -= 4.5;
        player.animations.play('right');
    }
    else
    {
        //  Stand still
        player.animations.stop();

        player.frame = 1;
    }
    if (cursors.up.isDown && player.body.touching.down)
    {
        player.body.velocity.y = -390;
        player.body.velocity.x = 150;
        // player.animations.play('up');
    }

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


    
    if(scoreX%350==0&&scoreX>100)
    {
        for (var i = 3; i >= 0; i--) {
        var name = build[game.rnd.integerInRange(0,3)];
        if(name == 'build1') 
            y = game.world.height - 285;
        if(name == 'build2') 
            y = game.world.height - 278;
        if(name == 'build3') 
            y = game.world.height - 192;
        if(name == 'build4') 
            y = game.world.height - 363;
        var building = buildings.create(x,y,name);
        building.enableBody = true;
        coin = coins.create(x+35,y-35,'coins');
        building.body.immovable =condition[game.rnd.integerInRange(0,1)];
        
        x += game.rnd.integerInRange(250,350);
        }
    }
    
}


Game.render = function(){
        //game.debug.body(coins);
        
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

function pauseGame()
{
    if (!game.paused) 
    {
       game.paused = true;
       pause_button.tint = 16310830;
       text = game.add.text(game.world.width/2,game.world.height/2,'Click anywhere to resume',{fontSize: '32px', fill: '#F8E22E'});
       text.anchor.setTo(0.5,0.5);
   }
    else 
    {
       game.paused = false;
       pause_button.tint = 16777215;
       text.kill();
    }
    game.input.onDown.add(function() 
    {
        if (game.paused) game.paused = false;
        pause_button.tint = 16777215;
        text.kill();
    }, this);
}

function burnPlayer(){
    counter = score;    //Store score
        score = 0 ;
        x=0;
        y=0;
        socket.emit('sendScore', counter);
    game.state.start('Leaderboard');
}

function collectCoin (player, coin) {
    
    // Removes the star from the screen
    coin.kill();
    coins.remove(coin);
    //  Add and update the score
    score += 10;
    scoreText.text = 'Score: ' + score;

}

 var x4 = 0;
 var y4 = 0;
 var z=0;
 var z1 =0;

function updateCounter() {

    z++;
    if(z==5){

        this.burn1 = game.add.sprite(300 * Math.random()* z,0, 'flame1');
        this.burn2 = game.add.sprite(400 * Math.random()* z,0, 'flame1');

        
        game.physics.arcade.enable(this.burn1);
        game.physics.arcade.enable(this.burn2);

        this.burn1.body.velocity.x = -100;
        this.burn2.body.velocity.x = -100;
        this.burn1.body.gravity.y = 80;
        this.burn2.body.gravity.y = 100;

        this.burn1.outOfBoundsKill = true;
        this.burn2.outOfBoundsKill = true;
    z=0;
    }

    z1++
    if(z1 == 6){
        meteors = game.add.sprite(300 * Math.random()* z1,0, 'meteor');
        meteors.scale.setTo(0.3,0.3);
        meteors.animations.add('moving', [0,1,2,3,4,5,6,7,8,9,10],10,true);
        meteors.animations.play('moving');

        this.comet = game.add.audio('comet');
        this.comet.play();
        game.physics.arcade.enable(meteors);
        
        meteors.body.gravity.y = 80;
        meteors.outOfBoundsKill =true;

        setTimeout(updateeffect, 3600);
        z1 = 0;
     }
//    console.log(z);
}

function updateeffect(){
    
        this.bomb = game.add.audio('bomb');
        this.bomb.play();  
        game.camera.shake(0.05, 500);
        game.camera.flash(0xf2a83a, 700);

}


function resetFade() {

    game.camera.resetFX();

}

function pauseUpdate() {
    if (pausedGame) {
      ingameMenu.update();
    }
  }

  function togglePause() {
    pausedGame = !pausedGame;
    if (pausedGame) {
        ingameMenu.show();
    } else {
      ingameMenu.hide();
    }
    game.paused = pausedGame;
  }

  function restartGame() {
    game.state.start('Game');
  }

  function quitGame() {
    game.state.start('Menu');
  }
