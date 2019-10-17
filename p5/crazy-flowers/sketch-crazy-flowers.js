// The code is based on the code of Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/BjoM9oKOAKY
// and the P_2_1_3_01 code
//https://editor.p5js.org/generative-design/sketches/P_2_1_3_01
// http://www.generative-gestaltung.de

'use strict';


var inc = 0.1;
var zoff = 0;
var fr;

var tileCountX = 8;
var tileCountY = 8;
var tileWidth = 0;
var tileHeight = 0;


var circleCount = 0;
var endSize = 0;

var actRandomSeed = 0;



function setup() {
  
	var clientHeight = document.getElementById('crazy-flowers-section').clientHeight;
	var clientWidth = document.getElementById('crazy-flowers-section').clientWidth;

	var cnv = createCanvas(clientWidth, clientHeight);
	cnv.parent("crazy-flowers-section");
  

  tileWidth = width / tileCountX;
  tileHeight = height / tileCountY;
  noFill();
  stroke(0, 0);
}

function draw() {
    
  background(255);
 

    var angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
    var v = p5.Vector.fromAngle(angle);

  translate(tileWidth / 2, tileHeight / 2);

  circleCount = 9;
    var yoff = 0;
  for (var gridY = 0; gridY <= tileCountY; gridY++) {
    var xoff = 0;
      for (var gridX = 0; gridX <= tileCountX; gridX++) {
        
        var angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
        var v = p5.Vector.fromAngle(angle);
          
         //draw basic circle here
        xoff += inc;
        stroke(0);
         /* Show flowfield
         push();
          translate(gridX*tileWidth, gridY * tileHeight);
          rotate(v.heading());
          line(0,0,scl,0);
           pop();*/
            
        push();   
        translate(tileWidth * gridX, tileHeight * gridY);
        scale(1, tileHeight / tileWidth);
        rotate(v.heading());

        // draw flowers
        for (var i = 0; i < circleCount; i++) {
          var diameter = map(i, 0, circleCount, tileWidth, endSize);
          var strokeColor = color(0, 10);        
          var toggle = int(random(0, 4));
              
          if (toggle == 0) {strokeColor = color(255, 10);}
          if (toggle == 1) {strokeColor = color(192, 100, 64, 10);}
          if (toggle == 2) {strokeColor = color(52, 100, 71, 10);}
          if (toggle == 3) {strokeColor = color(197, 0, 123);}
          stroke(strokeColor);
          
          //Shape algorithm is inspired of the TypeScript code at https://www.benfrederickson.com/flowers-from-simplex-noise/
          beginShape();
            for(var a = 0; a < TWO_PI; a+=0.1){
              //randomly deform radius with perlin noise
              let xoff = cos(a)+1;
              let yoff = sin(a)+1;
              var radius =diameter/2;
              var frequency =  map(v.heading(),-2,2,5.0,10.0); // var frequency = 6.85;
              let deformation = map(noise(xoff * frequency, yoff * frequency),0,1,radius/2,radius);
              //const radius = radius * (1 + magnitude * deformation);
             //var r=map(noise(xoff,yoff),0,1,diameter/4,diameter/2);
              var x = deformation* cos(a);
              var y = deformation* sin(a);
            vertex(x,y);
            }
        endShape(CLOSE);  
        }
      pop();
    }
    yoff += inc;
    zoff += 0.0004;
  }
}


