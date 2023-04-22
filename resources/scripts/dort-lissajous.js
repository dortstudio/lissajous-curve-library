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
// creates a canvas
// Example
// createLissajousCurve()
// returns canvas on div

/*
//function createLissajousCurve() {
    alert("createLissajousCurve");
    let bgColor;
    const width = 400;
    const height = 400;
    const dotSize = 10;


    function setup() {
        // create canvas with width 400px and height 400px
        var myCanvas = createCanvas(width, height);
        myCanvas.parent("idnameofdiv");
        bgColor = color(255);

        // only draw once
        // noLoop();
        background(bgColor);
        fill(0, 0, 0, 120);
        stroke(0, 0);
        frameRate(24);

    }

    let t = 0;

    const xRatio = 1 + 0.002;
    const yRatio = 1 + 0.004;

    const gutter = 50;
    const ampX = width / 2 - gutter;
    const ampY = height / 2 - gutter;
    const step = 0.002;

    function draw() {
        background(bgColor);
        translate(width / 2, height / 2);

        for (let i = 0; i < TWO_PI; i += step) {
            if (i < TWO_PI / 2) {
                fill(0, 255, 0, 100);
            } else {
                fill(255, 0, 0, 100);
            }

            const x2 = ampX * sin((t) * xRatio)
            const y2 = ampY * cos((t) * yRatio)
            ellipse(x2, y2, dotSize, dotSize);

            t += step;
        }
    }
//}
*/

//onload = function() { draw();};
function init() {
    var canvas = document.getElementById('fld');
    if (!canvas || !canvas.getContext) { return false; }
    var ctx = canvas.getContext('2d');
    //draw(ctx);

    draw(canvas, ctx);
    setInterval(draw, 200, canvas, ctx);

}

var increment = 0;
var incrementPlus = 0.008;

function draw(canvas, ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //console.log("asdgfasss");
    //ctx.beginPath();
    var i = 3 + 0.002;
    var k = 5 + 0.002;
    var n = 50;
    var t = 1;
    var Base = { x: 100, y: 100, xSize: 2, ySize: 2};
    //ctx.moveTo(Base.x*Base.xSize, Base.y*Base.ySize);


    var radius = 70;
    for (j = 0; j <= 2 * Math.PI; j += Math.PI / n / i) {
        
        var iOffset = i;
        var kOffset = k;
        var jOffset = j;


        ctx.beginPath();
        ctx.moveTo((Base.x + x)*Base.xSize, (Base.y - y)*Base.ySize);


        if(j < Math.PI){
            //console.log("a");
            ctx.strokeStyle = 'rgb(255, 0, 0)';
        } else {
            //console.log("b");
            ctx.strokeStyle = 'rgb(0, 255, 0)';
        }

        var x = (radius * Math.sin((t)*((iOffset) * (jOffset)+increment)));
        var y = (radius * Math.cos((t)*((kOffset) * (jOffset))));
        
        ctx.lineTo((Base.x + x)*Base.xSize, (Base.y - y)*Base.ySize);
        ctx.lineWidth = 4;
        ctx.stroke();
        ctx.closePath();
        
    }
    increment = increment+incrementPlus;
    //console.log(increment);
}

init();