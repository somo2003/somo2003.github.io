// Basic idea
/**
 * Find a random number
 * Assign number to width on canvas page
 * Have object fall from randomly assigned point (on the x-axis)
 * Have a user controlled "basket" at the bottom of the screen that can only go along x-axis
 * If basket touches object, score increases
 * Else, A life is lost
 * If all three lives are lost or time is out, game is over
 * Display player score and record highest score??
 */

// Other possible function
/** 
 * Could make the objects different colors
 */

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = 450;
const height = canvas.height = 400;

var startingScore = 0;
var continueAnimating = false;
var score;

var basketWidth = width / 5;
var basketHeight = height / 15;
var basketSpeed = 10;
var basket = {
    x: 0,
    y: canvas.height - basketHeight,
    width: basketWidth,
    height: basketHeight,
    basketSpeed: basketSpeed
}

var ballSize = 20;
var totalBalls = 5;
var balls = [];
for (var i = 0; i < totalBalls; i++) {
    addBall();
}

function addBall() {
    var ball = {
        size: ballSize
    }
    resetBall(ball);
    balls.push(ball);
}

function resetBall(ball) {
    ball.x = Math.random() * (canvas.width - ballSize);
    ball.y = 25;
    ball.speed = 0.2 + Math.random() * 1;
}

document.onkeydown = function (event) {
    if (event.keyCode == 68) {
        basket.x += basket.basketSpeed;
        if (basket.x >= canvas.width - basket.width) {
            basket.x = canvas.width - basket.width;
        }
    } else if (event.keyCode == 65) {
        basket.x -= basket.basketSpeed;
        if (basket.x <= 0) {
            basket.x = 0;
        }
    }
}


function animate() {
    if(score === -100)
    {
        continueAnimating = false;
        alert('Game over. Score: ' + score);
    }
    if(score === 100)
    {
        continueAnimating = false;
        alert('You won. Score: ' + score);
    }

    if (continueAnimating) {
        requestAnimationFrame(animate);
    }

    for (var i = 0; i < balls.length; i++) {

        var ball = balls[i];

        if (isColliding(ball, basket)) {
            score += 10;
            resetBall(ball);
        }

        ball.y += ball.speed;

        if (ball.y > canvas.height) {
            score -= 10;
            resetBall(ball);
        }

    }

    drawAll();

}

function isColliding(a, b) {
    return !(
    b.x > a.x + a.size || b.x + b.width < a.x || b.y > a.y + a.size || b.y + b.height < a.y);
}

function drawAll() {
    ctx.fillStyle = "skyblue";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "pink";
    ctx.fillRect(basket.x, basket.y, basket.width, basket.height);
    ctx.strokeStyle = "lightgray";
    ctx.strokeRect(basket.x, basket.y, basket.width, basket.height);

    for (var i = 0; i < balls.length; i++) {
        var ball = balls[i];
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.arc(ball.x, ball.y, ball.size, 0 , 2 * Math.PI);
        ctx.fill();
    }

    ctx.font = "24px Garamond";
    ctx.fillStyle = "white";
    ctx.fillText("Score: " + score, 15, 25);
}

    score = startingScore
    basket.x = 0;
    for (var i = 0; i < balls.length; i++) {
        resetBall(balls[i]);
    }
    if (!continueAnimating) {
        continueAnimating = true;
        animate();
    };