let f1 = [];
let f2 = [];
let f3 = [];
let f4 = [];
let f5 = [];
let f6 = [];
let f7 = [];
let f8 = [];
let f9 = [];
let f10 = [];
let num = 5;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  angleMode(DEGREES);

  for (let i = 0; i < num; i++) {
    f1[i] = new Flower(100, 100 - i * 10, 15, 7, 1);
  }

  for (let i = 0; i < num; i++) {
    f2[i] = new Flower(100, 70 - i * 10, 10, 7, 1);
  }

  for (let i = 0; i < num; i++) {
    f3[i] = new Flower(100, 100 - i * 10, 15, 7, 1);
  }

  for (let i = 0; i < num; i++) {
    f4[i] = new Flower(100, 100 - i * 10, 15, 7, 1);
  }

  for (let i = 0; i < num; i++) {
    f5[i] = new Flower(100, 100 - i * 10, 15, 7, 1);
  }

  for (let i = 0; i < num; i++) {
    f6[i] = new Flower(100, 70 - i * 10, 10, 7, 1);
  }

  for (let i = 0; i < num; i++) {
    f7[i] = new Flower(100, 100 - i * 10, 15, 7, 1);
  }

  for (let i = 0; i < num; i++) {
    f8[i] = new Flower(100, 250 - i * 10, 45, 7, 1);
  }

  for (let i = 0; i < num; i++) {
    f9[i] = new Flower(100, 200 - i * 10, 30, 7, 1);
  }

  for (let i = 0; i < num; i++) {
    f10[i] = new Flower(100, 70 - i * 10, 10, 7, 1);
  }
}

function draw() {
  background(220);

  translate(width / 2, height / 2);
  for (let i = 0; i < num; i++) {
    f1[i].display();
  }

  translate(170, 170);
  for (let i = 0; i < num; i++) {
    f2[i].display();
  }

  translate(-410, -410);
  for (let i = 0; i < num; i++) {
    f3[i].display();
  }

  translate(850, 100);
  for (let i = 0; i < num; i++) {
    f4[i].display();
  }

  translate(-850, 500);
  for (let i = 0; i < num; i++) {
    f5[i].display();
  }

  translate(850, 0);
  for (let i = 0; i < num; i++) {
    f6[i].display();
  }

  translate(-100, -200);
  for (let i = 0; i < num; i++) {
    f7[i].display();
  }

  translate(-1100, -100);
  for (let i = 0; i < num; i++) {
    f8[i].display();
  }

  translate(900, -400);
  for (let i = 0; i < num; i++) {
    f9[i].display();
  }

  translate(-950, 0);
  for (let i = 0; i < num; i++) {
    f10[i].display();
  }
}
