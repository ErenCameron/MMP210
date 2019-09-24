// with variables 9/17


var mouthSize = 70; //mouth size
var x = 250; //x position
var y= 30;   //y position
var colorChange= 250; //rgb values

function setup() {
	createCanvas(500, 500);
}

function draw() {
	background(255);

	fill(colorChange+5,colorChange-75,colorChange-150)
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

    fill(colorChange-131,colorChange-80,colorChange-196);

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

    fill(colorChange-250,colorChange+5,colorChange+5)

    beginShape();
    vertex(x+70,y+50) //22 beginning of right eye
    vertex(x+90,y+70) 
    vertex(x+90,y+90) 
    vertex(x+70,y+110) 
    vertex(x+50,y+110) 
    vertex(x+30,y+90) 
    vertex(x+30,y+70) 
    vertex(x+50,y+50)
    vertex(x+70,y+50) //28 end of right eye
    endShape(CLOSE);
	
    fill(colorChange+5,colorChange+5,colorChange-150);

    beginShape(TRIANGLE_STRIP); //right ear "4" clockwise from left most point on ear
    vertex(x+130,y+150); 
    vertex(x+150,y+100);
    vertex(x+170,y+70);
    vertex(x+200,y+90);
    vertex(x+200,y+120);
    vertex(x+150,y+190);
    vertex(x+170,y+140);
    endShape(CLOSE);
    beginShape(TRIANGLE_STRIP); // left ear "10" clockwise from lowest point on ear
    vertex(x-150,y+190);
    vertex(x-200,y+120);
    vertex(x-200,y+90);
    vertex(x-180,y+70);
    vertex(x-150,y+90);
    vertex(x-120,y+150);
    vertex(x-150,y+170);
    endShape(CLOSE);
    
    stroke(0)
    fill(colorChange-100,colorChange-230,colorChange+150)

    beginShape(QUAD_STRIP) // nose
    vertex(250,y+140);
    vertex(270,y+170);
    vertex(250,y+200);
    vertex(230,y+170);
    vertex(250,y+140);
    endShape(CLOSE); // end nose

    fill(colorChange-250,colorChange-250,colorChange+5)

    circle(250,280,mouthSize); //mouth
   
}


// this is a comment