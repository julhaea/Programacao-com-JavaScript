const botao = document.getElementById('botao');
const curtidas = document.getElementById('curtidas');
const txtusuario = document.getElementById('txtusuario')
const botaolimpar = document.getElementById('limpar')
let listacurtiram = JSON.parse(localStorage.getItem('listacurtiram')) || [];
const attlista = () => {
    if (listacurtiram.length === 0) {
        txtusuario.innerText = ''
    }
    else if (listacurtiram.length === 1) {
        txtusuario.innerText = listacurtiram + ' curtiu'}
    else if (listacurtiram.length === 2) {
        txtusuario.innerText = listacurtiram.join(' e ') + ' curtiram'}
    else {
        restolista = listacurtiram.length - 2
        txtusuario.innerText = `${listacurtiram[0]}, ${listacurtiram[1]} e mais ${restolista} curtiram`
    }
}
botao.addEventListener('click', () => {
    const usuario = document.getElementById('input-name').value.trim()
    if (!usuario) {
        alert('Insira o nome do usuário')
    }
    else if (listacurtiram.includes(usuario)) {
        alert('Este usuário já curtiu')
    }
    else {
        alert(`${usuario} curtiu`)
        listacurtiram.push(usuario);
        localStorage.setItem('listacurtiram', JSON.stringify(listacurtiram))
        attlista()
    }
    document.getElementById('input-name').value = "";
});

botaolimpar.addEventListener('click', () => {
    listacurtiram = []
    localStorage.clear()
    attlista()
})


attlista()