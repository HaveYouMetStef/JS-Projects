let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


// Write your code below:
// this function will generate a random number between 0 and 9
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}
// console.log(generateTarget());
let targetNumber = generateTarget();


// compare guesses
const compareGuesses = (userGuess, computerGuess, targetNumber) => {
    const userDifference = Math.abs(userGuess - targetNumber);
    const computerDifference = Math.abs(computerGuess - targetNumber);
    
    
    if(userDifference <= computerDifference) {
        return true; //User wins
    } else {
        return false; //Computer wins
    }


};



// console.log(compareGuesses(2, 5,targetNumber));

function updateScore(enterString) {

    if(enterString === 'human') {
        humanScore += 1;
    } else {
        computerScore += 1;
    }
}

// updateScore('computer');
// console.log(computerScore);

function advanceRound() {
    currentRoundNumber += 1
}

// advanceRound();
// console.log(currentRoundNumber);