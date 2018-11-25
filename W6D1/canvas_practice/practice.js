document.addEventListener("DOMContentLoaded", function(){
  var CanvasElement = document.getElementById("mycanvas");
  CanvasElement.width = 500;
  CanvasElement.height = 500;

  var ctx = CanvasElement.getContext("2d");
  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, 500, 500);

  ctx.beginPath();
  ctx.arc(200, 200, 200, 0, 2 * Math.PI, true);
  ctx.strokeStyle = "yellow";
  ctx.lineWidth = 10;
  ctx.stroke();
  ctx.fillStyle = "black";
  ctx.fill();
  
  ctx.fillRect(25, 25, 100, 100);
  ctx.clearRect(45, 45, 60, 60);
  ctx.strokeRect(50, 50, 50, 50);

});
