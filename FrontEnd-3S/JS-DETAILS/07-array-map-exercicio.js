const numeros = [
    50, 
    200, 
    250, 
    800, 
    992.87,
    800,
    500,
    9876,
    99,
    134
];
console.log(`Array original: ${numeros}`);
console.log();

// Rodar o map gerando um novo array com o dobro dos numeros do original
const dobroNumeros = numeros.map((num) => {
    return num * 2;
});

console.log(`Array modificado:`);

// apos, exiba o valores do array dobro no console utilizando o foreach
let textoResultado = ``;
dobroNumeros.forEach((num) => {
    textoResultado += `${num} | `; //acumulando texto em uma string (sem pular linha)
});

// remover o ultimo pipe
textoResultado = textoResultado.substring(0, textoResultado.length - 3); 
console.log(textoResultado);