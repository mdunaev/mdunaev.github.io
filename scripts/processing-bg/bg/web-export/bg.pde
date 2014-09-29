var array = new Array();
var num_dots = 150;

void setup() {
  size(2000, 2200);
  background(255);
  smooth();
  
  var speedX = 2;
  var speedY = 2;
  for(var i=0; i<num_dots; i++){
    array.push( new Array(Math.random()*window.innerWidth, Math.random()*window.innerHeight, Math.random()*speedX-speedX/2, Math.random()*speedY-speedY/2) );
  }
}

void draw() {
  background(255);
  strokeWeight(0.5);

  array[0][0] = mouseX;
  array[0][1] = mouseY;
  
  for(var i=0; i<num_dots; i++){
    array[i][0] += array[i][2];
    array[i][1] += array[i][3];
    
    if(array[i][0]>window.innerWidth) {
      array[i][0] = window.innerWidth-1;
      array[i][2] = -array[i][2];
    }
    if(array[i][0]<0) array[i][2] = -array[i][2];
    
    if(array[i][1]>window.innerHeight) {
      array[i][1] = window.innerHeight-1;
      array[i][3] = -array[i][3];
    }
    if(array[i][1]<0) array[i][3] = -array[i][3];
    
   for(var a=0; a<num_dots; a++){
     if(i!=a){
      var coord1 = array[i];
      var coord2 = array[a];
      
      var distance = dist(coord1[0], coord1[1], coord2[0], coord2[1]); 
        
       if(distance<100){
          stroke(150, 100-distance);
          line( coord1[0], coord1[1], coord2[0], coord2[1] );
       }
     }
   } 
  }
  
}


