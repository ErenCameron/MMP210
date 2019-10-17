function setup() {
	createCanvas(500, 500);
}

function draw() {
	background(255);
	var str1 = "Democrat";
	var str2 = "Republican";
	var str3 = "Libertarian";
	var str4 = "Totalitarian";
    var str5 = "Alexandria Ocasio Cortez";
    var str6 = "Armed Open Carry";
    var str7 = "Age of Consent";
    var str8 = "Agent of Chaos";
	fill("black");
    
	textAlign(LEFT);
    textSize(20);
	text(str1, width/4, 20, 250, 250);
	text(str2, width/2 + width/6, 20, 250, 250);
	text(str3, width/4, 250, 250, 250);
	text(str4, width/2 + width/6, 250, 250, 250);
    
    
    if (mouseX < width/2 && mouseY < height/2) {
         text(str5, width/4, 100, 75 , 75) && fill("red");
    } else { 
        rect (50,50, 180,180);
    }
    if (mouseX > width/2 && mouseY < height/2) {
    text(str6, width/2 + width/6, 100, 75, 75) && fill("blue");
    } else {
        rect (270,50, 180,180);
    }
    if (mouseX < width/2 && mouseY > height/2) {
    text(str7, width/4, 350, 75 , 75) && fill("purple");
    } else {
        rect (50, 270, 180,180);
    }
     if (mouseX > width/2 && mouseY > height/2) {
    text(str8, width/2 + width/6, 350, 75, 75) && fill("orange");
     } else {
        rect (270,270, 180,180);
    }
    
}

	
// this is a comment