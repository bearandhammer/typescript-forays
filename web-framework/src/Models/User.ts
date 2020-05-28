import axios, { AxiosResponse } from "axios";

// ? = optional property
interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

type Callback = () => void;

export class User {
    events: { [key: string]: Callback[] } = {};

    constructor(private data: UserProps) {
    }

    get(propName: string): (number | string) {
        return this.data[propName];
    }

    set(update: UserProps): void {
        Object.assign(this.data, update);
    }

    on(eventName: string, callback: Callback): void {
        const handlers = this.events[eventName] || [];
        handlers.push(callback);

        this.events[eventName] = handlers;
    }

    trigger(eventName: string): void {
        const handlers = this.events[eventName];

        if (!handlers || handlers.length === 0) {
            return;
        }

        handlers.forEach(callback => {
            callback();
        });
    }

    fetch(): void {
        axios.get(`http://localhost:3000/users/${ this.get('id') }`)
            .then((response: AxiosResponse) => {
                this.set(response.data);
            });
    }

    save(): void {
        const id = this.get('id');

        if (id) {
            // User exists, so update the existing record
            axios.put(`http://localhost:3000/users/${ id }`, this.data);
        }
        else {
            // User does not exist, so create a new record
            axios.post('http://localhost:3000/users', this.data);
        }
    }
}
