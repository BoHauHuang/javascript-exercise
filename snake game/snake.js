var snake;
var scl = 20;
var food;
var fontsize = 60;

function setup(){
	createCanvas(600,600);
	textSize(fontsize);
	snake = new Snake();
	
	pickFoodLocation();
}

function pickFoodLocation(){
	var cols = floor(width/scl);
	var rows = floor(height/scl);
	food = createVector(floor(random(rows)),floor(random(cols)));
	food.mult(scl);
}


function draw(){
	frameRate(snake.score*0.1+8);
	background(51);
	drawWords(snake.score);

	if(snake.death()) setup();
	if(snake.eat(food)) pickFoodLocation();
	
	snake.move();
	snake.show();
	fill(255,0,100);
	rect(food.x, food.y, scl, scl, 5);
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

function drawWords(score){
	fill(255);
	text(score, width*0.9, height*0.1);
}

