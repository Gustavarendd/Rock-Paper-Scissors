const choices = ["rock", "paper", "scissors"];
let winners = [];

function computerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function playerChoice() {
    let input = prompt("Choose: Rock, Paper or Scissors");
    input = input.toLowerCase();
    return input;
}

function playRound(round) {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = winCheck(playerSelection, computerSelection)
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round)
}

function logRound(player, computer, winner, round) {
    console.log("Round: " + round)
    console.log("You choose: " + player);
    console.log("Computer choose: " + computer);
    console.log(winner);
    console.log("-------------------------");
   
}


function winCheck(pSelection, cSelection){
    if (
        (pSelection == "rock" && cSelection == "paper") || 
        (pSelection == "paper" && cSelection == "scissors") || 
        (pSelection == "scissors" && cSelection == "rock")
        ) {
       return "Computer Wins!";

   } else if (pSelection == cSelection) {
     return "It\'s a tie!";

   } else {
     return "You Win!";
   }
}

function logWins() {
    let playerWins = winners.filter((item) => item == "You Win!").length;
    let computerWins = winners.filter((item) => item == "Computer Wins!").length;
    if (playerWins > computerWins) {
        return "Congrats! You Win! " + playerWins + " to " + computerWins;
    } else if (playerWins < computerWins) {
        return "You Loose! " + playerWins + " to " + computerWins;
    } else {
        return "It's a Tie! " + playerWins + " to " + computerWins;
    }
}

function game() {   
    for (let i = 1; i <= 5; i++) {
       playRound(i); 
    }
    return "Game Over: " + logWins();
}

console.log(game())

