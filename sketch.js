
var pointX = "0";
var pointY = "0";

var faceColor = "blue";
var colorButton;


function setup() {
  // put setup code here
  createCanvas(500,500);
  pointX = width/2;
  pointY = height/2;
  var message ="Hello";

  console.log("pointX"+ pointX + "pointY" + pointY);

  colorButton = createButton("Click to turn purple");
  colorButton.position(20,20);
  colorButton.mousePressed(function(){

    faceColor = "purple";
    });

}


function draw() {
  // put drawing code here
  //console.log(message);

  var drawMessage = "This message is in the draw loop";
  console.log(drawMessage);

  background(255);

  //use an if statement to change background color
  if(mouseX < width/2){
    console.log("left hand side");
    background(255);

  }

  if(mouseX > width/2){
    console.log("right hand side");
    background(100);

  }



  pointX = mouseX;
  pointY = mouseY;

  fill (faceColor);
  rect(pointX-100,pointY-100, 200, 200); //face

  ellipse(pointX, pointY, 10, 10); //nose

  ellipse (pointX+20, pointY-20, 30, 30) //right eye
  ellipse (pointX-20, pointY-20, 30, 30) //right eye

}



function mousePressed(){

}//end mousePressed


function mouseReleased(){

}//end mouseReleased

function keyPressed(){

  console.log("key"+key);
  console.log("keyCode"+keyCode)
  if(key=="w"){
    faceColor = "white";

  }
} //end keyPressed
