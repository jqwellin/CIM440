

var portfolioButton;
var experienceButton;
var educationButton;
var skillsButton;
var referenceButton;

var interval = 5000;
var prevMillis = 0;
var counter = 0;

var images = [];

var currentImage = 0;

var startTimer = false;


function preload(){

    img = loadImage('images/original.png');
    imgB = loadImage('images/blue.png');
    imgG = loadImage('images/green.png');
    imgP = loadImage('images/pink.png');
    imgR = loadImage('images/red.png');
    imgY = loadImage('images/yellow.png');

    images = [imgB,imgG,imgP,imgR,imgY];
}


function setup() {
      // put setup code here
      // sets canvas size
      createCanvas(1450,800);
      pointX = width/2;
      pointY = height/2;
      // sets background color


      image(img, 300, 100);

              portfolioButton = createButton("Portfolio");
              portfolioButton.position(350,200);
              portfolioButton.mousePressed(function(){
                  image(imgB, 300, 100);
                  currentImage = 0;
                  startTimer = true;

                  prevMillis = millis();
                });

              experienceButton = createButton("Experience");
              experienceButton.position(500,200);
              experienceButton.mousePressed(function(){
                image(imgG, 300, 100);
                prevMillis = millis();

                });

              educationButton = createButton("Education");
              educationButton.position(650,200);
              educationButton.mousePressed(function(){
                image(imgP, 300, 100);
                prevMillis = millis();

                });

              skillsButton = createButton("Skills");
              skillsButton.position(800,200);
              skillsButton.mousePressed(function(){
                image(imgR, 300, 100);
                prevMillis = millis();

                });

              referenceButton = createButton("Reference");
              referenceButton.position(950,200);
              referenceButton.mousePressed(function(){
                image(imgY, 300, 100);
                prevMillis = millis();

                });

    }
function draw() {
  // put drawing code here

//  if(startTimer == true){
// show currentImage
    if(millis() - prevMillis > interval){
        //do something
        image(img, 300, 100);

        //startTimer = false;


        //prevMillis = millis();
        //counter = counter + 20;

      }
//  }

// if(startTimer == false){
//   image(img, 300, 100);
// }


}//end of draw
