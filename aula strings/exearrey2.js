let personagens = ['kira','misa','light','batman']
function quemSouEu(array) {



const indiceAleatorio = Math.floor(Math.random()* array.length)

return array[indiceAleatorio]

}
const personagemEscolhido = quemSouEu(personagens)
console.log('voce é:', personagemEscolhido)

