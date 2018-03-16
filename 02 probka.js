console.log(process.argv)

console.log(process.argv[0])


console.log(process.argv.length)

var i
for (i=0; i<process.argv.length; i++) {
	console.log("arg nr", i, " = ", process.argv[i])
}