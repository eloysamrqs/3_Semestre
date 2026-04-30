const nome = "Eloysa";

let sobrenome = "Santos";

{
    let sobrenome = "Marques";
    const nome = "Eloysa"; 
    console.log(`Nome completo: ${nome} ${sobrenome}`); 
}

const nomes = [ "Eloysa", "Dos"];
for (var i = 0; i < nomes.length; i++) {
    console.log(`Nome: ${nomes[i]}`);
}

console.log(i); // ReferenceError: i is not defined

