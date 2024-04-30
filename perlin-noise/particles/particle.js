function Particle() {
  this.pos = createVector(random(width), random(height));
  //   this.velocity = createVector(0, 0);
  this.velocity = p5.Vector.random2D();
  this.acceleration = createVector(0, 0);

  this.update = function () {
    this.velocity.add(this.acc);
    this.pos.add(this.velocity);
    this.acceleration.mult(0);
  };

  this.applyForce = function (force) {
    this.acceleration.add(force);
  };

  this.show = function () {
    stroke(0);
    strokeWeight(3);
    point(this.pos.x, this.pos.y);
  };

  this.edges = function () {
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  };
}
