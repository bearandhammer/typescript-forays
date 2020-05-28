import { Callback } from '../types/Callback';

// Class that implements 'event' logic for our web framework
export class Eventing {
    events: { [key: string]: Callback[] } = {};

    // Functions bound to this object, to avoid issues around the use of 'this' (performance penalty, if any, is accepted)
    on = (eventName: string, callback: Callback): void => {
        const handlers = this.events[eventName] || [];
        handlers.push(callback);

        this.events[eventName] = handlers;
    }

    trigger = (eventName: string): void => {
        const handlers = this.events[eventName];

        if (!handlers || handlers.length === 0) {
            return;
        }

        handlers.forEach(callback => {
            callback();
        });
    }
}
