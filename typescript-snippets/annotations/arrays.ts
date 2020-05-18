// Types with arrays
const carMakers = [ 'renault', 'audi', 'bmw' ];                 // Inferred
//const carMakers: string[] = [ 'renault', 'audi', 'bmw' ];     // Explicit

const emptyArray: string[] = [];            // Empty array - add annotation

const dates = [ new Date(), new Date() ];

interface Point {
    x: number,
    y: number,
}

let pointOne: Point = { x: 10, y: 20 },
    pointTwo: Point = { x: 11, y: 30 };

let points = [ pointOne, pointTwo ]             // Point[]
let mixed = [ pointOne, pointTwo, 'hello' ]     // (string | Point)[]

// Two-dimensional array
const carsByMake = [
    ['f150'],
    ['carolla'],
    ['camaro']
];

// Help with inference when extracting values
const firstCar = carMakers[0];
const secondCar = carMakers.pop();

// Prevent incompatible values
//carMakers.push(100);                          // Invalid

// Help with 'map' (forEach/reduce, etc)
carMakers.map((car: string): string => {
    return car.toUpperCase();
});

points.map((point: Point): Point => {
    return point;
});

mixed.map((point: Point): Point => {
    return point;
});

// Multiple types in arrays (mixture of Dates and strings) (string | Date())
// const importantDates = [ new Date(), '2030-10-10' ];         // A-OK

// Adding types after the fact, use annotations
const importantDates: (Date | string)[] = [ new Date() ];
importantDates.push('2021-12-01');
importantDates.push('2030-01-01');
//importantDates.push(12);                 // Invalid
