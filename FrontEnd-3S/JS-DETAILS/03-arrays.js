let frutasVermelhas = new Array();
let frutasCitricas = ["Limão", "Abacaxi", "Maracujá", "Tangerina"];

// frutasCriticas[0] = "Laranja";
frutasVermelhas.push("Morango");
frutasVermelhas.push("Cereja");
frutasVermelhas.push("Framboesa");
frutasVermelhas.push("Melancia");

console.log(frutasVermelhas);
console.log(frutasCitricas);

let frutaRemovida = frutasCitricas.pop(); // Remove o último elemento do array
console.log(frutaRemovida); // Exibe a fruta removida
console.log(frutasCitricas); // Exibe o array atualizado
