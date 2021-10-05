
function preload(){
  //pre-load images
  path = loadImage("path.png");
  Runner1 = loadAnimation("path.png")
  Runner1 = loadAnimation("Runner-1.png", "Runner-2.png")
}

function setup(){
  createCanvas(400, 400);
  background("blue");

  path = createSprite(400, 200);
  path.addImage(path);
  path.scale = 0.3;

  Runner = createSprite(130, 200, 30, 30);
  Runner.addAnimation("movingPlayer", Runner1);
  Runner.scale = 0.25
  //create sprites here
}

function draw() {
  background(0);

  path.velocityY = 3;

}
