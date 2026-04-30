const hobbies = [
    'Correr', 
    'Nadar', 
    'Jogar Bola', 
    'Viajar', 
    'Lutar', 
    'Conversar muito',
    'Ler livros',
    'Malhar',
    'Maratonar séries',
    'Dormir',
    'Jogar basquete'
];

// Utilizar para iterar array e retornar um novo array, compondo um
// novo resultado para cada indice do array antigo, veja:

const novoHobbies = hobbies.map((hob) => {
    return `<p> ${hob} </p>`;
});
console.log(novoHobbies);