// canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/5;
var y = canvas.height-15; 
var color = getRandomColor();
var ballRadius = 7;
//paddle
var paddleHeight = 7;
var paddleWidth = 60;
var paddleX = (canvas.width-paddleWidth)/2;
// ball movement
var dx = 1;
var dy = -1;
// keypress
var rightPressed = false;
var leftPressed = false;
//ball
function drawBall() { 
    ctx.beginPath();
    ctx.arc(x,y, ballRadius, 0, Math.PI*2)
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
    } 
//Paddle
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#4E8C43";
    ctx.fill();
    ctx.closePath();
}
// random color function
function getRandomColor() { 
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) { 
        color += letters[Math.floor(Math.random() * 16)];
    } 
    return color;
} 


function draw() { 
    ctx.clearRect(0,0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    x += dx;
    y += dy;

    if(x + dx > canvas.width || x + dx < ballRadius) {
        dx = -dx;
        color = "#" + ((1 << 24) * Math.random() | 0).toString(16);
    }
    
    if(y + dy > canvas.height || y + dy < ballRadius) {
        dy = -dy;
        color = "#" + ((1 << 24) * Math.random() | 0).toString(16);
                      
    } 
    //paddle bounce off!
   
    if(x + dx > paddleX|| x + dx < ballRadius) {
        dx = -dx;
        
    }
    
    if (y + dy > paddleX || y + dy < ballRadius) { 
        dy = -dy;
        
    }
        
                      
   
    // movement!
    
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 3;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 3;
    }
} 
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}
setInterval(draw, 8);