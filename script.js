let computerChoice;
let humanChoice;

// Create score variables
var humanScore = 0;
var computerScore = 0;
var currentRound = 1;
var roundLimit = 5;

// variables for rock paper scissors choices
var allBtn = document.querySelectorAll('.btn');
// variables for text output of page: title, round, choices, round winner, scores, and winner.
var title = document.getElementById('title')
var roundNumber = document.getElementById('round-number');
var youChose = document.getElementById('you-chose');
var computerChose = document.getElementById('computer-chose');
var roundWinner = document.getElementById('round-winner');
var humanScoreDisplay = document.getElementById('human-score-display');
var compScoreDisplay = document.getElementById('comp-score-display');
var winnerDisplay = document.getElementById('winner-display');
var refresh = document.getElementById('refresh');
// variables to style game
var gameContent = document.getElementById('game-content');
var gameBody = document.getElementById('game-body');
var divs = document.querySelectorAll('div');
var text = document.querySelectorAll('.text');
var choicesDiv = document.getElementById('choices');
var scoresDiv = document.getElementById('scores');
var directions = document.querySelector('p');



allBtn.forEach((button) => {
    button.addEventListener("click", playGame);
});

function playGame(e) {
    roundNumber.textContent = "ROUND: " + currentRound;
    humanChoice = e.target.title;
    youChose.textContent = "You chose: " + humanChoice;

    getComputerChoice();
    playRound(humanChoice, computerChoice);

    humanScoreDisplay.textContent = "Your score: " + humanScore;
    compScoreDisplay.textContent = "Bot score: " + computerScore;

    currentRound ++;
    
    if (currentRound > roundLimit) {
        if (humanScore > computerScore) {
            winnerDisplay.textContent = "GAME OVER: YOU WON!";
            console.log("GAME OVER: YOU WON!");
        } else if (computerScore > humanScore) {
            winnerDisplay.textContent = "GAME OVER: YOU LOST!"; 
            console.log("GAME OVER: YOU LOST!");
        } else {
            winnerDisplay.textContent = "GAME OVER: TIED MATCH!"
            console.log("GAME OVER: TIED MATCH!");
        }
        refresh.textContent = "Please refresh to play again."

        if (winnerDisplay.textContent.includes("TIED")) {
            winnerDisplay.style.color = "#4c77ed";
        } else if (winnerDisplay.textContent.includes("LOST")) {
            winnerDisplay.style.color = "#ed4c4c";
        } else if (winnerDisplay.textContent.includes("WON")) {
            winnerDisplay.style.color = "#f1f2c3";
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
    computerChose.textContent = "Computer chose: " + computerChoice;
    return computerChoice;
}

 
// Compare choices and declare if human won or lost. Increment score
function playRound(humanChoice, computerChoice) {            
    if (computerChoice === humanChoice) {
        roundWinner.textContent = "Tie! you both chose " + humanChoice + "!";
    } else if (computerChoice === "rock" && humanChoice ==="scissors") {
        computerScore ++;
        roundWinner.textContent = "You lost this round! rock beats scissors.";
    } else if (computerChoice === "paper" && humanChoice ==="rock") {
        computerScore ++;
        roundWinner.textContent = "You lost this round! paper beats rock.";
    } else if (computerChoice === "scissors" && humanChoice ==="paper") {
        computerScore ++;
        roundWinner.textContent = "You lost this round! scissors beats paper."
    } else {
        humanScore ++;
        roundWinner.textContent = "You won this round! " + humanChoice  + " beats " + computerChoice + "!";
    }

    if (roundWinner.textContent === "Tie! you both chose " + humanChoice + "!") {
        roundWinner.style.color = "#4c77ed";
    } else if (roundWinner.textContent.includes("You lost")) {
        roundWinner.style.color = "#ed4c4c";
    } else if (roundWinner.textContent.includes("You won")) {
        roundWinner.style.color = "#f1f2c3";
    }
   
}
    



// Styling 
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.height = "60vh";
document.body.style.backgroundColor = "#1f1f1f";

gameContent.style.display = "flex";
gameContent.style.flexDirection = "column";
gameContent.style.alignItems = "center";
gameBody.style.display = "flex";
gameBody.style.flexDirection = "column";
gameBody.style.alignItems = "center";
gameBody.style.justifyContent = "center";
gameBody.style.marginTop = "28px";

divs.forEach((div) => {
    div.style.padding = "10px";
})

// Color for all text
text.forEach((one) => {
    one.style.color = "#89bc59";
})

// Title styling
title.style.fontSize = "40px";
title.style.fontFamily = "Georgia";
title.style.position = "absolute";
title.style.marginTop = "40px";

// directions under title styling
directions.style.marginTop = "100px";
directions.style.color = "white";


// Round number
roundNumber.style.textDecoration = "underline";
roundNumber.style.fontSize = "25px";
roundNumber.style.marginTop = "20px";

// Buttons
allBtn.forEach((button) => {
    button.style.width = "150px";  
    button.style.height = "50px";  
    button.style.backgroundColor = "#506f32";  
    button.style.borderColor = "#333";  
    button.style.color = "white";  
    button.style.marginRight = "20px";
    button.style.fontSize = "18px";
    button.style.fontFamily = "Verdana";
});

// Choices
choicesDiv.style.display = "flex";
youChose.style.marginRight = "70px";
computerChose.style.marginLeft = "70px";
youChose.style.color = "#edda4c";
computerChose.style.color = "#eda24c";
choicesDiv.style.fontSize = "20px";

// Round Winner
roundWinner.style.fontSize = "30px";

// Scores
scoresDiv.style.display = "flex";
humanScoreDisplay.style.marginRight = "10px";
compScoreDisplay.style.marginLeft = "10px";
humanScoreDisplay.style.color = "#898a7f";
compScoreDisplay.style.color = "#898a7f";

//Winner Display
winnerDisplay.style.fontSize = "40px";