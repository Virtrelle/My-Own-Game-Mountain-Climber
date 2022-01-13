var mClimber, mClimberImg;
var mountain, mountainImg;
var snowbg, snowbgImg;
var bird, birdImg;
var birdGroup;
var snowBall, snowballImg;
var touch = false;

function preload() {
  mClimberImg = loadImage("images/climber.gif");
  mountainImg = loadImage("images/mountain.png");
  snowbgImg = loadImage("images/snowbg.jpg");
  birdImg = loadImage("images/bird.gif");
}


function setup() {
  createCanvas(500,700);

  mountain = createSprite(200,500,50,100);
  mClimber = createSprite(200,600,10,10);

  mountain.addImage(mountainImg);
  mClimber.addImage(mClimberImg);
  
  birdGroup = new Group;

}


function draw() {
  background(snowbgImg);  

  //mClimber.x=camera.position.x-270;

 if (touch===false) {
    if (keyDown("RIGHT_ARROW")) {
      mClimber.x = mClimber.x + 5;
    }

    if (keyDown("LEFT_ARROW")) {
      mClimber.x = mClimber.x -5;
    }
    
    if (keyDown("UP_ARROW")) {
      mClimber.y = mClimber.y -5;
    }
 }
  if (birdGroup.isTouching(mClimber)) {
   // mClimber.y = mClimber.y + 25;
   touch = true;
  }
 

  birdFlying();

  drawSprites();
}


function birdFlying() {
  if (frameCount%100===0) {
    bird = createSprite(random(0,500),round(0,350),70,50);
    bird.addImage(birdImg);
    bird.scale = 0.3;
    bird.velocityX = random(5,7);
    bird.velocityY = random(5,7);
    console.log(bird.velocityX);
    console.log(bird.velocityY);
    birdGroup.add(bird);
  }
}
