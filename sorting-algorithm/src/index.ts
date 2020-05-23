class Sorter {
    constructor(public collection: number[] | string) {}

    sort(): void {
        const { length } = this.collection;

        // Compare/swap values (simple/not the best solution - illustration only)
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - 1; j++) {
                // Less than ideal code for starters - not a great solution...

                // Type guard = dealing with arrays
                if (this.collection instanceof Array) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        const leftHandValue = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = leftHandValue;
                    }
                }

                // Type guard = dealing with a string
                if (typeof this.collection === 'string') {
                    
                }
            }
        }
    }
}

const sorter = new Sorter([10, 3, -5, 0]);

// Pre-sort
console.log(`Before sort: ${ sorter.collection }`);

// Perform sort (simple bubble sort)
sorter.sort();

// Post-sort
console.log(`After sort: ${ sorter.collection }`);