const readlineSync = require('readline-sync');

const frase = readlineSync.question("faca uma pergunta:");

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length);
