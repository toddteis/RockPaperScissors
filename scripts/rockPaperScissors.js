// Moved to game()
// Create a variable to store the players choice.
// const playerSelection = "scissors";

// Moved to game()
// Create a variable to store the computers choice.
// const computerSelection = computerPlay();

// Create a function that plays 5 rounds of playRound, keeping score and reports the winner.
function game() {
    // Create a variable to store the total amount of rounds to play.
    let numberOfRounds = 5;

    // Create a variable to store the player wins.
    let playerWins = 0;

    // Create a variable to store the computer wins.
    let computerWins = 0;

    // Create a variable to store the amount of draws.
    let draws = 0;

    // Create a for loop that usings the variable "total amount of rounds to play".
    for (let index = 0; index < numberOfRounds; index++) {
        // Create a return variable.
        let result;
        // Create a variable that prompts the player for a choice.
        let playerSelection = "scissors";
        // Create a variable that calls the computerPlay() to get a computer choice.
        let computerSelection = computerPlay();
        // call the playRound function and pass player choice and computer choice as parameters.
        result = playRound(playerSelection, computerSelection);
        // update the winner or draw variable based on the return result.
        // ? What return from playRound() will be useful? need to rework playRound().

        // if player wins then add one to playerWins variable.
        if (result = "player wins") {
            playerWins++;
            // else if computer wins then add one to computerWins variable.
        } else if (result = "computer wins") {
            computerWins++;
            // else add one to the draws variable.
        } else {
            draws++;
        }
        
        // console.log result of the round.
        console.log(result);
    }

    // console.log the result of the five rounds.
    // if playerWins is greater than computerWins then print message.
    if (playersWins > computerWins) {
        console.log(`Player Wins :)`);
        // else if computerWins is greater than playerWins then print message.
    } else if (computerWins > playerWins) {
        console.log(`Computer Wins :(`)
        // else its a draw and print message.
    } else {
        console.log(`Its a draw. :|`)
    }
}


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
