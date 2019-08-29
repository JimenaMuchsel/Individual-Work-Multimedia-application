var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var radius = 7;
var i = 0;
var x = 0;
var speed= 1;
var delay = 3000;
var gradient = ctx.createLinearGradient(0, 0, 1300, 0);
gradient.addColorStop("0", "yellow");
gradient.addColorStop("0.2", "blue");
gradient.addColorStop("1.0", "red");


var lineArray = [
[7,120],
[30,100],
[75,100], 
[120,110], 
[170,90],  
[220,85], 
[280,95],
[340,130], 
[380,170], 
[430,150],
[470,145],
[520,155],
[480,200],
[450,230],
[480,270], 
[525,315], 
[570,350],
[640,360], 
[700,350], 
[750,330], 
[810,280],
[800,220], 
[810,160],
[830,120],
[860,180],
[870,240],
[920,250],
[980,260],
[1040,270],
[990,300],
[930,310],
[870,310],
[840,350],
[790,390],
[760,420],
[710,450],
[670,470],
[610,490],
[530,490],
[460,470],
[400,430],
[350,390],
[330,410],
[320,440],
[290,470],
[270,430],
[260,390],
[240,320],
[200,270],
[150,220],
[100,180],
[50,150],
[7,120],
[30, 100]
];

function main() {
	drawDot();
	drawStrokeAnim();
	// must wait for stroke anim to finish!
	setTimeout("update()",delay*55);
}

function update() {
	ctx.clearRect(0,0,c.width,c.height);
	drawDot();
	drawStroke();
	x = x+speed;
	if (x+1000 >= c.width || x <= 0) {
		speed = -speed;
	}
	if (click == true){
		// x is back to starting point
		x = 0;
		// then clear
		ctx.clearRect(0,0,c.width,c.height);
	}
	requestAnimationFrame(update);
}

function drawDot(){
	ctx.beginPath();
	for (var i in lineArray){
		ctx.arc(lineArray[i][0]+x,lineArray[i][1], radius, 0, 2 * Math.PI);
		ctx.moveTo(0,0);
	}
	ctx.fill();
}

function drawStroke(){
	ctx.beginPath();
	for (var i in lineArray) {
		ctx.lineTo(lineArray[i][0]+x,lineArray[i][1]);
	}
	ctx.lineWidth = 7;
	ctx.strokeStyle=gradient;
	ctx.stroke();
}

function drawStrokeAnim(){
	ctx.beginPath();
	ctx.lineTo(lineArray[i][0],lineArray[i][1]);
	ctx.lineTo(lineArray[i+1][0],lineArray[i+1][1]);
	ctx.lineWidth = 7;
	ctx.strokeStyle=gradient;
	ctx.stroke();
	i = i+1;
	if (i <= lineArray.length) {
		setTimeout("drawStrokeAnim()", delay);
	}
}

var click = false;
function clearCanvas(){
	if (click == false) {
		click = true;
	} else {
		click = false;
	}	
}
main();