var snake;
var scl = 20;
var food;

function setup(){
	createCanvas(600,600);
	snake = new Snake();
	frameRate(10);
	pickFoodLocation();
}

function pickFoodLocation(){
	var cols = floor(width/scl);
	var rows = floor(height/scl);
	food = createVector(floor(random(rows)),floor(random(cols)));
	food.mult(scl);
}


function draw(){
	background(51);
	snake.death();
	if(snake.eat(food)) pickFoodLocation();
	
	snake.move();
	snake.show();
	fill(255,0,100);
	rect(food.x, food.y, scl, scl);
}

function keyPressed(){
	if(keyCode === UP_ARROW && snake.yspeed != 1){
		snake.dir(0,-1);
	}
	else if(keyCode === DOWN_ARROW && snake.yspeed != -1){
		snake.dir(0,1);
	}
	else if(keyCode === LEFT_ARROW && snake.xspeed != 1){
		snake.dir(-1,0);
	}
	else if(keyCode === RIGHT_ARROW && snake.xspeed != -1){
		snake.dir(1,0);
	}
}

