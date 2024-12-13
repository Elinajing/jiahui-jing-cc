//Jiahui Jing
//Face Generator 9/17/2024

let x = 250;
let t = 15;
let blushW = 30;
let eyeW = 4;
let eyeH = 10;
let mouthX = 0;
let mouthY = 0;

function setup() {
  createCanvas(400, 400);
  fill(255, 192, 200);
  frameRate(30);
}

function draw() {
  background(80, t, 70);

  //face
  noStroke();
  ellipse(mouseX, mouseY, x);

  //blush
  push();
  fill(255, 130, 180);
  ellipse(mouseX - 40, mouseY, blushW, t);
  ellipse(mouseX + 40, mouseY, blushW, t);
  pop();

  //nose
  push();
  fill(x-50, t+30, t);
  ellipse(mouseX, mouseY, 15);
  pop();
  
  //eyes & mouth
  push();
  fill(0);
  rect(mouseX - 20, mouseY - 16, -eyeW, eyeH, 20);
  rect(mouseX + 20, mouseY - 16, eyeW, eyeH, 20);
  triangle(
    mouseX - 20 - mouthX,
    mouseY + 15,
    mouseX + 20 + mouthX,
    mouseY + 15,
    mouseX,
    mouseY + 30 + mouthY
  );
  pop();
}

function mousePressed() {
  x = random(60, 250);
  t = random(10, 45);
  blushW = random(18, 60);
  eyeW = random(4, 10);
  eyeH = random(10, 20);
  mouthX = random(-4, 6);
  mouthY = random(-10, 20);
}
