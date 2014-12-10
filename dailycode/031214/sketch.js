
function setup(){
  createCanvas(644, 644);
  background(255);
  noFill();
}

function draw(){
  var oldX = 322;
  var oldY = 322;

  var i = 200;
  while(i-->0){
    var x = sin(i/mouseX*400)*(i/mouseY*400)+322;
    var y = cos(i/mouseX*400)*(i/mouseY*400)+322;
    var distance = dist(x, y, oldX, oldY);

    stroke(0, 0, 0, 20);
    ellipse(x, y, distance, distance);
    stroke(255, 255, 255, 20);
    ellipse(x, y, distance-2, distance-2);
    oldX = x;
    oldY = y;
  }


}