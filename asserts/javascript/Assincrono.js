//Assíncrono é algo que não ocorre ou não se efetiva ao mesmo tempo
//O padrão do javascript é ser síncrono

//Promises é um objeto de processamento assíncrono. Seu valor é desconhecido inicialmente, podendo ser resolvido ou rejeitado.
//Ela tem três estados:
// 1)Pending : estado pendente
// 2)Fulfilled: completada
// 3)Rejected: rejeitada

const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(()=> {
        resolve(console.log('Resolvida!'));
    }, 2000);
});


//Async/await

async function resolvePromise(){
    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(()=> {
            resolve(console.log('Resolvida!'));
        }, 2000);
    });

        const resolved = await myPromise //Manda tudo parar para ser resolvida a promise
            .then((result) => result + 'passando pelo then')
            .then((result) => + ' e agora acabou!')
            .catch((err) => console.log(err.message));
        return resolved;      
} 


