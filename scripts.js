// const DEBUG = true;
var canvas = document.getElementById('game-canvas');
var canvasContext = canvas.getContext('2d');

var appleX = 400;
var appleY = 300;

const square = 15;
const rows = canvas.height / square;
const columns = canvas.width / square;

function Snake() {
    this.x = 0;
    this.y = 0;
    this.xSnakeVelocity = square;
    this.ySnakeVelocity = 0;

    this.draw = function () {
        canvasContext.fillStyle = 'yellow';
        canvasContext.fillRect(this.x, this.y, square, square);
    }

    this.drawNewSnake = function () {
        this.x += this.xSnakeVelocity;
        this.y += this.ySnakeVelocity;

        if (parseInt(this.x) + 15 > canvas.width || this.x < 0) {
            alert('Game Over');
        }
        if (parseInt(this.y) + 15 > canvas.height || this.y < 0) {
            alert('Game Over');
        }
    };

    this.snakeDirection = function (keyPressed) {
        switch (keyPressed) {
            case 37:
                this.xSnakeVelocity = -square;
                this.ySnakeVelocity = 0;
                break;
            case 38:
                this.xSnakeVelocity = 0;
                this.ySnakeVelocity = -square;
                break;
            case 39:
                this.xSnakeVelocity = square;
                this.ySnakeVelocity = 0;
                break;
            case 40:
                this.xSnakeVelocity = 0;
                this.ySnakeVelocity = square;
                break;
        }
    }
};

function drawSnake() {
    snake = new Snake();
};
drawSnake();

function game() {
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    snake.draw();
    snake.drawNewSnake();
};
setInterval(game, 100);

document.addEventListener('keydown', function keyPush(e) {
    const keyPressed = e.keyCode;
    snake.snakeDirection(keyPressed);
});

// var gameTimeInterval = 40;

// if (DEBUG === true) {
//     appleX = 200;
//     appleY = 150;

//     gameTimeInterval = 100;
// }

// var game = setInterval(game, gameTimeInterval);
