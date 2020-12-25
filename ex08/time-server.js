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
	if (process.argv.length != 3)
		return ;
	let port = parseInt(process.argv[2]);
	if (isNaN(port) || port < 0)
		return ;
	const net = require("net");
	var server;
	server = net.createServer((c) => {
		//console.log("lient connected");
		//c.write("Hello world!\n");
		c.on("error", () => {
			return ;
		});
		c.write(yyyymmddhhmm(new Date()));
		c.end();
	});
	server.on("error", () => {
		return ;
	});
	server.listen(port, () => {
		//console.log("server bound");
		return ;
	});
}

try {
	main();
} catch {
	//console.log("some error happened");
}
