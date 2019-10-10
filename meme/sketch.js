function setup() {
	createCanvas(500, 500);
}

function draw() {
	background(255);
	var str1 = "Democrat";
	var str2 = "Republican";
	var str3 = "Libertarian";
	var str4 = "Totalitarian";
	
	textAlign(LEFT);
	text(str1, width/4, 20, 250, 250);
	text(str2, width/2 + width/6, 20, 250, 250);
	text(str3, width/4, 250, 250, 250);
	text(str4, width/2 + width/6, 250, 250, 250);

}	

	
// this is a comment