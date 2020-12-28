function get_parsetime_json (query) {
	var date;
	if (query.iso === undefined)
		return ("invalied query");
	if (query.iso[query.iso.length - 1] !== "Z")
		query.iso += "Z";
	const qtime = new Date(query.iso)
	if (isNaN(qtime))
		return ("invalied query");
	else
		date = qtime;
	return ({
		"hour": date.getUTCHours(),
		"minute": date.getUTCMinutes(),
		"second": date.getUTCSeconds()
	});
}

function get_unixtime_json (query) {
	var date;
	if (query.iso === undefined)
		return ("invalied query");
	const qtime = new Date(query.iso)
	if (isNaN(qtime))
		return ("invalied query");
	else
		date = qtime;
	return ({ "unixtime": date.getTime()});
}

function main () {
	if (process.argv.length != 3)
		return ;
	let port = parseInt(process.argv[2]);
	if (isNaN(port) || port < 0)
		return ;
	const http = require("http");
	const querystring = require("querystring");
	const server = http.createServer((req, res) => {
		const url = req.url.split("?");
		if (url[0] === ("/api/parsetime")) {
			res.writeHead(200);
			res.write(JSON.stringify(get_parsetime_json(querystring.parse(url[1]))));
		} else if (url[0] === "/api/unixtime") {
			res.writeHead(200);
			res.write(JSON.stringify(get_unixtime_json(querystring.parse(url[1]))));
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
