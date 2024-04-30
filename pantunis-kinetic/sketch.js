let x = 0;
let y = 0;
let z = 0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  // let x = map(mouseX, 0, width, 0, 360);
  // let y = map(mouseY, 0, width, 0, 360);
  rotateX(x);
  rotateY(y);
  // rotateZ(z);
  box(50);

  push();
  translate(0, 50);
  box(50);
  pop();

  push();
  translate(0, 100);
  box(50);
  pop();

  push();
  translate(0, 150);
  box(50);
  pop();

  push();
  translate(0, 200);
  box(50);
  pop();

  push();
  translate(50, 0);
  box(50);
  pop();

  push();
  translate(100, 0);
  box(50);
  pop();

  push();
  translate(100, 50);
  box(50);
  pop();

  push();
  translate(100, 100);
  box(50);
  pop();

  push();
  translate(50, 100);
  box(50);
  pop();

  x += 1;
  y += 1;
  // z += 1;
  text("Welcome to my page", 50, 50);
}
