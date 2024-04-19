const pessoa = {
    nome : 'leo',
    idade: 29,
    generoMusical: ' eletronica',

}
function melhorAmigo(pessoa){
 const  Amigo = {
    ...pessoa,
  comidaFavoritas: 'pizza',
  nome: 'lu',
  idade:20,
} 
}
melhorAmigo(pessoa)
console.log(melhorAmigo)
