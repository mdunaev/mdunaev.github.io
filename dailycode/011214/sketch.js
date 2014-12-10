var oldX = 322;
var oldY = 322;

var counter = 0;

var divider = 3.14;

function setup(){
  createCanvas(644, 644);
  background(255);
  fill(0, 0, 0, 100);
  stroke(255, 255, 255, 100);
  frameRate(80);
}

function draw(){
  var newX = sin(counter/divider)*(counter/divider)+322;
  var newY = cos(counter/divider)*(counter/divider)+322;

  var distance = dist(oldX, oldY, newX, newY);
  ellipse(newX, newY, distance, distance)
  oldX = newX;
  oldY = newY;

  counter++;

  if(counter>800){
    var rnd = random(255);
    fill(rnd, rnd, rnd, 100);
    counter = 0;
    oldX = 322;
    oldY = 322;
    divider = random(5);
  }

}