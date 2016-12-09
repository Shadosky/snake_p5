var snake;
var food;
var scl = 20;
var rows;
var cols;
var score = 0;

function setup() {
    createCanvas(640, 480);
    frameRate(10);
    snake = new Snake();
    food = new Food();

    rows = width/scl;
    cols = height/scl;

    food.getPosOnGrid();
}

function draw() {
    background(51);

    food.eat();

    snake.update();
    snake.die();

    snake.show();
    food.show();

    var string = "Score : "+score;
    fill(255);
    text(string, 25, 25);
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        snake.dir(-1, 0);
    } else if (keyCode === RIGHT_ARROW) {
        snake.dir(1, 0);
    } else if (keyCode === UP_ARROW) {
        snake.dir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        snake.dir(0, 1);
    }
}