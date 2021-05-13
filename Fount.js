class Fount{
  constructor(num){
    this.bubbles=[];
    this.num=num;
  }
  show(){
    if(random(1)<0.5){
      if(this.num==0){
        for(let i=0; i<2; i++){
         this.bubbles.push(new fountUp(this.num));
        }
      }else{
        this.bubbles.push(new fountUp(this.num));
      }
    }
    for(let i=0; i<this.bubbles.length; i++) {
      this.bubbles[i].show();
      this.bubbles[i].update();
      if (this.bubbles[i].disappear()) {
        this.bubbles[i] = null;
        this.bubbles.splice(i, 1);
      }
    }
  }
}