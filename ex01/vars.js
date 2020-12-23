function a_or_an(str)
{
	if (str[0] === 'a')
		return ("an")
	if (str[0] === 'e')
		return ("an")
	if (str[0] === 'i')
		return ("an")
	if (str[0] === 'o')
		return ("an")
	if (str[0] === 'u')
		return ("an")
	return ("a")
}

function vars(arg){
	console.log(arg + " is " + a_or_an(typeof arg) + " " + typeof arg + ".")
}

vars("42")
vars(42)
vars([42])
vars({})
vars(true)
vars(undefined)
