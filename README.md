# Lissajous curve library
This JavaScript library helps you render Lissajous curves using HTML canvas.

A Lissajous curve is a shape that comprises of an intersection of two perpendicular sinusoidal waves. They often represent the left and right channels in audio.

***
# Getting started
You will need
1. The JavaScript file that contains the main script to initialise and animate the curves
2. The blank canvas to apply the curve to
3. The JavaScript that defines the settings for each curve and targets a blank canvas

## Lissajous curve library JavaScript file

The Javascript file `dort-lissajous-curve.js` can be found in `app/utils/Geometric/`

Example

    <script src="app/utils/Geometric/dort-lissajous-curve.js?ver=4" type="text/javascript"></script>


## Blank canvas
Each canvas needs a unique ID.

    <canvas id="dort-canvas-01"></canvas>

You can have multiple canvases on each page, and they can have unique lissajous curve settings. But each canvas needs a unique ID and need to be initialised individually.

## Defining the lissajous curve animation settings
The minimal code you need is

    var curveObj01 = {};
    initLissajousCurve(curveObj01, document.getElementById('dort-canvas-01'));

This will produce a canvas that is 400x400px wide with a green and red curve.

An example of more detailed settings 

    var curveObj01 = {};
    curveObj01.xStep = 4;
    curveObj01.yStep = 5;
    curveObj01.hidpi = true;
    curveObj01.canvasWidth = 400;
    curveObj01.canvasHeight = 400;
    curveObj01.strokeStyle01 = 'rgb(21, 32, 35)';
    curveObj01.strokeStyle02 = 'rgb(88, 188, 163)';
    initLissajousCurve(curveObj01, document.getElementById('dort-canvas-01'));

***
# Setting details

This library is very flexible and settings can be defined depending on your project.

`obj.xStep` the number of vertical steps (default is 2).

`obj.yStep` the number of horizontal steps (default is 5).

`obj.speed` the speed at which the curve rotates (default is 0.016).

`obj.n` the number of lines in a curve (default is 50).

`obj.hidpi` whether high-definition (retina) screens should be rendered at double DPI (default is false).

`obj.canvasWidth` the pixel width of a canvas (default is 400).

`obj.canvasHeight` the pixel height of a canvas (default is 400).

`obj.fullWidthOverride` overrides the canvasWidth and makes the curve the full width of the containing div, then scales the height accordingly (default is false).

`obj.xMid` the horizontal centre of the curve radius (defualt is the centre of the canvas).

`obj.yMid` the vertical centre of the curve radius (defualt is the centre of the canvas).

`obj.radius` the size of the radius (default is half width munus ten).

`obj.lineWidth` the thickness of the line (default is 4).

`obj.increment` the number to start the animation (default is 0).

`obj.intervalAmount` how fast the frames are refreshed (default is 50, which is approx 24fps).

`obj.strokeStyle01` the colour of the first half of the line (default is 'rgb(255, 0, 0)').

`obj.strokeStyle02` the colour of the second half of the line (default is 'rgb(0, 255, 0)').

`obj.oblong` makes the shape stretch wider when it is rolling through sizes (default is false).

`obj.oblongRatio` if the obj.oblong setting is true then you can set how wide it is (default is 3, no change is 1).

`obj.debug` adds a text field to top left and displays obj.debugString every loop (default is false).