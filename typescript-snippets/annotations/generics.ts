class ArrayOfNumbers {
    constructor(public collection: number[]) {

    }

    get(index: number): number {
        return this.collection[index];
    }
}

class ArrayOfStrings {
    constructor(public collection: string[]) {

    }

    get(index: number): string {
        return this.collection[index];
    }
}

// Generic implementation
class ArrayOfAnything<T> {
    constructor(public collection: T[]) {

    }

    get(index: number): T {
        return this.collection[index];
    }
}

new ArrayOfAnything<string>(['a', 'b', 'c']);

// Type inference (type ArrayOfAnything<string>)
const newArrayOfStrings = new ArrayOfAnything(['a', 'b', 'c']);

// Example of generics with functions
function printStrings(arr: string[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function printNumbers(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

// Generic implementation
function printAnything<T>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);      
    }
}

printAnything<string>(['a', 'e', 'c']);

// Inference still in play
printAnything([1, 3, 5]);

// Generic constraints
interface Printable {
    print(): void;
}

// Implements added for clarity...
class Boat implements Printable {
    print(): void {
        console.log('I am a boat.');
    }
}

class House implements Printable {
    print(): void {
        console.log('I am a house.');
    }
}

// Type constraint, type of T must utilise the Printable interface
function printPrintable<T extends Printable>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
        arr[i].print();
    }
}

// printPrintable([1, 2, 3,]);      // Nope, doesn't satisfy the constraint

// All OK...
printPrintable<Boat>([ new Boat(), new Boat() ]);
printPrintable<Boat>([ new House(), new House() ]);
