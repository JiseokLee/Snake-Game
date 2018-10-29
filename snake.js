class Snake {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.scale = 20;
  }

  update() {
    this.x += this.xspeed * this.scale;
    this.y += this.yspeed * this.scale;

    this.x = constrain(this.x, 0, width-this.scale);
    this.y = constrain(this.y, 0, height-this.scale);
  }

  show() {
    fill(255);
    rect(this.x, this.y, this.scale, this.scale);
  }

  dir(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }
}