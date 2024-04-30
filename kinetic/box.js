class Box {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.isLetter = false;
    this.angle = 0;
    this.depth = 0;
  }

  display() {
    stroke(255, 100);
    noFill();
    if (this.isLetter) {
      //   fill("white");
      stroke("white");
      this.angle += 1;
      this.depth += 3 * sin(this.angle);
    } else {
      //   fill("white");
      this.angle -= 1;
    }

    push();
    // translate(i * size - size * (cols / 2), j * size - size * (rows / 2));
    translate(this.x, this.y, this.z);
    rotateX(this.angle);
    rotateY(this.angle);
    // rotateX(x);
    // rotateY(y);
    // rotateZ(z);
    box(size - (1 / 3) * size);
    pop();
  }
}
