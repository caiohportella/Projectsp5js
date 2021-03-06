function Snake() {
  this.x = 0;
  this.y = 0;
  this.xSpeed = 1;
  this.ySpeed = 0;
  this.rate = 0.25;
  this.tail = [];

  this.dir = function(x, y) {
    this.xSpeed = x;
    this.ySpeed = y;

  }

  this.update = function() {
    this.x = this.x + this.xSpeed * (this.rate + scl);
    this.y = this.y + this.ySpeed * (this.rate + scl);

    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, width - scl);
  }

  this.show = function() {
    fill(255);
    rect(this.x, this.y, scl, scl);
  }
}
