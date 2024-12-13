
function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  //HEAD_shape
  noStroke();
  rectMode(CENTER);
  rect(300, 150, 180, 120, 10);
  //HEAD_eyes
  push();
  fill(0);
  ellipse(260, 156, 10, 20);
  ellipse(340, 156, 10, 20);
  pop();
  //HEAD_nose;
  push();
  fill(225, 225, 0);
  ellipse(300, 166, 12);
  pop();
  //HEAD_beard on left
  beard();
  //HEAD_beard on right
  push();
  translate(width,0);
  scale(-1,1);
  beard();
  pop();
  //HEAD_the bow 
  push();
  translate(0,-10);
  bow();
  pop();
  //BODY_shape
  ellipse(300,300,110,200);
  //BODY_battery
  push();
  fill(0);
  rectMode(CENTER);
  rect(300,310,40,80,6);
  pop();
  push();
  translate(104,206)
  flash();
  pop();
  //ARM_right
  arm();
  //ARM_left
   push();
  translate(width,0);
  scale(-1,1);
  arm();
  pop();
  
  
  
  //LEG_left
  leg();
  //LEG_right
  push();
  translate(18+18+18+18,0)
  leg();
  pop();

}

// set the bow
function bow() {
  push();
  //middle part
  fill(255, 0, 0);
  circle(360, 120, 36);
  //right part
  push();
  translate(384, 136);
  rotate(40);
  ellipse(0, 0, 46, 46);
  pop();
  //left part
  push();
  translate(340, 100);
  rotate(40);
  ellipse(0, 0, 46, 46);
  pop();
  pop();
}
//set the beard
function beard(){
  //high
  push();
  fill(0);
  translate(208,150);
  rotate(16);
  rect(0,0,44,4);
  pop();
  //middle
  push();
  fill(0);
  translate(208,150);
  rect(0,20,44,4);
  pop();
  //low
   push();
  fill(0);
  translate(208,190);
  rotate(-16);
  rect(0,0,44,4);
  pop();
}
function flash(){
  push();
  fill(255,0,0); 
  beginShape();
  vertex(206, 64); 
  vertex(180, 100);
  vertex(194, 102);  
  vertex(190, 140); 
  vertex(214, 96); 
  vertex(200, 94); 
  endShape(CLOSE); 
  pop();
}
function arm(){
  beginShape();
  vertex(250,240);
  bezierVertex(250,240,250,240,254,244);
  bezierVertex(150,350,130,330,240,230);
  bezierVertex(150,350,130,330,240,230);
  endShape();
  push();
  stroke(255);
  strokeWeight(10);
  noFill();
  arc(166,330,40,40,200,PI);
  pop();
}
function leg(){
  push();
  stroke(255);
  strokeWeight(1);
  rect(260,440,18,90);
  pop();//front
  
  push();
  stroke(255);
  strokeWeight(1);
  translate(-9,-45);
  noFill();
  quad(278,440,282,436,282,526,278,530);
  pop();//side
  
  push();
  stroke(255);
  strokeWeight(1);
  translate(-9,-45);
  noFill();
  quad(260, 440, 278, 440, 282, 436, 264, 436); 
  pop();//top

}


