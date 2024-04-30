let canvasWidth = 400;
let canvasHeight = 400;

function setup() {
  createCanvas(canvasWidth, canvasHeight);

  describe("A black dot moves randomly on a gray square.");
}

function draw() {
  background(200);

  // Calculate the coordinates.
  let x = canvasWidth * noise(0.005 * frameCount);
  let y = canvasHeight * noise(0.005 * frameCount + 10000);

  // Draw the point.
  strokeWeight(5);
  point(x, y);
}
