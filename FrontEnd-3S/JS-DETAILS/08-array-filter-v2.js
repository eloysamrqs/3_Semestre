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





// Retornar todas as camisetas do perfil feminino: "F"
// const camisetasFemininas = produtos.filter((p) => {
//     return p.perfil == "F";
// });
// console.log(camisetasFemininas);

// const camisetasBaratas = produtos.filter((p) => {
//     return p.preco < 80;            
// });
// console.log(camisetasBaratas);





//Retornar todas as camisetas que estão em promoção
// let qtdPromocao = 0;
// const camisetasPromocao = produtos.filter((p) => {
//     if(p.promocao == true){
//         qtdPromocao+= p.quantidade;
//     }
//     return p.promocao == true;            
// });

// console.log(`Quantidade total em promoção: ${qtdPromocao}`);

// console.log(camisetasPromocao);