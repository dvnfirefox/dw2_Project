const color = ['#AD1D45','#7B6CF6','#ECBC55', 'black'];
const tokenId = ['random1', 'random2', 'random3'];
const textId = ['randomText1', 'randomText2', 'randomText3'];
const hiddenColor = [];
var colorcount;

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
    resetBoard();
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
    tokencolorIni();
}
function colorSelect(color){


}
document.getElementById('resetButton').addEventListener("click", resetBoard, false);
document.getElementById('checkButton').addEventListener("click", showAllColor, false);
document.getElementById("red").addEventListener("click", colorSelect(0), false);
document.getElementById("blue").addEventListener("click", colorSelect(1), false);
document.getElementById("yellow").addEventListener("click", colorSelect(2), false);


resetBoard();



