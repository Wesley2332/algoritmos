let nome = 'Wesley' 
let email = 'novac@21'

let readlineSync = require('readline-sync')
let frase = readlineSync.question('seu nome e seu email?')
console.log(`o seu email ${email} foi cadastrado bem vindo ${nome}`)
