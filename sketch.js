let array = [];
let noiseOffset = 0.0;
let strokeWidth = 5;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220, 50, 133);


  drawGrid();
  strokeWeight(5);
  noFill();

}

function draw() {

  // background(220, 50, 133, 5);
  strokeWeight(strokeWidth);

  noiseOffset =+ 0.05;
  strokeWidth = noise(noiseOffset) * 100;


if (mouseIsPressed){
  // line(mouseX, mouseY, pmouseX, pmouseY);
  stroke(map(mouseX, 0, 600, 0, 255, true))
  // array.push([mouseX, mouseY]);
  line(width - mouseX, height- mouseY, width - pmouseX, height - pmouseY);
  line(mouseX, mouseY, pmouseX, pmouseY);
  }

}

function keyTyped(){

    if (key === `s`) {
      //save this image
      saveCanvas(`fileName`, `png`);
    } else if (key === 'c'){
      // clear the image
      clear();

    }

    return false;
}

// function mouePressed() {
//   array = [];
//   backgroundColor = 255;
// }

function drawGrid() {
  numCells = 10;
  fillColor = 250;
strokeWeight(0);

  for (let i = 0; i <= width; i += width / numCells){
    for (let j = 0; j <= height; j += height / numCells){
      if (fillColor === 255){
        fillColor = 150;
      } else {
        fillColor = 255;
      }
      fill(fillColor);
      rect(i, j, width / numCells, height / numCells);
    }
  }
  strokeWeight(5);
}
