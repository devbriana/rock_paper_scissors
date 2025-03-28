let computerChoice;
let humanChoice;

// Create function to randomly generate rock paper or scissors for computer.
function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 100) + 1;

    if (computerChoice <= 25) {
        computerChoice = "rock";
    } else if (computerChoice > 25 && computerChoice <= 75) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}


// Create function for human to input rock paper or scissors with the prompt method.
function getHumanChoice() {
    humanChoice = prompt("Rock, Paper, or Scissors?");
    return humanChoice;
}
console.log(getHumanChoice());
console.log(getComputerChoice());

// Create score variables
var humanScore = 0;
var computerScore = 0;

// Compare choices and declare if human won or lost.
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (computerChoice === humanChoice) {
        return "Tie! you both chose " + humanChoice + "!";
    } else if (computerChoice === "rock" && humanChoice ==="scissors") {
        return "You lose! rock beats scissors.";
    } else if (computerChoice === "paper" && humanChoice ==="rock") {
        return "You lose! paper beats rock.";
    } else if (computerChoice === "scissors" && humanChoice ==="paper") {
        return "You lose! scissors beats paper.";
    } else {
        return "You win! " + humanChoice  + " beats " + computerChoice + "!";
    }
}
console.log(playRound(humanChoice, computerChoice));

//increment score based on winner