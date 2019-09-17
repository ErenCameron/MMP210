function setup() {
	createCanvas(500, 500);
}

//face is drawn clockwise from top midpoint of head
function draw() {
	background(255);

	fill(255,255,100)
    stroke(0)

	line(250,30,340,40) //1
	line(340,40,400,70) //2
	line(400,70,400,130) //3
	beginShape(TRIANGLE_STRIP); //right ear "4" clockwise from left most point on ear
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
    line(325,380,175,380) //7 this is the bottom line of the face
    line(175,380,100,350) //8
    line(100,350,100,220) //9
    beginShape(TRIANGLE_STRIP); // left ear "10" clockwise from lowest point on ear
    vertex(100,220);
    vertex(50,150);
    vertex(50,120);
    vertex(70,100);
    vertex(100,120);
    vertex(130,180);
    vertex(100,200);
    endShape(CLOSE);
    line(100,130,100,70) //11
    line(100,70,160,40) //12
    line(160,40,250,30) //13 end of face back at mid point
    line(200,80,220,100) //14 beginning of left eye
    line(220,100,220,120) //15
    line(220,120,200,140) //16
    line(200,140,180,140) //17
    line(180,140,160,120) //18
    line(160,120,160,100) //19
    line(160,100,180,80) //20
    line(180,80,200,80) //21 end of left eye
    line(320,80,340,100) //22 beginning of right eye
    line(340,100,340,120) //23
    line(340,120,320,140) //24
    line(320,140,300,140) //24
    line(300,140,280,120) //25
    line(280,120,280,100) //26
    line(280,100,300,80) //27
    line(300,80,320,80) //28 end of right eye

    stroke(0)
    fill(50,205,50)

    beginShape(TRIANGLE_FAN) // nose
    vertex(250,170);
    vertex(270,200);
    vertex(250,230);
    vertex(230,200);
    vertex(250,170);
    endShape(CLOSE); // end nose

    fill(0,0,255)

    circle(250,280,70); //mouth
   
}


// this is a comment