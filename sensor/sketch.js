var serial;
var portName = "COM22";
var xaxis, yaxis;

function setup() {
	createCanvas(500, 500);
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
}
function portClose(){
	console.log('the serial port closed');
}
function serialError(){
	console.log('error');
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
	background(255);
	rect(xRect, yRect, 100, 100);
	rect(xRect + 100, yRect, 100, 100);
	rect(xRect - 100, yRect + 100, 100, 100);
	rect(xRect + 100, yRect - 100, 100, 100);
	
	
}

// this is a comment