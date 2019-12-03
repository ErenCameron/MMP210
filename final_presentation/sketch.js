
var slideNumber = 0;
var totalSlides = 3;

var nextBtnX = 700;
var nextBtnY = 500;
var nextBtnSize = 50;

var prevBtnX = 100;
var prevBtnY = 500;
var prevBtnW = 100;
var prevBtnH = 50;

var first; 
var second;

function preload() {
    first = loadImage("1.jpg"); //put image here
	second= loadImage("2.jpg");
}

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(51);
 
    if (slideNumber == 0) {
        // content for slide number 0
        fill(255);
        textSize(60
				);
        textAlign(CENTER, CENTER);
        text("Music? Colors? Yes!", width/2, height/2);
        textSize(30);
        text("Xxx_P34chy_Shr00m_xxX & 420_b00ty_w1z4rd", width/2, height/2 + 50);
        
    } else if (slideNumber == 1) {
        // content for slide number 1
        
        fill(255);
     	if (mouseIsPressed) {
        image(second, 0, 0, width, height);
		} else {
		image(first, 0, 0, width, height);	
		}
        
       
    } else if (slideNumber == 2) {
        
        // theme
      fill(255);
		textSize(100);
        text("Yes!", width/2, height/2 - 50);
    }
    
    
    /* drawing buttons */
    
    // next btn
    if (slideNumber < totalSlides - 1) {
        fill(255);
        noStroke();
        ellipse(nextBtnX, nextBtnY, nextBtnSize);
        fill(0);
        textSize(20);
        textAlign(CENTER, CENTER);
        text("Next", nextBtnX, nextBtnY);
    }
    
    
    // prev btn
    if (slideNumber > 0) {
       fill(255);
        noStroke();
        rect(prevBtnX, prevBtnY, prevBtnW, prevBtnH);
        fill(0);
        textSize(20);
        textAlign(LEFT, TOP);
        text("Previous", prevBtnX + 10, prevBtnY + 10);  
    }
   
    
}

function mousePressed() {
    
    // next btn
    var d = dist(mouseX, mouseY, nextBtnX, nextBtnY);
    if (d < nextBtnSize/2 && slideNumber < totalSlides - 1) {
        slideNumber++;    
    }
    
    // prev btn
    if (mouseX > prevBtnX &&
       mouseX < prevBtnX + prevBtnW &&
       mouseY > prevBtnY &&
       mouseY < prevBtnY + prevBtnH &&
       slideNumber > 0) {
        slideNumber--;    
    }
}

