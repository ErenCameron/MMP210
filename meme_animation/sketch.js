function setup() {
	createCanvas(500, 500);
}
var wordPosition = 100; //x position of the text
var wordSpeed = 10; //direction and speed of text
var wordSize = 50; //size of text
var wordPositionY = 200; //y position of text

function draw() {
    
	background(255);
    

    if (keyIsPressed) {
    push();
    translate(250,250);
    rotate( radians(frameCount) );
    wordPosition = -100;
    wordPositionY = -100;    
        }
    text ("ok boomer", wordPosition, 200); 
    textSize (wordSize); 
    wordPosition += wordSpeed;
    if (wordPosition > width || wordPosition <-300) { //moves text from right to left 
        wordSpeed *= -1;
    }                                                 //and changes direction when hits side
    
	if (mouseIsPressed) {
        wordSize = wordSize + 5;  //changes size of the text and
        if (wordSize > 200) {
            wordSize = 0;
        }
    }
    if (mouseIsPressed) {
        rotate(frameCount * PI / 50);
    }
}

	
// this is a comment