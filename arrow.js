// This is the class which will display an arrow. This arrow will help the user shoot/point to a certain target.
class Arrow {
  constructor(x, y, x1, y1) {
    //these are all the parameters my Arrow Class will have
    this.x1 = 250;
    this.y1 = 190;
    this.pos = createVector(mouseX, mouseY);
  }
  //With this update the position x and y will be controlled by the users mouseX and mouseY
  update() {
    this.pos.x = mouseX;
    this.pos.y = mouseY;
  }
  show() {
    // This is the points and color of my arrow the this.x1 are the points which will stay stable and not move
    fill(252, 3, 90);
    triangle(
      this.x1 + 30,
      this.y1 + 50,
      this.x1 - 10,
      this.y1 + 50,
      this.pos.x,
      this.pos.y
    );
  }
}



