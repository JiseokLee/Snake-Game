class Food {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.scale = 20;
  }

  update() {
    this.x = random(width);
    this.y = random(height);
  }

  show() {
    fill(255, 255, 0);
    rect(this.x, this.y, this.scale, this.scale);
  }
}