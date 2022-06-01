//EcmaScript Error: erros que ocorrem em tempo de execução
//Composto por: mensagem, nome, linha, call stack


//DOMException: erros relacionados ao Document Object Model DOM


//Throw

function verificaPalindromo2(string) {
    if(!string) throw "String inexistente";

    for(let i = 0; i < string.length / 2; i++) {
        if(string[i] !== string[string.length - 1 - i]){
            return false;
        }
    }
    return true;
}

verificaPalindromo2('cat');


//Try...Catch

function verificaPalindromo(string) {
    if(!string) throw "String inexistente";
    
    return string ===
    string.split("").reverse().join("")
}

function tryCatchExemplo(string){
    try {
        verificaPalindromo(string)
    }
    catch(e) {
        console.log(e)
    }
}
tryCatchExemplo('');

//Finally

function verificaPalindromo(string) {
    if(!string) throw "String inexistente";
    
    return string ===
    string.split("").reverse().join("")
}

function tryCatchExemplo(string){
    try {
        verificaPalindromo(string)
    }
    catch(e) {
        console.log(e)
    }
    finally{
        console.log('A string enviada foi: ' + string)
    }
}
tryCatchExemplo('');

//Objeto Error
new Error(message, fileName, lineNumber)

const MeuError = new Error('Mensagem Inválida');
throw MeuError;

//Atividade

function validaArray(arr, num){
    try{
        if(!arr && !num) throw new ReferenceError("Envie os pârametros");
        if(typeof arr !== 'object') throw new TypeError("O array precisa ser do tipo object");
        if(typeof num !== 'number') throw new TypeError("O array precisa ser do tipo number");

        if(arr.length !== num) throw new RangeError("Tamanho inválido.");
    
        return arr;
    }
    catch(e){
        if(e instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError!");
            console.log(e.mensagem);
        }else if(e instanceof TypeError) {
            console.log("Este erro é um TypeError!");
            console.log(e.mensagem);
        }else if(e instanceof RangeError) {
            console.log("Este erro é um RangeError!");
            console.log(e.mensagem);
        } else {
            console.log("Tipo de erro não esperado:" + e);
        }
    }
}