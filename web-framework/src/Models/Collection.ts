import axios, { AxiosResponse } from 'axios';
import { Events } from '../interfaces/Events';
import { Deserialize } from '../types/Deserialize';

// Class that represents a general collection of entities for use within the web framework 
export class Collection<T, K> {
    models: T[] = [];

    constructor(
        private events: Events,
        public rootUrl: string,
        public deserialize: Deserialize<T, K>
    ) {    
    }

    get on() {
        return this.events.on;
    }

    get trigger() {
        return this.events.trigger;
    }

    fetch(): void {
        axios.get(this.rootUrl)
            .then((response: AxiosResponse) => {
                if (response.data) {
                    // Delegate off the physical serialization to the calling code
                    response.data.forEach((value: K) => {
                        this.models.push(this.deserialize(value));
                    });

                    this.trigger('change');
                }
            });
    }
}
