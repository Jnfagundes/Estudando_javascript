//Manipulando a DOM com JavaScript
//O que DOM? Document Object Model, ou seja, um padrão de como acessar e modificar todos os elementos HTML de uma página
//O que é bom? Browser Object Model, ou seja, tudo que está dentro do objeto window

document.createElement(element); //Cria um novo elemento HTML
document.removeChild(element); //Remove um elemento
document.appendChild(element); //Adiciona um elemento
document.replaceChild(p, img); //Substitui um elemento. A ordem é (new, old)

// .classList é uma lista de classes

document.getElementsByTagName("p").style.color = "blue";


//Eventos: qualquer tipo de ação que o usuário faz em uma página
//Eventos de mouse: mouseover e mouseout quando posisionamos o mouse em dentro ou fora do item
//Evento de clique: click e dbclick.
//Eventos de atualização: Change e load.

const botao = document.getElementById("meuBotao");

botao.addEventListener("click", outraFuncao);

//Atividade prática 
