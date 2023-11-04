let xList = [];
let yList = [];

let x = 0;
let y = 0;

function setup() {
  createCanvas(710, 400);
}



function draw() {
  background(100);
  for(let i = 0; i < 20; i++) {
    xList.push(ellipse(x, i, 20, 20));
  }
  for(let i = 0; i < 20; i++) {
    xList.push(ellipse(i, y, 20, 20));
  }

  x++;
  y++;
}
