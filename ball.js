var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

var x = 100;
var y = 100;
var radius = 30;

var xSpeed = 10;
var ySpeed = 10;

function drawBall()
{
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.beginPath();
    context.arc(x, y, radius, 0, 360 * Math.PI / 180, true);
    context.closePath();
    context.fill();
}