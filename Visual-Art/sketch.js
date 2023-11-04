let objs = [];
let selecter = [];
let count = 1;


if(count == 1){
function setup() {
  createCanvas(1250, 600, WEBGL);
  background(171);

  //This is for rows
  let yStart = -12;
  for(let i = 0;i < 24; i++){
    objs.push([]);
    //For the collumns 
    let xStart = -25;
    for(let j = 0; j < 50;j++){
      objs[i].push({x:xStart*25,y:yStart*25, active:0});
      xStart += 1;
    }
    yStart += 1;
  }
}
}




function draw(){
  let indexRow = Math.floor(random(0,24));
  let indexColumn = Math.floor(random(0,50));
  if(objs[indexRow][indexColumn].active == 0){
    objs[indexRow][indexColumn].active = 1;
  }else if(objs[indexRow][indexColumn].active == 1){
    objs[indexRow][indexColumn].active =0;
  }
  if(objs[indexRow][indexColumn].active == 2){
    objs[indexRow][indexColumn].active =3;
  }else if(objs[indexRow][indexColumn].active == 3){
    checkingGrid(indexRow, indexColumn);
  }

 
  for(let i = 0;i < 24; i++){
    //For the collumns 
    for(let j = 0; j < 50;j++){
      if(objs[i][j].active == 0){
        fill(210,132,243);
      }else if(objs[i][j].active == 1){
        fill(166, 104, 133);
      }else if(objs[i][j].active == 2){
        fill(23,56,78);
      }else{
        fill(95, 212, 101);
      }
      rect(objs[i][j].x,objs[i][j].y,25,25);
    }
  }
  

  if(mouseIsPressed){
    let row = Math.abs(Math.floor(randomGaussian(mouseY/25,2)));
    let column = Math.abs(Math.floor(randomGaussian(mouseX/25,2)));


    if(row < 0){
      row = 0;
    }
    if(row >= 24){
      row = 23;
    }
    if(column < 0){
      column = 0;
    }
    if(column >= 50){
      column = 49;
    }
    
    objs[row][column].active = 2;
  }
}

function checkingGrid(indexRow, indexColumn){
  //For top left corner
  if(indexRow == 0 && indexColumn ==0){
    objs[indexRow][indexColumn].active = 0;
    objs[indexRow][indexColumn + 1].active = 0;
    objs[indexRow + 1][indexColumn].active = 0;
    objs[indexRow + 1][indexColumn + 1].active = 0;
    //For top right corner
  }else if(indexRow == 0 && indexColumn ==49){
    objs[indexRow][indexColumn].active = 0;
    objs[indexRow][indexColumn - 1].active = 0;
    objs[indexRow + 1][indexColumn].active = 0;
    objs[indexRow + 1][indexColumn - 1].active = 0;
    //for bottom right corner
  }else if(indexRow == 23 && indexColumn ==49){
    objs[indexRow][indexColumn].active = 0;
    objs[indexRow][indexColumn - 1].active = 0;
    objs[indexRow - 1][indexColumn].active = 0;
    objs[indexRow - 1][indexColumn - 1].active = 0;
    //for bottom left corner
  }else if(indexRow == 23 && indexColumn == 0){
    objs[indexRow][indexColumn].active = 0;
    objs[indexRow][indexColumn + 1].active = 0;
    objs[indexRow - 1][indexColumn].active = 0;
    objs[indexRow - 1][indexColumn + 1].active = 0;
  }else if(indexRow == 0){
    objs[indexRow][indexColumn].active = 0;
    objs[indexRow][indexColumn + 1].active = 0;
    objs[indexRow][indexColumn - 1].active = 0;
    objs[indexRow + 1][indexColumn].active = 0;
    objs[indexRow + 1][indexColumn + 1].active = 0;
    objs[indexRow + 1][indexColumn - 1].active = 0;
  }else if(indexRow == 23){
    objs[indexRow][indexColumn].active = 0;
    objs[indexRow][indexColumn + 1].active = 0;
    objs[indexRow][indexColumn - 1].active = 0;
    objs[indexRow - 1][indexColumn].active = 0;
    objs[indexRow - 1][indexColumn + 1].active = 0;
    objs[indexRow - 1][indexColumn - 1].active = 0;
  }else if(indexColumn == 0){
  objs[indexRow][indexColumn].active = 0;
  objs[indexRow + 1][indexColumn].active = 0;
  objs[indexRow - 1][indexColumn].active = 0;
  objs[indexRow][indexColumn + 1].active = 0;
  objs[indexRow - 1][indexColumn + 1].active = 0;
  objs[indexRow + 1][indexColumn + 1].active = 0;
  }else if(indexColumn == 0){
    objs[indexRow][indexColumn].active = 0;
    objs[indexRow + 1][indexColumn].active = 0;
    objs[indexRow - 1][indexColumn].active = 0;
    objs[indexRow][indexColumn - 1].active = 0;
    objs[indexRow - 1][indexColumn - 1].active = 0;
    objs[indexRow + 1][indexColumn - 1].active = 0;
  }else{
    objs[indexRow][indexColumn].active = 0;
    objs[indexRow - 1][indexColumn].active = 0;
    objs[indexRow + 1][indexColumn].active = 0;
    objs[indexRow][indexColumn + 1].active = 0;
    objs[indexRow - 1][indexColumn + 1].active = 0;
    objs[indexRow + 1][indexColumn + 1].active = 0;
    objs[indexRow][indexColumn - 1].active = 0;
    objs[indexRow - 1][indexColumn - 1].active = 0;
    objs[indexRow + 1][indexColumn - 1].active = 0;
  }
}


