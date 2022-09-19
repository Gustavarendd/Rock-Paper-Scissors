const computerChoice = ['Rock','Paper','Scissors']
            const choiceNumber = Math.floor(Math.random() * 3);
            const getComputerChoice = computerChoice[choiceNumber]
            
            
           
            function playRound(playerSelection, computerSelection) {
                if (playerSelection == "Rock" && computerSelection == "Paper") {
                    alert("Player Looses!")
                } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
                    alert("Player Wins!")
                } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
                alert("Player Looses!")
                } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
                    alert("Player Wins!")
                } else if (playerSelection == "Paper" && computerSelection == "Rock") {
                    alert("Player Wins!")
                } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
                    alert("Player Looses!")
                } else if (playerSelection != "Rock" || playerSelection != "Paper" || playerSelection != "Scissors") {
                    alert("Invalid Input!")
                } else {
                    alert("It\'s a tie!")
                }
        }
        for (let i = 0; i < 5; i++) {
    }
            const playerSelection = prompt("Choose: Rock, Paper or Scissors");
            const computerSelection = getComputerChoice;
            
            console.log(playRound(playerSelection, computerSelection))