//function for a random quote
function randomNumber(num) {
    return Math.floor(Math.random() * num)
}

// console.log(randomNumber(10));

//store the message
// let messageGenerator = [];

const messages = {
    'overwhelmed': "Do not dwell on what you cannot do. Instead, focus on what you can.",
    'defeated': `Success is not final, failure is not fatal: It is the courage to continue that counts.`,
    'hopeful': `The future belongs to those who believe in the beauty of their dreams.`
};

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

console.log(createRandomMessage('overwhelmed'));
console.log(createRandomMessage('defeated'));
console.log(createRandomMessage('hopeful'));
console.log(createRandomMessage(''));

/*
console.log(messages.overwhelmed);
console.log(messages.defeated);
console.log(messages.hopeful); */