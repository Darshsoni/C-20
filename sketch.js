var fixrect, moverect;
var car, wall;

function setup() {
  createCanvas(800,400);
  fixrect=createSprite(400, 200, 50, 50);
  moverect=createSprite(200, 200, 50, 100);
  fixrect.shapeColor="red";
  moverect.shapeColor="red";
  car=createSprite(100, 200, 50, 50);
  wall=createSprite(700, 200, 50, 100);
  car.velocityX=10;
}

function draw() {
  background(0);
  
  moverect.x=World.mouseX;
  moverect.y=World.mouseY;
  istouch();
  bounceoff();
  drawSprites();
}

function istouch(){
  if(moverect.x-fixrect.x<moverect.width/2+fixrect.width/2&&fixrect.x-moverect.x<moverect.width/2+fixrect.width/2&&
    moverect.y-fixrect.y<moverect.height/2+fixrect.height/2&&fixrect.y-moverect.y<moverect.height/2+fixrect.height/2){
    fixrect.shapeColor="blue";
  moverect.shapeColor="yellow";
  }else{
    fixrect.shapeColor="red";
  moverect.shapeColor="red";
  }
}

function bounceoff(){
  if(car.x-wall.x<car.width/2+wall.width/2&&wall.x-car.x<car.width/2+wall.width/2){
    car .velocityX=car.velocityX*-1;
  }
  if(car.y-wall.y<car.height/2+wall.height/2&&wall.y-car.y<car.height/2+wall.height/2){
    car .velocityY=car.velocityY*-1;
  }
}