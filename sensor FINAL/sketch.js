var fft;
var electro;
var filter;
var filterFreq;
var filterRes;
var serial;
var serialAvailable;
var portName = "COM17"; //needs to change based on p5 serial port app
var xaxis, yaxis;

function preload() {
    electro = loadSound('electro.wav');
}
function setup() {
	createCanvas(1920, 1080);
    filter = new p5.LowPass();
    
    
    electro.disconnect();
    electro.connect(filter);
    fft = new p5.FFT();
	serial = new p5.SerialPort();
	serial.on('connected', serverConnected);
	serial.on('open', portOpen);
	serial.on('data', serialEvent);
	serial.on('close', portClose);
	serial.on('error', serialError);
	
	serial.open(portName);
	
}

function serverConnected() {
	console.log('connected');
}
function portOpen(){
	console.log('the serial port opened');
    serialAvailable = true;
}
function portClose(){
	console.log('the serial port closed');
    serialAvailable = false;
}
function serialError(){
	console.log('error');
    serialAvailable = false;
}
function serialEvent(){
	var currentString = serial.readLine();
	trim(currentString);
	if(!currentString) {
		return;
	}
//	sensorValue = currentString;
    
	xaxis = currentString.split(',')[0]; 
	yaxis = currentString.split(',')[1];
}
function draw() {
	var xRect = map(xaxis, 0, 1023, 0, 255);
	var yRect = map(yaxis, 0, 1023, 0, 255);
    if (serialAvailable) {
	background(xRect, yRect, 60);
    fill('white');
	ellipse(xRect, yRect, xRect+100, yRect+100);
	ellipse(xRect + 100, yRect, 100, 100);
	ellipse(xRect - 100, yRect + 100, 100, 100);
	ellipse(xRect + 100, yRect - 100, 100, 100);
    ellipse(300, 300, xRect, yRect);
	}
    else { 
	background(mouseX, mouseY, 60);
    fill('white');
	filterFreq = map(mouseX, 0, width, 10, 22050);
    filterRes = map(mouseY, 0, height, 15, 5);
    filter.set(filterFreq, filterRes);
    
    var spectrum = fft.analyze();    
    fill (0);
    noStroke();
    for (let i = 0; i < spectrum.length; i++) {
        let x = map(i, 0, spectrum.length, 0, width);
        let h = -height + map(spectrum[i], 0, 255, height, 0);
        rect(x, height, width / spectrum.length, h);
    }
        
    ellipse(300, 300, mouseX, mouseY);
    if (mouseIsPressed) {
        electro.play();
    }
    
    }

}

// this is a comment