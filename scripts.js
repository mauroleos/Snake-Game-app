var canvas;
var canvasContext;
var snakeX = 50;
var snakeSpeedX = 10;
var snakeY = 10;
var snakeSpeedY = 4;

var paddle1Y = 250;
const PADDLE_HEIGHT = 100;

function calculateMousePos(e) {
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;
    var mouseX = e.clientX - rect.left - root.scrollLeft;
    var mouseY = e.clientY - rect.top - root.scrollTop;
    return {
        x:mouseX, y:mouseY
    };
}

window.onload = function() {
    canvas = document.getElementById('game-canvas')
    canvasContext = canvas.getContext('2d');
    
    var framesPerSecond = 30;
    setInterval(function() {
        moveEverything();
        drawEverything();
    }, 1000/framesPerSecond);

    canvas.addEventListener('mousemove', function(e) {
        var mousePos = calculateMousePos(e);
        paddle1Y = mousePos.y - (PADDLE_HEIGHT/2); 
    });
}

function moveEverything() {
    snakeX += snakeSpeedX;
    snakeY += snakeSpeedY;

    if (snakeX < 0) {
        snakeSpeedX = -snakeSpeedX;
    }
    if (snakeX > canvas.width) {
        snakeSpeedX = -snakeSpeedX;
    }
    if (snakeY < 0) {
        snakeSpeedY = -snakeSpeedY;
    }
    if (snakeY > canvas.height) {
        snakeSpeedY = -snakeSpeedY;
    }
}

function drawEverything() {
    colorRect(0,0,canvas.width,canvas.height, 'black')
    colorRect(0,paddle1Y,10,PADDLE_HEIGHT, 'white')

    colorCircle(snakeX, snakeY, 10, 'white');
}

function colorCircle(centerX, centerY, radius, drawColor) {
    canvasContext.fillStyle = drawColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true);
    canvasContext.fill();
}

function colorRect (leftX, topY, width, height, drawColor) {
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(leftX, topY, width, height);
}