var bullet,wall;
var speed,weight,thickness;
var deformation;
function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  thickness=random(22,83);
  weight=random(400,1500);
  bullet = createSprite(50, 200, 50, 50);
  wall = createSprite(1200,200,thickness,weight/2);
  wall.shapeColor=color(80,80,80);
  bullet.velocityX =speed;
}

function draw() {
  background(255,255,255);
  if(bullet.x-wall.x < bullet.width/2 + wall.width/2){
    deformation=0.5*weight*speed*speed/thickness*thickness*thickness;
    bullet.collide(wall);
    if (deformation>180){
      bullet.shapeColor=color(255,0,0);
    }
    if (deformation<100){
      bullet.shapeColor=color(230,230,0);
    }
    if(deformation>100&&deformation<180){
      bullet.shapeColor=color(0,255,0);
    }

  }
  
  drawSprites();
}