var cat,cat1Img,cat2Img,cat3Img,cat4Img,mouse,mouse1Img,mouse2Img,mouse3Img,mouse4Img,bgImg;

function preload() {
    //load the images here
bgImg     = loadImage("images/garden.png");
cat1Img   = loadAnimation("images/cat1.png");
cat2Img   = loadAnimation("images/cat2.png");
cat3Img   = loadAnimation("images/cat3.png");
cat4Img   = loadAnimation("images/cat4.png");
mouse1Img = loadAnimation("images/mouse1.png");
mouse2Img = loadAnimation("images/mouse2.png");
mouse3Img = loadAnimation("images/mouse3.png");
mouse4Img = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
  cat = createSprite(870,600);
  cat.addAnimation("tomSleeping",cat1Img);
  cat.scale = 0.2;

  mouse = createSprite(200,600);
  mouse.addAnimation("jerryStanding",mouse1Img);
  mouse.scale = 0.15;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x - mouse.x <(cat.width - mouse.width)/2)
{
  cat.velocityX = 0;
  cat.addAnimation("tomLastImage",cat3Img);
  cat.x = 360;
  cat.changeAnimation("tomLastImage");
  mouse.addAnimation("jerryLastImg",mouse3Img);
  mouse.changeAnimation("jerryLastImage");

}
keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    cat.velocityX = -5;
    cat.addAnimation("tomRunning",cat2Img);
    cat.changeAnimation("tomRunning");
    mouse.addAnimation("mouseTeasing",mouse2Img);
    mouse.changeAnimation("jerryTeasing");
}

}
