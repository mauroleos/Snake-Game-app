const DEBUG = true;
var canvas = document.getElementById('game-canvas');
var canvasContext = canvas.getContext('2d');

const square = 15;
const rows = canvas.width / square;
const columns = canvas.height / square;

function Snake() {
    this.x = 0;
    this.y = 0;
    this.xSnakeVelocity = square;
    this.ySnakeVelocity = 0;
    this.totalApplesEaten = 0;
    this.snakeTail = [];

    this.draw = function () {
        canvasContext.fillStyle = 'yellow';

        for (let i = 0; i < this.snakeTail.length; i++) {
            canvasContext.fillRect(this.snakeTail[i].x, this.snakeTail[i].y, square, square);
        }
        canvasContext.fillRect(this.x, this.y, square, square);
    }

    this.drawNewSnake = function () {

        for (let i = 0; i < this.snakeTail.length - 1; i++) {
            this.snakeTail[i] = this.snakeTail[i + 1];
        }

        this.snakeTail[this.totalApplesEaten - 1] = { x: this.x, y: this.y };

        this.x += this.xSnakeVelocity;
        this.y += this.ySnakeVelocity;

        if (parseInt(this.x) + parseInt(square) > canvas.width || this.x < 0) {
            alert('Game Over');
        }
        if (parseInt(this.y) + parseInt(square) > canvas.height || this.y < 0) {
            alert('Game Over');
        }
    }

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
    this.eat = function (apple) {
        if (this.x === apple.x && this.y === apple.y) {
            this.totalApplesEaten++;
            return true;
        }
        return false;
    }
    this.checkCollision = function () {
        for (var i = 0; i < this.snakeTail.length; i++) {
            if (this.x === this.snakeTail[i].x && this.y === this.snakeTail[i].y) {
                this.totalApplesEaten = 0;
                this.snakeTail = [];
                this.x = 0;
                this.y = 0;
                alert('CRASH');
            }
        }
    }
}
document.addEventListener('keydown', function (e) {
    const keyPressed = e.keyCode;
    snake.snakeDirection(keyPressed);
});


function Apple() {
    this.x;
    this.y;

    this.appleLocation = function () {
        this.x = Math.floor(Math.random() * rows) * square;
        this.y = Math.floor(Math.random() * columns) * square;
    }

    this.draw = function () {
        canvasContext.fillStyle = 'red';
        canvasContext.fillRect(this.x, this.y, square, square);
    }
}

function drawItems() {
    snake = new Snake();
    apple = new Apple;
    apple.appleLocation();
}
drawItems();

var gameTimeInterval = 100;

if (DEBUG) {
    apple.x = square * 3;
    apple.y = 0

    gameTimeInterval = 1000;
}

function game() {
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    apple.draw();
    snake.draw();
    snake.drawNewSnake();

    if (snake.eat(apple)) {
        apple.appleLocation();
    }
    snake.checkCollision();
    
    document.getElementById('score').innerText = (snake.totalApplesEaten)

}

setInterval(game, gameTimeInterval);
