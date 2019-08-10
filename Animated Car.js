var c  document.getElementById("JSCanvas");
var ctx = c.getContext("2d");

function circle(x, y, r) {
	ctx.beginPath();
	ctx.arc(x, y, r, 0, 2 * Math.PI);
	ctx.stroke();
};

function rect(x, y, h, w) {
	ctx.strokeRect(x,y,h,w); 
};

function car(x, y) {
	// draw the car body
	ctx.fillRect(x, 200, 100, 20);
	ctx.fillRect(x + 15, 178, 70, 40);

	// draw the wheels
	circle(x + 25, 221, 10);
	circle(x + 75, 221, 10);
};

car(10, 10);
/*var x = 0;

for(i = 1; i > 0; i++) {
	
	if (x<800) {
		
	} else {
		x = 0;
	};
	x++;
	
};