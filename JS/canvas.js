var canvas = document.getElementById("fCanvas");
if(canvas.getContext){
    var ctx = canvas.getContext('2d');
}

/*ctx.fillStyle = "rgba(240, 255, 255)";
ctx.fillRect (10, 10, 60, 60);

ctx.strokeStyle = "blue";
ctx.lineWidth = 2;
ctx.strokeRect(30, 30, 60, 60);

ctx.fillStyle = "rgba(65, 105, 225, 0.8)";
ctx.fillRect (50, 50, 60, 60);

ctx.strokeStyle = "azure";
ctx.lineWidth = 1;
ctx.beginPath(); // начать новый путь
ctx.moveTo(100, 10);
ctx.lineTo(110, 20);
ctx.moveTo(110, 10);
ctx.lineTo(100, 20);
ctx.moveTo(105, 10);
ctx.lineTo(105, 20);
ctx.moveTo(100, 15);
ctx.lineTo(110, 15);
ctx.stroke(); // нарисовать

ctx.fillStyle = "blue";
ctx.strokeStyle = "azure";
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(120, 110);
ctx.lineTo(180, 110);
ctx.lineTo(180, 50);
ctx.lineTo(150, 10);
ctx.lineTo(120, 50);
ctx.lineTo(120, 110);
ctx.fill();
ctx.stroke();*/

/*==== rounds =====
ctx.strokeStyle = "blue";
ctx.beginPath();
ctx.arc(200, 50, 10, 0, Math.PI/2, false);
ctx.stroke();
ctx.beginPath();
ctx.arc(225, 50, 10, 0, Math.PI, true);
ctx.stroke();
ctx.beginPath();
ctx.arc(250, 50, 10, 0, Math.PI * 2, false);
ctx.stroke();
===== rounds =====*/

/*ctx.strokeStyle = "black";
ctx.fillStyle = "azure";
ctx.lineWidth = 1;
ctx.beginPath();
ctx.arc(215, 55, 15, 0, Math.PI * 2, false);
ctx.stroke();
ctx.fill();
ctx.beginPath();
ctx.arc(215, 90, 20, 0, Math.PI * 2, false);
ctx.stroke();
ctx.fill();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(210, 52, 2, 0, Math.PI * 2, false);
ctx.fill();
ctx.beginPath();
ctx.arc(220, 52, 2, 0, Math.PI * 2, false);
ctx.fill();

ctx.beginPath();
ctx.arc(215, 82, 2, 0, Math.PI * 2, false);
ctx.fill();
ctx.beginPath();
ctx.arc(215, 90, 2, 0, Math.PI * 2, false);
ctx.fill();
ctx.beginPath();
ctx.arc(215, 97, 2, 0, Math.PI * 2, false);
ctx.fill();

ctx.fillStyle = "coral";
ctx.beginPath();
ctx.arc(215, 57, 2, 0, Math.PI * 2, false);
ctx.fill();*/

/*======= moving ========
var position = 0;
ctx.fillStyle = "azure";
function moving(){
    ctx.clearRect(240, 0, 50, 200);
    ctx.fillRect(240, position, 2, 2);
    ctx.fillRect(250, position, 2, 2);
    ctx.fillRect(260, position, 2, 2);
    ctx.fillRect(270, position, 2, 2);
    position++;
    if (position > 150){
        position = 0;
    }
};
setInterval(moving, 50);
========= scale =========*/

/*======= scale =========
var size = 0;
ctx.fillStyle = "azure";
function scale(){
    ctx.clearRect(240, 0, 50, 200);
    ctx.fillRect(240, 10, size, size);
    size++;
    if (size > 50){
        size = 0;
    }
};
setInterval(scale, 50);
======== scale =========*/

