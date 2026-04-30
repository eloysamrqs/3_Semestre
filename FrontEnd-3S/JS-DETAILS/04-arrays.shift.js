let frutasVermelhas = [];

// frutasCriticas[0] = "Laranja";
frutasVermelhas.push("Morango");
frutasVermelhas.push("Cereja");
frutasVermelhas.push("Framboesa");
frutasVermelhas.push("Melancia");

console.log(frutasVermelhas);

let frutaRemovidaInicio = frutasVermelhas.shift(); // Remove o primeiro elemento do array
console.log(`${frutaRemovidaInicio} foi removida do início`); // Exibe a fruta removida do início
console.log(frutasVermelhas); // Exibe o array atualizado