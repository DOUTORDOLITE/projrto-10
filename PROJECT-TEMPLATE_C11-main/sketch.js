var ship,shipimg;
var mar,marimg;



function preload(){
  shipimg=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  marimg=loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
 
  mar=createSprite(200,200)
  mar.addImage(marimg)
  mar.scale=0.3
  
  
  ship=createSprite(170,170,150,150);
  ship.addAnimation("ship nav",shipimg);
  ship.scale=0.25

  

}

function draw() {
  background("blue");
    drawSprites();

 
}





