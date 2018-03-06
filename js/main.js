

var game = new Phaser.Game(800, 600, Phaser.AUTO);

game.state.add('Game',Game);
game.state.add('Help',Help);
game.state.add('Credit',Credit);
game.state.add('Leaderboard', LeaderBoard);
game.state.add('Load',Load);
game.state.add('Menu',Menu);
game.state.add('Boot',Boot);
game.state.start('Boot');







