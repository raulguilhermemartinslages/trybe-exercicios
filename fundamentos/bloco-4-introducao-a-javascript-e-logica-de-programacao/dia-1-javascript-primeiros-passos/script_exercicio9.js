const custo = 5;
const valorVenda = 79;
const custoSemImposto = (custo * 1,2);
const lucro = (valorVenda - custoSemImposto) * 1000;

if (custo >= 0 && valorVenda >= 0) {
    console.log(lucro);
} else {
    console.log('Erro');
}