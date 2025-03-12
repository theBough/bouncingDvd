//This is how you make a variable
//The words in Brown on Boughen's screen
//are Javascript reserved
let counter;

//this gets called once.
function setup() {
  //Anything in dark blue
  //is created by p5Js
  //means it is not Javascript
  createCanvas(400, 400);
  //intialize our variable
  counter = 0
}

//This function gets looped over and over
function draw() {
  background('#003049');
  counter +=1
  rect(counter,175,50,50)
}
