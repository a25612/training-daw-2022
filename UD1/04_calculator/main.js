// Declarar 2 variables con número e imprimir por consola (mediante console.log()) el valor de:
// Suma
// Resta
// Multiplicación
// División
// define variables
let x, y;
x = 4;
y = 2;

function suma (x, y){
    return x + y;
}

function resta (x, y){
    return x - y;
}

function multiplicacion(x, y){
    return x * y;
}

function division(x, y){
    return x / y;
}


// print sum, substract, multiply and divide
console.log(`La suma es: ${suma(x, y)}`)
console.log(`La resta es: ${resta(x, y)}`)
console.log(`La multiplicacion es: ${multiplicacion(x, y)}`)
console.log(`La division es: ${division(x, y)}`)
console.log(`La suma total es: ${suma(x, y) + resta(x, y) + multiplicacion(x, y) + division(x, y)}`)
