var way,rocket,treasure,enemy;
var wayImg,rocketImg,treasureImg,enemyImg;
var treasureCollection=0;
var wayGroup,rocketGroup,treasureGroup,enemyGroup;
var gameOverImg,gameOver;

//gameStates
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
spaceImg=loadImage("space.png");
rocketImg=loadImage("rocket.png");
starImg=loadImage("star.png");
spacestoneImg=loadImage("spacestone.png");
//write a code to display gameover
gameOverImg=loadImage("gameOver.png");

}



function setup() {
 
createCanvas(500,700);
//Moving background

space=createSprite(200,200);
space.addImage(wayImg);
space.velocityY=4;


//giving scale to rocket
rocket.scale=0.08;





spaceGroup=new Group();
rocketGroup=new Group();
starGroup=new Group();
spacestoneGroup=new Group();

}

function draw() {
 
    if(gameState===PLAY){
 background=0;
 rocket.x = World.mousex;
    
 edges=createEdgeSprites();
 rocket.collide(edges);

 //code to reset background
 if(way.y>500){
    way.y=height/2;
 }

 createstar();
 //createspacestoe();



 if (starGrop.isTouching(rocket)) {
    starGroup.destroyEach();
    treasureCollection=treasureCollection+50;
 }
 else{
    if(spacestoneGroup.isTouching(rocket)){
        gameState=END;



        treasureGroup.destroyEach();

        treasureGroup.setVelocityEach(0);
   
 }
    


    //create a sprite
gameOver=createSprite(200,200,20,20);
gameOver.addImage(gameOverImg);
gameOver.scale=0.5;


    
   drawSprites();
   textSize(20);
   fill(255); 
   text("Treasure: "+ treasureCollection,10,30);
}
}
}

function createstar(){
    if(World.frameCount  % 200 == 0)
    var star=createSprite(Math.round(random(50,350),40,10,10));
    star.addImage(starImg);
    star.scale=0.12;
    star.velocityY=3;
    ar.lifetime = 150;
    starGrop.add(star);
}

function createspacestone(){
    if(World.frameCount %  530==0){
      var enemy=createSprite(Math.round(random(50,350),40,10,10));
      spacestone.addImage(enemyImg);
      spacestone.scale=0.1;
      spacestone.velocityY=3;
      enemy.lifetime=150;
      spacestoneGroup.add(enemy);

    }
}