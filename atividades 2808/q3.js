let soma = 0;

while (true) {
  let entrada = prompt("Digite um número (0 para encerrar):");

  if (entrada === null) {
   
    continue;
  }

  if (entrada === "") {
    
    continue;
  }

  let numero = Number(entrada);

  if (numero === 0) {
    break; 
  }

  
  soma += numero;
}

console.log("O somatório dos números digitados é: " + soma);
