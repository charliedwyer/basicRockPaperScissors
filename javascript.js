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



let playerSelection = prompt("Select Rock, Paper, or Scissors");
let computerSelection = getComputerChoice();
console.log(computerSelection);


