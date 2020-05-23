import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

// Configure a NumbersCollection/Sorter for use
console.log("Handling the sort of a 'NumbersCollection'...");
const numbersCollection = new NumbersCollection([14541, 12, -7, -1, 1, 10]);
let sorter = new Sorter(numbersCollection);

// Pre-sort
console.log(`Before sort: ${ numbersCollection.data }`);
sorter.sort();

// Post-sort
console.log(`After sort: ${ numbersCollection.data }`);

// Second use of Sorter - CharactersCollection
console.log("Handling the sort of a 'CharactersCollection'...");
const charactersCollection = new CharactersCollection('zyXWvUtsrQpOnmlkJihgfEdCBa');

// Pre-sort
console.log(charactersCollection.data);
sorter = new Sorter(charactersCollection);

// Post-sort
sorter.sort();