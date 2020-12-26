if (process.argv.length != 3)
	return ;
const http = require("http");
const { BufferListStream } = require("bl");
let url = process.argv[2];
http.get(url, (res) => {
	res.pipe(BufferListStream((err, data) => {
		if (err)
			return ;
		const str = data.toString();
		console.log(str.length);
		console.log(str);
	}));
}).on("error", (e) => {return ;});
