let canvasWidth = 400;
let canvasHeight = 400;
size = 10;

function setup() {
  createCanvas(canvasWidth, canvasHeight);

  describe(
    'A collection of white lines "scattered" by Perlin Noise on a black background.'
  );
}

function draw() {
  background("black");

  // Set the noise level and scale.
  let noiseLevel = 100;
  let noiseScale = 0.005;

  // Scale the input coordinate.
  let nt = noiseScale * frameCount;

  // Compute the noise values.
  let x = noiseLevel * noise(nt);
  let y = noiseLevel * noise(nt + 10000);

  stroke("white");
  for (let i = 0; i < canvasWidth; i += size) {
    for (let j = 0; j < canvasHeight; j += size) {
      // Draw the lines
      translate(x, y);
      line(i, j, i + size, j + size);
    }
  }
}
