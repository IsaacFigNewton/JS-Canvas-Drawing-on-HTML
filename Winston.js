var c = document.getElementById("JSCanvas");
var ctx = c.getContext("2d");

function circle(x, y, r) {
	ctx.beginPath();
	ctx.arc(x, y, r, 0, 2 * Math.PI);
	ctx.stroke();
};

function Winston(x, y, r) {
	var er = 4*r/30;
	var mr = 128*r/300;
	// face
	circle(x, y, r);

	// eyes
	circle(x-(43*r)/150, y-(59*r)/150, er);
	circle(x+(104*r)/150, y-(68*r)/150, er);

	// mouth
	circle(x+(57*r)/150, y+(30*r)/150, mr);
};

Winston(400, 400, 400);