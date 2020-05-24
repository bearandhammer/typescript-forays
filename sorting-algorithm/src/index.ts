import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

// Configure a NumbersCollection/Sorter for use
console.log("Handling the sort of a 'NumbersCollection'...");
const numbersCollection = new NumbersCollection([14541, 12, -7, -1, 1, 10]);

// Pre-sort
console.log(`Before sort: ${ numbersCollection.data }`);

// Post-sort
numbersCollection.sort();
console.log(`After sort: ${ numbersCollection.data }`);
console.log('---------------------------------');

// Second use of Sorter - CharactersCollection
console.log("Handling the sort of a 'CharactersCollection'...");
const charactersCollection = new CharactersCollection('zyXWvUtsrQpOnmlkJihgfEdCBa');

// Pre-sort
console.log(charactersCollection.data);

// Post-sort
charactersCollection.sort();
console.log(charactersCollection.data);
console.log('---------------------------------');

// LinkedList tests
console.log("Handling the sort of a 'LinkedList'...");
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

// Pre-sort
console.log('Before sort...');
linkedList.print();

// Post-sort
linkedList.sort();
console.log('After sort...');
linkedList.print();
console.log('---------------------------------');
