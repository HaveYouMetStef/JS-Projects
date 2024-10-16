let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;

let runnersAge = 29;

if(registeredEarly && runnersAge >= 18) {
    raceNumber += 1000;
}

if(runnersAge >= 18 && registeredEarly) {
    console.log(`You have registered early! You will start the race @ 9:30 am, your race number is ${raceNumber}.`)
} else if (runnersAge >= 18 && !registeredEarly) {
    console.log(`Late adults run at 11:00 am, your race number is ${raceNumber}.`);

} else if (runnersAge < 18) {
    console.log("Youth registrants run at 12:30 pm (regardless of registration)");
}