// Making the ball with parameters an image, an x and y cordinate
var Bsize = 40;
class Ball {
  constructor(img, x, y) {
    this.pic = img;
    //copied from side scroller and edited for mine
    this.pos = createVector(240, 240);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.score = 0;
  }

  update() {
    //Copied from side scroller and changed for my program
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }
  show() {
    fill(255, 0, 0)
    text("Score: " + this.score, 100, 100)
    image(img, this.pos.x % 400, this.pos.y % 400, Bsize, Bsize);
  }
  applyForce(f) {
    f.sub(250, 190);
    f.div(10000);
    //let v=createVector(1,--1);
    this.acc.add(f);
    Bsize -= 0.05;
  }
  collision(o, n) {
    if (
      o.x >= this.pos.x &&
      o.x <= this.pos.x + 80 &&
      o.y >= this.pos.y &&
      o.y <= this.pos.y + 80
    ) {
         this.score++;
  
    }
  }
}
