import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

// Configure a NumbersCollection/Sorter for use
console.log("Handling the sort of a 'NumbersCollection'...");
const numbersCollection = new NumbersCollection([14541, 12, -7, -1, 1, 10]);
let sorter = new Sorter(numbersCollection);

// Pre-sort
console.log(`Before sort: ${ numbersCollection.data }`);

// Post-sort
sorter.sort();
console.log(`After sort: ${ numbersCollection.data }`);

// Second use of Sorter - CharactersCollection
console.log("Handling the sort of a 'CharactersCollection'...");
const charactersCollection = new CharactersCollection('zyXWvgitUtsrQpOnmlkJihgfEdCBa');
sorter = new Sorter(charactersCollection);

// Pre-sort
console.log(charactersCollection.data);

// Post-sort
sorter.sort();
console.log(charactersCollection.data);

// LinkedList tests
console.log("Handling the sort of a 'LinkedList'...");
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

sorter = new Sorter(linkedList);

// Pre-sort
console.log('Before sort...');
linkedList.print();

// Post-sort
sorter.sort();
console.log('After sort...');
linkedList.print();