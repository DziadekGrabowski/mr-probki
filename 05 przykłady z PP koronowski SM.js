var i, j, k;

var c = function (str) {
    console.log(str)
}

function h1(str) {
    c('\n** ' + str + ' **')
}

h1("var frutis = new Array('apples', 'plums', 'bananas')")
var frutis = new Array('apples', 'plums', 'bananas')
c(frutis)

h1("var frutis2 = ['apples', 'plums', 'bananas']")
var frutis2 = ['apples', 'plums', 'bananas']
c(frutis2)

h1("var some = new Array(100)")
var some = new Array(100)
c(some)


h1("var list = [];")
var list = [];
c(list)


h1('var list = [1, 2, 3, 4, 1000]')
var list = [1, 2, 3, 4, 1000]
c(list)




h1('newList1 = list.slice(0)')
newList1 = list.slice(0)
c(newList1)

h1('newList2 = list.slice(2)')
newList2 = list.slice(2)
c(newList2)


var longEmpty = new Array(256).join('');
h1("var longEmpty = new Array(256).join('');")
c(longEmpty)
c(longEmpty.length)


h1("var calc = {};   calc.count = function (a, b) {  return (a + b) }")


var calc = {}
calc.sum = 0
calc.count = function (a, b) {
    this.sum += a + b
    return (a + b)
}




h1("calc.count(1,2)")
i = calc.count(1, 2)
c(i)
h1("calc.sum=")
c(calc.sum)

h1("calc.count(3,4)")
i = calc.count(3, 4)
c(i)
h1("calc.sum=")
c(calc.sum)


