function setup() {
	createCanvas(500, 500);
}
var wordPosition = 100; //x position of the text
var wordSpeed = 10; //direction and speed of text
var wordSize = 50; //size of text
var wordPositionY = 200; //y position of text

function draw() {
    
	background(255);
    textSize (wordSize);
    text ("okay boomer", wordPosition, wordPositionY); 
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

}

	
// this is a comment