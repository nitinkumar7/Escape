

var Credit = function(){
    console.log("creditState");
};

Credit.prototype = {
    preload : preloadcredit,
    create : createcredit,
    update : updatecredit
};

var content = [
    "CREDITS",
    "",
    "DEVELOPERS:",
    "Nitin Kumar",
    "Prayuj Pillai",
    "",
    "In association with",
    "**BRAND NAME**",
    "For TEKNACK 2018",
    
];

var line = [];

var back;

var wordIndex = 0;
var lineIndex = 0;

var wordDelay = 120;
var lineDelay = 400;

function preloadcredit(){
    game.load.image('bac', 'assets/images/bac.png');
}

function createcredit() {


    text = game.add.text(150, 150, '', { font: "25px Arial", fill: "#19de65" });
    var b = game.add.button(600, 500, 'bac', menuGame, this);
    nextLine();

}

function menuGame(){
    game.state.start('Menu');
}

function nextLine() {

    if (lineIndex === content.length)
    {
        //  We're finished
        return;
    }

    //  Split the current line on spaces, so one word per array element
    line = content[lineIndex].split(' ');

    //  Reset the word index to zero (the first word in the line)
    wordIndex = 0;

    //  Call the 'nextWord' function once for each word in the line (line.length)
    game.time.events.repeat(wordDelay, line.length, nextWord, this);

    //  Advance to the next line
    lineIndex++;

}

function nextWord() {

    //  Add the next word onto the text string, followed by a space
    text.text = text.text.concat(line[wordIndex] + " ");

    //  Advance the word index to the next word in the line
    wordIndex++;

    //  Last word?
    if (wordIndex === line.length)
    {
        //  Add a carriage return
        text.text = text.text.concat("\n");

        //  Get the next line after the lineDelay amount of ms has elapsed
        game.time.events.add(lineDelay, nextLine, this);
    }

}

function updatecredit(){

}
