import { AxiosPromise, AxiosResponse } from 'axios';

type Callback = () => void;

interface ModelAttributes<T> {
    get<K extends keyof T>(key: K): T[K];
    getAll(): T;
    set(value: T): void;
}

interface Sync<T> {
    fetch(id: number): AxiosPromise
    save(data: T): AxiosPromise
}

interface Events {
    on(eventName: string, callback: Callback);
    trigger(eventName: string): void;
}

interface SupportsId {
    id?: number;
}

export class Model<T extends SupportsId> {
    constructor(
        private attributes: ModelAttributes<T>,
        private events: Events,
        private sync: Sync<T>
    ) {
    }

    get on() {
        return this.events.on;
    }

    get trigger() {
        return this.events.trigger;
    }

    get get() {
        return this.attributes.get;
    }

    set(update: T): void {
        // Update attributes and trigger a change event
        this.attributes.set(update);
        this.events.trigger('change');
    }

    fetch(): void {
        const id = this.get('id');     
        
        // We can't 'fetch' an existing setup without the presence of an existing id
        if (typeof id !== 'number') {
            throw new Error('Cannot fetch without an id.');
        }

        // Perform the fetch, setting up object properties
        this.sync.fetch(id)
            .then((response: AxiosResponse): void => {
                this.set(response.data);
            });
    }

    save(): void {
        this.sync.save(this.attributes.getAll())
            .then((response: AxiosResponse) => {
                this.trigger('save');
            })
            .catch(() => {
                this.trigger('error');
            });
    }
}
