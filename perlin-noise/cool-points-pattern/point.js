class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  display() {
    strokeWeight(3);
    point(this.x, this.y);
  }
}
