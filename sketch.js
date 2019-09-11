var mouthX = 80
var mouthY = 90


function setup() {
  // put setup code here
  // sets canvas size
  createCanvas(1450,800);
  // sets background color
  background(93, 145, 141);
}

function draw() {
  // put drawing code here
    //face background
      let c=color(252, 241, 202)
      fill(c); // Use color variable 'c' as fill color
      noStroke()
        circle(700, 350, 600);
  //eyes
  let d=color(0, 0, 0)
  fill(d); // Use color variable 'c' as fill color
  noStroke()
    circle(600, 350, 100);
    circle(800, 350, 100);
  //pupils
  let e=color(255, 255 , 255)
  fill(e); // Use color variable 'c' as fill color
  noStroke()
  circle(610, 340, 10);
  circle(810, 340, 10);
  //mouth
  let f=color(207, 113, 87)
  fill(f); // Use color variable 'c' as fill color
  noStroke()
    arc(700, 375, 50, 50, 0, PI);


}
