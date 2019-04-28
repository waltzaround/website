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



if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", function () {
        tilt([event.beta, event.gamma]);
    }, true);
} else if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', function () {
    	console.log('ios devicemotion e', event)
        tilt([event.acceleration.x * 2, event.acceleration.y * 2]);
    }, true);
} else {
    window.addEventListener("MozOrientation", function () {
        tilt([orientation.x * 50, orientation.y * 50]);
    }, true);
}

function tilt(orientation) {

		  console.log("Angular velocity along the X-axis " + orientation[0]);
		  console.log("Angular velocity along the Y-axis " + orientation[1]);



		var widthRatio = (orientation[0] + 180) / 360;
		colorHue = widthRatio * 720;

		var heightRatio = (orientation[1] + 180) / 360;
		colorSaturation = heightRatio * 100;

		var coolBackground = document.getElementById("coolBackground");

		coolBackground.style.backgroundColor = "hsl(" + colorHue + ", " + colorSaturation + "%, 70%)";

		// console.log( "hsl(" + colorHue + ", " + colorSaturation + ", 0.7)");

}



function mousePos (e) {
        mouseX = event.clientX + document.body.scrollLeft;
        mouseY = event.clientX + document.body.scrollTop;

		var widthRatio = mouseX / screenWidth;
		colorHue = widthRatio * 360 * 0.4;

		var heightRatio = mouseY / screenHeight;
		colorSaturation = heightRatio * 100;

		var coolBackground = document.getElementById("coolBackground");

		coolBackground.style.backgroundColor = "hsl(" + colorHue + ", " + colorSaturation + "%, 70%)";
		// console.log( "hsl(" + colorHue + ", " + colorSaturation + ", 0.7)");


		return true;
}


