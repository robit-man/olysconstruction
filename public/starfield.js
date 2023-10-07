// Very bad way of creating 3d objects and needless calculations without use of matrices either
// The simple 3d transforms and projection may be useful but nowhere near optimal
// The is more of a playground !!

// If you want a tutorial then
// Star field code taken from: http://codentronix.com/2011/07/22/html5-canvas-3d-starfield/

var canvas = document.getElementById('StarCanvas');
var ctx;

// Change HTML or use getElement etc...
var screenWidth;
var screenHeight;

var gridXSize = 69;
var gridYSize = 69;

var degrees = 0;
var gridOffset = 0;

var objList = [];

var degToRad = function(deg) {
    return (deg * Math.PI / 180);
};

var drawLine = function(x1,y1,x2,y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    // set line color
    ctx.strokeStyle = '#ffffff11';
    ctx.lineWidth = 1;
    ctx.stroke();
};

// Builds a grid
var buildGrid = function(gridXSize, gridYSize, gridOffset) {

    var points = [];
    var lines = [];
    var lineFrom, lineTo;

    for(var i = 0; i < gridYSize; i++) {
        for(var j = 0; j < gridXSize; j++) {

            var modulate = Math.cos( (((i*gridYSize) + gridXSize) + gridOffset ) % (Math.PI*2) );
            var base = 1.5 * modulate;

            var normX = (base * (j / (gridXSize -1) ))-1;
            var normY = (1.5 * (i / (gridYSize -1) ))-1;

            points.push([normX,normY,Math.sin(  (((i*gridYSize) + gridXSize) + gridOffset ) % (Math.PI*2 ) )  ]);

            // Check if we can go from current point to next row down?
            lineFrom = (i * gridXSize) + j;

            if( i < gridYSize -1) {
                lineTo = lineFrom + gridYSize;
                // Line from point vertically down
                lines.push([lineFrom,lineTo]);
            }

            if( j < gridYSize -1) {
                lineTo = lineFrom + 1;
                // Line horizontally right
                lines.push([lineFrom,lineTo]);
            }
        }
    }
    return {
        points: points,
        lines: lines
    }
};

// It's a 3d cube
var object1 = {
    points: [
        [-1, -1, 1],
        [1, -1, 1],
        [1, 1, 1],
        [-1, 1, 1],

        [-1, -1, -1],
        [1, -1,  -1],
        [1, 1,   -1],
        [-1, 1, -1]],

    lines: [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 0],

        [4, 5],
        [5, 6],
        [6, 7],
        [7, 4],

        [0, 4],
        [1, 5],
        [2, 6],
        [3, 7],
    ],
    transformedPoints: []
};

var setupTransformPoints  = function(obj) {
    obj.transformedPoints = obj.points;
};

var createObject = function(obj) {
    var newObj =  JSON.parse(JSON.stringify((obj)));
    return newObj;
};

// Use matrices for real live application
var rotateZ3D = function(theta,obj) {

    theta = degToRad(theta);

    var sinTheta = Math.sin(theta);
    var cosTheta = Math.cos(theta);

    var points = obj.points;
    var transformedPoints = obj.transformedPoints;

    for (var n = 0; n < points.length; n++) {
        var node = points[n];
        var x = node[0];
        var y = node[1];
        var z = node[2];


        var newx = x * cosTheta - y * sinTheta;
        var newy = y * cosTheta + x * sinTheta;
        var newz = z;

        var newNode=[newx,newy,newz];
        transformedPoints[n]=newNode;
    }
};

var rotateY3D = function(theta,obj) {

    theta = degToRad(theta);

    var sinTheta = Math.sin(theta);
    var cosTheta = Math.cos(theta);

    var points = obj.points;
    var transformedPoints = obj.transformedPoints;

    for (var n = 0; n < points.length; n++) {
        var node = points[n];
        var x = node[0];
        var y = node[1];
        var z = node[2];

        var newy = y;
        var newx = x * cosTheta - z * sinTheta;
        var newz = z * cosTheta + x * sinTheta;

        var newNode=[newx,newy,newz];
        transformedPoints[n]=newNode;
    }
};

