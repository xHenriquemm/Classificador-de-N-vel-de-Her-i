let nomeHeroi = "Henrique"
let Experiencia = 8001

let nivelDoHeroi;

if (Experiencia < 1000) {
    nivelDoHeroi = "Ferro";
} else if (Experiencia <= 2000) {
    nivelDoHeroi = "Bronze";
} else if (Experiencia <= 5000) {
    nivelDoHeroi = "Prata";
} else if (Experiencia <= 7000) {
    nivelDoHeroi = "Ouro";
} else if (Experiencia <= 8000) {
    nivelDoHeroi = "Platina";
} else if (Experiencia <= 9000) {
    nivelDoHeroi = "Ascendente";
} else if (Experiencia <= 10000) {
    nivelDoHeroi = "Imortal";
} else {
    nivelDoHeroi = "Radiante";
}


console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelDoHeroi}`);


