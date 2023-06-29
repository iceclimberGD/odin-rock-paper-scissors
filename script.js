let playerWins = 0;
let computerWins = 0;
let round = 0;

let message = document.getElementById("round-message");
let gameMessage = document.getElementById("game-message");
let rockBtn = document.getElementById("rock");
let paperBtn = document.getElementById("paper");
let scissorsBtn = document.getElementById("scissors");
let restartBtn = document.getElementById("restart");
let playerScore = document.getElementById("play-score");
let computerScore = document.getElementById("comp-score");

console.log(rockBtn);
console.log(paperBtn);
console.log(scissorsBtn);


rockBtn.addEventListener("click", function() {
    playRound("rock");
  });
paperBtn.addEventListener("click", function() {
    playRound("paper");
  });
scissorsBtn.addEventListener("click", function() {
    playRound("scissors");
  });
restartBtn.addEventListener("click", function() {
    restart();
  });


function getComputerChoice() {
    let choice = Math.floor((Math.random() * 3)) + 1;
    if(choice == 1){
        return "rock";
    }else if(choice == 2){
        return "paper";
    }else if(choice == 3){
        return "scissors";
    }else{
        return "Computer choice broke!";
    }
}

function playRound(playerSelection){
    round++;
    computerSelection = getComputerChoice();
    console.log(playerSelection);
    console.log(computerSelection);

    if(playerSelection === computerSelection){
        message.innerText = "Round was a tie!";
    }else if(playerSelection === "rock" && computerSelection === "scissors"){
        playerWins++;
        message.innerText = "You win! Rock beats Scissors!";
    }else if(playerSelection === "paper" && computerSelection === "rock"){
        playerWins++;
        message.innerText = "You win! Paper beats Rock!";
    }else if(playerSelection === "scissors" && computerSelection === "paper"){
        playerWins++;
        message.innerText = "You win! Scissors beats Paper!";
    }else if(playerSelection === "rock" && computerSelection === "paper"){
        computerWins++;
        message.innerText = "You lose! Paper beats Rock!";
    }else if(playerSelection === "paper" && computerSelection === "scissors"){
        computerWins++;
        message.innerText = "You lose! Scissors beats Paper!";
    }else if(playerSelection === "scissors" && computerSelection === "rock"){
        computerWins++;
        message.innerText = "You lose! Rock beats Scissors!";
    }else{
        message.innerText = "Invalid input!";
    }

    updateScore();
}

function updateScore(){
    computerScore.innerText = computerWins;
    playerScore.innerText = playerWins;

    if(round % 5 == 0){
        if(playerWins > computerWins){
            gameMessage.innerText = "You won the match!";
        }else if(computerWins > playerWins){
            gameMessage.innerText = "You lost the match...";
        }else{
            gameMessage.innerText = "The match was a tie!";
        }

        rockBtn.setAttribute("disabled", "");
        paperBtn.setAttribute("disabled", "");
        scissorsBtn.setAttribute("disabled", "");

        restartBtn.style = "display: block";
    }
}

function restart(){
    playerWins = 0;
    computerWins = 0;
    computerScore.innerText = 0;
    playerScore.innerText = 0;

    rockBtn.removeAttribute("disabled");
    paperBtn.removeAttribute("disabled");
    scissorsBtn.removeAttribute("disabled");
    restartBtn.style = "display: none";
}