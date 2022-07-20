var duck
function setup() {
  createCanvas(400,400);
  duck = createSprite(20,20,20,20)
}

function draw() 
{
  background(30);
if(keyIsDown(LEFT_ARROW)){
duck.x = duck.x - 5  
}
if(keyIsDown(RIGHT_ARROW)){
  duck.x = duck.x + 5  
  }
drawSprites()
}




