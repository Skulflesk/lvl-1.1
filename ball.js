
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

var x = 500;
var y = 250;
var radius = 30;

// var xSpeed = 3;
// var ySpeed = 2;

function drawBall()
{
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.beginPath();
    context.arc(x, y, radius, 0, 360 * Math.PI / 180, true);
    context.closePath();
    
    context.fill();
    context.fillStyle() = "red"

}

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