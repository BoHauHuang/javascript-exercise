function Snake(){
	this.x = 0;
	this.y = 0;
	this.xspeed = 1;
	this.yspeed = 0;
	this.length = 0;
	this.score = 0;
	this.tail = [];

	this.dir = function(x, y){
		this.xspeed = x;
		this.yspeed = y;
	}

	this.move = function(){
		if(this.length === this.tail.length){
			for(var i = 0 ; i < this.tail.length-1 ; i++){
				this.tail[i] = this.tail[i+1];
			}
		}
		
		this.tail[this.length-1] = createVector(this.x, this.y);

		this.x = this.x + this.xspeed*scl;
		this.y = this.y + this.yspeed*scl;

		this.x = constrain(this.x, 0, width-scl);
		this.y = constrain(this.y, 0, height-scl)
	}

	this.eat = function(pos){
		var d = dist(this.x, this.y, pos.x, pos.y);
		if (d<1){
			this.length++;
			this.score++;
			return true;
		}
		else return false;
	}

	this.death = function(){
		if(this.x < 0 || this.x > width || this.y < 0 || this.y > height){
			this.total = 0;
			this.score = 0;
			this.tail = [];
			return true;
		}
		for(var i = 0 ; i < this.tail.length ; i++){
			var pos = this.tail[i];
			var d = dist(this.x, this.y, pos.x, pos.y);
			if(d < 1){
				this.score = 0;
				this.total = 0;
				this.tail = [];
				return true;
			}
		}
		return false;
	}

	this.show = function(){

		fill(255);
		for(var i = 0 ; i < this.tail.length ; i++){
			rect(this.tail[i].x, this.tail[i].y, scl, scl,5);
		}
		rect(this.x, this.y, scl, scl,5);
	}
}
