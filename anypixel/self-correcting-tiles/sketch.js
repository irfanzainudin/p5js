let blocks = [];
let rows;
let cols;
let size = 50;
let offset = 20;
let distMouse = 20;
let b;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  rectMode(CENTER);
  angleMode(DEGREES);
  cols = width / size;
  rows = height / size;

  //   b = new Block(width / 2, height / 2);
  for (let i = 0; i < cols; i++) {
    blocks[i] = [];
    for (let j = 0; j < rows; j++) {
      blocks[i][j] = new Block(i * size, j * size);
    }
  }
}

function draw() {
  background(220);
  //   b.move();
  //   b.display();
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      blocks[i][j].move();
      blocks[i][j].display();
    }
  }

  text("Welcome to Self-Correcting Tiles", 100, 100);
  text("Where your messes are no más", 100, 150);
}
