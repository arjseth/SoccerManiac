let field;
let stadium;
let net = [];
let number;
let Snum;
let Scene = 0;

function setup() {
  createCanvas(500, 300);
  //This is where I give field an image
  stadium = loadImage("stadium.jpeg");
  field = loadImage("penalty.jpeg");
  // This is where I give img my image
  img = loadImage("euro.png");
  Arrows = new Arrow();
  Ball = new Ball();
  number = floor(random(1, 5));
  console.log(number);

  for (var i = 0; i < 5; i++) {
    net.push(
      new Tar(185 + i * 30, 130 + i * -10, color(250, 0, 0, 0), 30, number == i)
    );
  }
}

function game() {
  //This is where the background is being implmented
  background(field);
  //This is where the ball is being implement
  Arrows.show();
  Arrows.update();
  Ball.show();
  Ball.update();
  Ball.collision(net[number]);
  for (var i = 0; i < net.length; i++) {
    net[i].update();
    net[i].show();
  }

  eval(net.length);

  if (mouseIsPressed) {
    Ball.applyForce(Arrows.pos);
  }
}
function start() {
  background(stadium);
  fill(250, 0, 0);
  textSize(30);
  text("Soccer Maniac", 160, 80);
  textSize(20);
  text("Instructions", 160, 100);
  text("click anything to play", 160, 125);
}
function end() {
  background(255, 255, 255);
}
// Copied from Side Scroller

function keyPressed() {
  Scene++;
}

function draw() {
  if (Scene % 3 === 0) {
    start();
  } else if (Scene % 3 === 1) {
    game();
  } else if (Scene % 3 === 2) {
    end();
  }
}
