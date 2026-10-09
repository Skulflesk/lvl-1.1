
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

var x = 500;
var y = 250;
var radius = 30;

function drawBall()
{
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.beginPath();
    context.arc(x, y, radius, 0, 360 * Math.PI / 180, true);

    context.fillStyle = "red";
    context.fill();
}

drawBall();

//     x = x + xSpeed;
//     y = y + ySpeed;

//     if (x + radius > canvas.width || x - radius < 0)
//     {
//         xSpeed = -xSpeed;
//     }

//     if (y + radius > canvas.height || y - radius < 0)
//     {
//         ySpeed = -ySpeed;
//     }
// }

setInterval(drawBall, 20);