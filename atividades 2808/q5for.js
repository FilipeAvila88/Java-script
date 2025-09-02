let n = prompt("Quantas pessoas você quer verificar?");
n = Number(n);

let contagemFebre = 0;

for (let i = 1; i <= n; i++) {
  let temperatura = prompt(`Digite a temperatura da pessoa ${i}:`);
  temperatura = Number(temperatura);

  if (temperatura > 38) {
    contagemFebre++;
  }
}

console.log(`Número de pessoas com febre: ${contagemFebre}`);

