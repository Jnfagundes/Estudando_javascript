//Map:
//Cria um novo array sem modificar o original
//Realiza operações em ordem
array.map(callback, thisArg);
//função a ser executada em cada elemento, o this é opcional

const array = [1, 2, 3, 4, 5];
array.map((item) => item * 2) //retorno: (2, 4, 6, 8, 10)


//Filter:
//Corresponde a criação de um novo array apenas com os itens filtrados
array.filter(callback, thisArg);

const frutas = ['maçã fuji', 'maçã verde', 'laranja', 'abacaxi'];
frutas.filter((fruta) => fruta.includes('maçã'));
//retorno: ['maçã fuji', 'maçã verde'];


//Reduce:
//Retorna todos os elementos de um array em valor único
array.reduce(callback, initialValue);
//Callback será a função a ser executada a partir do acumulador
//InitialValue é o valor sobre o qual o retorno final irá atuar, é opcional

const callbackFn = function(accumulador, currentValue, index, array){

}
array.reduce(callbackFn, initialValue);
//Accumulador é p acumulador de todas as chamadas de callbackFn
//currentValue é o elemento atual sendo acessado pela função
