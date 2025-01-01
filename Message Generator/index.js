//function for a random quote
function randomNumber(num) {
    return Math.floor(Math.random() * num)
}

// console.log(randomNumber(10));

//store the message
// let messageGenerator = [];

const messages = {
    'overwhelmed': [
        "Do not dwell on what you cannot do. Instead, focus on what you can.",
        "You don't have to see the whole staircase, just take the first step.",
        "Start where you are. Use what you have. Do what you can."
    ],
    'defeated': 
    [
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "Our greatest glory is not in never falling, but in rising every time we fall."
    ],
    'hopeful': 
    [`The future belongs to those who believe in the beauty of their dreams.`,
    "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "The best way to predict the future is to create it."
    ]
};

function createRandomMessage(feeling) {
    if(messages[feeling]) {
        const randomIndex = randomNumber(messages[feeling].length);
        return `You mentioned feeling ${feeling}. Here's something to inspire you: "${messages[feeling][randomIndex]}"`
    } else {
        return `Please let me know how you're feeling so I can give you some inspiration!`
    }
}

console.log(createRandomMessage('overwhelmed'));
// console.log(createRandomMessage('defeated'));
// console.log(createRandomMessage('hopeful'));
// console.log(createRandomMessage(''));

/*
function createRandomMessage(feeling) {
    let messageGenerator = feeling

    if (messageGenerator === 'overwhelmed') {
        messageGenerator = `I know you are feeling ${feeling} but ` + messages.overwhelmed;
    } else if (messageGenerator === 'defeated') {
        messageGenerator = `Sometimes you will be ${feeling} by life but ` + messages.defeated;
    } else if (messageGenerator === 'hopeful') {
        messageGenerator = `I'm glad you're feeling ${feeling} know that ` + messages.hopeful;
    } else {
        return `please let me know how you are feeling`;
    }
    return messageGenerator;
};
/*

console.log(createRandomMessage('overwhelmed'));
console.log(createRandomMessage('defeated'));
console.log(createRandomMessage('hopeful'));
console.log(createRandomMessage(''));

/*
console.log(messages.overwhelmed);
console.log(messages.defeated);
console.log(messages.hopeful); */