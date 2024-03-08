const color = ['#7B6CF6','#AD1D45','#ECBC55', 'black'];
const tokenId = ['random1', 'random2', 'random3'];
const textId = ['randomText1', 'randomText2', 'randomText3'];
const tryId = ['try0', 'try1','try2', 'try3', 'try4']
const tokenButton = ['blueText', 'redText', 'yellowText'];
var hiddenColor = [];
var colorchosed = [];
var colorcount = 0;
var gameEnded = 0;
var guessCount = 0;
var guessLeft;

function randomColor() {
    return Math.floor(Math.random() *3);

}
function colorSet(id, colorNumber) {
    document.getElementById(id).style.backgroundColor = color[colorNumber];
}
function tokencolorIni(){
    hiddenColor[0] = randomColor();
    do {
        hiddenColor[1] = randomColor();
    }while (hiddenColor[0] === hiddenColor[1])
    do {
        hiddenColor[2] = randomColor();
    }while (hiddenColor[0] === hiddenColor[2]||hiddenColor[1] === hiddenColor[2])
}
function showAllColor(){
    for(let i = 0; i<3; i++) {
        colorSet(tokenId[i], hiddenColor[i]);
        document.getElementById(textId[i]).innerHTML = "";
    }
}
function resetBoard(){
    for(let i = 0; i<3; i++) {
        colorSet(tokenId[i], 3)
        document.getElementById(textId[i]).innerHTML = "?";
        colorchosed[i] = 0;
    }
    for(let tryReset = 0; tryReset<5; tryReset++){
        document.getElementById(tryId[tryReset]).innerHTML = "correct answers = ";
    }
    document.getElementById('gameToken0').style.backgroundColor = color[colorchosed[0]];
    document.getElementById('gameToken1').style.backgroundColor = color[colorchosed[1]];
    document.getElementById('gameToken2').style.backgroundColor = color[colorchosed[2]];
    guessCount = 0;
    guessLeft = 5 - guessCount;
    document.getElementById('guessLeft').innerHTML = "guess left = " + guessLeft;
    gameEnded = 0;
    resetChosedColor();
    tokencolorIni();
    document.getElementById('checkButton').disabled = false;

}
function resetChosedColor(){
    for(let i = 0; i<3; i++) {
    }
    colorcount = 0;
}

function token0(){
    if(gameEnded === 0) {
        colorchosed[0]++;
        if (colorchosed[0] > 2) {
            colorchosed[0] = 0;
        }
        document.getElementById('gameToken0').style.backgroundColor = color[colorchosed[0]];
    }
}
function token1(){
    if(gameEnded === 0) {
        colorchosed[1]++;
        if (colorchosed[1] > 2) {
            colorchosed[1] = 0;
        }
        document.getElementById('gameToken1').style.backgroundColor = color[colorchosed[1]];
    }
}
function token2(){
    if(gameEnded === 0) {
        colorchosed[2]++;
        if (colorchosed[2] > 2) {
            colorchosed[2] = 0;
        }
        document.getElementById('gameToken2').style.backgroundColor = color[colorchosed[2]];
    }
}
function check(){
    var guess =0;
    for(let i = 0; i<3; i++) {
        if(hiddenColor[i] === colorchosed[i]){guess++}
    }
    document.getElementById(tryId[guessCount]).innerHTML = 'correct answers = ' + guess;
    guessCount++;
    if(guess === 3){
        showAllColor();
        gameEnded = 1;
        document.getElementById('gameWinningstate').innerHTML = "you win";
        document.getElementById('checkButton').disabled = true;
    }else if(guessCount >= 5){
        showAllColor();
        gameEnded = 1;
        document.getElementById('gameWinningstate').innerHTML = "you lose";
        document.getElementById('checkButton').disabled = true;

    }else{
        resetChosedColor();
    }
    guessLeft = 5 - guessCount;
    document.getElementById('guessLeft').innerHTML = "guess left = " + guessLeft;

}
document.getElementById('resetButton').addEventListener("click", resetBoard, false);
document.getElementById('checkButton').addEventListener("click", check, false);
document.getElementById("gameToken0").addEventListener("click", token0, false);
document.getElementById("gameToken1").addEventListener("click", token1, false);
document.getElementById("gameToken2").addEventListener("click", token2, false);

resetBoard();




