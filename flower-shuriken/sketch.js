// let rotatingAngle = 0;

let flowers = [];
let f;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  angleMode(DEGREES);

  for (let i = 0; i < 5; i++) {
    flowers[i] = new Flower(100, 100, 70, 7, 1 + i);
  }
  // f = new Flower(100, 100, 70, 7, 1);
}

function draw() {
  background(220);
  translate(width / 2, height / 2);
  // f.display();

  for (let i = 0; i < 5; i++) {
    flowers[i].display();
  }
}
