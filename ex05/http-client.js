if (process.argv.length != 3)
	return ;
const http = require("http");
let url = process.argv[2];
http.get(url, (res) => {
	const { statusCode } = res;
	if (statusCode !== 200)
		return ;
	res.setEncoding("utf8");
	res.on("data", (chunk) => {
		console.log(chunk);
	});
	res.on("end", () => {
		return ;
	});
}).on("error", (e) => {return ;});
