var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(160,400);
  //createSprite(400, 200, 50, 50);

  thickness=random(22,83);
  speed=random(223,321)
  weight=random(30,52)

  bullet=createSprite(50,200,50,50);
  bullet.velocityX = speed;
 bullet.shapeColor=0;
 

 wall=createSprite(1200,200,thickness,height/2);
 wall.shapeColor=(80,80,80);
}

function draw() {
  background(255,255,255); 
  drawSprites(); 

  if(hasColiided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * speed* speed/(thickness *thickness *thickness);

    if(damage>10)
    {
      wall.shapeColor=color(255,0,0);

    }

  if(damage<10)
  {
    wall.shapeColor = color(0,255,0);
  }
  
  }
  
  
}

