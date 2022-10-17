const assert = require('assert').strict;

function toHoursMinutesSeconds(value) {
    hours = 0; minutes = 0;
    while (value >= 3600){ hours += 1 ; value -= 3600;}
    while (value >= 60){ minutes += 1; value -= 60; }
    return hours + ":" + minutes + ":" + value 
}

assert.deepStrictEqual(toHoursMinutesSeconds(3600), "1:0:0")
assert.deepStrictEqual(toHoursMinutesSeconds(3720), "1:2:0")
assert.deepStrictEqual(toHoursMinutesSeconds(3725), "1:2:5")
console.log("Completado")