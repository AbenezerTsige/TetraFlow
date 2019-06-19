var gun;
var wall = [];
var bullets = [];

function setup() {
  createCanvas(600, 600);
  gun = new Gun();
  //bullet = new Bullet(width/2, height-20);
 for (var i = 0; i < 7; i++) {
    wall[i] = new Wall(i*31+200, 150); 
  }
}

function draw() {
  background(51);
  gun.show();

  for (var i = 0; i < bullets.length; i++) {
    bullets[i].show();
    bullets[i].move(); 
    for (var j = 0; j < wall.length; j++) {
      if (bullets[i].hits(wall[j])) {
        wall[j].destroy();
        //bullets[i].evaporate();
        console.log("Destroyed");
      }
    }
  }

 for (var i = 0; i < wall.length; i++) {
    wall[i].show();   
  }
}

function keyPressed() {
  if (key === ' ') { // Space 
    var bullet = new Bullet(gun.x, height-20);
    bullets.push(bullet);
  }
  if (keyCode === LEFT_ARROW) {
    gun.move(-1);
  } else if (keyCode === RIGHT_ARROW) {
    gun.move(1);
  } 
  return false;
}