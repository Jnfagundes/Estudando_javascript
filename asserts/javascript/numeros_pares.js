//Torcar todos os elementos pares por zero

function substituiPares(array) {
    if(!array) return -1;
    if(!array.length) return -1;

    for(let i = 0; i < array.length; i++){
        if(array[i] === 0){
            console.log(" Você já é zero!!")
        }else if(array[1] % 2 === 0) {
            console.log(`Substituindo ${array[1]} por 0 ...`)
            array[i] = 0;
        }
    }
    return array;
}

let array = [1, 3, 4, 6, 8, 9, 15, 18];
console.log(substituiPares(array));
