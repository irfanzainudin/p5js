class Block {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.angle = 0;
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    rect(0, 0, size, size);
    pop();
  }

  move() {
    let distance;
    if (pmouseX - mouseX != 0 || pmouseY - mouseY != 0) {
      distance = dist(mouseX, mouseY, this.x, this.y);
      this.angle += 1;
    } else {
      if (this.angle > 0 && this.angle < 90) {
        this.angle += 1;
      } else {
        this.angle = 0;
      }
    }
  }
}
