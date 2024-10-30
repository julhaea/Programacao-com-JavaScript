/*Função contagem regressiva*/
const calctemporest = (dia) => {
    const dataFutura = new Date(dia).getTime()
    const agora = new Date().getTime()
    const diffdatas = dataFutura - agora;
    const segundosminuto = 60 * 1000;
    const segundoshora = 60 * segundosminuto
    const segundosdia = 24 * segundoshora
    const dias = Math.floor(diffdatas / segundosdia)
    const horas = Math.floor((diffdatas % segundosdia) / segundoshora)
    const minutos = Math.floor((diffdatas % segundoshora) / segundosminuto)
    const segundos = Math.floor((diffdatas % segundosminuto) / 1000)
    return{
        dias,
        horas,
        minutos,
        segundos
    }
}

/*Att temp */
const atttemp = () => {
    const temporest = calctemporest('2025-01-01T00:00:00')

    document.getElementById('dias').innerText = `Dias ${temporest.dias}`
    document.getElementById('horas').innerText = `Horas ${temporest.horas}`
    document.getElementById('minutos').innerText = `Minutos ${temporest.minutos}`
    document.getElementById('segundos').innerText = `Segundos ${temporest.segundos}`
}

setInterval(() =>{
    atttemp()}, 1000);