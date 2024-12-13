function setup() {
  createCanvas(400, 400);
  blendMode(BLEND);
  fill(192,192,192);
  angleMode(DEGREES);
}

function draw() {
  background(200,10,70);
  translate(mouseX,mouseY);  
  rotate(45);
  noStroke();
  rectMode(CENTER);
  rect(0,50,25,140,40);
  circle(0,0,65);
  push();
  fill(113,115,110);
  textSize(20);
  text('302', -16,17);
  pop();
  
    push();
    fill(200,10,70);
   noStroke();
    circle(0,-15,15);
   triangle(5, 59, 20, 38, 20, 63);
   triangle(5, 66, 20, 58, 20, 78);
   rect(15,80,20,4);
   translate(0,35);  
   triangle(5, 59, 20, 38, 20, 63);
   triangle(5, 66, 20, 58, 20, 78);
    pop();
  
 
}
