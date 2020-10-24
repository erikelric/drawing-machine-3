let array = [];
let noiseOffset = 0.0;
let strokeWidth = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220, 50, 133);




}

function draw() {

  background(220, 50, 133, 5);
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
