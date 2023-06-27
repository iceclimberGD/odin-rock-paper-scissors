let playerWins = 0;
let computerWins = 0;

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

function game(){
    let computerSelection;
    let playerSelection;
    let result;

    for(let i = 1; i < 6; i++){
        console.log("----Round " + i + "----")
        computerSelection = getComputerChoice();

        playerSelection = prompt("Rock, Paper, or Scissors?");
        result = playRound(playerSelection, computerSelection);

        console.log("Your choice: \t\t" + playerSelection);
        console.log("Computer's choice: \t" + computerSelection);
        console.log(result);
        console.log("\n\n");
    }

    if(playerWins > computerWins){
        console.log("You won " + playerWins + " game(s) against the computer's " + computerWins + ". You won the match!");
    }else if(computerWins > playerWins){
        console.log("You won " + playerWins + " game(s) against the computer's " + computerWins + ". You lost the match...");
    }else{
        console.log("You won " + playerWins + " game(s) against the computer's " + computerWins + ". The match was a tie!");
    }

    playerWins = 0;
    computerWins = 0;
}


function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    
    if(playerSelection === computerSelection){
        return "Round was a tie!";
    }else if(playerSelection === "rock" && computerSelection === "scissors"){
        playerWins++;
        return "You win! Rock beats Scissors!";
    }else if(playerSelection === "paper" && computerSelection === "rock"){
        playerWins++;
        return "You win! Paper beats Rock!";
    }else if(playerSelection === "scissors" && computerSelection === "paper"){
        playerWins++;
        return "You win! Scissors beats Paper!";
    }else if(playerSelection === "rock" && computerSelection === "paper"){
        computerWins++;
        return "You lose! Paper beats Rock!";
    }else if(playerSelection === "paper" && computerSelection === "scissors"){
        computerWins++;
        return "You lose! Scissors beats Paper!";
    }else if(playerSelection === "scissors" && computerSelection === "rock"){
        computerWins++;
        return "You lose! Rock beats Scissors!";
    }else{
        return "Invalid input!";
    }
}