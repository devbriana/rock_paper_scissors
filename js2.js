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

rockBtn.addEventListener("click", () => {
    humanChoice = "rock";
    //playSequence();
});
paperBtn.addEventListener("click", () => {
    humanChoice = "paper";
    //playSequence();
});
scissorsBtn.addEventListener("click", () => {
    humanChoice = "scissors";
    //playSequence();
});


function playSequence() {
    //for (i = 0; i < 5; i++) {
        //console.log("ROUND " + (i + 1));
        console.log("You chose: " + humanChoice);
        disableButtons();
        gameStart();
    

// Start the game only when a button is clicked and humanChoice is set
    function gameStart() {
        if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
            playGame();
        } return;
    }

    function playGame() {
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

        console.log(getComputerChoice());



// Compare choices and declare if human won or lost. Increment score
        function playRound(humanChoice, computerChoice) {            
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
        enableButtons();
        resetChoice();
 
}


  
//}
if (humanScore > computerScore) {
    console.log("GAME OVER: YOU WON!");
    } else if (computerScore > humanScore) {
    console.log("GAME OVER: YOU LOST!");
    } else if (computerScore === humanScore) {
    console.log("GAME OVER: TIED MATCH!");
    }





// function to disable buttons
function disableButtons() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}
//function to enable buttons
function enableButtons() {
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
}
//functions to reset human button choice to null
function resetChoice() {
    humanChoice = null;
}