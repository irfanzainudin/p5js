let x;
let y;
let angle = 0;
let r = 150;
let numAxis = 4;
let shiftingAngle = [];
let x2 = [];
let y2 = [];

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);

  for (let i = 0; i < numAxis; i++) {
    shiftingAngle[i] = (i * 90) / numAxis;
  }
}

function draw() {
  background(220);
  stroke(0);
  // angle = map(mouseX, 0, width, 0, 360);
  xr = r * cos(angle);
  yr = r * sin(angle);
  xb = r * cos(angle + 10);
  yb = r * sin(angle + 10);
  xy = r * cos(angle + 20);
  yy = r * sin(angle + 20);
  translate(width / 2, height / 2);
  noFill();
  ellipse(0, 0, r * 2, r * 2);

  for (let i = 0; i < numAxis; i++) {
    x2[i] = r * cos(angle + shiftingAngle[i]);
    y2[i] = r * sin(angle + shiftingAngle[i]);

    rotate(-shiftingAngle[i]);

    line(-r, 0, r, 0, 0);
    line(0, -r, 0, r, 0);

    fill("red");
    ellipse(x2[i], 0, 20, 20);
    ellipse(0, y2[i], 20, 20);

    // fill("blue");
    // ellipse(xb, yb, 20, 20);

    // fill("yellow");
    // ellipse(xy, yy, 20, 20);
  }

  // line(-r, 0, r, 0, 0);
  // line(0, -r, 0, r, 0);

  fill("red");
  ellipse(xr, yr, 20, 20);

  fill("blue");
  ellipse(xb, yb, 20, 20);

  fill("yellow");
  ellipse(xy, yy, 20, 20);

  angle += 1;
}
