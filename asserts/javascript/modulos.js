//Módulos: são arquivos com capacidade de importar e exportar informações de arquivos do mesmo tipo.
//como vantagem temos:
//Melhor organização do código
//Variáveis sendo compartilhada em escopos diferentes.
//Explicita as dependências dos arquivos.

//Named exports
export function mostrarIdade(pessoa){
    return `A idade de ${pessoa.nome} é ${pessoa.idade}`;
}
//ou
function mostrarIdade(pessoa) {
    return `A idade de ${pessoa.nome} é ${pessoa.idade}`;
}
export{
    mostrarIdade,
}

//Default exports
function mostrarIdade(pessoa) {
    return `A idade de ${pessoa.nome} é ${pessoa.idade}`;
}
export{
    mostrarIdade,
}
export default mostrarHobby;

//importar named exports:
import{função, variavel, classe} from './arquivo.js'
//importar default exports
import valorDefault from './arquivo.js'
//ou
import {arquivo as apelido} from './arquivo.js';

apelido.metodo();


//importando tudo de um arquivo:
import * as INFOS from './arquivo.js';

INFOS.metodoA();

console.log(INFOS.variavel);
//Modulos rodam em servidores para testes locais.


