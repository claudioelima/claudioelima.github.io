// Variáveis principais
let moedas = 0;
let energia = 100;
let felicidade = 100;
let tempo = "Manhã";
let clima = "Ensolarado";

// Referências ao DOM
const jogarBtn = document.getElementById("jogarBtn");
const gameplaySec = document.getElementById("gameplay");
const acaoBtn = document.getElementById("acaoBtn");
const mensagem = document.getElementById("mensagem");

// Função para atualizar estatísticas
function atualizarEstatisticas() {
  document.getElementById("moedas").innerText = moedas;
  document.getElementById("energia").innerText = energia;
  document.getElementById("felicidade").innerText = felicidade;
  document.getElementById("tempo").innerText = tempo;
  document.getElementById("clima").innerText = clima;
}

// Função para mudar tempo e clima
function mudarTempoEClima() {
  const tempos = ["Manhã", "Tarde", "Noite"];
  const climas = ["Ensolarado", "Chuvoso", "Nublado"];
  tempo = tempos[Math.floor(Math.random() * tempos.length)];
  clima = climas[Math.floor(Math.random() * climas.length)];
}

// Evento ao clicar "Jogar Agora"
jogarBtn.addEventListener("click", () => {
  gameplaySec.style.display = "block";
  jogarBtn.style.display = "none";
  atualizarEstatisticas();
});

// Evento ao clicar "Fazer Ação"
acaoBtn.addEventListener("click", () => {
  moedas += Math.floor(Math.random() * 50 + 10);
  energia -= Math.floor(Math.random() * 10 + 5);
  felicidade -= Math.floor(Math.random() * 5);
  
  mudarTempoEClima();
  atualizarEstatisticas();

  mensagem.innerText = "Você realizou uma ação na cidade! Veja as mudanças acima.";
});

// Inicialização
atualizarEstatisticas();
