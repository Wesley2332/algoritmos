const readlineSync = require('readline-sync')

const frase = readlineSync.question('escreva uma frase:')

console.log(frase.toUpperCase())
console.log(frase.replaceAll('o','i'))
console.log(frase.length)

