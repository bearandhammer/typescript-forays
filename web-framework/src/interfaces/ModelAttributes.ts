export interface ModelAttributes<T> {
    get<K extends keyof T>(key: K): T[K];
    getAll(): T;
    set(value: T): void;
}
