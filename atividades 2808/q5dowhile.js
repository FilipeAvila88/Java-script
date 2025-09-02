let n = prompt("Quantas pessoas você quer verificar?");
n = Number(n);

let contagemFebre = 0;
let contador = 1;

do {
  let temperatura = prompt(`Digite a temperatura da pessoa ${contador}:`);
  temperatura = Number(temperatura);

  if (temperatura > 38) {
    contagemFebre++;
  }

  contador++;
} while (contador <= n);

console.log(`Número de pessoas com febre: ${contagemFebre}`);