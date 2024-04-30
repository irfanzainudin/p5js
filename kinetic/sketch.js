let x = 0;
let y = 0;
let z = 0;
let size = 40;
let cols = 10;
let rows = 10;
let boxes = [];
let font;
let msg = "H";
let points = [];
let fontX = -154;
let fontY = 118;
let fontSize = 380;

function preload() {
  font = loadFont("fonts/Roboto/Roboto-Bold.ttf");
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  // createCanvas(400, 400, WEBGL);
  angleMode(DEGREES);
  // cols = width / size;
  // rows = height / size;

  points = font.textToPoints(msg, fontX, fontY, fontSize);

  for (let i = 0; i < cols; i++) {
    boxes[i] = [];
    for (let j = 0; j < rows; j++) {
      boxes[i][j] = new Box(
        i * size - size * (cols / 2),
        j * size - size * (rows / 2)
      );
    }
  }
}

function draw() {
  background(0, 0, 139);
  // let x = map(mouseX, 0, width, 0, 360);
  // let y = map(mouseY, 0, width, 0, 360);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      for (let k = 0; k < points.length; k++) {
        distance = dist(points[k].x, points[k].y, boxes[i][j].x, boxes[i][j].y);

        if (distance < 20) {
          boxes[i][j].isLetter = true;
        } // else {
        //   boxes[i][j].isLetter = false;
        // }
      }
      boxes[i][j].display();
    }
  }

  // fill("blue");
  // for (let i = 0; i < points.length; i++) {
  //   ellipse(points[i].x, points[i].y, 10, 10);
  // }

  // x += 1;
  // y += 1;
  // z += 1;
}
