let flowers = [];
let num = 5;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  angleMode(DEGREES);

  for (let i = 0; i < num; i++) {
    flowers[i] = new Flower(100, 100 - i * 10, 15, 7, 1);
  }
}

function draw() {
  background(220);
  translate(width / 2, height / 2);

  for (let i = 0; i < num; i++) {
    flowers[i].display();
  }
}
