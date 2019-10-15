var corn;
function preload(){
    corn = loadImage("IMG_5011.jpg")
}


function setup() {
	createCanvas(500, 500);
}

function draw() {
	background(255);
    image(corn, 150, 150, 200, 200)
    textAlign(CENTER);
    textSize(100);
    fill('white');
    stroke('black');
    strokeWeight(20);
    text("CORN",260,100);
    text("BALL",260,470);
}

	
// this is a comment