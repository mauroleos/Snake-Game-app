var canvas = document.getElementById('game-canvas');
var canvasContext = canvas.getContext('2d');
snake = 50;
apple = 500;

canvasContext.beginPath();
canvasContext.rect(0, 0, 800, 600);
canvasContext.fillStyle = 'black';
canvasContext.fill();

canvasContext.beginPath();
canvasContext.rect(snake, 100, 25, 25);
canvasContext.fillStyle = 'yellow';
canvasContext.fill();

canvasContext.beginPath();
canvasContext.rect(apple, 400, 25, 25);
canvasContext.fillStyle = 'red';
canvasContext.fill();

