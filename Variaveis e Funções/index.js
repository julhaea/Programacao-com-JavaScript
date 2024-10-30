const soma = (num1, num2) => num1 + num2
const subtrai = (num1, num2) => num1 - num2
const multiplica = (num1, num2) => num1 * num2
const divide = (num1, num2) => num1 / num2
const mostra = (num1, num2) => {
    console.log(`Soma entre ${num1} e ${num2}`, soma(num1, num2))
    console.log(`Diferença entre ${num1} e ${num2}`, subtrai(num1, num2))
    console.log(`Produto entre ${num1} e ${num2}`, multiplica(num1, num2))
    console.log(`Divisão de ${num1} por ${num2}`, divide(num1, num2))
}