var rotateX3D = function(theta,obj) {

    theta = degToRad(theta);

    var sinTheta = Math.sin(theta);
    var cosTheta = Math.cos(theta);

    var points = obj.points;
    var transformedPoints = obj.transformedPoints;

    for (var n = 0; n < points.length; n++) {
        var node = points[n];
        var x = node[0];
        var y = node[1];
        var z = node[2];

        var newx = x;
        var newy = y * cosTheta - z * sinTheta;
        var newz = z * cosTheta + y * sinTheta;

        var newNode=[newx,newy,newz];
        transformedPoints[n]=newNode;
    }
};

var transform = function(obj,deg) {
    setupTransformPoints(obj);
    rotateZ3D(deg,obj);
    rotateX3D(deg,obj);
    rotateY3D(deg,obj);
};

var setupObjects = function(gridOffset) {
    objList = [];
    objList.push(createObject(object1));
    objList.push(createObject(object1));
    objList.push(buildGrid(gridXSize,gridYSize,gridOffset));
};

var project = function(viewWidth, viewHeight, fov, viewDistance, x, y, z) {
    var factor, newx, newy;
    factor = fov / (viewDistance + z)
    newx = x * factor + viewWidth / 2
    newy = y * factor + viewHeight / 2
    return { point: {x:newx, y:newy, z:z} };
};

var drawObject = function(obj, viewDistance) {
    var points = obj.transformedPoints;
    var lines = obj.lines;

    lines.forEach(function(element) {

        var x1 = points[ element[0] ] [0];
        var y1 = points[ element[0] ] [1];
        var z1 = points[ element[0] ] [2];

        var point = project(screenWidth,screenHeight,200,viewDistance,x1,y1,z1);

        x1 = point.point.x
        y1 = point.point.y;
        z1 = point.point.z;

        var x2 = points[ element[1] ] [0];
        var y2 = points[ element[1] ] [1];
        var z2 = points[ element[1] ] [2];

        var point = project(screenWidth,screenHeight,200,viewDistance,x2,y2,z2);

        x2 = point.point.x;
        y2 = point.point.y;
        z2 = point.point.z;

        drawLine(x1,y1,x2,y2);
    });
};


MAX_DEPTH = 100;
var stars = new Array(512);

function randomRange(minVal,maxVal) {
    return Math.floor(Math.random() * (maxVal - minVal - 1)) + minVal;
}

function initStars() {
    for( var i = 0; i < stars.length; i++ ) {
        stars[i] = {
            x: randomRange(-50,50),
            y: randomRange(-50,50),
            z: randomRange(1,MAX_DEPTH)
        }
    }
}

function loop() {
    var halfWidth  = canvas.width / 2;
    var halfHeight = canvas.height / 2;

    for( var i = 0; i < stars.length; i++ ) {
        stars[i].z -= 0.2;

        if( stars[i].z <= 0 ) {
            stars[i].x = randomRange(-50,50);
            stars[i].y = randomRange(-50,50);
            stars[i].z = MAX_DEPTH;
        }

        var k  = 256.0 / stars[i].z;
        var px = stars[i].x * k + halfWidth;
        var py = stars[i].y * k + halfHeight;

        if( px >= 0 && px <= screenWidth && py >= 0 && py <= screenHeight ) {
            var size = (1 - stars[i].z / 32.0) * 3;
            var shade = parseInt((1 - stars[i].z / 32.0) * 255);
            ctx.fillStyle = "rgb(" + shade + "," + shade + "," + shade + ")";
            ctx.fillRect(px,py,size,size);
        }
    }
}

var resize = function () {
    if ( (screenWidth != document.documentElement.clientWidth )||(screenHeight != document.documentElement.clientHeight)){
      screenWidth = document.documentElement.clientWidth;
      screenHeight = document.documentElement.clientHeight;
      ctx.canvas.width = screenWidth;
      ctx.canvas.height = screenHeight;
    }
};

//window.onresize = resize;

var animation = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    loop();
    setupObjects(gridOffset);
    transform(objList[0],degrees);
    transform(objList[1],(degrees+90)%360);
    transform(objList[2],degrees);
    drawObject(objList[0],2);
    drawObject(objList[1],2.5);
    drawObject(objList[2],3);
    degrees = (degrees + 1)%360;
    gridOffset+=0.1;
    //window.requestAnimationFrame(animation);
};

var main = function() {
    ctx = canvas.getContext('2d');

    resize();

    if (ctx) {
        initStars();
      //  animation();
        setInterval(animation,10);
    } else {
      console.log("Canvas failed to get ctx!");
    }
};

main();