//faca uma contagem regressiva - começa em dez e termina em zero
// a cada segundo vamos imprimir tic 
// s eo segundo for par imprime tic e se for impar tac e quando chegar a zero boom
let n = 10 

while (i >= 0){
 if (i === 0){
    console.log('boom')

 }else if ( i % 2 === 0) {
    console.log ('tic')
    
 }else {
    console.log('tac')

i--
 }


}