const DEBUG = true;
var canvas = document.getElementById('game-canvas');
var canvasContext = canvas.getContext('2d');
document.addEventListener('keydown', keyPush);

var snakeVelocityX = 0;
var snakeVelocityY = 0;
var snakePositionX = 150;
var snakePositionY = 150;
var appleX = 400;
var appleY = 300;

var gameTimeInterval = 40;

if (DEBUG === true) {
    appleX = 200;
    appleY = 150;

    gameTimeInterval = 100;
}

setInterval(game, gameTimeInterval);

function game() {
    snakePositionX += snakeVelocityX;
    snakePositionY += snakeVelocityY;

    // var appleX = 400;
    // var appleY = 300;

    canvasContext.beginPath();
    canvasContext.fillStyle = 'black';
    canvasContext.rect(0, 0, canvas.width, canvas.height);
    canvasContext.fill();

    canvasContext.beginPath();
    canvasContext.fillStyle = 'yellow';
    canvasContext.rect(snakePositionX, snakePositionY, 15, 15);
    canvasContext.fill();

    canvasContext.beginPath();
    canvasContext.fillStyle = 'red';
    canvasContext.rect(appleX, appleY, 15, 15);
    canvasContext.fill();

    if (snakePositionX < 0 || snakePositionX >= canvas.width) {
        alert('Game Over');
    }
    if (snakePositionY < 0 || snakePositionY >= canvas.height) {
        alert('Game Over');
    }

    if (parseInt(snakePositionX) + 7.5 > appleX
        && parseInt(snakePositionX) + 7.5 < parseInt(appleX) + 15 && snakePositionY == appleY) {
        alert('apple has been consumed');
    }
}

function keyPush(e) {
    switch (e.keyCode) {
        case 37:
            snakeVelocityX = -5;
            snakeVelocityY = 0;
            break;
        case 38:
            snakeVelocityX = 0;
            snakeVelocityY = -5;
            break;
        case 39:
            snakeVelocityX = 5;
            snakeVelocityY = 0;
            break;
        case 40:
            snakeVelocityX = 0;
            snakeVelocityY = 5;
            break;
    }
}