function computerPlay() {
    let compValue = Math.floor((Math.random()*3) + 1);
    if (compValue === 1) {
        let rock = 1
        return rock;
    } else if (compValue === 2) {
        let paper = 2
        return paper;
    } else if (compValue === 3) {
        let scissors = 3
        return scissors;
    }
}

let computerSelection = computerPlay()
let playerSelection = 1

function playGame(playerSelection, computerSelection) {
    if (computerSelection === 1) {
        return "Tie, try again"
    } else if (computerSelection === 2) {
        return "You Lose! Paper beats Rock"
    } else {
        return "You Lose! Rock beats Scissors"
    }




    
}
    

