//Arrays são listas iteráveis de elementos

let array = []; //aqui estamos declarando uma array

array.push(3); //adiciona um valor no final do array
array.push(5);
array.push(6);
array.push(2);

array.pop(); //remove o ultimo elemento do array

array.shift(); //remove o primeiro elemento 

array.unshift(7); //adciona no começo da lista

for(let i = 0; i < array.length; i++) {
    console.log(array[i])
}

array.includes(3); //busca um valor dentro da array 

array.every(item => item === 5); //usado para saber se todos os itens são iguais a 5

array.some(item => item ===5); //usado para saber se algum desses itens é igual a 5

