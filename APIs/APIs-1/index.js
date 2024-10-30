(() =>{
    const inputNome= document.getElementById('nomeDev')
    const pesquisarNome = document.getElementById('pesquisarnome')

    async function pesquisanome(nome){
        const devData = await fetch(`https://api.github.com/users/${nome}`)
        const dev = await devData.json();
        const listadados = document.getElementById('dadosDev')
        listadados.innerHTML = ''
        inputNome.value = ''


        const username = document.createElement('li');
        username.innerText = `Username: ${dev.login}`;

        const nomeusuario = document.createElement('li')
        nomeusuario.innerText = `Nome: ${dev.name}`

        const seguidores = document.createElement('li')
        seguidores.innerText = `Seguidores: ${dev.followers}`
    


        listadados.appendChild(username)
        listadados.appendChild(nomeusuario)
        listadados.appendChild(seguidores)
        
    }
    
    pesquisarNome.addEventListener('click', () => {pesquisanome(inputNome.value)})
})()
