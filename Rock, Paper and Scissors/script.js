// Define a função que retorna um resultado aleatório para o computador
function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"]; // Define as opções possíveis
    const randomIndex = Math.floor(Math.random() * options.length); // Gera um índice aleatório
    return options[randomIndex]; // Retorna a opção correspondente ao índice aleatório
}


function hasPlayerWonTheRound(player, computer) {
    return (
      (player === "Rock" && computer === "Scissors") || 
      (player === "Scissors" && computer === "Paper") || 
      (player === "Paper" && computer === "Rock") 
    );
}

let playerScore = 0; 
let computerScore = 0; 

// Define a função que retorna os resultados da rodada
function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult(); 

    if (hasPlayerWonTheRound(userOption, computerResult)) { 
      playerScore++; 
      return `Player wins! ${userOption} beats ${computerResult}`; 
    } else if (computerResult === userOption) { 
      return `It's a tie! Both chose ${userOption}`; 
    } else { 
      computerScore++; 
      return `Computer wins! ${computerResult} beats ${userOption}`; 
    }
}

const playerScoreSpanElement = document.getElementById("player-score"); // Obtém o elemento HTML para a pontuação do jogador
const computerScoreSpanElement = document.getElementById("computer-score"); 
const roundResultsMsg = document.getElementById("results-msg"); // Obtém o elemento HTML para a mensagem de resultados

// Define a função que exibe os resultados
function showResults(userOption) {
    const results = getRoundResults(userOption); // Obtém os resultados da rodada
    playerScoreSpanElement.innerText = playerScore; // Atualiza a pontuação do jogador no HTML
    computerScoreSpanElement.innerText = computerScore; // Atualiza a pontuação do computador no HTML

    roundResultsMsg.innerText = results; // Atualiza a mensagem de resultados no HTML
};

