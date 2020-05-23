import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

// Configure a NumbersCollection/Sorter for use
const numbersCollection = new NumbersCollection([14541, 12, -7, -1, 1, 10]);
const sorter = new Sorter(numbersCollection);

// Pre-sort
console.log(`Before sort: ${ numbersCollection.data }`);
sorter.sort();

// Post-sort
console.log(`After sort: ${ numbersCollection.data }`);