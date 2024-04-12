let array = [11,15,18,14,12,13]
let maior = 0
function verificaMaior(array) {
    for(let i = 0; i < array.length;i++){
    if(maior < array[i]){
       maior = array[i]
    }
        
    }
return maior
    
}
verificaMaior(array)
console.log(maior)


