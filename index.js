const choices = ["rock", "paper", "scissors"];
let winners = [];

function reset() {
  winners = [];
  document.querySelector(".playerChoice").textContent = "---------";
  document.querySelector(".computerChoice").textContent = "---------";
  document.querySelector(".winner").textContent = "---------";
  document.querySelector(".playerScore").textContent = "---------";
  document.querySelector(".computerScore").textContent = "---------";
  document.querySelector(".ties").textContent = "---------";
  document.querySelector(".headerScore").textContent = "Score";
  document.querySelector(".headerResult").textContent = "Round";
  document.querySelector(".reset").style.display = "none";
  let btn = document.querySelectorAll(".btn");
  btn.forEach((btn) => (btn.disabled = false));
}

function removeBtn() {
  let btn = document.querySelectorAll(".btn");
  btn.forEach((btn) => (btn.disabled = true));
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
  round();
  let win = logWins();
  if (win == 5) {
    firstToFive();
    document.querySelector(".reset").style.display = "flex";
    removeBtn();
  }
}

function round() {
  let roundNr = winners.length;
  document.querySelector(".headerResult").textContent = "Round " + roundNr;
}

function score() {
  let playerWins = winners.filter((item) => item == "You Win!").length;
  let computerWins = winners.filter((item) => item == "Computer Wins!").length;
  let ties = winners.filter((item) => item == "It's a tie!").length;
  document.querySelector(".playerScore").textContent = "You: " + playerWins;
  document.querySelector(".computerScore").textContent =
    "Computer: " + computerWins;
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
