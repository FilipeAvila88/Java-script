
let contadorSoma = 0;
let contadorSubtracao = 0;
let contadorMultiplicacao = 0;
let contadorDivisao = 0;

while (true) {
 
  let opcao = prompt(`
Escolha uma operação:
a) SOMA
b) SUBTRAÇÃO
c) MULTIPLICAÇÃO
d) DIVISÃO
e) SAIR
  `);


  if (opcao == 'a') {
    let num1 = prompt("Digite o primeiro número:");
    let num2 = prompt("Digite o segundo número:");
    let resultado = Number(num1) + Number(num2); 
    alert("Resultado da soma: " + resultado);
    contadorSoma++;
  } else if (opcao == 'b') {
    let num1 = prompt("Digite o primeiro número:");
    let num2 = prompt("Digite o segundo número:");
    let resultado = Number(num1) - Number(num2);
    alert("Resultado da subtração: " + resultado);
    contadorSubtracao++;
  } else if (opcao == 'c') {
    let num1 = prompt("Digite o primeiro número:");
    let num2 = prompt("Digite o segundo número:");
    let resultado = Number(num1) * Number(num2);
    alert("Resultado da multiplicação: " + resultado);
    contadorMultiplicacao++;
  } else if (opcao == 'd') {
    let num1 = prompt("Digite o primeiro número:");
    let num2 = prompt("Digite o segundo número:");
    if (Number(num2) == 0) {
      alert("Não é possível dividir por zero!");
    } else {
      let resultado = Number(num1) / Number(num2);
      alert("Resultado da divisão: " + resultado);
      contadorDivisao++;
    }
  } else if (opcao == 'e') {
    
    alert("Operações realizadas:\nSoma: " + contadorSoma + "\nSubtração: " + contadorSubtracao + "\nMultiplicação: " + contadorMultiplicacao + "\nDivisão: " + contadorDivisao);
    break; 
  } else {
    alert("Opção inválida! Por favor, escolha uma opção válida.");
  }
}
