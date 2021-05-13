let gravity = 0.2;
let incAlpha=3;

let founts = [];
let len=3;
let mids=[];
let lows=[];

let leftLight;
let centerLight;
let rightLight;

let stars=[];


function setup() {
  createCanvas(windowWidth,
  windowHeight);
  
  leftLight= new Light(width/7, 
  0, width*2/3, 40, 5, 10);
  
  centerLight = new Light(
    width / 2,
    0, width, 40, 6, 10);
  
  rightLight = new Light(
    width *6/ 7,
    width/3, width, 40, 5, 10);
    
  for(let i=0; i<100; i++){
      stars.push(new Star());
  }
    
  let range=len-(parseInt(len/2)+1);
  for(let i=-range; i<=range; i++){
    founts.push(new Fount(i));
  }
}

function draw() {
  background(0);
  
  //stars
  for(let s of stars){
    s.show();
  }
  
  //moon
  push();
  fill(255);
  strokeWeight(10);
  stroke(100, 100);
  ellipse(width / 7, height / 5, width / 8, width / 8);
  pop();
  
  //disco lights
  leftLight.show();
  leftLight.update();
  centerLight.show();
  centerLight.update();
  rightLight.show();
  rightLight.update();
  
  if(random(1) < 0.7) {
    for(let i=0; i<3; i++){
     mids.push(new fountMid());
     lows.push(new fountLow());
    }
  }
  
  for(let i=0; i<founts.length;i++)
  {
    founts[i].show();
  }

  for(let i=0; i<mids.length; i++)
  {
    mids[i].show();
    mids[i].update();
    if(mids[i].disappear()){
      mids[i]=null;
      mids.splice(i,1);
    }
  }
  for (let i=0; i<lows.length; i++)
  {
    lows[i].show();
    lows[i].update();
    if (lows[i].disappear()) {
      lows[i] = null;
      lows.splice(i, 1);
    }
  }
  
 
}