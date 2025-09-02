let pokemao = {
  nome: "Pikachu",
  HP: 100,
  ataque: Math.floor(Math.random() * 3) + 1, 
  level: 1,
  vitorias: 0,
  derrotas: 0,
  HPinicial: 100,
  ataqueInicial: Math.floor(Math.random() * 3) + 1
};


function listarPokemao() {
  alert(`
Atributos Iniciais:
Nome: ${pokemao.nome}
HP Inicial: ${pokemao.HPinicial}
Ataque Inicial: ${pokemao.ataqueInicial}
Level: ${pokemao.level}

Atributos Atuais:
HP: ${pokemao.HP}
Ataque: ${pokemao.ataque}
Level: ${pokemao.level}
Vitórias: ${pokemao.vitorias}
Derrotas: ${pokemao.derrotas}
  `);
}


function batalhar() {
  let inimigo = {
    nome: "Bulbasaur",
    HP: Math.floor(Math.random() * 6) + 5, 
    ataque: Math.floor(Math.random() * 5),  
    level: Math.floor(Math.random() * 5) + 1 
  };

  alert(`Você vai batalhar contra ${inimigo.nome}, de level ${inimigo.level}!`);

  
  let turnoPokemao = true;
  while (pokemao.HP > 0 && inimigo.HP > 0) {
    if (turnoPokemao) {
    
      inimigo.HP -= pokemao.ataque;
      alert(`${pokemao.nome} ataca ${inimigo.nome} e causa ${pokemao.ataque} de dano!`);
    } else {
     
      pokemao.HP -= inimigo.ataque;
      alert(`${inimigo.nome} ataca ${pokemao.nome} e causa ${inimigo.ataque} de dano!`);
    }

   
    turnoPokemao = !turnoPokemao;
    alert(`${pokemao.nome} HP: ${pokemao.HP}, ${inimigo.nome} HP: ${inimigo.HP}`);
  }


  if (pokemao.HP <= 0 && inimigo.HP > 0) {
    alert(`Você perdeu a batalha contra ${inimigo.nome}!`);
    pokemao.derrotas++;
  } else if (inimigo.HP <= 0 && pokemao.HP > 0) {
    alert(`Você venceu a batalha contra ${inimigo.nome}!`);
    pokemao.vitorias++;
    
    
    if (Math.random() > 0.5) {
      pokemao.HP += 10; 
      alert(`${pokemao.nome} ganhou 10 de HP!`);
    } else {
      pokemao.ataque += 1; 
      alert(`${pokemao.nome} ganhou 1 de Ataque!`);
    }
  } else {
    alert("A batalha terminou empatada!");
  }
}


function mostrarMenu() {
  let opcao = prompt(`
Escolha uma opção:
1) Batalhar
2) Vitórias vs Derrotas
3) Listar objeto
4) Sair
  `);

  if (opcao == '1') {
    batalhar();
  } else if (opcao == '2') {
    alert(`Vitórias: ${pokemao.vitorias}\nDerrotas: ${pokemao.derrotas}`);
  } else if (opcao == '3') {
    listarPokemao();
  } else if (opcao == '4') {
    alert("Saindo do programa...");
    return false; 
  } else {
    alert("Opção inválida! Tente novamente.");
  }
  return true; 
}


listarPokemao();


while (true) {
  let continuar = mostrarMenu();
  if (!continuar) break; 
}
