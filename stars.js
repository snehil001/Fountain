class Star{
 constructor(){
   this.x = random(width);
   this.y = random(height);
   this.red = random(255);
   this.green = random(255);
   this.blue = random(255);
   
 }
 show(){
   push();
   strokeWeight(2);
   stroke(this.red, this.green, this.blue, 75);
   point(this.x, this.y);
   pop();
 }
}