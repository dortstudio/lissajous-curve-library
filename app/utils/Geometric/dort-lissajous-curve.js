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


    obj.xStep = obj.xStep || 2;
    obj.yStep = obj.yStep || 5;
    obj.speed = obj.speed || 0.016;
    obj.n = obj.n || 50;
    obj.hidpi = obj.hidpi || false;
    obj.canvasWidth = obj.canvasWidth || 400;
    obj.canvasHeight = obj.canvasHeight || 400;
    obj.fullWidthOverride = obj.fullWidthOverride || false;
    obj.xMid = obj.xMid || obj.canvasWidth / 2;
    obj.yMid = obj.yMid || obj.canvasHeight / 2;
    obj.radius = obj.radius || (obj.canvasWidth / 2)-10;
    obj.lineWidth = obj.lineWidth || 4;
    obj.increment = obj.increment || 0;
    obj.intervalAmount = obj.intervalAmount || 50;
    obj.strokeStyle01 = obj.strokeStyle01 || 'rgb(255, 0, 0)';
    obj.strokeStyle02 = obj.strokeStyle02 || 'rgb(0, 255, 0)';
    obj.oblong = obj.oblong || false;
    obj.oblongRatio = obj.oblongRatio || 3;
    obj.debug = obj.debug || false;

    // set canvas to 100% of container and scales height accordingly
    if (obj.fullWidthOverride === false) {
        canvas.style.width = obj.canvasWidth + "px";
        canvas.style.height = obj.canvasHeight + "px";
    } else {
        canvas.style.width = "100%";
        canvas.style.height = canvas.style.width;
    }

    // retina is set via hidpi
    if (obj.hidpi === false) {
        canvas.width = obj.canvasWidth;
        canvas.height = obj.canvasHeight;
    } else {
        canvas.width = obj.canvasWidth * 2;
        canvas.height = obj.canvasHeight * 2;
        obj.xCentre = obj.xCentre / 2;
        obj.yCentre = obj.yCentre / 2;
        ctx.scale(2, 2);
    }

    // sets interval (timer for FPS)
    setInterval(drawLC, obj.intervalAmount, obj, canvas, ctx);

}

function drawLC(obj, canvas, ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var xStep = obj.xStep + 0.002;
    var yStep = obj.yStep + 0.002;
    var n = obj.n;
    var scale = 1;

    var oblongOffset = 1;

    for (j = 0; j <= 2 * Math.PI; j += Math.PI / n / xStep) {

        var jOffset = j;


        ctx.beginPath();
        ctx.moveTo((obj.xMid + x), (obj.yMid - y));


        if (j < Math.PI) {
            ctx.strokeStyle = obj.strokeStyle01;
        } else {
            ctx.strokeStyle = obj.strokeStyle02;
        }

        // special calculation for oblong setting
        if (obj.oblong === true && j === 0) {
            var prex = (obj.radius * Math.sin((scale) * ((xStep) * (jOffset) + obj.increment)));
            oblongOffset = ((Math.abs(prex) / 180 / (10.65)) * ((obj.oblongRatio - 1) * 10)) + 1;
        }

        // main lissajous calculation
        var x = (obj.radius * Math.sin((scale) * ((xStep) * (jOffset) + obj.increment)));
        var y = (obj.radius * Math.cos((scale) * ((yStep) * (jOffset))));

        // special calculation for oblong setting
        if (obj.oblong === true) {
            x = x * oblongOffset / obj.oblongRatio;
            y = y / obj.oblongRatio
        }

        // draws line
        ctx.lineTo((obj.xMid + x), (obj.yMid - y));
        ctx.lineWidth = obj.lineWidth;
        ctx.stroke();
        ctx.closePath();

        // adds debug text to top left
        if (obj.debug === true) {
            if (j === 0) {
                obj.debugString = obj.radius;
            }
            obj.debugString = obj.debugString || "hello world";
            ctx.font = "14px Arial";
            ctx.fillText(obj.debugString, 0, 10);
        }

    }
    obj.increment = obj.increment + obj.speed;
}
