// const DEBUG = true;
var canvas = document.getElementById('game-canvas');
var canvasContext = canvas.getContext('2d');
document.addEventListener('keydown', keyPush);

var appleX = 400;
var appleY = 300;

const square = 15;
const rows = canvas.height / square;
const columns = canvas.width / square;

function Snake() {
    this.x = 200;
    this.y = 150;
    this.xSnakeVelocity = square;
    this.ySnakeVelocity = square;

    this.draw = function () {
        canvasContext.fillStyle = 'yellow';
        canvasContext.fillRect(this.x, this.y, square, square);

        this.drawNewSnake = function () {
            this.x += this.xSnakeVelocity;
            this.y += this.ySnakeVelocity;
        }
    }
};
function keyPush(e) {
    switch (e.keyCode) {
        case 37:
            this.xSnakeVelocity = -5;
            this.ySnakeVelocity = 0;
            break;
        case 38:
            this.xSnakeVelocity = 0;
            this.ySnakeVelocity = -5;
            break;
        case 39:
            this.xSnakeVelocity = 5;
            this.ySnakeVelocity = 0;
            break;
        case 40:
            this.xSnakeVelocity = 0;
            this.ySnakeVelocity = 5;
            break;
    }
}

function drawSnake() {
    snake = new Snake();
};
drawSnake();

function game() {
    snake.draw();
    snake.drawNewSnake();
};
setInterval(game, 100);

// var gameTimeInterval = 40;

// if (DEBUG === true) {
//     appleX = 200;
//     appleY = 150;

//     gameTimeInterval = 100;
// }

// var game = setInterval(game, gameTimeInterval);

//     if (snakePositionX < 0 || snakePositionX >= canvas.width) {
//         alert('Game Over');
//     }
//     if (snakePositionY < 0 || snakePositionY >= canvas.height) {
//         alert('Game Over');
//     }
// }
