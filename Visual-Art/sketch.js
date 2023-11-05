/******
 * 
 * Circle Line - Mouse Click opposite direction
 * 
 ******/

/*
let xList = [];
let yList = [];

let xSpawn;
let ySpawn;

let x = 400;
let y = 200;

let positiveX;
let positiveY;

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(204, 255, 255);
  for(let i = 0; i < 200; i++) {
    xSpawn = random(0, 800);
    //ySpawn = Math.random()*100;
    xList.push(ellipse(xSpawn, y, 20, 20));
  }
  for(let i = 0; i < 100; i++) {
    //xSpawn = Math.random()*100;
    ySpawn = random(0, 400);
    yList.push(ellipse(x, ySpawn, 20, 20));
  }

  mousePress();
}

function mousePress() {
  if(mouseIsPressed && mouseX < 400 && mouseY < 200) {
    positiveX = true;
    positiveY = true;
  }
  else if (mouseIsPressed && mouseX > 400 && mouseY < 200) {
    positiveX = false;
    positiveY = true;
  }
  else if (mouseIsPressed && mouseX > 400 && mouseY > 200) {
    positiveX = false;
    positiveY = false;
  }
  else if (mouseIsPressed && mouseX < 400 && mouseY > 200) {
    positiveX = true;
    positiveY = false;
  }

  if(positiveX) {
    x = x + 4;
  }
  else if (!positiveX) {
    x = x - 4;
  }
  if(positiveY) {
    y = y + 2;
  } 
  else if (!positiveY) {
    y = y - 2;
  }
}
*/

/******
 * 
 * 3D Planes Color Switcher 
 * 
 *******/

/*
let r = 244;
let g = 122;
let b = 158;

function setup() {
  createCanvas(800, 400, WEBGL);

  noStroke();
  ambientMaterial(250);
}

function draw() {
  background(0);

  // Lights
  pointLight(255, 255, 255, 0, 0, 400);

  if(mouseIsPressed) {
    r = random(0,128);
    g = random(0,128);
    b = random(0,128);  
    ambientLight(r, g ,b);
  }
  else if (!mouseIsPressed) {
    ambientLight(r,g,b);
  }

  //Left Wall
  push();
  translate(-100, 0 ,200);
  rotateY((90 * Math.PI) / 180);
  plane(400,200);
  pop();

  //Right Wall
  push();
  translate(100, 0 ,200);
  rotateY((90 * Math.PI) / 180);
  plane(400,200);
  pop();

  //Top Wall
  push();
  translate(0, -100 ,200);
  rotateX((90 * Math.PI) / 180);
  plane(200,400);
  pop();

  //Bottom Wall
  push();
  translate(0, 100 ,200);
  rotateX((90 * Math.PI) / 180);
  plane(200,400);
  pop();

  plane(200, 200); // Back wall
}
*/


/******
 * 
 * Recursive Trees - Switch Sides with Key Prompts
 * 
 ******/

let counter = 0;
let theta;
let fr = 1;

function setup() {
  createCanvas(800, 400);
  frameRate(fr);
}

function draw() {
  background(0);
  frameRate(30);
  stroke(255);

  keyPressed();

  if(counter == 0) {
    let a = (mouseX / width) * 90;
    theta = radians(a);
    translate(width/2, height);
    line(0,0,0,-80);
    translate(0,-80);
    branch(80, "x");
  }
  
  if(counter == 1) {
    let b = (-mouseX/width) * 90;
    theta = radians(b);
    translate(width/2, 0);
    line(0,0,0, 80);
    translate(0, 80);
    branch(-80, "x");
  
  }
  
  if(counter == 2) {
    let c = (-mouseY / height) * 90;
    theta = radians(c);
    translate(0, height/2);
    line(0,0,80, 0);
    translate(80,0);
    branch(-80, "y");
  }
  
  if (counter == 3) {
    let d = (mouseY / height) * 90;
    theta = radians(d);
    translate(width, height/2);
    line(0,0,-80,0);
    translate(-80,0);
    branch(80, "y");
    
  }
}

function branch(h, axis) {
  h *= 0.70;

  if (h>2 && axis == "x") {
    push();
    rotate(theta);
    line(0,0,0,-h);
    translate(0,-h);
    branch(h, "x");
    pop();

    push();
    rotate(-theta);
    line(0,0,0,-h);
    translate(0,-h);
    branch(h, "x");
    pop();
  }

  if (h< -2 && axis == "x") {
    push();
    rotate(theta);
    line(0,0,0,-h);
    translate(0,-h);
    branch(h, "x");
    pop();

    push();
    rotate(-theta);
    line(0,0,0,-h);
    translate(0,-h);
    branch(h, "x");
    pop();
  }

  if (h> 2 && axis == "y") {
    push();
    rotate(theta);
    line(0,0,-h, 0);
    translate(-h, 0);
    branch(h , "y");
    pop();

    push();
    rotate(-theta);
    line(0,0,-h, 0);
    translate(-h, 0);
    branch(h, "y");
    pop();
  }

  if (h< -2 && axis == "y") {
    push();
    rotate(theta);
    line(0,0,-h, 0);
    translate(-h, 0);
    branch(h, "y");
    pop();

    push();
    rotate(-theta);
    line(0,0,-h, 0);
    translate(-h, 0);
    branch(h, "y");
    pop();
  }
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    counter = 0;
  }
  else if (keyCode === UP_ARROW) {
    counter = 1;
  }
  else if (keyCode === LEFT_ARROW) {
    counter = 2;
  }
  else if (keyCode === RIGHT_ARROW) {
    counter = 3;
  }
}