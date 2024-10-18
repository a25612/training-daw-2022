// define variables
let x, y;
x = 4;
y = 2;

// Suma
function suma (x, y){
    return x + y;
}

// Resta
function resta (x, y){
    return x - y;
}

// Multiplicación
function multiplicacion(x, y){
    return x * y;
}

// División
function division(x, y){
    return x / y;
}


// print suma, resta, multiplicacion y division
console.log(`La suma es: ${suma(x, y)}`)
console.log(`La resta es: ${resta(x, y)}`)
console.log(`La multiplicacion es: ${multiplicacion(x, y)}`)
console.log(`La division es: ${division(x, y)}`)
console.log(`La suma total es: ${suma(x, y) + resta(x, y) + multiplicacion(x, y) + division(x, y)}`)
