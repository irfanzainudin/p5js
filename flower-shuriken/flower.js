class Flower {
  constructor(points, r, flower_amplitude, period, speed) {
    this.x = [];
    this.y = [];
    this.points = points;
    this.flower_radius;
    this.r = r;
    this.flower_amplitude = flower_amplitude;
    this.period = period;
    this.speed = speed;
    this.rotatingAngle = 0;
  }

  display() {
    stroke(0);
    noFill();
    beginShape();
    for (let i = 0; i < this.points; i++) {
      let angle = (i / this.points) * 360;
      this.flower_radius = this.flower_amplitude * cos(angle * this.period);
      this.x[i] =
        (this.r + this.flower_radius) * cos(angle + this.rotatingAngle);
      this.y[i] =
        (this.r + this.flower_radius) * sin(angle + this.rotatingAngle);
      vertex(this.x[i], this.y[i]);
    }
    endShape(CLOSE);

    this.rotatingAngle += this.speed;
  }
}
