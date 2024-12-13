let pulseRadius;
let emotionLevel;
let alphaValue;

function setup() {
  colorMode(HSB);
  createCanvas(600, 600);
  pulseRadius = 50;
  emotionLevel = 0; // Calm state
  alphaValue = 255; // Transparency for the shapes
}

function draw() {
  // Background: smooth color gradient based on emotion level
  let bgColor = map(emotionLevel, 0, 100, 0, 100);
  background(bgColor, 100, 255 - bgColor);
  //Timer
  push();
  let s = millis() / 1000;
  textAlign(CENTER, CENTER);
  textSize(10);
  textFont("Verdana");
  text(`TIMER: ${nf(s, 1, 1)} sec`, 300, 250);
  pop();

  // Pulse effect using sine wave and millis
  let pulseSpeed = millis() / 1000;
  pulseRadius = 50 + 30 * sin(pulseSpeed);

  // Main pulsing circle
  fill(100, alphaValue, 255); // Add transparency
  noStroke();
  ellipse(width / 2, height / 2, pulseRadius, pulseRadius);

  // Draw extra circles based on emotion level
  if (emotionLevel < 25) {
    drawCircle1();
  }
  if (emotionLevel < 50) {
    drawCircle2();
  }
  if (emotionLevel < 75) {
    drawCircle3();
  }
  if (emotionLevel < 100) {
    drawCircle4();
  }

  // Interactive control: Adjust emotion level with mouse
  emotionLevel = map(mouseX, 0, width, 0, 100);

  // Keep emotion level in range
  if (emotionLevel > 100) {
    emotionLevel = 0;
  }

  // Adjust transparency (fade in and out effect)
  alphaValue = 200 + 55 * sin(pulseSpeed);
}

// Additional Circles based on emotion level

function drawCircle1() {
  let circleHue = map(mouseX, 0, width, 0, 255);
  fill(circleHue, alphaValue, 255); // Add transparency
  noStroke();
  circle(width / 2, height / 4, 160);
}

function drawCircle2() {
  let circleHue = map(mouseX, 0, width, 0, 255);
  fill(circleHue, alphaValue, 255); // Add transparency
  noStroke();
  circle(width / 4, height / 2, 160);
}

function drawCircle3() {
  let circleHue = map(mouseX, 0, width, 0, 255);
  fill(circleHue, alphaValue, 255); // Add transparency
  noStroke();
  circle((3 / 4) * width, height / 2, 160);
}
function drawCircle4() {
  let circleHue = map(mouseX, 0, width, 0, 255);
  fill(circleHue, alphaValue, 255); // Add transparency
  noStroke();
  circle(width / 2, (3 / 4) * height, 160);
}
