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

// Multiple types in arrays