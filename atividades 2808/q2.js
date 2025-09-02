let somaIdades = 0;
let contador = 0;

while (true) {
  let idade = prompt("Digite a idade da pessoa (0 ou menos para encerrar):");
  
  if (idade === null || idade.trim() === "") {
    
    break;
  }

  idade = Number(idade);

 
  if (idade > 0) {
    somaIdades += idade;
    contador++;
  } else {
   
    break;
  }
}

if (contador > 0) {
  let media = somaIdades / contador;
  console.log("A idade média é: " + media.toFixed(2));
} else {
  console.log("Nenhuma idade válida foi digitada.");
}
