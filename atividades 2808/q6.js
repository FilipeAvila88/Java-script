let matriculas = []
let notas = []
let totalNotas = 0


for (let i = 1; i <= 5; i++) {
  let matricula = prompt(`Digite a matrícula do aluno ${i}:`)
  let nota = parseFloat(prompt(`Digite a nota do aluno ${i}:`))
  
  matriculas.push(matricula)
  notas.push(nota)
  totalNotas += nota
}


let media = totalNotas / 5;

console.log(`Média das notas: ${media.toFixed(2)}`)
console.log("Matrículas com nota acima da média (for):")


for (let i = 0; i < 5; i++) {
  if (notas[i] > media) {
    console.log(matriculas[i])
  }
}


matriculas = []
notas = []
totalNotas = 0


let i = 0;
while (i < 5) {
  let matricula = prompt(`Digite a matrícula do aluno ${i + 1}:`)
  let nota = parseFloat(prompt(`Digite a nota do aluno ${i + 1}:`))

  matriculas.push(matricula)
  notas.push(nota)
  totalNotas += nota

  i++;
}


media = totalNotas / 5

console.log(`Média das notas: ${media.toFixed(2)}`)
console.log("Matrículas com nota acima da média (while):")


i = 0
while (i < 5) {
  if (notas[i] > media) {
    console.log(matriculas[i])
  }
  i++
}


matriculas = []
notas = []
totalNotas = 0


i = 0
do {
  let matricula = prompt(`Digite a matrícula do aluno ${i + 1}:`)
  let nota = parseFloat(prompt(`Digite a nota do aluno ${i + 1}:`))

  matriculas.push(matricula)
  notas.push(nota)
  totalNotas += nota

  i++
} while (i < 5)


media = totalNotas / 5

console.log(`Média das notas: ${media.toFixed(2)}`)
console.log("Matrículas com nota acima da média (do...while):")


i = 0
do {
  if (notas[i] > media) {
    console.log(matriculas[i])
  }
  i++
} while (i < 5)
