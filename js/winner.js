let playerScore = 0;
let computerScore = 0;
let round = 0;
export const winner = (player, computer) => {
  const result = document.querySelector(".result");
  const playerImg = document.querySelector(".player-img");
  const computerImg = document.querySelector(".computer-img");
  const playerScoreBoard = document.querySelector(".p-count");
  const computerScoreBoard = document.querySelector(".c-count");
  player = player.toLowerCase();
  computer = computer.toLowerCase();
  if (player === computer) {
    playerImg.innerHTML = `<img class='img' src="./img/${player}.png" alt="player">`;
    computerImg.innerHTML = `<img class='img' src="./img/${computer}.png" alt="computer">`;
    round++;
    result.textContent = `Round ${round} Tie`;
  } else if (player == "rock") {
    if (computer == "paper") {
      playerImg.innerHTML = `<img class='img' src="./img/${player}.png" alt="player">`;
      computerImg.innerHTML = `<img class='img' src="./img/${computer}.png" alt="computer">`;
      round++;
      result.textContent = `Round ${round}, ${player} vs. ${computer}, You’ve LOST!`;
      computerScore++;
      computerScoreBoard.textContent = computerScore;
    } else {
      playerImg.innerHTML = `<img class='img' src="./img/${player}.png" alt="player">`;
      computerImg.innerHTML = `<img class='img' src="./img/${computer}.png" alt="computer">`;
      round++;
      result.textContent = `Round ${round}, ${player} vs. ${computer}, You’ve WON!`;
      playerScore++;
      playerScoreBoard.textContent = playerScore;
    }
  } else if (player == "scissors") {
    if (computer == "rock") {
      playerImg.innerHTML = `<img class='img' src="./img/${player}.png" alt="player">`;
      computerImg.innerHTML = `<img class='img' src="./img/${computer}.png" alt="computer">`;
      round++;
      result.textContent = `Round ${round}, ${player} vs. ${computer}, You’ve LOST!`;
      computerScore++;
      computerScoreBoard.textContent = computerScore;
    } else {
      playerImg.innerHTML = `<img class='img' src="./img/${player}.png" alt="player">`;
      computerImg.innerHTML = `<img class='img' src="./img/${computer}.png" alt="computer">`;
      round++;
      result.textContent = `Round ${round}, ${player} vs. ${computer}, You’ve WON!`;
      playerScore++;
      playerScoreBoard.textContent = playerScore;
    }
  } else if (player == "paper") {
    if (computer == "scissors") {
      playerImg.innerHTML = `<img class='img' src="./img/${player}.png" alt="player">`;
      computerImg.innerHTML = `<img class='img' src="./img/${computer}.png" alt="computer">`;
      round++;
      result.textContent = `Round ${round}, ${player} vs. ${computer}, You’ve LOST!`;
      computerScore++;
      computerScoreBoard.textContent = computerScore;
    } else {
      playerImg.innerHTML = `<img class='img' src="./img/${player}.png" alt="player">`;
      computerImg.innerHTML = `<img class='img' src="./img/${computer}.png" alt="computer">`;
      round++;
      result.textContent = `Round ${round}, ${player} vs. ${computer}, You’ve WON!`;
      playerScore++;
      playerScoreBoard.textContent = playerScore;
    }
  }
};
