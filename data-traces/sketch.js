let blocks = [];
let rows;
let cols;
let size = 25;
let offset = 4;
let distMouse = 20;
let ring_size = 20;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
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
  background(255);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      blocks[i][j].move();
      blocks[i][j].display();
    }
  }
}
