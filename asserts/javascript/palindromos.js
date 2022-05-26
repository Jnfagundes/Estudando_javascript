//solução 1
function verificaPalindromo(string) {
    if(!string) return "String inexistente"; //se a string for diferente de True nós retornammos
    //split separa a string transformando-a em array.
    //reverse inverte a minha array
    //join junta a array que foi invertida e transforma em uma string
    string.split("").reverse().join("") === string;

}

let palavra = "ovo"
console.log(verificaPalindromo(palavra));

//solução 2
function verificaPalindromo2(string) {
    if(!string) return "String inexistente";

    for(let i = 0; i < string.length / 2; i++) {
        if(string[i] !== string[string.length - 1 - i]){
            return false;
        }
    }
    return true;
}

console.log(verificaPalindromo2);
