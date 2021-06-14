let field;
let stadium;
let net = [];
let number;
let Snum;
let Scene = 0;
let fire;
let player;

// This is setting everything up and loading stuff. 
function setup() {
  createCanvas(500, 300);
  //This is where I load stuff
  stadium = loadImage("stadium.jpeg");
  field = loadImage("penalty.jpeg");
  img = loadImage("euro.png");
  fire = loadImage("fireworkd.jpeg");
  player = loadImage("player.png");
  // So I can use my classes that I made
  Arrows = new Arrow();
  Ball = new Ball();
  //Generate a new variable to change what target will be the one you need to shoot
  number = floor(random(1, 5));

  for (var i = 0; i < 5; i++) {
    net.push(
      new Tar(185 + i * 30, 130 + i * -10, color(250, 0, 0, 0), 30, number == i)
    );
  }
}
// This is the function of the game the use of it
function game() {
  //This is where the background is being implmented
  background(field);
  //This is where the arrow is being implement
  Arrows.show();
  Arrows.update();
  //This is where ball is being implemented
  Ball.show();
  Ball.update();
  //Using the generated variable to tell ball that this target needs to use collision detection
  number = Ball.collision(net[number], number);

  // Putting all the targets into an array to use later
  for (var i = 0; i < net.length; i++) {
    if (i == number) {
      net[i].update();
    }
    net[i].show();
  }
  // Displaying all the targets
  eval(net.length);

  //To tell the program when to apply the Force on the ball and where to send the ball what x and y position of the Arrow class
  if (mouseIsPressed) {
    Ball.applyForce(Arrows.pos);
  }
}
// Opening scene of the game
function start() {
  background(stadium);
  fill(66, 245, 188);
  textSize(50);
  text("Soccer Maniac", 100, 80);
  fill(255, 255, 255);
  textSize(20);
  text("Press any button to play", 280, 290);
}
// Help explaining the user how to play the game
function instructions() {
  background(255, 0, 0);
  textSize(30);
  fill(66, 72, 245);
  text("How do you play Socccer Maniac", 40, 30);
  fill(245, 239, 66);
  textSize(15);
  text(
    "In this game you will see a goal that has 5 targets. Out  of these five targets \n one of them will be flashing. You will aim and shoot towards the flashing \n target. To shoot you will need to left click your mouse. You will have 10 \n shots and your objective is to hit the target 10/10 times. " +
      " \n\n P.S you can change the direction of the ball in mid air.",
    0,
    100
  );
  textSize(15);
  fill(255, 255, 255);
  text("Press any button to play", 330, 290);
}
// Ending of the game the congratulation scene
function end() {
  background(fire);
  fill(84, 245, 66);
  textSize(40);
  text("THE END", 290, 60);
  textSize(15);
  fill(245, 156, 66);
  text("You got" + Ball.score + "/10 shots on the target.", 260, 80);
  fill(66, 200, 245);
  text(
    "Thank you for playing my game and \n I hope you guys enjoyed.",
    260,
    260
  );
  image(player, 310, 110, 120, 120);
}
// Copied from Side Scroller
// This part is to help control how to switch between scenes
function keyPressed() {
  Scene++;
}

function draw() {
  if (Scene % 3 === 0) {
    start();
  } else if (Scene % 3 === 1) {
    instructions();
  } else if (Scene % 3 === 2 && Ball.tries < 10) {
    game();
  } else {
    end();
  }
}
