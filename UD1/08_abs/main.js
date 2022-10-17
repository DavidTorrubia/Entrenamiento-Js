const assert = require('assert').strict;

function abs(value) {
    if (value < 0){
        value = value * -1;
    }
    return value;
}
assert.strictEqual(abs(4), 4)
assert.strictEqual(abs(-4), 4)
assert.strictEqual(abs(0), 0)
console.log("pasado")