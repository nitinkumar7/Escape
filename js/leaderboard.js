var _0x6a9b=["\x6C\x65\x61\x64\x65\x72\x42\x6F\x61\x72\x64\x53\x74\x61\x74\x65","\x6C\x6F\x67","\x70\x72\x6F\x74\x6F\x74\x79\x70\x65","\x68\x6F\x6D\x65\x42\x75\x74\x74\x6F\x6E","\x61\x73\x73\x65\x74\x73\x2F\x69\x6D\x61\x67\x65\x73\x2F\x68\x6F\x6D\x65\x2E\x70\x6E\x67","\x69\x6D\x61\x67\x65","\x6C\x6F\x61\x64","\x72\x65\x74\x72\x79\x42\x75\x74\x74\x6F\x6E","\x61\x73\x73\x65\x74\x73\x2F\x69\x6D\x61\x67\x65\x73\x2F\x72\x65\x74\x75\x72\x6E\x2E\x70\x6E\x67","\x67\x65\x74\x48\x69\x67\x68\x53\x63\x6F\x72\x65","\x65\x6D\x69\x74","\x73\x65\x6E\x64\x48\x69\x67\x68\x53\x63\x6F\x72\x65","\x20","\x6E\x61\x6D\x65","\x32\x35\x70\x78","\x23\x30\x37\x30\x37\x30\x37","\x74\x65\x78\x74","\x61\x64\x64","\x73\x63\x6F\x72\x65","\x6F\x6E","\x6D\x61\x69\x6E","\x73\x70\x72\x69\x74\x65","\x73\x74\x6F\x70\x41\x6C\x6C","\x73\x6F\x75\x6E\x64","\x4B\x65\x79\x62\x6F\x61\x72\x64","\x61\x64\x64\x4B\x65\x79","\x6B\x65\x79\x62\x6F\x61\x72\x64","\x69\x6E\x70\x75\x74","\x6F\x6E\x44\x6F\x77\x6E","\x66\x75\x6C\x6C\x42\x75\x74\x74\x6F\x6E","\x62\x75\x74\x74\x6F\x6E","\x73\x65\x74\x54\x6F","\x73\x63\x61\x6C\x65","\x6D\x75\x74\x65\x55\x6E\x6D\x75\x74\x65\x42\x75\x74\x74\x6F\x6E","\x4D\x61\x69\x6E\x20\x4D\x65\x6E\x75","\x32\x34\x70\x78","\x61\x6E\x63\x68\x6F\x72","\x52\x65\x74\x72\x79","\x6C\x65\x61\x64\x65\x72\x53\x6F\x75\x6E\x64","\x77\x69\x6E","\x61\x75\x64\x69\x6F","","\x70\x6C\x61\x79","\x6C\x65\x61\x64\x65\x72\x42\x6F\x61\x72\x64\x54\x65\x78\x74","\x47\x61\x6D\x65\x20\x4F\x76\x65\x72","\x33\x32\x70\x78","\x6E\x61\x6D\x65\x54\x65\x78\x74","\x4E\x61\x6D\x65","\x23\x30\x39\x30\x61\x33\x30","\x53\x63\x6F\x72\x65","\x69\x73\x46\x75\x6C\x6C\x53\x63\x72\x65\x65\x6E","\x66\x72\x61\x6D\x65","\x6D\x75\x74\x65","\x73\x74\x6F\x70\x46\x75\x6C\x6C\x53\x63\x72\x65\x65\x6E","\x73\x74\x61\x72\x74\x46\x75\x6C\x6C\x53\x63\x72\x65\x65\x6E","\x47\x61\x6D\x65","\x73\x74\x61\x72\x74","\x73\x74\x61\x74\x65","\x4D\x65\x6E\x75"];var LeaderBoard=function(){console[_0x6a9b[1]](_0x6a9b[0])};LeaderBoard[_0x6a9b[2]]= {preload:preloadLeaderBoard,create:createLeaderBoard,update:updateLeaderBoard};function preloadLeaderBoard(){game[_0x6a9b[6]][_0x6a9b[5]](_0x6a9b[3],_0x6a9b[4]);game[_0x6a9b[6]][_0x6a9b[5]](_0x6a9b[7],_0x6a9b[8])}var score;function createLeaderBoard(){socket[_0x6a9b[10]](_0x6a9b[9]);socket[_0x6a9b[19]](_0x6a9b[11],function(_0x3210x5){for(var _0x3210x6=0;_0x3210x6< 5;_0x3210x6++){var _0x3210x7=_0x3210x5[_0x3210x6];scoreText= game[_0x6a9b[17]][_0x6a9b[16]](100,200+ 50* _0x3210x6,(_0x3210x6+ 1)+ _0x6a9b[12]+ _0x3210x7[_0x6a9b[13]],{fontSize:_0x6a9b[14],fill:_0x6a9b[15]});scoreText= game[_0x6a9b[17]][_0x6a9b[16]](550,200+ 50* _0x3210x6,_0x3210x7[_0x6a9b[18]],{fontSize:_0x6a9b[14],fill:_0x6a9b[15]})}});game[_0x6a9b[17]][_0x6a9b[21]](0,0,_0x6a9b[20]);game[_0x6a9b[23]][_0x6a9b[22]]();var _0x3210x8=game[_0x6a9b[27]][_0x6a9b[26]][_0x6a9b[25]](Phaser[_0x6a9b[24]].F);_0x3210x8[_0x6a9b[28]][_0x6a9b[17]](goFull,this);fullButton= game[_0x6a9b[17]][_0x6a9b[30]](40,40,_0x6a9b[29],goFull,this,2,1,0);fullButton[_0x6a9b[32]][_0x6a9b[31]](0.5,0.5);var _0x3210x9=game[_0x6a9b[27]][_0x6a9b[26]][_0x6a9b[25]](Phaser[_0x6a9b[24]].M);_0x3210x9[_0x6a9b[28]][_0x6a9b[17]](mute,this);muteButton= game[_0x6a9b[17]][_0x6a9b[30]](80,32,_0x6a9b[33],mute,this);muteButton[_0x6a9b[32]][_0x6a9b[31]](0.6,0.6);homeButton= game[_0x6a9b[17]][_0x6a9b[30]](300,500,_0x6a9b[3],backMenu,this);homeButton[_0x6a9b[32]][_0x6a9b[31]](0.6,0.6);retryButton= game[_0x6a9b[17]][_0x6a9b[30]](480,500,_0x6a9b[7],againGame,this);retryButton[_0x6a9b[32]][_0x6a9b[31]](0.6,0.6);text= game[_0x6a9b[17]][_0x6a9b[16]](340,580,_0x6a9b[34],{fontSize:_0x6a9b[35],fill:_0x6a9b[15]});text[_0x6a9b[36]][_0x6a9b[31]](0.5,0.5);text1= game[_0x6a9b[17]][_0x6a9b[16]](515,580,_0x6a9b[37],{fontSize:_0x6a9b[35],fill:_0x6a9b[15]});text1[_0x6a9b[36]][_0x6a9b[31]](0.5,0.5);this[_0x6a9b[38]]= game[_0x6a9b[17]][_0x6a9b[40]](_0x6a9b[39]);this[_0x6a9b[38]][_0x6a9b[42]](_0x6a9b[41],0,1,true);this[_0x6a9b[43]]= game[_0x6a9b[17]][_0x6a9b[16]](400,100,_0x6a9b[44],{fontSize:_0x6a9b[45],fill:_0x6a9b[15]});this[_0x6a9b[43]][_0x6a9b[36]][_0x6a9b[31]](0.5,0.5);this[_0x6a9b[46]]= game[_0x6a9b[17]][_0x6a9b[16]](100,150,_0x6a9b[47],{fontSize:_0x6a9b[45],fill:_0x6a9b[48]});scoreText= game[_0x6a9b[17]][_0x6a9b[16]](520,150,_0x6a9b[49],{fontSize:_0x6a9b[45],fill:_0x6a9b[48]})}function updateLeaderBoard(){if(game[_0x6a9b[32]][_0x6a9b[50]]){fullButton[_0x6a9b[51]]= 1}else {fullButton[_0x6a9b[51]]= 0};if(game[_0x6a9b[23]][_0x6a9b[52]]){muteButton[_0x6a9b[51]]= 0}else {muteButton[_0x6a9b[51]]= 1}}function goFull(){if(game[_0x6a9b[32]][_0x6a9b[50]]){game[_0x6a9b[32]][_0x6a9b[53]]()}else {game[_0x6a9b[32]][_0x6a9b[54]](false)}}function mute(){if(game[_0x6a9b[23]][_0x6a9b[52]]){game[_0x6a9b[23]][_0x6a9b[52]]= false;muteButton[_0x6a9b[51]]= 1}else {game[_0x6a9b[23]][_0x6a9b[52]]= true;muteButton[_0x6a9b[51]]= 0}}function againGame(){score= 0;game[_0x6a9b[57]][_0x6a9b[56]](_0x6a9b[55])}function backMenu(){game[_0x6a9b[57]][_0x6a9b[56]](_0x6a9b[58]);score= 0;game[_0x6a9b[23]][_0x6a9b[22]]()}