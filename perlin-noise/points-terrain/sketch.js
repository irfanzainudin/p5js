// Taken from: https://editor.p5js.org/ph4se.space/sketches/xQeWuzEqL

let w = 10;
let rez = 0.001;
let amount = 1000;
let color1 = "#ffffff"; //'#264653' //'#073b4c'//'#9b2226'

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background("#000000"); //'#f4a261');// '#ffd166'
}

function draw() {
  noStroke();
  //strokeWeight(3)
  //makeDistortedGrid(amount, color1, rez)

  makeDistortedDots(amount, color1, rez);

  noLoop();
}

function makeDistortedGrid(amount, color, rez) {
  c = 0;
  leeway = 500;
  for (i = -leeway; i < width + leeway; i += w) {
    if ((width / w) % 2 < 1) {
      c++;
    }

    for (j = -leeway; j < height + leeway; j += w) {
      if (c % 2) {
        fill(color);
      } else {
        noFill();
      }
      quad(
        i + noise(i * rez, j * rez) * amount - amount / 2,
        j + noise(i * rez, j * rez) * amount - amount / 2,
        i + w + noise((i + w) * rez, j * rez) * amount - amount / 2,
        j + noise((i + w) * rez, j * rez) * amount - amount / 2,
        i + w + noise((i + w) * rez, (j + w) * rez) * amount - amount / 2,
        j + w + noise((i + w) * rez, (j + w) * rez) * amount - amount / 2,
        i + noise(i * rez, (j + w) * rez) * amount - amount / 2,
        j + w + noise(i * rez, (j + w) * rez) * amount - amount / 2
      );
      c++;
    }
  }
}

function makeDistortedDots(amount, color, rez) {
  leeway = 500;
  for (i = -leeway; i < width + leeway; i += w) {
    for (j = -leeway; j < height + leeway; j += w) {
      // j+=w for dots, j+=1 for line
      fill(color);
      circle(
        i +
          noise(i * rez, j * rez) * amount -
          amount / 2 +
          noise(i * rez, j * rez) * amount -
          amount / 2,
        j +
          noise(i * rez, j * rez) * amount -
          amount / 2 +
          noise(i * rez, j * rez) * amount -
          amount / 2,
        2
      );
    }
  } //+(noise(i * rez, j * rez) * amount)-(amount/2) +(noise(i * rez, j * rez) * amount)-(amount/2)
}

// amount_step = 25
// color2 = "#6464e0"
// color3 = "#e864ff"
// color2 = '#000000'//'#e76f51'//'#ef476f'//'#ae2012'
// color3 = '#FFFFFF'//'#e9c46a'//'#118ab2'// '#94d2bd'
// color4 = '#000000'//'#2a9d8f'//'#06d6a0'// '#0a9396'
// colors = [color2,color3,color1]//,color4]

//colors[m % colors.length]
//angleMode(DEGREES);
//n = noise(i * rez, j * rez) * 10;

//   for (m=0; m<2; m++) {
//     makeDistortedGrid(amount-(amount_step*m), colors[m % colors.length], rez)
//   }
// https://st4yho.me/domain-warping-an-interactive-introduction/
//   strokeWeight(1)
//   blendMode(SCREEN)
//   for (i=0; i<=width; i++) {
//     for (j=0; j<=height; j++) {
//       c = round(255 * 0.3 * random())
//       //console.log(c)
//       stroke(c)
//       point(i,j)
//     }
//   }
// blendMode(SCREEN)
// image(noise_im, 0, 0);
// function addGrain(img, fill = 0.05, color = false, rng = Math.random) {
//     img.loadPixels();
//     const w = img.width;
//     const h = img.height;

//     for (let i = 0; i < h; i++) {
//       for (let j = 0; j < w; j++) {
//         ind = 4*(i*w + j);
//         let c;
//         if (color) {
//             c = Array(3).fill().map(_ => fill*255*rng());
//         } else {
//             const value = fill*255*rng();
//             c = Array(3).fill().map(_ => value);
//         }

//         img.pixels[ind] = c[0];
//         img.pixels[ind + 1] = c[1];
//         img.pixels[ind + 2] = c[2];
//         img.pixels[ind + 3] = 255;
//       }
//     }

//     img.updatePixels();
// }
