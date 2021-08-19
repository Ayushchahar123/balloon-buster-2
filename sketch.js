var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var redb,greenb,pinkb,blueb,arrowgroup;
var blueb,blueb1,blueb2,blueb3,blueb4,blueb5,redb,redb1,redb2,redb3,redb4,greenb,greenb1,greenb2,greenb3,pinkb,pinkb1;
 
function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
}



function setup() {
  createCanvas(400, 500);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;

  redb = new Group()
  greenb = new Group()
  pinkb = new Group()
  blueb = new Group()
  arrowgroup = new Group()

  
  blueb = createSprite(30,200,20,20)
  blueb.addImage("bal",blue_balloonImage);
  blueb.scale=0.1;
  
    blueb1 = createSprite(30,130,20,20)
  blueb1.addImage("bal",blue_balloonImage);
  blueb1.scale=0.1;
  
  blueb2 = createSprite(30,60,20,20)
  blueb2.addImage("bal",blue_balloonImage);
  blueb2.scale=0.1;
  
  blueb3 = createSprite(30,270,20,20)
  blueb3.addImage("bal",blue_balloonImage);
  blueb3.scale=0.1;
  
  blueb4 = createSprite(30,340,20,20)
  blueb4.addImage("bal",blue_balloonImage);
  blueb4.scale=0.1;
  
  blueb5 = createSprite(30,410,20,20)
  blueb5.addImage("bal",blue_balloonImage);
  blueb5.scale=0.1;
 
  redb = createSprite(80,200,20,20)
  redb.addImage("bal",red_balloonImage);
  redb.scale=0.1;
  
  redb1 = createSprite(80,130,20,20)
  redb1.addImage("bal",red_balloonImage);
  redb1.scale=0.1;
  
  redb2 = createSprite(80,270,20,20)
  redb2.addImage("bal",red_balloonImage);
  redb2.scale=0.1;
  

  redb3 = createSprite(80,340,20,20)
  redb3.addImage("bal",red_balloonImage);
  redb3.scale=0.1;
  
  pinkb1 = createSprite(130,200,20,20)
  pinkb1.addImage("bal",pink_balloonImage);
  pinkb1.scale=1.4;
  
  pinkb = createSprite(130,270,20,20)
  pinkb.addImage("bal",pink_balloonImage);
  pinkb.scale=1.4;
  
  greenb = createSprite(180,240,20,20)
  greenb.addImage("bal",green_balloonImage);
  greenb.scale=0.1
}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }

    
     
    

    
  
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //creating continous balloons
  var select_balloon = Math.round(random(1,1));
  
  
  

  drawSprites();
 
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
}







