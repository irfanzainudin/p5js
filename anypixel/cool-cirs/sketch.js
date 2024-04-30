let blocks = [];
let rows;
let cols;
let size = 25;
let offset = 4;
let distMouse = 30;

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
      // TODO: Make the last block a bit different
      // if (i == cols - 1 && j == rows - 1) {
      //   blocks[i][j].end_block_move();
      //   blocks[i][j].end_block_display();
      // } else {
      //   blocks[i][j].move();
      //   blocks[i][j].display();
      // }
    }
  }

  text("Welcome to my page", 100, 100);
  text("I love creating stuff", 100, 125);
}
