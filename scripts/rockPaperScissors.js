// Create a variable to store the players choice.
const playerSelection = "scissors";

// Create a variable to store the computers choice.
const computerSelection = computerPlay();

// Create a function that plays 5 rounds of playRound, keeping score and reports the winner.
    // Create a variable to store the total amount of rounds to play.
    // Create a variable to store the player wins.
    // Create a variable to store the computer wins.
    // Create a variable to store the amount of draws.
    // Create a for loop that usings the variable "total amount of rounds to play".
        // Create a variable that prompts the player for a choice.
        // Create a variable that calls the computerPlay() to get a computer choice.
        // call the playRound function and pass player choice and computer choice as parameters.
        // update the winner or draw variable based on the return result.
        // console.log result of the round.
    // console.log the result of the five rounds.

// Create a function that takes the players and computers choices as
// parameters and plays a round of Rock, Paper, Scissors.
function playRound(playerSelection, computerSelection) {
    // Create a variable to hold the result.
    let result;

    // Convert player choice to all lower-capitals.
    let lowerCasePlayerSelection = playerSelection.toLowerCase();

    // If player choice is rock and computer choice is rock, its a  draw.
    if (lowerCasePlayerSelection === "rock" && computerSelection === "rock") {
        result = "Rock against Rock equals a draw!!";
        // else if player choice is rock and computer choice is paper, computer wins.
    } else if (lowerCasePlayerSelection === "rock" && computerSelection === "paper") {
        result = "You lose, Paper beats Rock!!";
        // else if player choice is rock and computer choice is scissors, player wins.
    } else if (lowerCasePlayerSelection === "rock" && computerSelection === "scissors") {
        result = "You win, Rock beats Scissors!!";
        // else if player choice is paper and computer choice is rock, player wins.
    } else if (lowerCasePlayerSelection === "paper" && computerSelection === "rock") {
        result = "You win, Paper beats Rock!!"
        // else if player choice is paper and computer choice is paper, its a draw.
    } else if (lowerCasePlayerSelection === "paper" && computerSelection === "paper") {
        result = "Paper against Paper equals a draw!!";
        // else if player choice is paper and computer choice is scissors, computer wins.
    } else if (lowerCasePlayerSelection === "paper" && computerSelection === "scissors") {
        result = "You lose, Scissors beats Paper!!";
        // else if player choice is scissors and computer choice is rock, computer wins.
    } else if (lowerCasePlayerSelection === "scissors" && computerSelection === "rock") {
        result = "You lose, Rock beats Scissors!!";
        // else if player choice is scissors and computer choice is paper, player wins.
    } else if (lowerCasePlayerSelection === "scissors" && computerSelection === "rock") {
        result = "You win, Scissors beats Rock!!";
        // else if player choice is scissors and computer choice is paper, player wins.
    } else if (lowerCasePlayerSelection === "scissors" && computerSelection === "paper") {
        result = "You win, Scissors beats Paper!!";
        // else player choice is scissors and computer choice is scissors, its a draw.
    } else if (lowerCasePlayerSelection === "scissors" && computerSelection === "scissors") {
        result = "Scissors against Scissors equals a draw!!";
    } 

    // return the result variable.
    return result;
}

// create function that randomly generates one of: rock, paper or scissors.
function computerPlay() {

    // Create a variable to hold return value.
    let computerChoice;

    // Randomly generate a number between 1 and 3.
    let randNum = Math.round(Math.random()*2)+1;


    // If number is 1 then return rock.
    // If number is 2 then return paper.
    // Else return scissors.
    if (randNum === 1) {
        computerChoice = "rock";
    } else if (randNum === 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    return computerChoice;
}
