import { AxiosPromise } from 'axios';

// Stock interface for any type that wishes to persist/retrieve data within the framework (tied to axios, which is an improvement we could make in the future)
export interface Sync<T> {
    fetch(id: number): AxiosPromise
    save(data: T): AxiosPromise
}
