//Estudando loops
//JavaScript não tem elseif, as palavras sempres estão espaçadas

//Switch/ case

function getAnimal(id) {
    switch(id) {
        case 1:
            return "cão";
        case 2:
            return "gato";
        case 3:
            return "passáro";
        default:  //Sempre precisamos de um valor default
            return "peixe";            
    }
}

getAnimal(1);
getAnimal(4);
getAnimal("1");

//Estrutura for
function multiplicarPorDois(arr) {
    let multiplicados = [];

    for(let i = 0; i < arr.length; i++){
        multiplicados.push(arr[i] * 2);
    }
    return multiplicados;
}

const meusNumeros = [2, 33, 456, 356, 40];
multiplicarPorDois(meusNumeros);

//For ...in
function forInExemplo(obj){
    for(prop in obj){
        console.log(prop);
    }
}

const meuObjeto = {
    nome:"João",
    idade: "20",
    cidade: "Salvador"
}

forInExemplo(meuObjeto);

//for ...of
function logLetras(palavra){
    for(letra of palavra){
        console.log(letra);
    }
}
const palavra = "abacaxi";

logLetras(palavra);

//while
function exemploWhile(){
    let num = 0;

    while(num <= 5){
        console.log(num);
        num++;
    }
}

exemploWhile()

//do ... while
function exemploDoWhile(){
    let num = 0;

    do{
        console.log(num);
        num++;
    } while(num <= 5)
}

exemploDoWhile();

//O que é This? É uma referencia no contexto no qual vc está.
const pessoa = {
    firstName: "André",
    lastName: "Soares",
    id: 1,
    fullName: function(){ //Sempre que uma função está dentro de um objeto, nós à chamamos de método
        return this.firstName + " " + this.lastName;
    },
    getId: function(){
        return this.id;
    }
};

pessoa.fullName();
pessoa.getId();

//Manipulando um This
//Método Call
const pessoa = {
    nome: "Miguel",
};

const animal = {
    nome: "Murphy",
};

function getSomething(){
    console.log(this.nome);
}

getSomething.call(pessoa); //Aqui estou me referindo a pessoa


//Método Apply
const pessoa = {
    nome: "Miguel",
};

const animal = {
    nome: "Godi",
};

function getSomething(){
    console.log(this.nome);
}

getSomething.apply(pessoa); //No apply os argumentos são passados em forma de array

//Método Bind
const retornaNomes = function(){
    return this.nome;
};

let bruno = retornaNomes.bind({nome: 'Bruno'});
bruno(); //Ele clona a extrutura da função

//Arrow functions
const helloWord = () => {
    return "Hello Word";
}
//ou
const helloWord = () => "Hello Word";
//Caso exista apenas um parâmetro, pode dispensar os parênteses
const soma = a => a; 

//Nas Arrows o this sempre será um valor global, não existe o objeto arguments, o construtor não poderá ser utilizado


