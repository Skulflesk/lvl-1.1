
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

var x = 100;
var y = 100;
var radius = 30;

context.beginPath();
context.arc(x, y, radius, 0, 2 * Math.PI);
context.closePath();
context.fill();


context.beginPath();
context.arc(x,y,radius,0,360*Math.PI/180,true)
context.closePath();
context.fill();