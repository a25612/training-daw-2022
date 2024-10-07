function esBisiesto(ano) {
    if ((ano % 4 === 0 && ano % 100 === 0) && (ano % 400 === 0)) {
        return `${ano} es un año bisiesto.`;
    } else {
        return `${ano} no es un año bisiesto.`;
    }
}


console.log(esBisiesto(1997)); // No es bisiesto
console.log(esBisiesto(1900)); // No es bisiesto
console.log(esBisiesto(2000)); // Es bisiesto
