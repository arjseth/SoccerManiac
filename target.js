class Tar {
  constructor(x, y, color, size, goal) {
    this.x = x;
    this.y = y;
    this.color = color;
   // this.stroke = stroke;
    this.size = 30;
    this.goal = goal;
  }
  update() {
    
  }
  show(x, y) {
    if (this.goal) {
      this.color = color(0, 0, 0);
     // this.stroke = stroke(245, 66, 215);
      
    }
    fill(this.color);
    ellipse(this.x, this.y, this.size, this.size);
    
 
  }
}

