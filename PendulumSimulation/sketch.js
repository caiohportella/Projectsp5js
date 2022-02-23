let pendulum;

function setup() {
  createCanvas(640, 360);
  // Make a new  with an origin position and armlength
  pendulum = new (width / 2, 0, 175);
}

function draw() {
  background(0);
  pendulum.update();
  pendulum.show();
}
