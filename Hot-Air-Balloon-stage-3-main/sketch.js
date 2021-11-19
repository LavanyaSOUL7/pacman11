var pacman,pacmanImg
var ghost1,ghost1Img
var ghost2,ghost2Img
var ghost3,ghost3Img
var ghost4,ghost4Img
var box1,box2,box3,box4,box5,box6;
var fruit1,fruit2,fruit1Img,fruit2Img,fruit3,fruit3Img,fruit4,fruit4Img,fruit5,fruit5Img,






function preload(){
    pacmanImg = loadImage("pacman.png");
    ghost1Img = loadImage("ghost2.png");
    ghost2Img = loadImage("ghost2.png");
    ghost3Img = loadImage("ghost4.png");
    ghost4Img = loadImage("ghost4.png");
    fruit1Img = loadImage("57006.png");
    fruit5Img = loadImage("57006.png");
    fruit6Img = loadImage("57006.png");




}


function setup() {
 createCanvas(1000,700);
 
  pacman = createSprite(500,650,20,20);
  pacman.addImage(pacmanImg);
  pacman.scale=0.05;


  ghost1 = createSprite(850,350,20,20);
  ghost1.addImage(ghost1Img);
  ghost1.scale=0.15

  ghost2 = createSprite(650,100,20,20);
  ghost2.addImage(ghost2Img);
  ghost2.scale=0.15;

  ghost3 = createSprite(250,100,20,20);
  ghost3.addImage(ghost3Img);
  ghost3.scale=0.15

  ghost4 = createSprite(100,350,20,20);
  ghost4.addImage(ghost4Img);
  ghost4.scale=0.15;

  box1 = createSprite(0,400,1500,10);
  box1.shapeColor="black";

  box2 = createSprite(400,200,1000,10);
  box2.shapeColor="black"

  box3 = createSprite(400,200,10,300);
  box3.shapeColor="black"

  box4 = createSprite(300,400,10,300);
  box4.shapeColor="black"

  box5 = createSprite(400,800,1500,10);
  box5.shapeColor="black"

  fruit1 = createSprite(200,400,1550,10);
   fruit1.addImage(fruit1Img);


  fruit2 = createSprite(300,800,650,10);
   fruit2.addImage(fruit2Img);

    fruit3 = createSprite(300,500,750,10);
   fruit3.addImage(fruit1Img);

    fruit4 = createSprite(100,700,450,10);
   fruit4.addImage(fruit1Img);

    fruit5 = createSprite(400,100,20,600);
   fruit5.addImage(fruit1Img);

    fruit6 = createSprite(800,200,900,10);
   fruit6.addImage(fruit1Img);

    


  

}

function draw() {
    background(128);
    drawSprites();
    if(keyDown(LEFT_ARROW))
    {
        pacman.x=pacman.x-2;
    }

    if(keyDown(RIGHT_ARROW))
    {
        pacman.x=pacman.x+2;
    }

    if(keyDown(UP_ARROW))
    {
        pacman.y=pacman.y-2;
    }

    if(keyDown(DOWN_ARROW))
    {
        pacman.y=pacman.y+2;
    }
    

}


  
