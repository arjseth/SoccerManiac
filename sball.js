// This is the ball that will move around.
class Ball {
  constructor(img, x, y) {
    //these are all the parameters my game will have and use
    this.pic = img;
    this.sx = 240;
    this.sy = 240;
    this.bSize = 30;
    //copied from side scroller and edited for mine
    this.pos = createVector(this.sx, this.sy);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);

    this.score = 0;
    this.miss = false;
    this.tries = 0;
  }
  // The update function update the velocity, position and aacelaration just like the side scroller
  update() {
    //Copied from side scroller and changed for my program
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }
  show() {
    // This is the text showing the score and tries
    fill(255, 0, 0);
    text("Score: " + this.score, 400, 20);
    text("Tries: " + this.tries, 400, 50);
    //This is where I give the parameters to my ball
    image(img, this.pos.x % 400, this.pos.y % 400, this.bSize, this.bSize);
  }
  //the applyforce function helps make the ball move
  applyForce(f) {
    f.sub(250, 190);
    f.div(10000);
    this.acc.add(f);
    this.bSize -= 0.05;
  }
  //The collision detection is to help detect collision and when it does increment the score and tries.
  collision(o, n) {
    if (
      // This is to check mto see if there was any collision
      o.x >= this.pos.x &&
      o.x <= this.pos.x + 175 &&
      o.y >= this.pos.y &&
      o.y <= this.pos.y + 175
    ) {
      //This is what happens if it detects collision. Returns to original position
      this.tries++;
      this.score++;
      this.vel.set(0, 0);
      this.acc.set(0, 0);
      this.pos.set(this.sx, this.sy);
      this.bSize = 30;
      n = floor(random(0, 5));
      o.update();
    }
    // This is what happens if the ball goes out of bounds it returns to original position
    if (
      this.pos.x < 0 ||
      this.pos.x > 500 ||
      this.pos.y < 0 ||
      this.pos.y > 300
    ) {
      this.vel.set(0, 0);
      this.acc.set(0, 0);
      this.pos.set(this.sx, this.sy);
      this.bSize = 30;
      this.tries++;
      n = floor(random(0, 5));
      o.update();
    }
    return n;
  }
}

