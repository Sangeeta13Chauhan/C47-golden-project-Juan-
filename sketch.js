const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bullet;
var zombies = [];
var superzombies = [];
var score = 0;
var survivor;
var survivorImg;
var bg;
var x = 0.1;
var y = 0.1;

function preload(){
  bg = loadImage("level1.jpg");
  survivorImg = loadImage("survivor.png");
 zombieImg = loadImage("zombie.png");
 superzombieImg = loadImage("superzombie.jpg")
}


function setup() {
    canvas = createCanvas(1500, 700);
    engine = Engine.create();
    world = engine.world;
   
  survivor = createSprite(600,400,20,20);
  survivor.addImage(survivorImg);
  survivor.scale = 0.15; 
  //survivor.x= survivor.x+x;
}
 
function draw() {
Engine.update(engine);
background(bg);

if(keyDown (LEFT_ARROW)){
 survivor.velocityX = survivor.velocityX - x
}

if(keyDown (RIGHT_ARROW)){
    survivor.velocityX = survivor.velocityX + x
}

if(keyDown (UP_ARROW)){
    survivor.velocityY = survivor.velocityY - y
}

if(keyDown (DOWN_ARROW)){
    survivor.velocityY = survivor.velocityY + y
}

 textSize(30);
 fill ("white");
 text("Scoreboard : -" +score,1000,100)

if(frameCount%60===0){
  zombies.push(new Zombies(random(100, width/2+600), 60,60));
 
}


for (var j = 0; j < zombies.length; j++) {
  zombies[j].display();
}

if(frameCount%90===0){
  superzombies.push(new SuperZombies(random(100, width/2+900), 60,60));
}

for (var j = 0; j < superzombies.length; j++) {
  superzombies[j].display();
}
      spawnBullet();
 
    drawSprites();  
}

function spawnBullet(){
  if(keyWentDown("SPACE")){
    bullet = createSprite(survivor.x, survivor.y, 10,2);
    bullet.velocityX = 1;
    bullet.x = survivor.x;
    bullet.shapeColor = "yellow"
  }
      }