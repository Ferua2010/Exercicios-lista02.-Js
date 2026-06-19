let qtdHomens = 0;
let qtdMulheres = 0;
let somaIdades = 0;
let somaIdadesHomens = 0;
let mulheresMais20 = 0;

for (let i = 1; i <= 5; i++) {
  let idade = Number(prompt(`Digite a idade da ${i}ª pessoa:`));
  let sexo = prompt(`Digite o sexo da ${i}ª pessoa (M/F):`).toUpperCase();

  somaIdades += idade;

  if (sexo === "M") {
    qtdHomens++;
    somaIdadesHomens += idade;
  } else if (sexo === "F") {
    qtdMulheres++;

    if (idade > 20) {
      mulheresMais20++;
    }
  }
}

let mediaGrupo = somaIdades / 5;
let mediaHomens = qtdHomens > 0 ? somaIdadesHomens / qtdHomens : 0;

console.log(`Quantidade de homens: ${qtdHomens}`);
console.log(`Quantidade de mulheres: ${qtdMulheres}`);
console.log(`Média de idade do grupo: ${mediaGrupo.toFixed(2)}`);
console.log(`Média de idade dos homens: ${mediaHomens.toFixed(2)}`);
console.log(`Mulheres com mais de 20 anos: ${mulheresMais20}`);
