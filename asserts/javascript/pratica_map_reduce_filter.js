//Pratique a sintese de multiplicação de números com map

const maca ={
    value: 2,
}
const laranja = {
    value: 3,
}
function mapComThis(arr, thisArg){
    return arr.map(function(item){
        return item * this.value;
    }, thisArg);
}

const nums = [1, 2];
console.log(mapComThis(nums, maca)); //quando o this for maçã.


function mapSemThis(arr){
    return arr.map(function(item){
        return item * 2
    });
}

const nums = [2, 4, 6, 4];

console.log(mapSemThis(nums));

//filtre e retorne todos os números pares de um array

function filterPares(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 === 0;   
}

const meuArray = [1, 23, 55, 67, 30, 2, 4];

console.log(filterPares(meuArray));


//Some todos os números de um array

function somaNumeros(arr){
    return arr.reduce(function(prev, current) {
        return prev + current;
    })
}

const arr = [1, 2]; 

console.log(somaNumeros(arr));


const lista = [
    {
        nome: 'sabão em pó',
        preco: 30
    },
    {
        nome: 'cereal',
        preco: 12
    },
    {
        nome: 'toalha',
        preco: 30
    },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(prev, current, index){
        console.log('rodada', index + 1);
        console.log({prev});
        console.log({current});
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));