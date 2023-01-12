import { winner } from "./winner.js";
import { gameOver } from "./gameOver.js";

export const playGame = () => {
  const rockBtn = document.querySelector(".rock");
  const paperBtn = document.querySelector(".paper");
  const scissorBtn = document.querySelector(".scissor");
  const playerOptions = [rockBtn, paperBtn, scissorBtn];
  const computerOptions = ["rock", "paper", "scissors"];

  playerOptions.forEach((option) => {
    option.addEventListener("click", function () {
      const choiceNumber = Math.floor(Math.random() * 3);
      const computerChoice = computerOptions[choiceNumber];

      winner(this.innerText, computerChoice);

      const playerScoreBoard = document.querySelector(".p-count").innerHTML;
      const computerScoreBoard = document.querySelector(".c-count").innerHTML;
      if (playerScoreBoard === "3") {
        gameOver(playerOptions);
      } else if (computerScoreBoard === "3") {
        gameOver(playerOptions);
      }
    });
  });
};
