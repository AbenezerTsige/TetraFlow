function Gun() {
	this.x = width / 2;

  this.show = function() { 
    	fill(255, 0, 200);
      rectMode(CENTER);
    	rect(this.x, height-20, 30, 30);
	}

	this.move = function(dir) {
		this.x += dir*5;
	}
}