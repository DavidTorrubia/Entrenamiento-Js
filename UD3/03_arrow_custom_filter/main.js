const assert = require('assert').strict;

function select(array, condition) { return condition(array) }

let pairs = (array) =>  {result = []; array.forEach(element => { if (element % 2 == 0){ result.push(element) }});return result;};
let gt15 = (array)  =>  {result = []; array.forEach(element => { if (element > 15){ result.push(element) }});return result;};
let lt10 = (array)  =>  {result = []; array.forEach(element => { if (element < 10){ result.push(element) }});return result;};

let values = [1, 2, 3, 5, 7, 13, 17, 23, 29]

// sólo pares
assert.deepStrictEqual(select(values, pairs), [2])
console.log("Test 1 - superado")
// mayores que 15
assert.deepStrictEqual(select(values, gt15), [17, 23, 29])
console.log("Test 2 - superado")
// menores de 10
assert.deepStrictEqual(select(values, lt10), [1, 2, 3, 5, 7])
console.log("Test 3 - superado")