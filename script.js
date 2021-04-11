/*
In this function-based program, we play the classic "Rock Paper Scissors" against the computer.

STEPS TO PLAY GAME ON BROWSER
- open 'index.html" file in browser. You can also drag the file into the address bar
- cancel the dialouge box that first opens up. You will use this in a minute.
- right click your mouse, and click on "inspect element"
- navigate to the "console" tab of the developer tools
- click the refresh button to start the game and load up the promp again
- The game will end after 5 rounds. Feel free to hit refresh as many times as you want!
*/

const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';

const computer = "Computer";
const player = "You";

// FUNCTIONS
// ===========================================================
function playerPlay() {
  playerPick = prompt("Enter 'rock', 'paper' or 'scissors'");
  playerPick = playerPick.toLowerCase();
  if (playerPick === 'rock') {
    return rock;
  } else if (playerPick === 'paper') {
    return paper;
  } else if (playerPick === 'scissors') {
    return scissors;
  } else {
    playerPlay()
  }
}

function computerPlay() {
  let compValue = Math.floor((Math.random()*3) + 1);
  if (compValue === 1) {
    return rock;computerSelection
  } else if (compValue === 2) {
    return paper;
  } else if (compValue === 3) {
    return scissors;
  }
}

function determineWinner(selections) {
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
    console.log('Whoops, you both picked ' + computerSelection + ' and ' + playerSelection + '. Try again')
    console.log('---------------------------\n')
    return 'None'
  }
}

function playRound() {
  computerSelection = computerPlay();
  playerSelection = playerPlay();
  console.log('computer picked: ' + computerSelection + '\n')
  console.log('you picked: ' + playerSelection + '\n')
  
  selections = [computerSelection, playerSelection];
  winnerRound = determineWinner(selections);

  if (winnerRound === 'None') {
    return playRound()
  } else {
    return winnerRound
  }
}

// MAIN PROGRAM - uses other functions as inputs
// Keeps track of the 5 games and displays values for each round
// ===============================================================
function playGame() {
  let gameCounter = 0;
  let computerCounter = 0;
  let playerCounter = 0;
  
  while (gameCounter < 5) {
    
    winner = playRound()
    
    if (winner === computer) {
      computerCounter ++;
    } else {
      playerCounter ++;
    }
    gameCounter ++;
        
    console.log('Round winner:', winner);
    console.log('Computer\'s Score: ' + computerCounter + ' | ' + 'Your score: ' + playerCounter + ' | ' + 'Games Played: ' + gameCounter);
    console.log('---------------------------')
  }
  
  // After 5 games, determine the overall winner
  if (computerCounter > playerCounter) {
    console.log('The winner of the game is the Computer!');
  } else {
    console.log('The winner of the game is You!');
  }
}
  
// Execute entire game:
playGame();
