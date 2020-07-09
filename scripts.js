const canvas = document.getElementById('game-canvas');
const canvasContext = canvas.getContext('2d');

const square = 15;
const gameTimeInterval = 100;
let gameIsOver = false;
const rows = (canvas.width / square);
const columns = canvas.height / square;
let refreshInterval = setInterval(game, gameTimeInterval);

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
            canvasContext.fillRect(
                this.snakeTail[i].x,
                this.snakeTail[i].y,
                square,
                square);
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

        if (
            parseInt(this.x) + parseInt(square) >= canvas.width ||
            this.x < 0 ||
            (parseInt(this.y) + parseInt(square)) > canvas.height ||
            this.y < 0
        ) {
            gameOver();
        };
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
            default:
                return;
        };
    };
    this.eat = function (apple) {
        if (this.x === apple.x && this.y === apple.y) {
            this.totalApplesEaten++;
            return true;
        };
        return false;
    };
    this.checkCollision = function () {
        for (let i = 0; i < this.snakeTail.length; i++) {
            if (this.x === this.snakeTail[i].x && this.y === this.snakeTail[i].y) {
                gameOver();
            }
        }
    }
};

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
};

function resetGame() {
    gameIsOver = false;
    drawItems();
    game();
    refreshInterval = setInterval(game, gameTimeInterval);
};

function gameOver() {

    canvasContext.fillStyle = "White"
    gameIsOver = true;
    canvasContext.font = "30px'"
    canvasContext.fillText("Game Over!", 300, 150)
    canvasContext.fillText(
        "Your score was  " + snake.totalApplesEaten,
        270,
        250
    )
    snake.totalApplesEaten = 0;
    canvasContext.fillText("Press the spacebar to continue.", 220, 350)
    snake.snakeTail = [];
    snake.x = 0;
    snake.y = 0;
    clearInterval(refreshInterval);
}

function game() {
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    apple.draw();
    snake.draw();
    snake.drawNewSnake();

    if (snake.eat(apple)) {
        apple.appleLocation();
    };
    snake.checkCollision();

    document.getElementById('score').innerText = (snake.totalApplesEaten);
};

let newGame = document.addEventListener('keydown', function (e) {
    const keyPressed = e.keyCode;
    if (e.keyCode === 32 && gameIsOver) {
        resetGame();
    } else {
        snake.snakeDirection(keyPressed)
    }
});

drawItems();