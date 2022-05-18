//Declarando uma função

function soma(a, b) { //para declarar a função
    console.log(a+b) //para apresentar a função
    return a + b; //para retornar a função
}

soma(3, 5); //para chamar a função

function returnEvenValues(array) {
    let evenNums = [];
    for(let i = 0; i < array.length;i++){
        if(array[i] % 2 === 0){
            evenNums.push(array[i]);
        }
    }
    console.log(evenNums);
}

let array = [1, 2, 4, 5, 7, 8];