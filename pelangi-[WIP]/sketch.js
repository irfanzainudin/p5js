let colors = [];
let ring_size = 25;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  colorMode(HSB);
  noStroke();
  for (let i = 0; i < 360; i++) {
    colors[i] = color(i, 100, 100);
  }
}

function draw() {
  translate(width / 2, height / 2);
  for (let i = 0; i < 360; i++) {
    fill(colors[i]);
    let angle = map(i, 0, 360, 0, TWO_PI);
    let x = 200 * cos(angle);
    let y = 200 * sin(angle);
    arc(0, 0, ring_size, ring_size, angle, angle + TWO_PI / 360);
  }
  fill(255);
  circle(0, 0, ring_size - 10);
  for (let i = 0; i < 360; i++) {
    fill(colors[i]);
    let angle = map(i, 0, 360, 0, TWO_PI);
    let x = 200 * cos(angle);
    let y = 200 * sin(angle);
    arc(
      0,
      0,
      (ring_size / 4) * 3,
      (ring_size / 4) * 3,
      angle,
      angle + TWO_PI / 360
    );
  }
  fill(255);
  circle(0, 0, (ring_size / 4) * 3 - 10);
  for (let i = 0; i < 360; i++) {
    fill(colors[i]);
    let angle = map(i, 0, 360, 0, TWO_PI);
    let x = 200 * cos(angle);
    let y = 200 * sin(angle);
    arc(0, 0, ring_size / 2, ring_size / 2, angle, angle + TWO_PI / 360);
  }
  fill(255);
  circle(0, 0, ring_size / 2 - 10);
  for (let i = 0; i < 360; i++) {
    fill(colors[i]);
    let angle = map(i, 0, 360, 0, TWO_PI);
    let x = 200 * cos(angle);
    let y = 200 * sin(angle);
    arc(0, 0, ring_size / 4, ring_size / 4, angle, angle + TWO_PI / 360);
  }
  fill(255);
  circle(0, 0, ring_size / 4 - 10);
}
