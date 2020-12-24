if (process.argv.length != 3)
	return ;
const http = require("http");
const { BufferList } = require("bl");
const bl = new BufferList();
let url = process.argv[2];
http.get(url, (res) => {
	const { statusCode } = res;
	if (statusCode !== 200)
		return ;
	res.setEncoding("utf8");
	res.on("data", (chunk) => {
		bl.append(chunk);
	});
	res.on("end", () => {
		const data = bl.toString();
		console.log(data.length);
		console.log(data);
	});
}).on("error", (e) => {return ;});
