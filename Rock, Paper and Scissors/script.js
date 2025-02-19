// Função que retorna um resultado aleatório para o computador
function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"]; // Opções disponíveis
  const randomIndex = Math.floor(Math.random() * options.length); // Gera um índice aleatório
  return options[randomIndex]; // Retorna a opção correspondente ao índice aleatório
}

// Função que verifica se o jogador ganhou a rodada
function hasPlayerWonTheRound(player, computer) {
  return (
    (player === "Rock" && computer === "Scissors") || // Pedra ganha de Tesoura
    (player === "Scissors" && computer === "Paper") || // Tesoura ganha de Papel
    (player === "Paper" && computer === "Rock") // Papel ganha de Pedra
  );
}

let playerScore = 0; // Inicializa a pontuação do jogador
let computerScore = 0; // Inicializa a pontuação do computador

// Função que retorna os resultados da rodada
function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult(); // Obtém o resultado aleatório do computador

  if (hasPlayerWonTheRound(userOption, computerResult)) { // Verifica se o jogador ganhou
    playerScore++; // Incrementa a pontuação do jogador
    return `Player wins! ${userOption} beats ${computerResult}`; // Retorna a mensagem de vitória do jogador
  } else if (computerResult === userOption) { // Verifica se houve empate
    return `It's a tie! Both chose ${userOption}`; // Retorna a mensagem de empate
  } else { // Caso contrário, o computador ganhou
    computerScore++; // Incrementa a pontuação do computador
    return `Computer wins! ${computerResult} beats ${userOption}`; // Retorna a mensagem de vitória do computador
  }
}

const playerScoreSpanElement = document.getElementById("player-score"); // Obtém o elemento de pontuação do jogador
const computerScoreSpanElement = document.getElementById("computer-score"); // Obtém o elemento de pontuação do computador
const roundResultsMsg = document.getElementById("results-msg"); // Obtém o elemento de mensagem de resultados
const winnerMsgElement = document.getElementById("winner-msg"); // Obtém o elemento de mensagem do vencedor
const optionsContainer = document.querySelector(".options-container"); // Obtém o contêiner das opções
const resetGameBtn = document.getElementById("reset-game-btn"); // Obtém o botão de resetar o jogo

// Função que exibe os resultados da rodada
function showResults(userOption) {
  roundResultsMsg.innerText = getRoundResults(userOption); // Atualiza a mensagem de resultados
  computerScoreSpanElement.innerText = computerScore; // Atualiza a pontuação do computador
  playerScoreSpanElement.innerText = playerScore; // Atualiza a pontuação do jogador

  if (playerScore === 3 || computerScore === 3) { // Verifica se alguém alcançou 3 pontos
    winnerMsgElement.innerText = `${
      playerScore === 3 ? "Player" : "Computer"
    } has won the game!`; // Exibe a mensagem de vitória

    resetGameBtn.style.display = "block"; // Exibe o botão de resetar o jogo
    optionsContainer.style.display = "none"; // Esconde o contêiner das opções
  }
}

// Função que reseta o jogo
function resetGame() {
  playerScore = 0; // Reseta a pontuação do jogador
  computerScore = 0; // Reseta a pontuação do computador
  roundResultsMsg.innerText = ""; // Limpa a mensagem de resultados
  computerScoreSpanElement.innerText = computerScore; // Atualiza a pontuação do computador
  playerScoreSpanElement.innerText = playerScore; // Atualiza a pontuação do jogador
  resetGameBtn.style.display = "none"; // Esconde o botão de resetar o jogo
  optionsContainer.style.display = "block"; // Exibe o contêiner das opções
  winnerMsgElement.innerText = ""; // Limpa a mensagem de vitória
}

resetGameBtn.addEventListener("click", resetGame); // Adiciona um evento de clique ao botão de resetar o jogo

const rockBtn = document.getElementById("rock-btn"); // Obtém o botão de Pedra
const paperBtn = document.getElementById("paper-btn"); // Obtém o botão de Papel
const scissorsBtn = document.getElementById("scissors-btn"); // Obtém o botão de Tesoura

rockBtn.addEventListener("click", function () {
  showResults("Rock"); // Adiciona um evento de clique ao botão de Pedra
});

paperBtn.addEventListener("click", function () {
  showResults("Paper"); // Adiciona um evento de clique ao botão de Papel
});

scissorsBtn.addEventListener("click", function () {
  showResults("Scissors"); // Adiciona um evento de clique ao botão de Tesoura
});