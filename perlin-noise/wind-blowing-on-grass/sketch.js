let canvasWidth = 400;
let canvasHeight = 400;
let size = 10;
let inc = 0.1;
let scale = 20;
let cols, rows;

var zoff = 0;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  cols = floor(width / scale);
  rows = floor(height / scale);

  describe('A flow field "scattered" by Perlin Noise.');
}

function draw() {
  background("white");
  // randomSeed(10);

  var xoff = 0;
  for (let x = 0; x < cols; x++) {
    var yoff = 0;
    for (let y = 0; y < rows; y++) {
      // line(x, y, x + size, y + size);
      var index = (x + y + width) * 4;
      var angle = noise(xoff, yoff, zoff) * TWO_PI;
      var v = p5.Vector.fromAngle(angle);
      yoff += inc;
      stroke(0);
      push();
      translate(x * scale, y * scale);
      rotate(v.heading());
      line(0, 0, scale, 0);
      pop();
    }
    xoff += inc;
    zoff += 0.001;
  }

  // for (let i = 0; i < canvasWidth; i += size) {
  //   for (let j = 0; j < canvasHeight; j += size) {
  //     // Draw the lines
  //     translate(x, y);
  //     line(i, j, i + size, j + size);
  //   }
  // }
}
