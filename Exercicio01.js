//Sortear 20 numeros entre 0 e 10
count = 0;
divs = 0;
for (i = 0; i < 21; i++) {
    sorteado = Math.floor(Math.random() * 10);
    console.log(`Sorteio numero ${i} Sorteado: ${sorteado}`);
    if (sorteado > 5){
        count = count + 1;
    }
    if (sorteado % 3 == 0) {
        divs = divs + 1;
    }
}
console.log(`NUmeros maiores que 5: ${count}`);
console.log(`NUmeros divisivis por 3: ${divs}`);

