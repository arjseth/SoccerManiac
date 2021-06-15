
// Class tar is for target so the user knows where to shoot using the arrow
class Tar {
  constructor(x, y, color, size, goal) {
    // All the parameters for my Tar Class
    this.x = x;
    this.y = y;
    this.color = color;
    // this.stroke = stroke;
    this.size = 30;
    this.goal = goal;
  }
  // This is to update the this.goal
  update(n) {
    this.goal = !this.goal;
  }
  // This show function is so the user knows what target to shoot at it will be a different color than the rest
  show(x, y) {
    if (this.goal) {
      this.color = color(0, 0, 0);
    } else {
      this.color = color(255, 255, 255, 0);
    }
    fill(this.color);
    ellipse(this.x, this.y, this.size, this.size);
  }
}
