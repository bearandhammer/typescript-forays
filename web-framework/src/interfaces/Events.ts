import { Callback } from '../types/Callback';

// Stock interface for any class that wants to implement 'Eventing' within our framework
export interface Events {
    on(eventName: string, callback: Callback): void;
    trigger(eventName: string): void;
}
