let distancia = prompt("Digite a distância da viagem em km:");
let velocidade = prompt("Digite a velocidade média em km/h:");
let precoCombustivel = prompt("Digite o preço do litro do combustível:");
let consumo = prompt("Digite o consumo do carro (km por litro):");

let tempo = distancia / velocidade;
let litros = distancia / consumo;
let custo = litros * precoCombustivel;

console.log("Tempo de viagem (horas): " + tempo.toFixed(2));
console.log("Litros consumidos: " + litros.toFixed(2));
console.log("Custo estimado da viagem: R$ " + custo.toFixed(2));