var fixedrect;
var movingrect;

function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(200,200,50,80)
  fixedrect.shapeColor="red"
  fixedrect.debug=true;
  movingrect=createSprite(400,200,80,30);
  movingrect.shapeColor="red"
  movingrect.debug=true;
}

function draw() {
  background(255,255,255); 
  movingrect.x=World.mouseX
  movingrect.y=World.mouseY
  console.log(fixedrect.x-movingrect.x)
  if(fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2 &&
    movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2 &&
    fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2 &&
    movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2){

    fixedrect.shapeColor="blue"
    movingrect.shapeColor="blue"

  }
  else{fixedrect.shapeColor="red"
  movingrect.shapeColor="red"}
  
  

  drawSprites();
}