const botao = document.getElementById('botao');
const curtidas = document.getElementById('curtidas');
const txtusuario = document.getElementById('txtusuario')
let listacurtiram = []
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
        if (listacurtiram.length === 1) {
            txtusuario.innerText = listacurtiram + ' curtiu'}
        else if (listacurtiram.length === 2) {
            txtusuario.innerText = listacurtiram.join(' e ') + ' curtiram'}
        else {
            restolista = listacurtiram.length - 2
            txtusuario.innerText = `${listacurtiram[0]}, ${listacurtiram[1]} e mais ${restolista} curtiram`
        }
    }
    document.getElementById('input-name').value = "";
});