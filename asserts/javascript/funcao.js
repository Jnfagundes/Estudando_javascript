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


