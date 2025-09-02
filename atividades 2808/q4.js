let maior;
let menor;
let contador = 1;

do {
  let valor = prompt(`Digite o valor ${contador} de 10:`);

  let numero = Number(valor);

  if (contador === 1) {
    maior = numero;
    menor = numero;
  } else {
    if (numero > maior) {
      maior = numero;
    }
    if (numero < menor) {
      menor = numero;
    }
  }

  contador++;
} while (contador <= 10);

console.log("Maior valor digitado: " + maior);
console.log("Menor valor digitado: " + menor);