import { AxiosResponse } from 'axios';
import { SupportsId } from '../interfaces/SupportsId';
import { ModelAttributes } from '../interfaces/ModelAttributes';
import { Events } from '../interfaces/Events';
import { Sync } from '../interfaces/Sync';

// Class that represents a base class for any 'model' that wants to exist within our web framework, with some default functionality included
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
