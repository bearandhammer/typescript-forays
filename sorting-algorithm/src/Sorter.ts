export interface Sortable {
    length: number;
    compare(leftIndex: number, rightIndex: number): boolean;
    swap(leftIndex: number, rightIndex: number): void;
}

export class Sorter {
    constructor(public collection: Sortable) {
    }

    sort(): void {
        const { length } = this.collection;

        // Compare/swap values (simple/not the best solution - illustration only)
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - 1; j++) {
                // Less than ideal code for starters - not a great solution...
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
    }
}
