if (process.argv.length != 3)
	return ;
const http = require("http");
let url = process.argv[2];
try {
	http.get(url, (res) => {
		res.on("data", (chunk) => {
			console.log(chunk.toString());
		});
	}).on("error", (e) => {return ;});
} catch (e) {
	return ;
}
