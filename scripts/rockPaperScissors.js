// start game
console.log(game());

// Create a function that plays 5 rounds of playRound, keeping score and reports the winner.
function game() {
    // Create a variable to store result
    let result;
    
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
        let playerSelection = getPlayerChoice();
        // Create a variable that calls the computerPlay() to get a computer choice.
        let computerSelection = computerPlay();
        // call the playRound function and pass player choice and computer choice as parameters.
        result = playRound(playerSelection, computerSelection);
 
        // update the winner or draw variable based on the return result.
        // if player wins then add one to playerWins variable.
        if (result === "player wins") {
            playerWins++;
            result = `Round ${index +1}: ${result}, ${playerSelection} beats ${computerSelection}`;
            // else if computer wins then add one to computerWins variable.
        } else if (result === "computer wins") {
            computerWins++;
            result = `Round ${index +1}: ${result}, ${computerSelection} beats ${playerSelection}`;
            // else add one to the draws variable.
        } else {
            draws++;
            result = `Round ${index +1}: ${result}, ${computerSelection} versus ${playerSelection}`;
        }
        
        // console.log result of the round.
        console.log(result);
    }

    // Calculate the winner and store in a results variable and return.
    result = calcOverAllWinner(playerWins, computerWins, draws);
    
    return result;
}

// Create a function that prompts for the use choice and validates the input.
function getPlayerChoice() {
    // Create return variable.
    let result;
    // Create a boolean variable set to false.
    let isValidate = false;
    // Prompt for input and store in result variable.
    result = prompt("Rock, Paper or Scissors?");
    // change player choice to lower case.
    result = result.toLowerCase();
     // Create a while statement, repeat while boolean variable is false.
     while (isValidate === false) {
        // If result is equal to rock, paper or scissors then set boolean variable to true.
        if (validateChoice(result)) {
            isValidate = true;
            // else prompt player again with invalidate message
        } else {
            result = prompt("Invalidate entry. Choose between Rock, Paper or Scissors.");
            result = result.toLowerCase();
        }
     }
     
    return result;        
}

// create a function that validates the player choice
function validateChoice(choice) {
    // create return variable
    let result;
    // If choice is equal to rock, paper or scissors set return variable to true.
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        result = true;
        // else set return variable to false
    } else {
        result  = false;
    }
    
    return result;
}

// Create a function that takes 3 parameters, playWins, computerWins and draws and return a string
// of the winner of the 5 rounds and the score.
function calcOverAllWinner(playerWins, computerWins, draws) {
    // Create variable to hold the result.
    let result;

    // If playerWins is greater than computerWins then create a string announcing the player
    // as the winner with the scores.
    if (playerWins > computerWins) {
        result = `Player Wins :) ${playerWins} to ${computerWins}, Draws: ${draws}`;
        // Else if computerWins is greater than playerWins then create a string announcing the computer
        // as the winner with the scores.
    } else if (computerWins > playerWins) {
        result = `Computer Wins :( ${computerWins} to ${playerWins}, Draws: ${draws}`;
        // Else create a string announcing its a draw with the scores.
    } else {
        result = `Its a draw. :| Player: ${playerWins} Computer: ${computerWins}, Draws: ${draws}`;
    }

    // return the result variable
    return result;
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
