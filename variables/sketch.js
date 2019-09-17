// with variables 9/17

function setup() {
	createCanvas(500, 500);
}

function draw() {
	background(255);

	fill(255,175,100)
    stroke(0)
 //    beginShape(QUAD_STRIP);  //face commenting out for now may look to reintegrate
	// vertex(250,30) 
 //    vertex(340,40)
	// vertex(400,70) 
	// vertex(400,130) 
 //    vertex(400,220) 
 //    vertex(400,350) 
 //    vertex(325,380) 
 //    vertex(175,380) 
 //    vertex(100,350) 
 //    vertex(100,130) 
 //    vertex(100,70) 
 //    vertex(160,40)
 //    vertex(250,30) 
 //    endShape(CLOSE);
    beginShape(QUADS);  //face 2
    vertex(250,30) 
    vertex(340,40)
    vertex(400,70) 
    vertex(400,130) 
    vertex(400,220) 
    vertex(400,350) 
    vertex(325,380) 
    vertex(175,380) 
    vertex(100,350) 
    vertex(100,130) 
    vertex(100,70) 
    vertex(160,40)
    vertex(250,30) 
    endShape(CLOSE);

    fill(119,170,54);

    beginShape(QUADS);
    vertex(200,80)  //beginning of left eye
    vertex(220,100) 
    vertex(220,120) 
    vertex(200,140) 
    vertex(180,140) 
    vertex(160,120) 
    vertex(160,100) 
    vertex(180,80)
    vertex(200,80) 
    endShape(CLOSE); // end of left 

    fill(0,255,255)

    beginShape();
    vertex(320,80) //22 beginning of right eye
    vertex(340,100) 
    vertex(340,120) 
    vertex(320,140) 
    vertex(300,140) 
    vertex(280,120) 
    vertex(280,100) 
    vertex(300,80)
    vertex(320,80) //28 end of right eye
    endShape(CLOSE);
fill   (255,255,100);

    beginShape(TRIANGLE_STRIP); //right ear "4" clockwise from left most point on ear
    vertex(380,180); 
    vertex(400,130);
    vertex(420,100);
    vertex(450,120);
    vertex(450,150);
    vertex(400,220);
    vertex(420,170);
    endShape(CLOSE);
    beginShape(TRIANGLE_STRIP); // left ear "10" clockwise from lowest point on ear
    vertex(100,220);
    vertex(50,150);
    vertex(50,120);
    vertex(70,100);
    vertex(100,120);
    vertex(130,180);
    vertex(100,200);
    endShape(CLOSE);
    
    stroke(0)
    fill(150,20,50)

    beginShape(QUAD_STRIP) // nose
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