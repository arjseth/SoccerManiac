
let field;

function setup() {
  createCanvas(500, 300);
  //This is where I give field an image
  field = loadImage('penalty.jpeg');
  // This is where I give img my image
  img = loadImage('euro.png');
}

function draw() {
  //This is where the background is being implmented
  background(field);
  //This is where the ball is being implement
  image(img, 240, 240, 40, 40);
  arrow();
  
}
