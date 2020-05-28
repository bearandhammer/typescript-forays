// Stock interface for functionality surrounding interacting with model attributes
export interface ModelAttributes<T> {
    // For reference (dupped for clarity with the implementation): Type of K can only be one of the 'keys' of T. Return value = type T value of key K 
    get<K extends keyof T>(key: K): T[K];
    getAll(): T;
    set(value: T): void;
}
