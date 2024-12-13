let rotationSpeed = 0.05;
let maxRadius = 250;

function setup() {
  createCanvas(600, 600);
  strokeWeight(2);
  noFill();
}

function draw() {
  background(255);

  // Update rotation speed based on mouse X position
  rotationSpeed = map(mouseX, 0, width, 0.01, 0.1);

  // Update max radius based on mouse Y position
  maxRadius = map(mouseY, 0, height, 100, 300);

  // Translate to the center
  translate(width / 2, height / 2);

  let numLines = 50; // Number of lines

  // First set of lines
  for (let i = 0; i < numLines; i++) {
    let angle = map(i, 0, numLines, 0, TWO_PI);
    let x = cos(angle) * maxRadius;
    let y = sin(angle) * maxRadius;
    stroke(0);
    line(0, 0, x, y);
  }

  // Second set of lines speed controlled by mouseX
  for (let j = 0; j < numLines; j++) {
    let angle = map(j, 0, numLines, 0, TWO_PI);
    let x2 = cos(angle + frameCount * rotationSpeed) * maxRadius;
    let y2 = sin(angle + frameCount * rotationSpeed) * maxRadius;
    stroke(150, 0, 0);
    line(0, 0, x2, y2);
  }

  // Third set of lines
  for (let k = 0; k < numLines; k++) {
    if (k % 2 == 0) {
      stroke(0);
    } else {
      stroke(200);
    }

    let angle = map(k, 0, numLines, 0, TWO_PI);
    let x3 = cos(angle - frameCount * rotationSpeed) * (maxRadius - 100);
    let y3 = sin(angle - frameCount * rotationSpeed) * (maxRadius - 100);
    line(0, 0, x3, y3);
  }
}
