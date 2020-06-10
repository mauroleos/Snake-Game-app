window.onload = function() {
var canvas = document.getElementById('game-canvas');
var canvasContext = canvas.getContext('2d');
document.addEventListener('keydown', 'keyPush');
setInterval(game, 1000/15); //game is a function
}

snakeVelocityX = 0;
snakeVelocityY = 0; 

function keyPush(e){
    switch(e.keyCode) {
        case 37 : 
        snakeVelocityX = -1;
        snakeVelocityY = 0;
        break;
        case 38 : 
        snakeVelocityX = 0;
        snakeVelocityY = -1;
        break;
        case 39 : 
        snakeVelocityX = 1;
        snakeVelocityY = 0;
        break;
        case 40 : 
        snakeVelocityX = 0;
        snakeVelocityY = 1;
        break;
    }
}

var snakePositionX = 150;
var snakePositionY = 150;
var apple = 500;
var snakeSpeed = 5;

//BACKGROUND//
canvasContext.beginPath();
canvasContext.rect(0, 0, 800, 600);
canvasContext.fillStyle = 'black';
canvasContext.fill();
//SNAKE//
canvasContext.beginPath();
canvasContext.rect(snakePositionX, snakePositionY, 25, 25);
canvasContext.fillStyle = 'yellow';
canvasContext.fill();
//APPLE//
canvasContext.beginPath();
canvasContext.rect(apple, 400, 25, 25);
canvasContext.fillStyle = 'red';
canvasContext.fill();

function move(e){
    if(e.keycode = 38){
        snakePositionY += -5;
    }
    if(e.keyCode = 40){
        snakePositionY += 5;