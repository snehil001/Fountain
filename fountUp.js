class fountUp{
  constructor(num){
    //position
    this.x=
     num==0?
     width/2:
     (num>0?
     width*7/8:
     width/8);
     
    this.y=
     num==0?
     height*4/6:
     height;
   
    //max velocity
    this.myvel=
     num==0?
     sqrt(2*gravity*height/5)
     : sqrt(2*gravity*height/2);
     
    //y velocity
    this.yvel=random(-this.myvel*0.95, -this.myvel);
    
    //x velocity
    this.xvel=
     num==0?
     random(-1.5, 1.5) :
     (num > 0 ? 
     random(-0.6, -0.5):
     random(0.5, 0.6));
   
    //colors
    this.red=random(255);
    this.blue=random(255);
    this.green=random(255);
    this.alpha=210;
    
    //thickness
    this.sw=4;
    this.ra=random(1);
    this.num=num;
    
    this.side=this.ra > 0.5 ?
    1: -1;
  }
  
  show(){
    push();
    if(this.num==0){
     stroke(this.red,
     this.green, this.blue,
     this.alpha);
    }
    else{
     stroke(this.red, this.green, 
     this.red, this.alpha);
    }
    strokeWeight(this.sw);
    point(this.x, this.y);
    pop()
  }
  
  update(){
    this.y += this.yvel;
    this.yvel+=gravity;
    
    this.x+=this.xvel;
      
    if(this.yvel > 0){
      if(this.side==1){
        this.alpha+=incAlpha;
        this.sw+=0.05;
      }else{
        this.alpha -= incAlpha;
        this.sw -= 0.1;
      }
    }
    if(this.alpha >= 255 || 
    this.alpha <= 130){
        this.alpha=0;
        this.sw=4;
    }
    
  }
  
  disappear(){
    return this.alpha == 0;
  }
}