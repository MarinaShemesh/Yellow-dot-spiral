console.log('spiral open close');
//console.log('framerate:', frameCount)


function setup() {
  createCanvas(2000, 1700);
  background(0);
  
}

let angle = 0;
let r = 800;


function draw() {
console.log('framerate:', frameCount)
  // stroke(255);
  // strokeWeight(10);
  // noFill();
  // circle(0, 0, r * 2);

  translate(width / 2, height / 2);

 


  strokeWeight(25);
  stroke(252, 238, 33);
  let x = r * cos(angle);
  let y = r * sin(angle);

  point(x, y);
  angle += 0.04;
  r -= 0.2;

  if(frameCount === 3994){
    background(0);
  }

}

function mousePressed() {
  save('yellow_spiral.png');
}