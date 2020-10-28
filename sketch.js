var thickness,wall;
var bullet,speed,weight;

function setup() {
  createCanvas(750,200);

  speed  = Math.round(random(55,90));
  weight = Math.round(random(400,1500));
  thickness = Math.round(random(22,83));

  wall  = createSprite(700,100, thickness ,height/2);
  wall.shapeColor = rgb(255, 153, 255);

  bullet = createSprite(100, 100, 15,5);
  bullet.shapeColor = "white";
  bullet.velocityX  = speed;
}

function draw() {
  background(0);  

  if ( hasCollided(bullet,wall)){

    bullet.velocityX = 0;

    var damage = 0.5 * weight * speed * speed/ (thickness * thickness * thickness);

    if (damage > 10){
      bullet.shapeColor  = "red";
    }

    if (damage < 10 ){
      bullet.shapeColor = "green";
    }
  }


  drawSprites();
}
function hasCollided(bullet,wall){
  bulletRightEdge = bullet.x - bullet.width;
  wallLeftEdge = wall.x;
  if(bulletRightEdge >= wallLeftEdge){
    return true
  }
  return false;
}