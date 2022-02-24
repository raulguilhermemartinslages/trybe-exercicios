function calculo(salario, base) {
    let resultado = (salario / base) * salario;
    return resultado;
}
console.log("calculo: ", calculo(1000, 4));
console.log("calculo: ", calculo(9000, 5));
