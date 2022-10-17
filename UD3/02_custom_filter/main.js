const assert = require('assert').strict;

function select(array, condition) {
    return condition(array)
}

function pairs(array){
    result = []
    array.forEach(element => { if (element % 2 == 0){ result.push(element) }});
    return result;
}

function impairslt10(array){
    result = []
    array.forEach(element => { if (element % 2 != 0 && element < 10){ result.push(element) }});
    return result;
}

function gt15(array){
    result = []
    array.forEach(element => { if (element > 15){ result.push(element) }});
    return result;
}

function lt10(array){
    result = []
    array.forEach(element => { if (element < 10){ result.push(element) }});
    return result;
}
let values = [1, 2, 3, 5, 7, 13, 17, 23, 29]

// sólo pares
assert.deepStrictEqual(select(values, pairs), [2])
console.log("Test 1 - Completado")
// mayores que 15
assert.deepStrictEqual(select(values, gt15), [17, 23, 29])
console.log("Test 2 - Completado")
// menores de 10
assert.deepStrictEqual(select(values, lt10), [1, 2, 3, 5, 7])
console.log("Test 3 - Completado")
// impares menores de 10
assert.deepStrictEqual(select(values, impairslt10), [1, 3, 5, 7])
console.log("Test 4 - Completado")