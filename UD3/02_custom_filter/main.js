const assert = require('assert').strict;

function select(array, condition) {
    return array.filter(condition);
}

//Función pares
function pairs(num) {
    return num % 2 === 0;
}

//Función mayores de 15
function gt15(num) {
    return num > 15;
}

//Función menores de 10
function lt10(num) {
    return num < 10;
}

let values = [1, 2, 3, 5, 7, 13, 17, 23, 29];

// solo pares
assert.deepStrictEqual(select(values, pairs), [2]);

// mayores que 15
assert.deepStrictEqual(select(values, gt15), [17, 23, 29]);

// menores de 10
assert.deepStrictEqual(select(values, lt10), [1, 2, 3, 5, 7]);

console.log('All tests passed!');
