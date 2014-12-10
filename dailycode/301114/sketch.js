

function setup(){
  createCanvas(644, 644);
  background(255);
  stroke(255, 255, 255, 100);

  var size = 30;
  var i = 20*20;

  while(i --> 0){
    var x = i%20*(size*0.87)+75;
    var y = Math.floor(i/20)*size+40;

    fill(random(255), random(255), i%255, 130);

    beginShape();
    for(var a=0; a<6; a++){
      var current_part = a * PI / 3;
      vertex( x + Math.sin( current_part )*size, y + Math.cos( current_part )*size);
    }
    endShape(CLOSE);

  }
}