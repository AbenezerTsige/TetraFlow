
var x = 10;
var y = 10;

var xx = 500;
var yy = 600;

// Shooter Postion variables 
var shx = 260;
var shy = 450;
var gunx = 260;
var guny = 450;

// L block axis 
var Lx = 230;
var Ly = 20;
var Lxy = 20;

function setup() {
  createCanvas(2000, 2000);
}

function draw() {

  fill(255, 50, 55); 
  rect( x , y , xx , yy ); // Pink Background
  
  playground();
  score();
  
  wall();

  L();
  gunner();
  shooter();

}

function shooter(){
   // Shooter 
  rect( shx       , shy + 20 , x + 10 , y + 10 );
  rect( shx - 20  , shy + 20 , x + 10 , y + 10 );
  rect( shx       , shy      , x + 10 , y + 10 );
  rect( shx + 20  , shy + 20 , x + 10 , y + 10 );

  if ( shx < 180){
    shx = shx + 1;
  }

  if ( shx > 340){
    shx = shx - 1;
  }


}

function gunner() {

  fill(255, 50, 55);
  if( guny >= 240) {  
   guny = guny - 10;
  }

  rect( gunx , guny , x + 10 , y + 10);

}

function keyPressed() {
 
  if (keyCode === LEFT_ARROW) {
    shx = shx - 5;
  } else if (keyCode === RIGHT_ARROW) {
    shx = shx + 5;
  } else if (keyCode === 32) { // Space 
    gunner();
  }
  
  return false;
}

function playground(){
  fill(55); 
  // Playground
  rect( x * 16 , y , xx / 2.25 , yy );
   
}

function score(){
  
  fill(255, 255, 255);
  textSize(25);
  text('Score', x * 4 , x * 5 );
  
  // Score first digit 
  rect(x * 4 , y * 6 , x * 3, y * 4);
  // Score Second digit
  rect(x * 7 , x * 6 , x * 3, x * 4);
  // Score first digit
  rect(x * 10 , x * 6 , x * 3, x * 4);
  
  fill(0);
  text(guny , x * 5 , y * 19);
  text('0' , x * 8 , y * 9);
  text('0' , x * 11 , y * 9);

}

function L(){

  fill(255, 50, 55);

  if(( Ly >= 20) && (Ly < 220)) {
    Ly = Ly + 3;
  }
 
  rect( Lx        , Ly        , Lxy , Lxy ); 
  rect( Lx - Lxy  , Ly        , Lxy , Lxy );
  rect( Lx + Lxy  , Ly        , Lxy , Lxy );
  rect( Lx + Lxy  , Ly + Lxy  , Lxy , Lxy );
}

function wall(){
  // Wall 
  fill(255, 255, 255);
  
  // 1st Layer
  rect( x * 23 , y * 20 , x * 2 , y * 2 );
  rect( x * 25, y * 20 , x * 2 , y * 2 );
  rect( x * 27 , y * 20 , x * 2 , y * 2 );
  
  // 2nd Layer
  rect( x * 23 , y * 22 , x * 2 , y * 2 );
  rect( x * 25, y * 22 , x * 2 , y * 2 );
  rect( x * 27 , y * 22 , x * 2 , y * 2 );
  
  //3rd layer 
  rect( x * 23 , y * 24 , x * 2 , y * 2 );
  rect( x * 25 , y * 24 , x * 2 , y * 2 );
  rect( x * 27 , y * 24 , x * 2 , y * 2 );
   
  // 4th row 
  rect( x * 29 , y * 20 , x * 2 , y * 2 );
  rect( x * 29, y * 22 , x * 2 , y * 2 );
  rect( x * 29 , y * 24 , x * 2 , y * 2 );
  
  // 5th row 
  rect( x * 31 , y * 20 , x * 2 , y * 2 );
  rect( x * 31, y * 22 , x * 2 , y * 2 );
  rect( x * 31 , y * 24 , x * 2 , y * 2 );
  
  // 6th row 
  rect( x * 21 , y * 20 , x * 2 , y * 2 );
  rect( x * 21, y * 22 , x * 2 , y * 2 );
  rect( x * 21 , y * 24 , x * 2 , y * 2 );
  
}

