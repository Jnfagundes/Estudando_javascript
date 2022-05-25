//tipagem dinâmica e fraca (Não preciso especificar o tipo de variável)

let um = "um"; //variável tratado como texto
typeof um; //me mostra qual o tipo da variável

um = 1; //declaração de um novo valor para a variável

//tipos primitivos não possuem método
//tipos não primitivos são objetos e arrays

let nome = "José";
let sobrenome = "Nilton";
let concatenado = nome.concat(sobrenome); //Aqui estamos juntando duas strings
concatenado.length // Me mostra a quantidade de linha da string

let exemplo = new String("caderno"); //aqui estou declarando um objeto

nome[1] //me mostra a posição do item na string

concatenado = nome + "" + sobrenome // Coloco os nomes com espaço
concatenado = nome + "\n" + sobrenome // O \n é usado para pular linhas

concatenado = `$(nome) $(sobrenome)`

let frase = "Olá, tudo bem?";

frase.split(""); //separa todos caracteres quando não tiver espaço

frase.split(" "); //separa tudo que tiver espaço

frase.includes("tudo"); // busca a palavra tudo dentro da variável 


