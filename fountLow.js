class fountLow {
  constructor() {
    this.x = random(width/5, width * 4/ 5);
    this.y = height*5/6;
    this.yvel = 0;
    this.red = random(255);
    this.green = random(255);
  }
  show() {
    push();
    strokeWeight(4);
    stroke(this.red, this.green, this.green);
    point(this.x, this.y);
    pop();
  }
  update() {
    this.y += this.yvel;
    this.yvel += gravity;
  }
  disappear() {
    return this.y >= height;
  }
}