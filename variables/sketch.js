// with variables 9/17


var mouthSize = 70;
var x = 250;
var y= 30;

function setup() {
	createCanvas(500, 500);
}

function draw() {
	background(255);

	fill(x+5,x-75,x-150)
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
    vertex(x,y) 
    vertex(x+90,y+10)
    vertex(x+150,y+40) 
    vertex(x+150,y+100) 
    vertex(x+150,y+190) 
    vertex(x+150,y+320) 
    vertex(x+75,y+350) 
    vertex(x-75,y+350) 
    vertex(x-150,y+320) 
    vertex(x-150,y+100) 
    vertex(x-150,y+40) 
    vertex(x-90,y+10) 
    vertex(x,y) 
    endShape(CLOSE);

    fill(x-131,x-80,x-196);

    beginShape(QUADS);
    vertex(x-50,y+50)  //beginning of left eye
    vertex(x-30,y+70) 
    vertex(x-30,y+90) 
    vertex(x-50,y+110) 
    vertex(x-70,y+110) 
    vertex(x-90,y+90) 
    vertex(x-90,y+70) 
    vertex(x-70,y+50)
    vertex(x-50,y+50) 
    endShape(CLOSE); // end of left 

    fill(x-250,x+5,x+5)

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
fill   (x+5,x+5,x-150);

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
    fill(x-100,y-10,x+150)

    beginShape(QUAD_STRIP) // nose
    vertex(250,y+140);
    vertex(270,y+170);
    vertex(250,y+200);
    vertex(230,y+170);
    vertex(250,y+140);
    endShape(CLOSE); // end nose

    fill(x-250,x-250,x+5)

    circle(250,280,mouthSize); //mouth
   
}


// this is a comment