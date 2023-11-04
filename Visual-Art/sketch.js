let fr = 10;  //sets framerate

let counter = 0; //counter for what color is on

function setup() {
  createCanvas(1600, 900, WEBGL);
  background(0,0,0); //Background is black
  frameRate(fr); //Sets framerate to fr
}

function draw() {
  noStroke(); //Cancels drawing outlines on cubes
  
  changeCounter();  //changes color

  if(counter == 0)
  {
    //DISPLAY RED COLORS
    randomColors(random(200, 255), random(0, 100), random(0, 128));
  }

  if(counter == 1) {
    //DISPLAY GREEN COLORS
    randomColors(random(0, 150), random(100, 255), random(0, 150));   
  }

  if(counter == 2) {
    //DISPLAY BLUE COLORS
    randomColors(random(0, 100), random(100, 250), random(200, 255));    
  }

  if(counter == 3) {
    //DISPLAY PURPLE COLORS
    randomColors(random(75, 255), random(0, 130), random(190, 240));    
  }

  if(counter == 4) {
    //DISPLAY YELLOW COLORS
    randomColors(random(240, 255), random(240, 255), random(0, 200));    
  }
  if(counter == 5) {
    //DISPLAY ORANGE COLORS
    randomColors(random(255, 255), random(80, 170), random(0, 80));    
  }


  //DRAW BOXES
  for(let i = 0; i <= 200; i++)
  {
    drawBoxes(Math.random()*1200, Math.random()*1200, 0);
  }  
}

//Function to draw each box
function drawBoxes(x,y,z){
  push();
  let random1 = Math.random() * 100
  
  if( random1 < 25) {
    translate(-x, -y,z);
  }
  else if (random1 >= 25 && random1 < 50) {
    translate(x, -y,z);
  }
  else if (random1 >= 50 && random1 < 75) {
    translate(-x, y,z);
  }
  else {
    translate(x, y,z);
  }
    
  rotateX(frameCount * 10);
  rotateY(frameCount * 10);
  box(45, 45, 45);
  pop();
}

//Function that fills the colors of the boxes
function randomColors(r, g, b)
{
  fill(r, g, b) //rgb is passed in above
}

//iterates through colors using a counter
function changeCounter() 
{
  //On click, counter is increased: colors change
  if(mouseIsPressed) {
    counter++;

    if(counter > 5) {
      counter = 0;
    }
  }
}