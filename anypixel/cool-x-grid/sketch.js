let blocks = [];
let rows;
let cols;
let size = 30;
let offset = 4;
let distMouse = 20;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  rectMode(CENTER);
  angleMode(DEGREES);
  cols = width / size;
  rows = height / size;

  for (let i = 0; i < cols; i++) {
    blocks[i] = [];
    for (let j = 0; j < rows; j++) {
      blocks[i][j] = new Block(i * size, j * size);
    }
  }
}

function draw() {
  background(0);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      blocks[i][j].move();
      blocks[i][j].display();
    }
  }

  text("Welcome to Self-Correcting Tiles", 100, 100);
  text("Where your messes are no más", 100, 150);
}
