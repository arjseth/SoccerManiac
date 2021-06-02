
let field;

function setup() {
  createCanvas(500, 300);
  field = loadImage('penalty.jpeg');
  img = loadImage('euro.png');
}

function draw() {
  background(field);
  image(img, 240, 240, 40, 40);
  
}
