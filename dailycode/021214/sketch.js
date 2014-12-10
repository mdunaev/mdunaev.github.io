var oldX = 322;
var oldY = 322;

var counter = 400;

var divider = 0.1;

function setup(){
  createCanvas(644, 644);
  background(255);
  frameRate(80);
  fill(0, 0, 0, 100);
  stroke(255, 255, 255, 100);
}

function draw(){
  if(counter>400){
    counter = 0;
    oldX = 322;
    oldY = 322;
    divider = random(1)-0.5;
  }

  var newX = sin(counter/divider)*(counter/divider)+322;
  var newY = cos(counter/divider)*(counter/divider)+322;

  var distance = dist(oldX, oldY, newX, newY);
  ellipse(newX, newY, distance, distance);
  oldX = newX;
  oldY = newY;

  counter++;

}