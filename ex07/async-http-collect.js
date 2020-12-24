if (process.argv.length != 5)
	return ;
const http = require("http");
const { BufferList } = require("bl");

function sync_get_rq(url)
{
	return new Promise((resolve, reject) => {
		http.get(url, (res) => {
			const bl = new BufferList();
			res.setEncoding("utf8");
			res.on("data", (chunk) => {
				bl.append(chunk);
			});
			res.on("end", () => {
				const data = bl.toString();
				resolve(data);
			});
		}).on("error", (e) => {
			resolve("");
		});
	});
}

sync_get_rq(process.argv[2])
	.then((data) => {
		console.log(data);
		return sync_get_rq(process.argv[3]);
	})
	.then((data) => {
		console.log(data);
		return sync_get_rq(process.argv[4]);
	})
	.then((data) => {
		console.log(data);
	});
