class Light{
  constructor(holderX, start, end, thick, inc1, inc2){
    this.holderX=holderX;
    this.thick=thick;
    this.start=start;
    this.end=end;
    this.x=start;
    this.inc=random(inc1, inc2);
    this.red=random(255);
    this.green=random(255);
    this.blue=random(255);
  }
  show(){
    push();
    noStroke();
    fill(this.red, this.green, this.blue, 15);
    quad(this.holderX, height, this.holderX, height,
    this.x+this.thick, 0,
    this.x, 0);
    pop();
  }
  update(){
    if(this.x < this.start || 
    this.x > this.end){
      this.inc *= -1;
    }
    this.x += this.inc;
  }
}