var fixedRect, movingRect;
var box1, box2, box3, box4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(500, 550, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  box1 = createSprite(200,300,70,70);
  box1.shapeColor = "purple";
  box1.debug = true;
  box2 = createSprite(350,300,70,70);
  box2.shapeColor = "pink";
  box2.debug = true;
  box3 = createSprite(500,300,70,70);
  box3.shapeColor = "blue";
  box3.debug = true;
  box4 = createSprite(650,300,70,70);
  box4.shapeColor = "brown";
  box4.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(box1, movingRect)){
    movingRect.shapeColor = "red";
    box1.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    box1.shapeColor = "purple";
  }
  if (isTouching(box2, movingRect)){
    movingRect.shapeColor = "red";
    box2.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    box2.shapeColor = "pink";
  }
  drawSprites();
}

