function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	//Using if statement to identify AM and PM between 0-23 o'clock (AM: 0-11, PM: 12-23)
	if (hour() >= 0 && hour() < 12) {
		background('#5b8c85');
	} else {
		background(109, 144, 214);
	}
	translate(windowWidth / 2, windowHeight / 2);
	let m = minute();
	let h = hour();
	//m = map(m, 0, 59, 0, 60);

	let mySecond = second();

	push();
	noStroke();
	fill(193, 196, 201);
	//using m/60 to caculate the arc ratio that indicates how many minutes of 60 minutes have passed
	//arc(0, 0, windowHeight/3, windowHeight/3, 3/4 * TWO_PI, 3/4 * TWO_PI + m/60 * TWO_PI);
	arc(
		0,
		0,
		windowHeight / 3,
		windowHeight / 3,
		-HALF_PI,
		-HALF_PI + (m / 60) * TWO_PI
	);
	pop();
	// console.log(3/4 * TWO_PI + m/60 * TWO_PI)

	//the number of lines shows the hours, so the angle = 360(TAU or TWO_PI) / hours()
	push();
	strokeWeight(3);
	if (h > 12 && h <= 23) {
		//hours that are larger than 12 will be subtracted by 12
		let angle = TAU / (h - 12);
		for (let i = 1; i <= h - 12; i++) {
			stroke(255, 204, 0);
			let x = (cos(angle * i - HALF_PI) * windowHeight) / 4.5;
			let y = (sin(angle * i - HALF_PI) * windowHeight) / 4.5;
			let secondToLengthX = map(mySecond, 0, 59, 0, x);
			let secondToLengthY = map(mySecond, 0, 59, 0, y);
			line(0, 0, secondToLengthX, secondToLengthY);
		}
	} else if (h >= 1 && h <= 12) {
		let angle = TAU / h;
		for (let i = 1; i <= h; i++) {
			let x = (cos(angle * i - HALF_PI) * windowHeight) / 4.5;
			let y = (sin(angle * i - HALF_PI) * windowHeight) / 4.5;
			let secondToLengthX = map(mySecond, 0, 59, 0, x);
			let secondToLengthY = map(mySecond, 0, 59, 0, y);
			line(0, 0, secondToLengthX, secondToLengthY);
			//line(0, 0, x, y);
		}
	} else if (h == 0) {
		//0 cannot be devided by 0
		let angle = TAU / 12;
		for (let i = 0; i < 12; i++) {
			let x = (cos(angle * i - HALF_PI) * windowHeight) / 4.5;
			let y = (sin(angle * i - HALF_PI) * windowHeight) / 4.5;
			let secondToLengthX = map(mySecond, 0, 59, 0, x);
			let secondToLengthY = map(mySecond, 0, 59, 0, y);
			line(0, 0, secondToLengthX, secondToLengthY);
			//line(0, 0, x, y);
		}
	}
	pop();

}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
