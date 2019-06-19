function Wall(x, y) {
  this.x = x;
  this.y = y;
  this.r = 15;

  this.destroy = function()	{
  	//this.r = this.r + 2;
  	this.r = 0;
  }

  this.show = function() { 
    fill(255, 0, 200);
    rect(this.x, this.y	  , this.r*2, this.r*2);
    rect(this.x, this.y+31, this.r*2, this.r*2);
    rect(this.x, this.y+62, this.r*2, this.r*2);
    rect(this.x, this.y+93, this.r*2, this.r*2);
  }
}