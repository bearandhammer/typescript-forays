import { ModelAttributes } from '../interfaces/ModelAttributes';

// Class that handles interaction against attributes for a given model for retrieval/setting of 'data' values (explicit implements added for clarity)
export class Attributes<T> implements ModelAttributes<T> {
    constructor(private data: T) {
    }

    // Type of K can only be one of the 'keys' of T. Return value = type T value of key K
    get = <K extends keyof T>(key: K): T[K] => {
        return this.data[key];
    }

    set(update: T): void {
        Object.assign(this.data, update);
    }

    getAll(): T {
        return this.data;
    }
}
