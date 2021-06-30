var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var score
var redgroup, bluegroup, greengroup, yellowgroup, arrowgroup
function preload(){
  // load the images
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png")
  pink_balloonImage = loadImage("pink_balloon0.png")
  blue_balloonImage = loadImage("blue_balloon0.png")
}




function setup() {
  // creat the canvas
  createCanvas(400, 400);
  
 
 
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  // create the score variable
  score = 0
  // create the groups
  redgroup = new Group()
  bluegroup = new Group()
  greengroup = new Group()
  pinkgroup = new Group()
  arrowgroup = new Group()
}




function draw() {
  //background color
  background(0);
  
  // moving background
  scene.velocityX = -3 
  // repeating background
  if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow()    
    
  }
  
  //creating continous balloons
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    }
    else if(select_balloon == 2){
      blueBalloon()
    }
    else if(select_balloon == 3){
      greenBalloon()
    }
    else {
      pinkBalloon()
    }
  }
  // arrow is touching red
  if(arrowgroup.isTouching(redgroup)){
    redgroup.destroyEach()
    arrowgroup.destroyEach()
    score = score + 2
  }
  // arrow is touching pink
  if(arrowgroup.isTouching(pinkgroup)){
    pinkgroup.destroyEach()
    arrowgroup.destroyEach()
    score = score + 1
  }
  //arrow is toucing blue
  if(arrowgroup.isTouching(bluegroup)){
    bluegroup.destroyEach()
    arrowgroup.destroyEach()
    score = score + 3
  }
  // arrow is touching greenn
  if(arrowgroup.isTouching(greengroup)){
    greengroup.destroyEach()
    arrowgroup.destroyEach()
    score = score + 5
  }
 
 
  // draw the sprites
  drawSprites();

  // score text 
  textSize(20)
  text("Score:" + score, 270,30)
  // is touching different balloons

  }
  








// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowgroup.add(arrow)
}

// creating the red balloons
function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redgroup.add(red)

}
// creating the blue balloons
function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 4;
  blue.lifetime = 150;
  blue.scale = 0.1;
  bluegroup.add(blue)
}
// creating the green balloons
function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 6;
  green.lifetime = 150;
  green.scale = 0.1;
  greengroup.add(green)
}
// creating the pink balloons
function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 2;
  pink.lifetime = 200;
  pink.scale = 1.5;
  pinkgroup.add(pink)
}
