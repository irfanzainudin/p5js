class Block {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.angle = 0;
    this.colour = 70;
    // this.text_colour = 255;
  }

  display() {
    noFill();
    stroke(this.colour);
    push();
    translate(this.x, this.y);
    rotate(this.angle);

    if (this.angle > 0 && this.angle < 45) {
      this.drawCirc();
      this.drawRect();
    } else {
      this.drawX();
    }
    pop();
  }

  move() {
    let distance;
    if (pmouseX - mouseX != 0 || pmouseY - mouseY != 0) {
      distance = dist(mouseX, mouseY, this.x, this.y);
      if (distance < distMouse) {
        this.angle += 3;
        this.colour = 255;
      }
    }

    if (this.angle > 0 && this.angle < 90) {
      this.angle += 3;
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
    circle(0, 0, size);
  }

  drawX() {
    let margin = -size / 2;
    line(
      margin + offset / 2,
      margin + offset / 2,
      margin + size - offset / 2,
      margin + size - offset / 2
    );
    line(
      margin + size - offset / 2,
      margin + offset / 2,
      margin + offset / 2,
      margin + size - offset / 2
    );
  }
}
