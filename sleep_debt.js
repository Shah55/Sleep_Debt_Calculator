//Number of hours I sleep everyday
const getSleepHours = day => {
    switch (day) {
        case 'monday':
            return 7;
            break;
        case 'tuesday':
            return 8;
            break;
        case 'wednesday':
            return 6;
            break;
        case 'thursday':
            return 9;
            break;
        case 'friday':
            return 10;
            break;
        case 'saturday':
            return 5;
            break;
        case 'sunday':
            return 6;
            break;
        default:
            return 'Error';
            break;
    }
}

//console.log(getSleepHours('monday'));

//Total number of hours of sleep I get
const getActualSleepHours = () =>
    getSleepHours('monday')
    + getSleepHours('tuesday')
    + getSleepHours('wednesday')
    + getSleepHours('thursday')
    + getSleepHours('friday')
    + getSleepHours('saturday')
    + getSleepHours('sunday');

//Ideal number of hours I need to sleep
const getIdealSleepHours = () => {
    let idealHours = 9;
    return idealHours * 7;
}

//console.log(getActualSleepHours());
//console.log(getIdealSleepHours());

//Calculates the sleep debt 
const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours) {
        console.log('You receive a perfect amount of sleep!');
    } else if (actualSleepHours > idealSleepHours) {
        console.log(`You received more sleep than needed. You are over ${actualSleepHours - idealSleepHours} hours of sleep.`);
    } else {
        console.log(`You need more rest! You need ${idealSleepHours - actualSleepHours} more hours of sleep.`);
    }
}

calculateSleepDebt();

