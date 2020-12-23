if (process.argv.length != 3)
	return;
function count_nl(file)
{
	let nl = 0;
	for (let i = 0; i < file.length; i++)
	{
		if (file[i] === '\n')
			nl++;
	}
	return (nl);
}
let fs = require("fs");
fs.readFile(process.argv[2], (err, data) => {
	if (err)
	{
		console.log(0);
		return ;
	}
	console.log(count_nl(data.toString()));
});
