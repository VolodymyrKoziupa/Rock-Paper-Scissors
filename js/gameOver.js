export const gameOver = (playerOptions) => {
  const playerScore = document.querySelector(".p-count").innerHTML;
  const computerScore = document.querySelector(".c-count").innerHTML;
  const chooseMove = document.querySelector(".move");
  const result = document.querySelector(".result");
  const reloadBtn = document.querySelector(".reload");

  playerOptions.forEach((option) => {
    option.style.display = "none";
  });

  chooseMove.innerText = "Game Over!!";

  if (playerScore > computerScore) {
    result.style.fontSize = "2rem";
    result.innerText = "You Won The Game";
    result.style.color = "#308D46";
  } else if (playerScore < computerScore) {
    result.style.fontSize = "2rem";
    result.innerText = "You Lost The Game";
    result.style.color = "red";
  } else {
    result.style.fontSize = "2rem";
    result.innerText = "Tie";
    result.style.color = "grey";
  }
  reloadBtn.innerText = "Reset";
  reloadBtn.style.display = "flex";
  reloadBtn.addEventListener("click", () => {
    window.location.reload();
  });
};
