document.addEventListener("DOMContentLoaded", () => {
    const botaoPostar = document.getElementById('postar')
const feed = document.getElementById('postagens')
    const avatar = "./avatar.jpg"
    const username = "julhaea"

function novopost (texto, linkgatinho, curtidas, index) {
    const imgavatar = document.createElement("img")
    imgavatar.src=avatar
    imgavatar.className = "avatar"

    const user= document.createElement('p')
    user.innerText= username
    user.className = "username"

    const postagem = document.createElement('li')
    postagem.className = "containerpost"

    
    const imggatinho = document.createElement('img')
    imggatinho.src = linkgatinho
    imggatinho.className = "imggatinho"
    
    const containerUser = document.createElement('div')
    containerUser.className= "divuser"
    

    const txtpostagem = document.createElement('p')
    txtpostagem.innerText = texto
    txtpostagem.className = "txtpost"



    const botaoCurtida = document.createElement('button')
    botaoCurtida.innerText = 'curtir'
    const numerocurtida = document.createElement('p')
    numerocurtida.innerText = `${curtidas} curtidas`

    botaoCurtida.addEventListener('click', () => {
        curtidas++;
        numerocurtida.innerText = `${curtidas} curtidas`
        attcurtidas(index,curtidas)
    })

    const divcurtida = document.createElement('div')
    divcurtida.className = 'divcurtida'
    divcurtida.appendChild(botaoCurtida)
    divcurtida.appendChild(numerocurtida)

    
    containerUser.appendChild(imgavatar)
    containerUser.appendChild(user)

    postagem.appendChild(containerUser)
    postagem.appendChild(imggatinho)
    postagem.appendChild(txtpostagem)
    postagem.appendChild(divcurtida)
    
    feed.prepend(postagem)
}

function exibirpostagens(){
    const postagensSalvas = JSON.parse(localStorage.getItem('postagens')) || []
    postagensSalvas.forEach ((post, index) => {novopost(post.texto, post.linkgatinho, post.curtidas, index)})
        
    }
    

async function addpostagem(texto)  {
    
    gatinhos = await (await fetch('https://api.thecatapi.com/v1/images/search')).json()
    const linkgatinho = gatinhos[0].url
    const curtidas = 0

    const postagensSalvas =JSON.parse(localStorage.getItem('postagens')) || []    
    const postagemnova = { texto, linkgatinho, curtidas }
    postagensSalvas.push(postagemnova)

    novopost(texto, linkgatinho, curtidas, postagensSalvas.length - 1)

    localStorage.setItem('postagens', JSON.stringify(postagensSalvas))
    document.getElementById('input-post').value = '';


}

function attcurtidas(index, curtidas) {
    const postagensSalvas = JSON.parse(localStorage.getItem('postagens')) || [];
    postagensSalvas[index].curtidas = curtidas
    localStorage.setItem('postagens', JSON.stringify(postagensSalvas))
}
exibirpostagens()
botaoPostar.addEventListener('click', () => addpostagem(document.getElementById('input-post').value))
})
