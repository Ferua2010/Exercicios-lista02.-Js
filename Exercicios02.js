//Utiliza Módulo prompt-sync
const prompt = require("prompt-sync")();

//Ler ida\de de 10 pessoas
idades = [];

for (i = 1; i <= 10; i++) {
    idades.push(Number(prompt(`Digite a idade da pessoa ${i}: `)));
}
console.log("As idades foram:" , idades); 
//Fazer a media de todas as idades
soma = 0;
maior = 0;
menor = 0;
for ( i = 0 ; i < idades.length; i++){
    soma = soma + idades[i];
    if (idades[i] > 18){
        maior = maior + 1;
 }
    if (idades[i] < 5){
        menor = menor + 1;

    }

}
console.log(`A média das idades: ${soma / idades.length}`);

console.log(`A quantidade de idades maiores que 18 são: ${maior}`);

console.log(`A quantidade de idades menores que 5 são: ${menor}`);

console.log(`Maior idade é: ${Number(Math.max(...idades))}`)
