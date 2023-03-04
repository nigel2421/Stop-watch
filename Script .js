var minutes = 0;
var seconds = 0;
var milliseconds = 0;
var timer;

function start() {
	timer = setInterval(run, 10);
}

function stop() {
	clearInterval(timer);
}

function reset() {
	stop();
	minutes = 0;
	seconds = 0;
	milliseconds = 0;
	document.getElementById("minutes").innerText = "00";
	document.getElementById("seconds").innerText = "00";
	document.getElementById("milliseconds").innerText = "00";
}

function run() {
	milliseconds++;
	if (milliseconds == 100) {
		milliseconds = 0;
		seconds++;
	}
	if (seconds == 60) {
		seconds = 0;
		minutes++;
	}
	document.getElementById("minutes").innerText = pad(minutes);
	document.getElementById("seconds").innerText = pad(seconds);
	document.getElementById("milliseconds").innerText = pad(milliseconds);
}

function pad(n) {
	return (n < 10 ? "0" + n : n);
}
