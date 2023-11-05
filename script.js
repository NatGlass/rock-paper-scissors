



function getComputerChoice() {
    let min = 1;
    let max = 3;
    let number = Math.floor(Math.random() * (max - min + 1)) + min;
    let action;

    if (number === 1) {
        action = "rock"
    } else if (number === 2) {
        action = "paper"
    } else {
        action = "scissors"
    }
    
    return action;
}

function playRound(playerSelection, computerSelection) {
    
    let playerAction = playerSelection.toLowerCase();
    let computerAction = computerSelection;
    
    if (playerAction === "rock" && computerAction === "rock" || playerAction === "paper" && computerAction === "paper" || playerAction === "scissors" && computerAction === "scissors" ) {
        return "Draw"
    } else if (playerAction === "rock" && computerAction === "paper" || playerAction === "paper" && computerAction === "scissors") {
        return "Player loses"
    } else {
        return "Player wins"

    }
}

const playerSelection = "Paper";
const computerSelection = getComputerChoice();


console.log(playRound(playerSelection, computerSelection))


