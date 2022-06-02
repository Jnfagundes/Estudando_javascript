//API é uma forma de intermediar os resultados do back-end com o que é apresentado no front-end
//Acessamos por meio de uma URL
//Método fetch
fetch(URL, options)
    .then(Response => Response.jsom())
    .then(json => console.log(json))