// Type annotation...
const oranges: number = 5;
const myName: string = "Lewis";

//const berries: number = true;         // Type 'true' is not assignable to Type 'number'

let bananas: number = 10;
//bananas = "hello";                    // Type '"hello"' is not assignable to Type 'number'

let speed: string = 'slow';
speed = 'fast';                         // All OK

let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();
let time = now.getTime();

console.log(now.toLocaleDateString('en-GB'));
console.log(time);

// Arrays
let fish: string[] = [ 'catfish', 'cod', 'clownfish' ];
fish.forEach(f => console.log(f));

let numbers: number[] = [ 1, 3, 5 ];
numbers.forEach(n => console.log(n));

let bools: boolean[] = [ true, false, true ];
bools.forEach(b => console.log(!b));

// Classes
class Vehicle {
    start() {
        console.log('Started...');
    }
}

let car : Vehicle = new Vehicle();
car.start();

// Object literal
let point: {x: number; y: number} = {
    x: 10,
    y: 20
};

console.log(`x: ${ point.x } | y: ${ point.y }`);
//console.log(point.z) // Invalid!

// Function (what arguments do we consume and what do we return)...fairly long
const logNumber: (i: number) => void = (i) => {
    console.log(i);
}

// Inferred...
let kiwis = 5;      // Just a number, of course

// Annotation use cases
// 1) Function that returns the 'any' type - take action
const sampleJson = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(sampleJson);
console.log(coordinates);

//coordinates.someRandomProperty; // No help here, by default

// 2) When we declare a variable on one line and initialise it later
let words = [ 'test', 'bed', 'spider' ];
let foundWord: boolean;                 // Better to just initialise it in this case, of course (demo only)
for (let i = 0; i < words.length; i++) {
    if (words[i] === 'bed') {
        foundWord = true;               // Set after the fact, will be 'any' without intervention   
    }
}
console.log(foundWord);

// 3) When inference does not work (denote what types are valid)
let moreNumbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;                        // Not a fantastic use case really, illustration only
for (let i = 0; i < moreNumbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }   
}
console.log(numberAboveZero);

const testFunction: (input: number | string) => boolean = (input) => {
    if (typeof(input) === 'number') {
        return true;
    }
    else {
        return false;
    }
}

console.log(testFunction(125));
console.log(testFunction('Hello'));
//console.log(testFunction(new Date()));      // Invalid