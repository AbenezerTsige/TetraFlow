function Bullet(x, y) {
	this.x = x;
  	this.y = y;
  	this.r = 8;

  	this.show = function() { 
  		noStroke();
    	fill(255, 0, 20);
    	ellipse(this.x, this.y, this.r*2, this.r*2);
    }

    this.hits = function(bullet)	{
    	var d = dist(this.x, this.y, bullet.x, bullet.y);
    	if(d < this.r + bullet.r) {
    		return true;
    	} else {
    		return false;
    	}
    }

    this.move = function()	{
    	this.y = this.y - 4;
    }

   // this.evaporate = function() {
    //	this.r = 0;
   // }
  
}