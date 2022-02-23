var snake;
var food;
var scl = 20;

function setup() {
  createCanvas(700, 700);
  snake = new Snake();
  frameRate(30);
  foodLocation();
}

function foodLocation() {
  let cols = floor(width/scl);
  let rows = floor(height/scl);

  food = createVector(floor(random(cols)), floor(random(rows)));
}

function draw() {
  background(51);
  snake.update();
  snake.show();

  fill('red');
  rect(food.x, food.y, scl, scl);
}

function keyPressed(){
  if(keyCode === UP_ARROW) {
    snake.dir(0, -1);
  } else if(keyCode === DOWN_ARROW) {
    snake.dir(0, 1);
  } else if(keyCode === RIGHT_ARROW) {
    snake.dir(1, 0);
  } else if(keyCode === LEFT_ARROW) {
    snake.dir(-1, 0);
  }
}
