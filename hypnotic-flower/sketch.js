let flowers = [];
let num = 15;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  angleMode(DEGREES);

  for (let i = 0; i < num; i++) {
    // 1. Without alternating-moving flowers
    // flowers[i] = new Flower(100, 140 - i * 10, 15, 7, i * 0.1);
    // 2. With alternation
    if (i % 2 == 0) {
      flowers[i] = new Flower(100, 140 - i * 10, 15, 7, i * 0.1);
    } else {
      flowers[i] = new Flower(100, 140 - i * 10, 15, 7, i * -0.1);
    }
  }
}

function draw() {
  background(0);
  translate(width / 2, height / 2);

  for (let i = 0; i < num; i++) {
    flowers[i].display();
  }
}
