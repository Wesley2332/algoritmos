const readlineSync = require('readline-sync')
let numero
let soma = 0

while (numero !== 0) {
    numero = Number(readlineSync.question('digite um numero:'))
    soma += numero


}
console.log(soma)