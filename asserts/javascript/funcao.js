//Tipos de função

//Função anônima
const soma = function(a, b) {
    return a + b;
}
soma(1, 2);

//Função autoinvocável
(
function(){
    let name = "Digital Innovation One"
    return name;
}
)

//Funções Callbacks (funções passadas como argumento para outra função)
const calc = function(operacao, num1, num2){
    return operacao(num1, num2);
}
const soma = function(num1, num2) {
    return num1 + num2;
}
const sub = function(num1, num2){
    return num1 - num2;
}
const resultSoma = calc(soma, 1, 2);
const resultSub = calc(sub, 1 ,2);
console.log(resultSoma);
console.log(resultSub);

//trabalhando com arrays
//tecnica Spread
 function sum(x, y, z) {
     return x + y + z;
 }

 const numbers = [1, 2, 3];
 console.log(sum(...numbers)); //O que era parte de um array se torna um elemento independente.

//tecnica Rest; combina os elementos em um array
function confereTamanho(...args) { //O que era um elemento independente se torna parte de um array
    console.log(args.length)
}

confereTamanho(); //0
confereTamanho(1, 2); //2
confereTamanho(3, 4, 5) //3

//Tecnica Object Destructuring
//Entre chaves podemos filtrar apenas os dados que nos interessam em um objeto


