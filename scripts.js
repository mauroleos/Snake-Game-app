var canvas = document.getElementById('game-canvas');
var canvasContext = canvas.getContext('2d');
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

canvas.addEventListener('keydown', function (e){
    if(e.keycode = 39){
        snakePositionY += 5;
    }
})