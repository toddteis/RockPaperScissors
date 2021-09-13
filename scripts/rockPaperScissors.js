// Create a variable to store the players choice.
// Create a variable to store the computers choice.
// Create a function that takes the players and computers choices as
// parameters and plays a round of Rock, Paper, Scissors.
    // Inside the function:
        // Create a variable to hold the result.
        // Convert player choice to all lower-capitals.
        // If player choice is rock and computer choice is rock, its a  draw.
        // else if player choice is rock and computer choice is paper, computer wins.
        // else if player choice is rock and computer choice is scissors, player wins.
        // else if player choice is paper and computer choice is rock, player wins.
        // else if player choice is paper and computer choice is paper, its a draw.
        // else if player choice is paper and computer choice is scissors, computer wins.
        // else if player choice is scissors and computer choice is rock, computer wins.
        // else if player choice is scissors and computer choice is paper, player wins.
        // else player choice is scissors and computer choice is scissors, its a draw.
        // return the result variable.
// console log the function with player and computer selections.



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
