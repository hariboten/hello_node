function get_parsetime_json (date) {
	return ({
		"hour": date.getHours(),
		"minute": date.getMinutes(),
		"second": date.getSeconds()
	});
}

function get_unixtime_json (date) {
	return ({ "unixtime": date.getTime()});
}

function main () {
	if (process.argv.length != 3)
		return ;
	let port = parseInt(process.argv[2]);
	if (isNaN(port) || port < 0)
		return ;
	http = require("http");
	const server = http.createServer((req, res) => {
		if (req.url === "/api/parsetime") {
			res.writeHead(200);
			res.write(JSON.stringify(get_parsetime_json(new Date())));
		} else if (req.url === "/api/unixtime") {
			res.writeHead(200);
			res.write(JSON.stringify(get_unixtime_json(new Date())));
		} else {
			res.writeHead(404);
			res.write("404 not found");
		}
		res.end("\n");
	});
	server.on("error", () => {
		console.log("server: Error");
	});
	server.listen(port);
}

try {
	main();
} catch {

}
