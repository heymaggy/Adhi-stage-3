
var object = [];
var ground1
function preload(){
    bg= loadImage("BG/BG.png");
    ground1img= loadImage("Tiles/1.png");
    object1img = loadImage("Tiles/2.png");
    object2img = loadImage("Tiles/15.png");
    playerimg = loadImage("Object/man.png");
    object3img = loadImage("Tiles/12.png");
    object4img = loadImage("Tiles/16.png");

    water1 = loadImage("Tiles/17.png");


    //object3img = loadImage
}

function setup() {
    createCanvas(800, 800);
    player = createSprite(50,650,20,20)
    player.addImage(playerimg);
   
    object3 = createSprite(300,650,650,30);
    object3.addImage(object3img);
    object3.scale = 0.4
    object4 = createSprite(350,650,650,30);
    object4.addImage(object4img);
    object4.scale = 0.4
   
    ground1 = createSprite(width/2,height-40,300,40);
    ground2 = createSprite(width/2+550,height-40,300,40);
    ground3 = createSprite(width/2+850,height-40,300,40);
    //ground.visible = false;
    //ground.addImage(object1img);


  
}
  function draw() {
    background(bg,50,50);
     if(keyDown(LEFT_ARROW)){
          player.x = player.x-5
    }
   
    if(keyDown(RIGHT_ARROW)){
        player.x = player.x+5
    }

    if(keyDown(UP_ARROW)){
        player.velocityY = -12;
    }
    player.velocityY = player.velocityY+1
    
    player.collide(ground1);
    player.collide(object3);
    player.collide(object4);
    
  
    //player.x=camera.position.x;
    //player.y=camera.position.y;
    camera.position.x =player.x;

    drawSprites();

    image(object1img,ground1.x,ground1.y-25,200,120)
    image(object1img,ground1.x-100,ground1.y-25);
    image(ground1img,ground1.x-200,ground1.y-25);

    image(water1,ground1.x+200,ground1.y-25,200,120);

    image(object1img,ground2.x,ground2.y-25,200,120);
    image(object1img,ground2.x-100,ground2.y-25);
    image(ground1img,ground2.x-200,ground2.y-25);


    image(object3img,ground3.x-200,ground3.y-25)
    image(object3img,ground3.x-200,ground3.y-25)
}