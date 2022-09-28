const choices = ["rock", "paper", "scissors"];
let winners = [];

function reset() {
  var btnRemove = document.querySelectorAll(".btn");
  btnRemove.style.display = "none";
  document.querySelector(".reset").style.display = "flex";
  //document.querySelector(".winner").textContent = winner;
  //document.querySelector(".winner").textContent = winner;
  //document.querySelector(".winner").textContent = winner;
}

function computerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function startGame() {
  let btnSelect = document.querySelectorAll(".btn");
  btnSelect.forEach((btn) =>
    btn.addEventListener("click", () => {
      if (btn.id) {
        playRound(btn.id);
      }
    })
  );
}

function playRound(playerChoice) {
  const computerSelection = computerChoice();
  const playerSelection = playerChoice;
  const winner = winCheck(playerSelection, computerSelection);
  winners.push(winner);
  document.querySelector(".winner").textContent = winner;
  document.querySelector(".playerChoice").textContent =
    "You choose: " + playerSelection;
  document.querySelector(".computerChoice").textContent =
    "Computer choose: " + computerSelection;
  score();
  let win = logWins();
  if (win == 5) {
    firstToFive();
    reset();
  }
}

function score() {
  let playerWins = winners.filter((item) => item == "You Win!").length;
  let computerWins = winners.filter((item) => item == "Computer Wins!").length;
  let ties = winners.filter((item) => item == "It's a tie!").length;
  document.querySelector(".playerScore").textContent =
    "Your score: " + playerWins;
  document.querySelector(".computerScore").textContent =
    "Computer score: " + computerWins;
  document.querySelector(".ties").textContent = "Ties: " + ties;
}

function winCheck(pSelection, cSelection) {
  if (
    (pSelection == "rock" && cSelection == "paper") ||
    (pSelection == "paper" && cSelection == "scissors") ||
    (pSelection == "scissors" && cSelection == "rock")
  ) {
    return "Computer Wins!";
  } else if (pSelection == cSelection) {
    return "It's a tie!";
  } else {
    return "You Win!";
  }
}

function firstToFive() {
  let playerWins = winners.filter((item) => item == "You Win!").length;

  if (playerWins == 5) {
    document.querySelector(".headerScore").textContent = "You've Won the Game!";
  } else {
    document.querySelector(".headerScore").textContent =
      "Sorry, the Computer won!";
  }
}

function logWins() {
  let playerWins = winners.filter((item) => item == "You Win!").length;
  let computerWins = winners.filter((item) => item == "Computer Wins!").length;
  return Math.max(playerWins, computerWins);
}

startGame();
