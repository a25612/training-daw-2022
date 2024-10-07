function printMultiplicationTables() {
    for (let i = 1;  i <= 10; i++){
        console.log(`la tabla del ${i} es:`);
        for (let j = 1; j <= 9; j++){
            console.log(`${i} x ${j} = ${i * j}`)
        }
        console.log("")
    }
}

printMultiplicationTables()
