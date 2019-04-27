document.onmousemove = mousePos;

//declare variables
var screenWidth = document.documentElement.clientWidth;
var screenHeight = document.documentElement.clientHeight;
var mouseClick;
var keyClicked;

var mouseX = 0;
var mouseY = 0;
var colorHue;
var colorSaturation;


function mousePos (e) {
        mouseX = event.clientX + document.body.scrollLeft;
        mouseY = event.clientX + document.body.scrollTop;

		var widthRatio = mouseX / screenWidth;
		colorHue = widthRatio * 360 * 1.5;

		var heightRatio = mouseY / screenHeight;
		colorSaturation = heightRatio * 50;

		var coolBackground = document.getElementById("coolBackground");

		coolBackground.style.backgroundColor = "hsl(" + colorHue + ", " + colorSaturation + "%, 70%)";
		console.log( "hsl(" + colorHue + ", " + colorSaturation + ", 0.7)");


		return true;
}


