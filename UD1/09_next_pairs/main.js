const assert = require('assert').strict;

function nextPairs(value) {
    result = []
    if (value % 2 != 0){
        result[0] = value - 1;
        result[1] = value + 1;
    } else if (value % 2 == 0){
        result[0] = value - 2;
        result[1] = value + 2;
    }
    return result;
}

assert.deepStrictEqual(nextPairs(3), [2,4])
assert.deepStrictEqual(nextPairs(4), [2,6])
console.log("Completado")