function setup() {
	createCanvas(500, 500);
}

//face is drawn clockwise from top midpoint of head
function draw() {
	background(255);
	line(250,30,340,40) //1
	line(340,40,400,70) //2
	line(400,70,400,130) //3
	beginShape(TRIANGLE_STRIP); //right ear "4"
	vertex(380,180);
	vertex(400,130);
	vertex(420,100);
	vertex(450,120);
	vertex(450,150);
	vertex(400,220);
	vertex(420,170);
    endShape(CLOSE);
    line(400,220,400,350) //5
    line(400,350,325,380) //6
    line(325,380,175,380) //7
    line(175,380,100,350)
}

// this is a comment