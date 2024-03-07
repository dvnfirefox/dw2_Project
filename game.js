const color = ['#AD1D45','#7B6CF6','#ECBC55', 'black'];
const tokenId = ['random1', 'random2', 'random3'];
const textId = ['randomText1', 'randomText2', 'randomText3'];
var hiddenColor = [];
const tokenButton = ['redText', 'blueText', 'yellowText'];
var colorcount = 0;

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
        document.getElementById(tokenButton[i]).innerHTML = "";
    }
    colorcount = 0;
    tokencolorIni();
}

function selectRed(){
    if(colorcount > 2){

    }else {
        document.getElementById('redText').innerHTML = (colorcount + 1);
        colorcount++;
    }
}
function selectblue(){
    if(colorcount > 2){

    }else {
        document.getElementById('blueText').innerHTML = (colorcount + 1);
        colorcount++;
    }
}
function selectyellow(){
    if(colorcount > 2){

    }else {
        document.getElementById('yellowText').innerHTML = (colorcount + 1);
        colorcount++;
    }
}
document.getElementById('resetButton').addEventListener("click", resetBoard, false);
document.getElementById('checkButton').addEventListener("click", showAllColor, false);
document.getElementById("red").addEventListener("click", selectRed, false);
document.getElementById("blue").addEventListener("click", selectblue, false);
document.getElementById("yellow").addEventListener("click", selectyellow, false);

resetBoard();




