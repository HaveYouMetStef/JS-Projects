const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();

    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else if(userInput === 'bomb') {
        return userInput
    } else {
        console.log('Error! Please choice the following: rock, paper, or scissors');
    }
}
// getUserChoice('scissors')

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        return 'rock';
    } else if (computerChoice === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// getComputerChoice()

function determineWinner(userChoice, computerChoice) {
    if(userChoice === 'bomb') {
        return 'User wins always wins!'
    }
    if(userChoice === computerChoice) {
        return "It is a tie! Go again!";
    }

    if(userChoice === 'rock') {
        if(computerChoice === 'paper') {
            return 'You lost to a computer!';
        } else if(computerChoice === 'scissors') {
            return 'You win!, Rock always beats scissors';
        }
    }

    if(userChoice === 'paper') {
        if(computerChoice === 'scissors') {
            return "You lost!, Scissors doesn\'t beat paper";
        } else if (computerChoice === 'rock') {
        return 'You win!';
    }
}

    if(userChoice === 'scissors') {
        if(computerChoice === 'rock'){
            return 'Computer wins';
        } else if (computerChoice === 'paper') {
            return 'You win!';
        }
    }
}

function playGame() {
    let userChoice = getUserChoice('paper');
    console.log(userChoice)
    let computerChoice = getComputerChoice();
    console.log(computerChoice)

   return determineWinner(userChoice, computerChoice);
}

console.log(playGame())


// console.log(determineWinner('rock', 'scissors'));