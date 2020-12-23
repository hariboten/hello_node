if (process.argv.length != 3)
	return;
let fs = require("fs");
let file;
try {
	file = fs.readFileSync(process.argv[2]).toString();
} catch (e) {
	console.log(0);
	return ;
}
let nl = 0;
for (let i = 0; i < file.length; i++)
{
	if (file[i] === '\n')
		nl++;
}
console.log(nl);
