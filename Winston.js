var c = document.getElementById("JSCanvas");
var ctx = c.getContext("2d");

function circle(x, y, r) {
	ctx.beginPath();
	ctx.arc(x, y, r, 0, 2 * Math.PI);
	ctx.stroke();
};

function Winston(x, y, r) {
	// face
	circle(x, y, r);

	// eyes
	circle(x-43-(.25*r), y-59-(.25*r), 4*r/30);
	circle(x+104+(.25*r), y-68-(.25*r), 4*r/30);

	// mouth
	circle(x+57+(.125*r), y+30+(.125*r), 128*r/300);
};

Winston(400, 400, 300);