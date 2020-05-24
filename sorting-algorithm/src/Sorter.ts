interface Sortable {
    length: number;
    compare(leftIndex: number, rightIndex: number): boolean;
    swap(leftIndex: number, rightIndex: number): void;
}

export abstract class Sorter implements Sortable {
    abstract length: number;
    
    abstract compare(leftIndex: number, rightIndex: number): boolean;

    abstract swap(leftIndex: number, rightIndex: number): void;

    sort(): void {
        const { length } = this;

        // Compare/swap values (simple/not the best solution - illustration only)
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - 1; j++) {
                // Less than ideal code for starters - not a great solution...
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}
