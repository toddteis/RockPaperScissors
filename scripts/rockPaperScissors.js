// create function that randomly generates one of: rock, paper or scissors.
function computerPlay() {

// create variable to hold return value.
let computerChoice;

// randomly generate a number between 1 and 3.
let randNum = Math.round(Math.random()*2)+1;


// if number is 1 then return rock.
// if number is 2 then return paper.
// else return scissors.
if (randNum === 1) {
    computerChoice = "rock";
} else if (randNum === 2) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}

return computerChoice;
}
