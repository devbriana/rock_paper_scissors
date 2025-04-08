let computerChoice;
let humanChoice;

// Create score variables
var humanScore = 0;
var computerScore = 0;

// variables for rock paper scissors choices
var rockBtn = document.getElementById('rock');
var paperBtn = document.getElementById('paper');
var scissorsBtn = document.getElementById('scissors');
var allBtn = document.querySelectorAll('.btn');










//function to loop every round for 5 rounds and declare winner
/*function playGame() {
    for (i = 0; i < 5; i++) {
        console.log("ROUND " + (i + 1));
// Create function to randomly generate rock paper or scissors for computer.
      
// Create function for human to input rock paper or scissors with the prompt method.
        /*function getHumanChoice() {
            humanChoice = prompt("Rock, Paper, or Scissors?");
            return humanChoice;
        }
        console.log(getHumanChoice());
        console.log(getComputerChoice());

 
// Compare choices and declare if human won or lost. Increment score
        function playRound(humanChoice, computerChoice) {
            humanChoice = humanChoice.toLowerCase();
            
            if (computerChoice === humanChoice) {
                return "Tie! you both chose " + humanChoice + "!";
            } else if (computerChoice === "rock" && humanChoice ==="scissors") {
                computerScore ++;
                return "You lost this round! rock beats scissors.";
            } else if (computerChoice === "paper" && humanChoice ==="rock") {
                computerScore ++;
                return "You lost this round! paper beats rock.";
            } else if (computerChoice === "scissors" && humanChoice ==="paper") {
                computerScore ++;
                return "You lost this round! scissors beats paper.";
            } else {
                humanScore ++;
                return "You won this round! " + humanChoice  + " beats " + computerChoice + "!";
            }
        }
    
        console.log(playRound(humanChoice, computerChoice));
        console.log("Your score: " + humanScore);
        console.log("Bot score: " + computerScore);
    }
    if (humanScore > computerScore) {
        console.log("GAME OVER: YOU WON!");
    } else if (computerScore > humanScore) {
        console.log("GAME OVER: YOU LOST!");
    } else {
        console.log("GAME OVER: TIED MATCH!");
    }
}

console.log(playGame());
*/




// function for human choice 
// event listeners for each button to get humanChoice
    function getHumanChoice() {
        allBtn.forEach((btn) => {
            btn.addEventListener("click", (e) => {
            humanChoice = e.target.textContent.toLowerCase();
            console.log("Human choice is: " + humanChoice);
            
            playRound(humanChoice);
            });
        });
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
        return "Computer choice is: " + computerChoice;
    }
    console.log(getComputerChoice());

    function playRound(humanChoice) {
    if (computerChoice === humanChoice) {
        return "Tie! you both chose " + humanChoice + "!";
    } else if (computerChoice === "rock" && humanChoice ==="scissors") {
        computerScore ++;
        return "You lost this round! rock beats scissors.";
    } else if (computerChoice === "paper" && humanChoice ==="rock") {
        computerScore ++;
        return "You lost this round! paper beats rock.";
    } else if (computerChoice === "scissors" && humanChoice ==="paper") {
        computerScore ++;
        return "You lost this round! scissors beats paper.";
    } else {
        humanScore ++;
        return "You won this round! " + humanChoice  + " beats " + computerChoice + "!";
    }

    getHumanChoice();

}





playRound();

