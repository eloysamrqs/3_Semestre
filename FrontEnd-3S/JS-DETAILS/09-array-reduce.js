const produtos = [
    {
        descricao : 'Camisa Polo',
        cor : 'Azul',
        preco : 79.90,
        perfil : "F",
        quantidade : 15,
        promocao : true
    },
    {
        descricao : 'Camisa Polo',
        cor : 'Verde',
        preco : 49.90,
        perfil : "M",
        quantidade : 100,
        promocao : true
    },
    {
        descricao : 'Camisa Polo',
        cor : 'Amarelo',
        preco : 89.99,
        perfil : "G",
        quantidade : 5,
        promocao : false
    },
];



//reduz o array a um unico elemento. No caso um somario, por exemplo:

let totalPreco = 0;
let totalEstoque = produtos.reduce((total, produto) => {
    totalPreco += produto.preco * produto.quantidade; //soma o valor total de cada produto (preco * quantidade)
    return total + produto.quantidade; //soma a quantidade de cada produto  
}, 0); 

console.clear();
console.log(`Total de itens em estoque: ${totalEstoque}`);
console.log(`Valor total do estoque: R$ ${totalPreco.toFixed(2)}`);