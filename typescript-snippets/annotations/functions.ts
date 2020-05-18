const add = (a: number, b: number): number => a + b;
console.log(add(1, 2));

// Arguments - add annotations
// Return value - works (can opt to use/not use it in many cases)

const substract = (a: number, b: number): number => a - b;
console.log(substract(3, 1));

function divide(a: number, b: number): number {
    return a / b;
};

const multiply = function(a: number, b: number): number {
    return a * b;
}

// 
const logger = (message: string): void => {
    console.log(message);

    // Can return null/undefined
    //return true;      // errors
}

// never - cannot have a reachable endpoint!
const throwError = (message: string): never => {
    throw new Error(message);
}

// More likely kind of setup
const throwErrorRedux = (message: string): void => {
    if (!message) {
        throw new Error(message);
    }
}

const todaysWeather = {
    date: new Date(),
    weather: 'rainy'
};

// Original
// const logWeather = (forecast: { date: Date, weather: string }): void => {
//     console.log(forecast.date);
//     console.log(forecast.weather);
// }

// Destructuring
const logWeather = ({ date, weather }: { date: Date, weather: string }): void => {
    console.log(date);
    console.log(weather);
}

// ES2015
// const logWeather = ({ date, weather }) => {
//     console.log(date);
//     console.log(weather);
// }

logWeather(todaysWeather);