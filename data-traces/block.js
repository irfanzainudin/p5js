class Block {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.angle = 0;
    this.colour = 0;
  }

  display() {
    noFill();
    stroke(this.colour);
    push();
    translate(this.x, this.y);
    rotate(this.angle);

    if (this.angle > 0 && this.angle < 45) {
      this.drawCirc();
    } else {
      this.drawRect();
    }

    pop();
  }

  move() {
    let distance;
    if (pmouseX - mouseX != 0 || pmouseY - mouseY != 0) {
      distance = dist(mouseX, mouseY, this.x, this.y);
      if (distance < distMouse) {
        this.angle += 1;
        this.colour = 255;
      }
    }

    if (this.angle > 0 && this.angle < 90) {
      this.angle += 5;
      if (this.colour > 70) {
        this.colour -= 3;
      }
    } else {
      this.angle = 0;
      this.colour = 70;
    }
  }

  drawRect() {
    rect(0, 0, size - offset, size - offset);
  }

  drawCirc() {
    circle(0, 0, ring_size);
    circle(0, 0, ring_size - 10);
    circle(0, 0, (ring_size / 4) * 3);
    circle(0, 0, (ring_size / 4) * 3 - 10);
    circle(0, 0, ring_size / 2);
    circle(0, 0, ring_size / 2 - 10);
    circle(0, 0, ring_size / 4);
    circle(0, 0, ring_size / 4 - 10);
  }
}
