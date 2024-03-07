var color = ['#AD1D45','#7B6CF6','#ECBC55'];
var tokenId = ['random1', 'random2', 'random3'];
var hiddenColor = [];

function randomColor() {
    var random = Math.floor(Math.random() *3);
    return random;
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
    showAllColor()
}
function showAllColor(){
    for(let i = 0; i<3; i++) {
        colorSet(tokenId[i], hiddenColor[i])
    }
}





tokencolorIni();