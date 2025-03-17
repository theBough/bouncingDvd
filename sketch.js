//This is how you make a variable
//The words in Brown on Boughen's screen
//are Javascript reserved
let counter;
//Create a variable to hold an image
let img;
let xSpeed, ySpeed, xLocation,yLocation;

//this gets called once.
function setup() {
  //Anything in dark blue
  //is created by p5Js
  //means it is not Javascript
  createCanvas(400, 400);
  //intialize our variable
  counter = 0
  //load the image into our vaiable
  img = loadImage("dvd.png")
  xSpeed = 1;
  ySpeed = 1;
  xLocation = 0
  yLocation = 0
  console.log(img.width)
}

//This function gets looped over and over
function draw() {
  background('#003049');
  img.resize(75,50)
  xLocation += xSpeed
  yLocation += ySpeed
  image(img,xLocation,yLocation)
  if(xLocation + 75> width){
    xSpeed *= -1
  }
  if(yLocation + 50> height){
    ySpeed *= -1
  }
  
}
