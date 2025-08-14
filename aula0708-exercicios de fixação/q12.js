let salario = prompt("Digite seu salário atual:");
let aumento = salario * 0.08;
let novoSalario = parseFloat(salario) + aumento;
alert("Seu novo salário com 8% de aumento é: R$ " + novoSalario.toFixed(2));