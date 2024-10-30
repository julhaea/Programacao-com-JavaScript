/*1*/
const estoquelivros = [
    {id: 1, titulo: 'A Última Batalha', autor: "C. S. Lewis", quantidade: 12},
    {id: 2, titulo: "Aquilo que paira no ar", autor: "Emílio Garofalo Neto", quantidade: 20},
    {id: 3, titulo: "Os próprios deuses", autor:"Isaac Asimov", quantidade: 60},
    {id: 4, titulo: "O fim da eternidade", autor: "Isaac Asimov", quantidade: 7}
]
/*2*/
const addlivro = (id, titulo, autor, quantidade) => {
    estoquelivros.push({
        id,
        titulo,
        autor,
        quantidade,
    })
}
addlivro(5, "Essa gente", "Chico Buarque", 18 );
console.log(estoquelivros);

/*3*/ 
const remlivro = (idlivro) => {
    const existid = !!estoquelivros.find(livro => livro.id === idlivro)
    if(existid) {
        for(let indice = 0; indice < estoquelivros.length; indice++){
            if(estoquelivros[indice].id === idlivro) 
                estoquelivros.splice(indice, 1)
                break;
        }
    }

}
remlivro(3);
console.log(estoquelivros);

/*4*/
const attquant = (id, nquant) => {
    for(let livro of estoquelivros) {
        if(livro.id === id) {
            livro.quantidade = nquant;
            console.log(livro)
            break;
        }
    }
}
attquant(1, 45);
console.log(estoquelivros);

/*5*/
const listlivros = () => {
    for (let livro of estoquelivros) {
        console.log(`ID: ${livro.id} 
            Livro: ${livro.titulo}
            Autor: ${livro.autor}
            Quantidade: ${livro.quantidade}`)
    }
}
listlivros()