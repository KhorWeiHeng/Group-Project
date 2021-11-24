let port, reader, writer;

async function setup() {
	createCanvas(windowWidth, windowHeight);
	noLoop();
	({ port, reader, writer } = await getPort());
	loop();
}

async function draw() {
	try {
		while (true) {
			const { value, done } = await reader.read();

			if (done) {
				// Allow the serial port to be closed later.
				reader.releaseLock();
				break;
			}
			if (value == "Boom1") {
        // random RGB color
				background(color("RED"));
        textSize(22);
        text("STOP: 3cm away from object! (Stop moving)", 60, 100);
        console.log(value);
			}
	if (value == "Boom2") {
        // random RGB color
				background(color("RED"));
        textSize(22);
        text("STOP: 4cm away from object! (Stop Moving) ", 60, 100);
        console.log(value);
			}

      	if (value == "Boom3") {
        // random RGB color
				background(color("RED"));
        textSize(22);
        text("STOP: 5cm away from object! (Stop Moving)", 60, 100);
        console.log(value);
			}
	if (value == "Boom4") {
        // random RGB color
				background(color("RED"));
        textSize(22);
        text("STOP: 6cm away from object! (Stop Moving)", 60, 100);
        console.log(value);
			}

if (value == "Boom5") {
        // random RGB color
				background(color("RED"));
        textSize(22);
        text("STOP: 7cm away from object! (Stop Moving)", 60, 100);
        console.log(value);
			}
    	if (value == "Warning1") {
        // random RGB color
				background(color("ORANGE"));
        textSize(22);
        text("WARNING: 8cm away from object! (WARNING IMPACT AHEAD)", 60, 100);
        console.log(value);
			}
      if (value == "Warning2") {
        // random RGB color
				background(color("ORANGE"));
        textSize(22);
        text("WARNING: 9cm away from object! (WARNING IMPACT AHEAD", 60, 100);
				console.log(value);
			}

      if (value == "Obstacle Ahead1") {
        // random RGB color
				background(color("YELLOW"));
        textSize(22);
        text("BE CAREFUL: 10 away from object! (ALERT IMPACT AHEAD)", 60, 100);
				console.log(value);
			}

           if (value == "Obstacle Ahead2") {
        // random RGB color
				background(color("YELLOW"));
        textSize(22);
        text("BE CAREFUL: 11 away from object! (ALERT IMPACT AHEAD)", 60, 100);
				console.log(value);
			}

      if (value == "Safe") {
        // random RGB color
				background(color("GREEN"));
        textSize(22);
        text("SAFE: NO OBSTACLES AHEAD (SAFE TO GO)", 60, 100);
				console.log(value);
      }
		}
	} catch (e) { console.error(e) }
}