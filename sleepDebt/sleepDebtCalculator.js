function getSleepHours(day) {
    switch(day) {
        case 'monday':
            return 8;
            break;
        case 'tuesday':
            return 7;
            break;
        case 'wednesday':
            return 6;
            break;
        case 'thursday':
            return 7;
            break;
        case 'friday':
            return 7;
            break;
        case 'saturday':
            return 10;
            break;
        case 'sunday':
            return 0;
            break;
        default:
            return "I don't sleep."
    }
}

const getActualSleepHours = () => 8 + 7 + 6 + 7 + 7 + 10 + 10;
    // let totalHoursSlept = 0
    // totalHoursSlept += getSleepHours('monday');
    // totalHoursSlept += getSleepHours('tuesday');
    // totalHoursSlept += getSleepHours('wednesday');
    // totalHoursSlept += getSleepHours('thursday');
    // totalHoursSlept += getSleepHours('friday');
    // totalHoursSlept += getSleepHours('saturday');
    // totalHoursSlept += getSleepHours('sunday');
    // return totalHoursSlept

const idealHours = (enterIdealHours) => enterIdealHours *7 ;
// {
//     let idealHours = 7;

//     return idealHours * 7;
// }

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = idealHours(8);

    if (actualSleepHours === idealSleepHours){
        return 'You got just the right amount of sleep' + 'you slept: ' + idealHours + 'hours!';
    } else if(actualSleepHours > idealSleepHours) {
        return 'You got more than enough sleep, ' + 'you actually slept: ' + (actualSleepHours - idealSleepHours) + ' more hours than expected.';
    } else {
        return "You should get some more sleep !" + 'you need ' + (idealSleepHours - actualSleepHours) + ' more hours of sleep.';
    }
}
// console.log(getSleepHours('monday'));
// console.log(getSleepHours('tuesday'));
// console.log(getSleepHours('wednesday'));
console.log(getActualSleepHours())

console.log(idealHours(8))
console.log(calculateSleepDebt());
