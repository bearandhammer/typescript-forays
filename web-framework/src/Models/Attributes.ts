export class Attributes<T> {
    constructor(private data: T) {
    }

    // Type of K can only be one of the 'keys' of T. Return value = type T value of key K
    get = <K extends keyof T>(key: K): T[K] => {
        return this.data[key];
    }

    set(update: T): void {
        Object.assign(this.data, update);
    }
}
