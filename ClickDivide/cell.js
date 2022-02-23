function Cell(pos, r, c) {
  if (pos) {
    this.pos = pos.copy();
  } else {
    this.pos = createVector(random(width), random(height));
  }

  this.r = r || 60;
  this.c = c || color(random(100, 255), 0, random(100, 255), 100);

  this.target = createVector(this.pos.x, this.pos.y);
  this.vel = p5.Vector.random2D();
  this.maxSpeed = 10;
  this.maxForce = 1;

  this.clicked = function(x, y) {
    var d = dist(this.pos.x, this.pos.y, x, y);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  };

  this.mitosis = function() {
    //this.pos.x += random(-this.r, this.r);
    var cell = new Cell(this.pos, this.r * 0.8, this.c);
    return cell;
  };

  // this.arriveSB = function(target) {
  //   var desired = p5.Vector.sub(target, this.pos);
  //   var d = desired.mag();
  //   var speed = this.maxSpeed;
  //   if (d < 100) {
  //     speed = map(d, 0, 100, 0, this.maxSpeed);
  //   }
  //   desired.setMag(speed);
  //   var steer = p5.Vector.sub(desired, this.vel);
  //   steer.limit(this.maxForce);
  //   return steer;
  // };

  this.move = function() {
    var vel = p5.Vector.random2D();
    this.pos.add(vel);
  };

  this.show = function() {
    noStroke();
    fill(this.c);
    ellipse(this.pos.x, this.pos.y, this.r, this.r);
  };
}
