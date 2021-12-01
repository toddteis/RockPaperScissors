const summary = document.querySelector('.summary');
const startGameButton = document.querySelector('#start-game');
const playButton = document.querySelector('#play-again');
const noPlayButton = document.querySelector('#dont-play-again');
const rpsControlDiv = document.querySelector('.rps-controls');
const rpsControlButtons = document.querySelectorAll('.control-btn');
const preGameInstructions = document.querySelector('.pregame-instructions');
const inGameInstructions = document.querySelector('.ingame-instructions');
const playAgainText = document.querySelector('.play-again-text');
const thankYouForPlaying = document.querySelector('.good-bye');
let playersSelection;
let roundNumber = 0;
let playerWins = 0;
let computerWins = 0;
let draws = 0;

startGameButton.addEventListener('click', () => {
    console.log('start game!!!');
    showRpsControls();
    hidePregameInstructions();
    showIngameInstuctions();
    hideStartGameBtn();
})

playButton.addEventListener('click', () => {
    playAgain();
})

noPlayButton.addEventListener('click', () => {
    hidePlayAgainText();
    showThankYouForPlayingText();
    resetScores();
    resetSummary();
    hideNoPlayButton();
})

rpsControlButtons.forEach((itemButton) => {
    itemButton.addEventListener('click', () => {
        let playersSelection = itemButton.id;
        game(playersSelection);
    })
})

function game(playersSelection) {
    //increase round number
    roundNumber++;
    //run round
    let roundResult = round(playersSelection);
    //increment winner or draw variables
    updateScores(roundResult);
    // display result
    displayResult(roundResult);
    // check if someone has won three
    checkForWinner();
}

function round(playersSelection) {
    let computersSelection = computerPlay();
    let result = playRound(playersSelection, computersSelection);
    return result;
}

function updateScores(roundResult) {
    if(roundResult==="player wins") {
        playerWins++;
        console.log(playerWins);
    } else if (roundResult ==='computer wins') {
        computerWins++;
        console.log(computerWins);
    } else {
        draws++;
        console.log(draws);
    }
}

function displayResult(roundResult) {
    console.log(roundResult);
    const pElement = document.createElement('p');
    pElement.textContent = `Round ${roundNumber}: ${roundResult}`;
    summary.append(pElement);
}

function checkForWinner() {
    if(playerWins === 5){
        console.log('Player Wins!!!');
        haveWinner('player');
    } else if (computerWins === 5) {
        console.log('Computer Wins!!!');
        haveWinner('computer');
    }
}

function haveWinner(winner) {
    console.log(`the winner is ${winner}.`)
    const pElement = document.createElement('p');
    pElement.textContent = `The winner is ${winner}`;
    summary.append(pElement);
    removeRpsButtons();
    showAddPlayNoplayButtons();
    showPlayAgainText();
    hideIngameInstructions();
}

function playAgain() {
    hideAddPlayNoPlayButtons();
    showRpsControls();
    showIngameInstuctions();
    hidePlayAgainText();
    resetScores();
    resetSummary();
    hideThankYouForPlayingText();
}

// create a function that takes two parameters and calculates the winner of the round.
function playRound(playerSelection, computerSelection) {
    // Create a variable to hold the result.
    let result;

    // If player choice is rock and computer choice is rock, its a  draw.
    if (playerSelection === "rock" && computerSelection === "rock") {
        result = "draw";
        // else if player choice is rock and computer choice is paper, computer wins.
    } else if ( playerSelection === "rock" && computerSelection === "paper") {
        result = "computer wins";
        // else if player choice is rock and computer choice is scissors, player wins.
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        result = "player wins";
        // else if player choice is paper and computer choice is rock, player wins.
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        result = "player wins"
        // else if player choice is paper and computer choice is paper, its a draw.
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        result = "draw";
        // else if player choice is paper and computer choice is scissors, computer wins.
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        result = "computer wins";
        // else if player choice is scissors and computer choice is rock, computer wins.
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        result = "computer wins";
        // else if player choice is scissors and computer choice is paper, player wins.
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        result = "player wins";
        // else if player choice is scissors and computer choice is paper, player wins.
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        result = "player wins";
        // else player choice is scissors and computer choice is scissors, its a draw.
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        result = "draw";
    } 

    // return the result variable.
    return result;
}

// create function that randomly generates one of: rock, paper or scissors.
function computerPlay() {
    let computerChoice;

    let randNum = Math.round(Math.random()*2)+1;

    if (randNum === 1) {
        computerChoice = "rock";
    } else if (randNum === 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    return computerChoice;
}

// RESETS

function resetScores() {
    roundNumber = 0;
    playerWins = 0;
    computerWins = 0;
    draws = 0;
}

function resetSummary() {
    summary.textContent = '';
}

// HIDE/SHOW BUTTONS

function removeRpsButtons() {
    rpsControlDiv.classList.add('no-visibility');
}

function showAddPlayNoplayButtons() {
    playButton.classList.remove('no-display');
    noPlayButton.classList.remove('no-display');
}

function hideNoPlayButton() {
    noPlayButton.classList.add('no-display')
}

function hideAddPlayNoPlayButtons() {
    playButton.classList.add('no-display');
    noPlayButton.classList.add('no-display');
}

function showRpsControls() {
    rpsControlDiv.classList.remove('no-visibility');
}

function hideStartGameBtn() {
    startGameButton.classList.add('no-display')
}

// HIDE/SHOW TEXTS

function hidePregameInstructions() {
    preGameInstructions.classList.add('no-display');
}

function showIngameInstuctions() {
    inGameInstructions.classList.remove('no-display');
}

function hideIngameInstructions() {
    inGameInstructions.classList.add('no-display');
}

function hidePlayAgainText() {
    playAgainText.classList.add('no-display');
}

function showPlayAgainText() {
    playAgainText.classList.remove('no-display');
}

function hidePlayAgainText() {
    playAgainText.classList.add('no-display');
}

function showThankYouForPlayingText() {
    thankYouForPlaying.classList.remove('no-display')
}

function hideThankYouForPlayingText() {
    thankYouForPlaying.classList.add('no-display')
}