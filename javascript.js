console.log("Hello Game");


function getComputerChoice() {
    let computerRandom = Math.floor(Math.random() * 3);
    let computerChoice = "";

    if (computerRandom == 0) {
        computerChoice = "rock";
    } else if (computerRandom == 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    
    return computerChoice;
}

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    console.log("You played " + playerSelection);
    console.log("Computer played " + computerSelection);

    if ((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissors") || 
    (playerSelection == "scissors" && computerSelection == "rock")) {
        return "Ah-oh, " + computerSelection + " beats " + playerSelection + ", the computer wins!";
    } else if ((playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper") || 
    (playerSelection == "rock" && computerSelection == "scissors")) {
        return "YAY, " + playerSelection + " beats " + computerSelection + ", you win!";
    } else if (playerSelection == computerSelection) {
        return "It's a tie!";
    }
}

let playerSelection = prompt("Select Rock, Paper, or Scissors");
let computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));


