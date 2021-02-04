var car,wall;
var speed,weight;


function setup() {
  createCanvas(1600,400);
speed = random(55,90)
weight = random(400,1500)

car = createSprite(200, 200, 50, 50);
wall = createSprite(1300,200,60,height/2)
wall.shapeColor = color(80,80,80)
car.debug = true
wall.debug = true
}

function draw() {
  background(0);
 // car.x = World.mouseX
 //car.y = World.mouseY

 car.velocityX = speed;
 
 if(wall.x - car.x<car.width/2 + wall.width/2 )
 {
car.velocityX = 0
car.visible = true
var deformation = 0.5 * weight * speed * speed / 22500

if(deformation>180)
{
 car.shapeColor = color(250,0,0)
}
if(deformation< 180 && deformation>100)
{
car.shapeColor = color(230,230,0)
}
if(deformation<100)
{
  car.shapeColor = color(0,255,0)
}

 }
  drawSprites();
} 