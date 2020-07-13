const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

var doodler,platforms;
var platformList = [];
var platYChange = 0;
var gameState;
var score = 0;
var highScore = 0;
var backgroundImg;

function preload() {

  backgroundImg = loadImage("1024px-Graph-paper.svg.png");
  
}

function setup() {
  createCanvas(400, 600);
  frameRate(60);
  engine = Engine.create();
  world = engine.world;
  gameState = 0;
  doodler = new Doodler();
  platforms = new Platform(480);
}

function draw() {
  background(247, 239, 231);
  Engine.update(engine);
  image(backgroundImg, 0, 0, 400, 600);
  console.log(doodler.x);
   console.log(doodler.y);
  if(gameState === 1) {
    doodler.display();
    platforms.drawPlatforms();
    platforms.Platform(360);
  } 
  else {
    fill(0);
    textSize(60);
    text("Start", 140, 275);
    textSize(30);
    text("Score: " + score, 150, 325);
    textSize(20);
    text("High Score: " + highScore, 150, 360);
  }
  mousePressed();
  //console.log(platformList);
  moveScreen();
   checkCollision();
}

function moveScreen() {
  if(doodler.y < 550) {
    platYChange = 3;
    doodler.velocity += 0.25;
  } else {
    platYChange = 0;
  }
}

function mousePressed() {
    console.log(gameState);
  if(gameState === 0) {
    score = 0;
    doodler.y = 350;
    console.log(platformList);
    doodler.x = 200;
    console.log(doodler);
    doodler.velocity = 0.1;
    gameState = 1;
    platforms.setupPlatforms()
  }
}


function keyPressed() {
  if (keyIsDown(LEFT_ARROW)) {
    doodler.x -= 4;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    doodler.x += 4;
  }
}




function checkCollision() {
  platformList.forEach(function(plat) {
    if(
      doodler.x < plat.platform.position.x + plat.platform.width &&
      doodler.x + 60 > plat.platform.position.x &&
      doodler.y + 60 < plat.platform.position.y + plat.platform.height &&
      doodler.y + 60 > plat.platform.position.x &&
      doodler.velocity.y > 0
    ) {
      doodler.velocity.y = -10;
    }
  });
  
  if(doodler.y > height) {
    if(score > highScore) {
      highScore = score;
    }
    gameState = 0;
    platformList = [];
  }
  
  if(doodler.x < -60) {
    doodler.x = width;
  } else if(doodler.x > width) {
    doodler.x = -60;
  }
}
