class Arrow {
  constructor(x, y, x1, y1) {
    this.x1 = 250;
    this.y1 = 190;
    this.pos = createVector(mouseX, mouseY);
  }
  update() {
    this.pos.x = mouseX;
    this.pos.y = mouseY;
  }
  show() {
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

