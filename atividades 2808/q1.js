let totalSalarios = 0;
let continuar = true;

while (continuar) {
  let salario = prompt("Digite o salário de um membro da família (ou deixe vazio para finalizar):");

  if (salario === null || salario.trim() === "") {
    
    continuar = false;
  } else {
    salario = Number(salario);
    if (!isNaN(salario)) {
      totalSalarios += salario;
    } else {
      console.log("Por favor, digite um número válido.");
    }
  }
}

console.log("O total de dinheiro da família é: R$ " + totalSalarios.toFixed(2));