var player,playerImg;
var score = 0;
var lives = 5;
var heartImg, alienImg;

function preload(){
  playerImg = loadImage("man.png");
  heartImg = loadImage("heart.png");
  alienImg = loadImage("alien.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  player = createSprite(500,400,50,50);
  player.addImage(playerImg) ;
 
  spawnObstacles();

}

function draw() {
  background("black");

  textSize(20);
  text("SCORE: " + score,player.x+350,50);
  text("LIVES: " + lives,player.x+450,50);
  text("RUSHANK'S GAME: ",player.x,50);
  if(frameCount%100===0){
    lives--;
  }
  
  heartCreation();

  if(keyDown(UP_ARROW)){
    player.y -= 2;
  }
  if(keyDown(DOWN_ARROW)){
    player.y += 2;
  }
  if(keyDown(RIGHT_ARROW)){
    player.x += 12;
  }
  if(keyDown(LEFT_ARROW)){
    player.x -= 2;
  }


  camera.position.x = player.x;
  camera.position.y = height/2;

  drawSprites();

  

}

function spawnObstacles() {
  for(var i = 100; i<=width*4; i+=400){
    var obs = createSprite(i,800,20,50);
    obs.addImage(alienImg);
    //obs.scale = 0.1;
  }
}

function heartCreation() {
  var b = 50;
  for(var i=1; i<=lives;i++) {
    var heart = createSprite(b,50,50,50);
    heart.addImage(heartImg);
    heart.scale = 0.5;
    b += 50;
    heart.lifetime = 2;
  }
}