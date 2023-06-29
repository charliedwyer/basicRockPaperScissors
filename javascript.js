console.log("Hello Game");

//Randomly returns either rock, paper, or scissors for the computer's choice
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

//plays a single round of the game and returns who won
function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    console.log("You played " + playerSelection);
    console.log("Computer played " + computerSelection);

    if ((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissors") || 
    (playerSelection == "scissors" && computerSelection == "rock")) {
        computerScore++;
        return "Ah-oh, " + computerSelection + " beats " + playerSelection + ", the computer wins!";
    } else if ((playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper") || 
    (playerSelection == "rock" && computerSelection == "scissors")) {
        playerScore++;
        return "YAY, " + playerSelection + " beats " + computerSelection + ", you win!";
    } else if (playerSelection == computerSelection) {
        return "It's a tie!";
    }
}


const rockBtn = document.querySelector('.rockButton');
rockBtn.addEventListener('click', function() {
    console.log(playRound('rock', getComputerChoice()));
});

const paperBtn = document.querySelector('.paperButton');
paperBtn.addEventListener('click', function() {
    console.log(playRound('paper', getComputerChoice()));
});

const scissorsBtn = document.querySelector('.scissorsButton');
scissorsBtn.addEventListener('click', function() {
    console.log(playRound('scissors', getComputerChoice()));
});


    let playerScore = 0;
    let computerScore = 0;
    let continueGame = true;

/*function game() {

    playerScore = 0;
    computerScore = 0;
    

    console.log("First to 5 Rock, Paper, Scissors Game")

    while (continueGame) {

        console.log("Your Score = " + playerScore);
        console.log("Computer's Score = " + computerScore);

        let playerSelection = prompt("Select Rock, Paper, or Scissors");
        let computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection));
        console.log(computerScore);

        if (playerScore == 5) {
            continueGame = false;
            console.log("Your Score = " + playerScore);
            console.log("Computer's Score = " + computerScore);
            console.log("Congrats! You have won the game and beaten the computer!");
        } else if (computerScore == 5) {
            continueGame = false;
            console.log("Your Score = " + playerScore);
            console.log("Computer's Score = " + computerScore);
            console.log("Dang it! The computer won!");
        }

    }

}*/

//game();






