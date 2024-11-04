function hello(name, lastname, years) {
    return `Hola ${name} ${lastname}, tienes ${years} años de edad`
}

let result = hello('John', 'Anderton', 35)
if (result === "Hola John Anderton, tienes 35 años de edad") {
    console.log(result)
    return
} else {
    console.log('Failed')
}