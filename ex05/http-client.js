if (process.argv.length != 3)
	return ;
const http = require("http");
let url = process.argv[2];
http.get(url, (res) => {
	const { statusCode } = res;
	if (statusCode !== 200)
		return ;
	res.setEncoding("utf8");
	let	rawData = "";
	res.on("data", (chunk) => {
		rawData += chunk;
	});
	res.on("end", () => {
		console.log(rawData);
	});
}).on("error", (e) => {return ;});
