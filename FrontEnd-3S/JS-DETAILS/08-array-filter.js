// Utilizado para filtrar um elemento dentro de um array. Retorna apenas o encontrado
const numeros = [5, 10, 14, 50, 100, 200, 250, 800, 992.87, 800, 500, 9876, 99, 134];

const numeroEncontrado = numeros.filter((n) => {
    return n == 10; //retorna apenas o numero 10
});

const nomes = [
    'Walyson', 
    'Davi', 
    'Edu', 
    'Laura', 
    'Livia', 
    'Amy', 
    'Marcos', 
    'Felipe', 
    'Fontes', 
    'Gabriel', 
    'Yasmin', 
    'Natalia',
];

// pessoasLegais = nomes.filter((n) => {
//     return n.length <= 3 || n.length == 6; //retorna apenas os nomes com 3 ou menos caracteres
// });

// console.log(pessoasLegais);

pessoasLegais = nomes.filter((n) => {

    const primeiraLetra = n.substring(0, 1); //pega a primeira letra do nome e converte para minúscula
    return primeiraLetra == "N" || primeiraLetra == "L"; //retorna apenas os nomes que começam com a letra A
});

console.log(pessoasLegais);
 