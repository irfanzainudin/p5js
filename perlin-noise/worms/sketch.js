// var canvasWidth = 400;
// var canvasHeight = 400;
var size = 10;
var inc = 0.1;
var scl = 10;
var cols, rows;

var zoff = 0;

var fr;

var particles = [];
var flowfield;

function setup() {
  // createCanvas(canvasWidth, canvasHeight);
  createCanvas(600, 400);
  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP("");

  flowfield = new Array(cols * rows);

  for (var i = 0; i < 200; i++) {
    particles[i] = new Particle();
  }

  describe('A flow field "scattered" by Perlin Noise.');
  background("white");
}

function draw() {
  // randomSeed(10);

  var xoff = 0;
  for (var x = 0; x < cols; x++) {
    var yoff = 0;
    for (var y = 0; y < rows; y++) {
      var index = x + y * cols;
      var angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
      var v = p5.Vector.fromAngle(angle);
      // v.setMag() can be set to adjust how lock-stepped the particles are to the flowfield
      v.setMag(0.1);
      flowfield[index] = v;
      yoff += inc;
      // stroke(0, 50);
      // strokeWeight(1);
      // push();
      // translate(x * scl, y * scl);
      // rotate(v.heading());
      // line(0, 0, scl, 0);
      // pop();
    }
    xoff += inc;
    zoff += 0.0005; // can be commented so that we get a fixed flowfield
  }

  for (var i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].show();
    particles[i].edges();
  }

  fr.html(floor(frameRate()));
}
