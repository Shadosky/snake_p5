var s;
var f;
var scl = 20;

function setup() {
    createCanvas(640, 480);
    frameRate(10);
    s = new Snake();
    f = new Food();
}

function draw() {
    background(51);
    s.update();
    s.show();
    f.show();
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        s.xspeed = -1;
        s.yspeed = 0;
    } else if (keyCode === RIGHT_ARROW) {
        s.xspeed = 1;
        s.yspeed = 0;
    } else if (keyCode === UP_ARROW) {
        s.yspeed = -1;
        s.xspeed = 0;
    } else if (keyCode === DOWN_ARROW) {
        s.yspeed = 1;
        s.xspeed = 0;
    }
}