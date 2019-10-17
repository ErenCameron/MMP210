function setup() {
	createCanvas(500, 500);
}
var wordPosition = 100;
var wordSpeed = 10;

function draw() {
    
	background(255);
    textSize (50);
    text ("okay boomer", wordPosition, 200);
    wordPosition += wordSpeed;
    if (wordPosition > width || wordPosition <-150) {
        wordSpeed *= -1;
    }
	
    
}

	
// this is a comment