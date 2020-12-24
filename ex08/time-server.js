function yyyymmddhhmm (d) {
	let str;
	str = d.getFullYear().toString();
	str += "-";
	let month = d.getMonth() + 1;
	if (month < 10)
		str += "0";
	str += month;
	str += "-";
	let date = d.getDate();
	if (date < 10)
		str += "0";
	str += date;
	str += " ";
	let hours = d.getHours();
	if (hours < 10)
		str += "0";
	str += hours;
	str += ":"
	let minutes = d.getMinutes();
	if (minutes < 10)
		str += "0";
	str += minutes;
	str += "\n";
	return (str);
}

function main () {
	const net = require("net");
	var server;
	server = net.createServer((c) => {
		//console.log("lient connected");
		//c.write("Hello world!\n");
		c.write(yyyymmddhhmm(new Date()));
		c.end();
	});
	server.listen(8080, () => {
		//console.log("server bound");
	});
}

try {
	main();
} catch {
	//console.log("some error happened");
}
