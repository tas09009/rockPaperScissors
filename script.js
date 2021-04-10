let rock = 'rock';
let paper = 'paper';
let scissors = 'scissors';

let computer = "Computer";
let player = "You";

let computerSelection = computerPlay();
let playerPick = prompt("Enter 'rock', 'paper' or 'scissors'");
let playerSelection = playerPlay(playerPick);

function playerPlay(playerPick) {
  playerPickValue = playerPick.toLowerCase();
  if (playerPickValue === 'rock') {
    return rock;
  } else if (playerPickValue === 'paper') {
    return paper;
  } else if (playerPickValue === 'scissors') {
    return scissors;
  } else {
    tryAgain = prompt("Enter 'rock', 'paper' or 'scissors'")
    playerPlay(tryAgain)
  }
}

function computerPlay() {
  let compValue = Math.floor((Math.random()*3) + 1);
  if (compValue === 1) {
    return rock;
  } else if (compValue === 2) {
    return paper;
  } else if (compValue === 3) {
    return scissors;
  }
}



function playRound(computerSelection, playerSelection) {
  if (selections.includes(rock) && selections.includes(paper)) {
    if (computerSelection === paper) {
      return computer
    } else
    return player
  } else if (selections.includes(rock) && selections.includes(scissors)) {
    if (computerSelection === rock) {
      return computer
    } else
    return player
  } else if (selections.includes(paper) && selections.includes(scissors)) {
    if (computerSelection === scissors) {
      return computer
    } else
    return player
  } else {
    // console.log(computerSelection, 'and', playerSelection)
    console.log('Whoops, you both picked ' + computerSelection + ' and ' + playerSelection + '. Try again')
    tryAgain = prompt("Enter 'rock', 'paper' or 'scissors'")
    playerPlay(tryAgain)
    // playerPlay(tryAgain)
  }
}


console.log('computer:', computerSelection)
console.log('player:', playerSelection)


let selections = [computerSelection, playerSelection]

function score() {
  
}










console.log(playRound(computerSelection, playerSelection));

  /*
  Trackers
  5 roundscompValue
  winner and loser per round


  at the end of the 5 rounds, declare winner of the whole game




  } else if (computerSelection === 2) {
  return "You Lose! Paper beats Rock"
} else {
  return "You Win! Rock beats Scissors"
}  
  */
    