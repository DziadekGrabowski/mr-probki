var i;
var pets1 = ['cat', 'dog', 'rat'];
for (i = 0; i < 10; i++) {
	console.log(pets1[i]);
	aaaa(1);
}
function aaaa(x) {
	var a = 1
	return x * x
}


var a = 5
console.log(aaaa(a))
console.log(a)



var pets = ['cat', 'dog', 'elephant'];
console.log("1", pets)

var filtered = pets.filter(function (pet) {
	return (pet !== 'elephant');
});
// console.log("2", pets.filter("cat"))

console.log("3", filtered)

var pizza = {
	toppings: ['cheese', 'sauce', 'pepperoni'],
	crust: 'deep dish',
	serves: 2
}

// console.log(pizza.length)
console.log("pizza")
console.log(pizza)
console.log(pizza.toppings[1])

console.log(pizza.crust)
console.log(pizza.serves)


console.log("--------")


function makeAddFunction(amount) {
	function add(number) {
		console.log(number);
		console.log(amount);
		return number + amount;
	}
	return add;
}

var addTwo = makeAddFunction(2);
var addFive = makeAddFunction(5);


console.log(addTwo(1) + addFive(1));