
var pointX = "0";
var pointY = "0";

var faceColor = "#fff6d6";
var mouthColor ="#cf6b79"
var colorButton;
var mouthButton;

function setup() {
      // put setup code here
      // sets canvas size
      createCanvas(1450,800);
      pointX = width/2;
      pointY = height/2;
      // sets background color
      background(93, 145, 141);

      colorButton = createButton("Click to turn purple");
      colorButton.position(550,100);
      colorButton.mousePressed(function(){

        faceColor = "#ffbdf8";
        });

        mouthButton = createButton("Click to change mouth");
        mouthButton.position(750,100);
        mouthButton.mousePressed(function(){

          mouthColor = "#85343f";
          });

    }

function draw() {

  pointX = mouseX;
  pointY = mouseY;

  if(mouseX < width/2){
    console.log("left hand side");
    background(93, 145, 141);

  }

  if(mouseX > width/2){
    console.log("right hand side");
    background(245, 174, 44);

  }

      // put drawing code here

        //face background
          fill(faceColor); // Use color variable 'c' as fill color
          noStroke(100)
            circle(pointX, pointY, 500);

      //eyes
      let d=color(0, 0, 0)
      fill(d); // Use color variable 'c' as fill color
      noStroke()
        circle(pointX-100, pointY-15, 100);
        circle(pointX+100, pointY-15, 100);
      //pupils
      let e=color(255, 255 , 255)
      fill(e); // Use color variable 'c' as fill color
      noStroke()
      circle(pointX-110, pointY-20, 10);
      circle(pointX+110, pointY-20, 10);
      //mouth

      fill(mouthColor); // Use color variable 'c' as fill color
      noStroke()
        arc(pointX, pointY+25, 50, 50, 0, PI);

      }


      function keyPressed(){

        console.log("key"+key);
        console.log("keyCode"+keyCode);
        if(key=="w"){
          faceColor = "#81b5a0";

        }
      }

      function keyPressed(){

        console.log("key"+key);
        console.log("keyCode"+keyCode);
        if(key=="z"){
          mouthColor = "#81b5a0";

        }
      }
