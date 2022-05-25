var a = 1; //Declaração das variáveis
var b = 2;

if(a === 1){
    var a = 11;
    let b = 22; //O let só funciona em escopo de bloco.

    console.log(a); 
    console.log(b);
}

//Hoisting é definir o valor da variável antes de declarar ela.

numberOne = 1; //Aqui está sendo feita uma atribuição.
console.log(numberOne + 2);

var numberOne;

//Quando usar o let, preciso declarar a variável antes da atribuição

var firstName = 'João';
var lastName = 'Souza';

if(firstName === 'João') {
    var firstName = 'Pedro';
    let lastName = 'Silva';
    lastName = 'Rodrigues'; //Reatribuição do valor da variável
}

console.log(firstName, lastName);

//Estudando constantes
//Declaradas em SNAKE_UPPER_CASE
//Tem escopo de bloco
//Não faz hoisting

const FIRST_NAME = "José";