/*function circle(x, y, radius, fillCircle){
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle){
        ctx.fill();
    }else{
        ctx.stroke();
    }
};
function drawBee(x, y){
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    ctx.fillStyle = "gold";

    circle(x, y, 8, true);
    circle(x, y, 8, false);
    circle(x - 5, y - 11, 5, false);
    circle(x + 5, y - 11, 5,false);
    circle(x - 2, y - 1, 2,false);
    circle(x + 2, y - 1, 2,false);
};
function update(coordinate){
    var offset = Math.random() * 4 - 2;
    coordinate += offset;
    if(coordinate > 200){
        coordinate = 200;
    }else if(coordinate < 0){
        coordinate = 0;
    }
    return coordinate;
};
var x = 100;
var y = 50;
function bee(){
    ctx.clearRect(0, 0, 200, 200);
    drawBee(x, y);
    x = update(x);
    y = update(y);
    ctx.strokeRect(0, 0, 200, 200);
};
setInterval(bee, 50);*/

/*====== ball =======
var x = 60;
var y = 140;

var directX, directY = true;

ctx.fillStyle = "azure";

function drawBall(x, y){
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2, false);
    ctx.fill();
};

function updateX(coords){
    if(coords === 300){
        directX = false;
    }else if(coords === 0){
        directX = true;
    }
    if(directX === true){
        this.coords = ++coords;
    }else{
        this.coords = --coords;
    }
    return this.coords;
};

function updateY(coords){
    if(coords === 150){
        directY = false;
    }else if(coords === 0){
        directY = true;
    }
    if(directY === true){
        this.coords = ++coords;
    }else{
        this.coords = --coords;
    }
    return this.coords;
};

function moving(){
    ctx.clearRect(0, 0, 300, 150);
    drawBall(x, y);
    x = updateX(x);
    y = updateY(y);
};

setInterval(moving, 1);
====== ball =======*/

function Ball(x, y){
    this.x = x;
    this.y = y;
    this.xSpeed = 1;
    this.ySpeed = 1;
}

ctx.fillStyle = "azure";

function drawBall(x, y){
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2, false);
    ctx.fill();
};

Ball.prototype.draw = function (){
    drawBall(this.x, this.y);
};

Ball.prototype.move = function (){
    this.x += this.xSpeed;
    this.y += this.ySpeed;
};

Ball.prototype.check = function (){
    if(this.x < 0 || this.x > 300){
        this.xSpeed = -this.xSpeed;
    }
    if(this.y < 0 || this.y > 150){
        this.ySpeed = -this.ySpeed;
    }
};

var ball = new Ball(300, 100);

function moving(){
    ctx.clearRect(0, 0, 300, 150);
    ball.draw();
    ball.move();
    ball.check();
};

setInterval(moving, 10);


var newCanvas = document.getElementById("sCanvas");
if(newCanvas.getContext){
    var nctx = newCanvas.getContext('2d');
}

var height = newCanvas.height;
var width = newCanvas.width;

nctx.fillStyle = "azure";

function newBall(x, y){
    this.x = x;
    this.y = y;
    this.xSpeed = 1;
    this.ySpeed = 0;
}

newBall.prototype.draw = function (){
    nctx.beginPath();
    nctx.arc(this.x, this.y, 5, 0, Math.PI * 2, false);
    nctx.fill();
};

newBall.prototype.direction = function (numb){
    if(numb === 38 || numb === 87){
        this.xSpeed = 0;
        this.ySpeed = -1;
    }else if(numb === 40 || numb === 83){
        this.xSpeed = 0;
        this.ySpeed = 1;
    }else if(numb === 37 || numb === 65){
        this.xSpeed = -1;
        this.ySpeed = 0;
    }else if(numb === 39 || numb === 68){
        this.xSpeed = 1;
        this.ySpeed = 0;
    }else if(numb === 32){
        this.xSpeed = 0;
        this.ySpeed = 0;
    }
};

newBall.prototype.move = function (){
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    if(this.x < 0){
        this.x = width;
    }else if(this.x > width){
        this.x = 0;
    }
    if(this.y < 0){
        this.y = height;
    }else if(this.y > height){
        this.y = 0;
    }
};

var newBall = new newBall(100, 100);

function newDirection(event){
    newBall.direction(event.keyCode);
};

$("body").keydown(newDirection);

function newMoving(){
    nctx.clearRect(0, 0, width, height);
    newBall.draw();
    newBall.move();
};

setInterval(newMoving, 10);

