let canvasWidth = 400;
let canvasHeight = 400;
let inc_size = 10;
let points = [];
let cols, rows, scl;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  scl = 10;
  cols = width / scl;
  rows = height / scl;

  describe(
    'A collection of white lines "scattered" by Perlin Noise on a black background.'
  );

  // Set the noise level and scale.
  let noiseLevel = 100;
  let noiseScale = 0.01;

  for (let i = 0; i < canvasWidth; i++) {
    points[i] = [];
    for (let j = 0; j < canvasHeight; j++) {
      // Scale the input coordinates.
      let x = noise(noiseScale * i);
      let y = noise(noiseScale * j);
      points[i][j] = new Point(i * (inc_size * x), j * (inc_size * y));
    }
  }
}

function draw() {
  background("black");

  // Need to offset the positions of points

  stroke("white");
  for (let i = 0; i < canvasWidth; i++) {
    for (let j = 0; j < canvasHeight; j++) {
      points[i][j].display();
    }
  }
}
