if (process.argv.length != 5)
	return ;
const http = require("http");
const { BufferListStream } = require("bl");

var outputs = [];
var count = 3;

function flush_data()
{
	console.log(outputs[0]);
	console.log(outputs[1]);
	console.log(outputs[2]);
}

function my_get(url, index)
{
	http.get(url, (res) => {
		res.pipe(BufferListStream((err, data) => {
			if (err)
				return ;
			outputs[index] = data.toString();
			count--;
			if (count == 0)
				flush_data();
		}));
	}).on("error", (e) => {return ;});
}

try {
	my_get(process.argv[2], 0);
	my_get(process.argv[3], 1);
	my_get(process.argv[4], 2);
} catch (e) {
	return ;
}
