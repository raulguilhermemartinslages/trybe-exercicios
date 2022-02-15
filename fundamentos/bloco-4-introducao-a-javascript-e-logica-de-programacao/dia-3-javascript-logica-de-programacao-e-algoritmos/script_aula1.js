let qtd = 10;
let ingredientes = ["queijo","presunto","maionese"];
let sacola = [];

//for (let index = 1; index <= 10; index += 1) {}

for (let index = 0; index < 10; index += 1) {
    //console.log('executou fora: ', index)

    let pao = [];

    for (let index = 0; index < ingredientes.length; index += 1) {
        //console.log('executou dentro: ', index)
        pao.push(ingredientes[index])
    }

    sacola.push(pao);

}

console.log("sacola: ", sacola);

//console.log("sacola: ", sacola[4]);

