/**
 * 
 * @author 	Author name (Paul Casey)
 * @since 	2023-04-22
 * @usage	creates lissajous curve
 * 
 */

//////////////
// CANVAS
// LISSAJOUS CURVE
// creates an animated canvas
//
// Example
// initLissajousCurve(curveObj01, document.getElementById('dort-canvas-01'))
// animates a canvas on with the id named 'dortcanvas-01' with the settings in curveObj01.

//onload = function() { draw();};
function initLissajousCurve(obj, canvas) {
    if (!canvas || !canvas.getContext) { return false; }
    var ctx = canvas.getContext('2d');

    obj.increment = obj.increment || 0;
    obj.xStep = obj.xStep || 2;
    obj.yStep = obj.yStep || 5;
    obj.speed = obj.speed || 0.008;
    obj.n = obj.n || 50;
    obj.base = obj.base  || { x: 100, y: 100, xSize: 2, ySize: 2};
    obj.radius = obj.radius || 70;
    obj.lineWidth = obj.lineWidth || 4;
    obj.intervalAmount = obj.intervalAmount || 50;
    obj.strokeStyle01 = obj.strokeStyle01 || 'rgb(255, 0, 0)';
    obj.strokeStyle02 = obj.strokeStyle02 || 'rgb(0, 255, 0)';

    setInterval(drawLC, obj.intervalAmount, obj, canvas, ctx);

}

function drawLC(obj, canvas, ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var xStep = obj.xStep + 0.002;
    var yStep = obj.yStep + 0.002;
    var n = obj.n;
    var scale = 1;
    var base = obj.base

    var radius = obj.radius;
    for (j = 0; j <= 2 * Math.PI; j += Math.PI / n / xStep) {
        
        var jOffset = j;


        ctx.beginPath();
        ctx.moveTo((base.x + x)*base.xSize, (base.y - y)*base.ySize);


        if(j < Math.PI){
            ctx.strokeStyle = obj.strokeStyle01;
        } else {
            ctx.strokeStyle = obj.strokeStyle02;
        }

        var x = (radius * Math.sin((scale)*((xStep) * (jOffset)+obj.increment)));
        var y = (radius * Math.cos((scale)*((yStep) * (jOffset))));
        
        ctx.lineTo((base.x + x)*base.xSize, (base.y - y)*base.ySize);
        ctx.lineWidth = obj.lineWidth;
        ctx.stroke();
        ctx.closePath();
        
    }
    obj.increment = obj.increment + obj.speed;
}
