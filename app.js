
    document.addEventListener("DOMContentLoaded", function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext("2d");

   
    var canvasWidth = canvas.width;
    var canvasHeight = canvas.height;

    var ballSize = 10;
    var ballX = canvasWidth / 2;
    var ballY = canvasHeight / 2;
    var ballSpeedX = 5;
    var ballSpeedY = 5;


    var scoreLeft = 0;
    var scoreRight = 0; 
    
    
    var paddleWidth = 10;
    var paddleHeight = 80;
    var paddleSpeed = 10;
    var paddleLeftY = (canvasHeight - paddleHeight) / 2;
    var paddleRightY = (canvasHeight - paddleHeight) / 2;

   
    var keyState = {};
    window.addEventListener('keydown', function(e) {
        keyState[e.keyCode || e.which] = true;
    }, true);
    window.addEventListener('keyup', function(e) {
        keyState[e.keyCode || e.which] = false;
    }, true);
    var scoreLeft = 0;
        var scoreRight = 0; 

function updateGame() {
    
    if (ballX < 0) {
        scoreRight++; 
        resetBall(); 
    }

    
    if (ballX > canvasWidth) {
        scoreLeft++; 
        resetBall();
    }
}

function drawwGame() {

    ctx.font = "30px Arial";
    ctx.fillStyle = "#ffffff";
    ctx.fillText(scoreLeft + " - " + scoreRight, canvasWidth / 2 - 50, 50);
}

function resetBall() {
    
    ballX = canvasWidth / 2;
    ballY = canvasHeight / 2;
    ballSpeedX = 5;
    ballSpeedY = 5;
}


    
    function drawGame() {
        
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);

       
        ctx.beginPath();
        ctx.arc(ballX, ballY, ballSize, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();

        
        ctx.fillRect(0, paddleLeftY, paddleWidth, paddleHeight);

        ctx.fillRect(canvasWidth - paddleWidth, paddleRightY, paddleWidth, paddleHeight);
    }
    

    function updateeGame() {
        
        ballX += ballSpeedX;
        ballY += ballSpeedY;

        

        
        if (ballY + ballSize > canvasHeight || ballY - ballSize < 0) {
            ballSpeedY = -ballSpeedY;
        }

        
        if (ballX - ballSize < paddleWidth && ballY > paddleLeftY && ballY < paddleLeftY + paddleHeight) {
            ballSpeedX = -ballSpeedX;
        }

       
        if (ballX + ballSize > canvasWidth - paddleWidth && ballY > paddleRightY && ballY < paddleRightY + paddleHeight) {
            ballSpeedX = -ballSpeedX;
        }

       
        if (keyState[38] && paddleLeftY > 0) {
            paddleLeftY -= paddleSpeed;
        }
        if (keyState[40] && paddleLeftY < canvasHeight - paddleHeight) {
            paddleLeftY += paddleSpeed;
        }

        
        if (ballY > paddleRightY + paddleHeight / 2 && paddleRightY < canvasHeight - paddleHeight) {
            paddleRightY += paddleSpeed;
        }
        if (ballY < paddleRightY + paddleHeight / 2 && paddleRightY > 0) {
            paddleRightY -= paddleSpeed;
        }
    }

    // Functie de bucla jocului
    function gameLoop() {
        drawGame();
        drawwGame();
        updateGame();
        updateeGame();
        requestAnimationFrame(gameLoop);
        
    }

    
    gameLoop();
});
