const color = ['#AD1D45','#7B6CF6','#ECBC55', 'black'];
const tokenId = ['random1', 'random2', 'random3'];
const textId = ['randomText1', 'randomText2', 'randomText3'];
const tryId = ['try0', 'try1','try2', 'try3', 'try4']
const tokenButton = ['redText', 'blueText', 'yellowText'];
var hiddenColor = [];
var colorchosed = [];
var colorcount = 0;
var gameEnded = 0;
var guessCount = 0;

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

    }
    for(let tryReset = 0; tryReset<5; tryReset++){
        document.getElementById(tryId[tryReset]).innerHTML = "correct answers = ";
    }
    guessCount = 0;
    gameEnded = 0;
    resetChosedColor();
    tokencolorIni();
}
function resetChosedColor(){
    for(let i = 0; i<3; i++) {
        colorchosed[i] = null;
        document.getElementById(tokenButton[i]).innerHTML = "";
    }
    colorcount = 0;
}

function selectRed(){
    if(colorchosed[0] == null && gameEnded === 0){
        document.getElementById('redText').innerHTML = (colorcount + 1);
        colorchosed[0] = colorcount;
        colorcount++;
    }
}
function selectblue(){
    if(colorchosed[1] == null && gameEnded === 0){
        document.getElementById('blueText').innerHTML = (colorcount + 1);
        colorchosed[1] = colorcount;
        colorcount++;
    }
}
function selectyellow(){
    if(colorchosed[2] == null && gameEnded === 0){
        document.getElementById('yellowText').innerHTML = (colorcount + 1);
        colorchosed[2] = colorcount;
        colorcount++;
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
    }else if(guessCount >= 5){
        showAllColor();
        gameEnded = 1;

    }

    resetChosedColor();
}
document.getElementById('resetButton').addEventListener("click", resetBoard, false);
document.getElementById('checkButton').addEventListener("click", check, false);
document.getElementById("red").addEventListener("click", selectRed, false);
document.getElementById("blue").addEventListener("click", selectblue, false);
document.getElementById("yellow").addEventListener("click", selectyellow, false);

resetBoard();




