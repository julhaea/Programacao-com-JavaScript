/* 1 - Mudar título */
const alttitulo = (novotitulo) => {
    const titulo = document.getElementById("titulo")
    titulo.innerText = novotitulo
}
 /* 2 - Mudar estilo da lista */
const mudacorli = () => {
    const lista = document.getElementsByTagName('li')
    for (let li in lista){
        lista[li].style.color = "#B6F700";
    }
 };
/* 3 - Adicionar classe aos paragrafos */
const addclasse = () => {
    const lista = document.getElementsByTagName('p')
    for (let p in lista){
        lista[p].classList = "paragrafo"
    }
};
/* 4 - Mudar texto do botão */
const txtbotao = () => {
    document.getElementById('botao').innerText = "Novo botão"
};

alttitulo("Título alterado")
txtbotao();
addclasse();
mudacorli();