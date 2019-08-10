var c = document.getElementById("JSCanvas");
var ctx = c.getContext("2d");

function circle(x, y, r) {
	ctx.beginPath();
	ctx.arc(x, y, r, 0, 2 * Math.PI);
	ctx.stroke();
};
