let computerChoice;
let humanChoice;

// Create score variables
var humanScore = 0;
var computerScore = 0;
var currentRound = 1;
var roundLimit = 5;

// variables for rock paper scissors choices
var rockBtn = document.getElementById('rock');
var paperBtn = document.getElementById('paper');
var scissorsBtn = document.getElementById('scissors');
var allBtn = document.querySelectorAll('.btn');

allBtn.forEach((button) => {
    button.addEventListener("click", playGame);
});

function playGame(e) {
    if (currentRound > roundLimit) {
        console.log("Game over! Please refresh to play again.");
    }

    console.log("ROUND: " + currentRound);
    humanChoice = e.target.title;
    console.log("You chose: " + humanChoice);

    getComputerChoice();
    playRound(humanChoice, computerChoice);

    console.log("Your score: " + humanScore);
    console.log("Bot score: " + computerScore);

    currentRound ++;
    
    if (currentRound > roundLimit) {
        if (humanScore > computerScore) {
            console.log("GAME OVER: YOU WON!");
        } else if (computerScore > humanScore) {
            console.log("GAME OVER: YOU LOST!");
        } else {
            console.log("GAME OVER: TIED MATCH!");
        }
    }

}

function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 100) + 1;

    if (computerChoice <= 25) {
        computerChoice = "rock";
    } else if (computerChoice > 25 && computerChoice <= 75) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    console.log("Computer chose: " + computerChoice);
    return computerChoice;
}

 
// Compare choices and declare if human won or lost. Increment score
function playRound(humanChoice, computerChoice) {            
    if (computerChoice === humanChoice) {
        console.log("Tie! you both chose " + humanChoice + "!");
    } else if (computerChoice === "rock" && humanChoice ==="scissors") {
        computerScore ++;
        console.log("You lost this round! rock beats scissors.");
    } else if (computerChoice === "paper" && humanChoice ==="rock") {
        computerScore ++;
        console.log("You lost this round! paper beats rock.");
    } else if (computerChoice === "scissors" && humanChoice ==="paper") {
        computerScore ++;
        console.log("You lost this round! scissors beats paper.");
    } else {
        humanScore ++;
        console.log("You won this round! " + humanChoice  + " beats " + computerChoice + "!");
    }
   
}
    
