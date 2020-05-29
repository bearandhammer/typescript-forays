import axios, { AxiosPromise } from 'axios';
import { SupportsId } from '../interfaces/SupportsId';
import { Sync } from '../interfaces/Sync';

// Class that deals with the fetching/persistence of data within the web framework (explicit implements added for clarity)
export class ApiSync<T extends SupportsId> implements Sync<T> {
    constructor(public rootUrl: string) {
    }

    fetch(id: number): AxiosPromise {
        return axios.get(`${ this.rootUrl }/${ id }`);
    }

    save(data: T): AxiosPromise {
        const { id } = data;

        if (id) {
            // User exists, so update the existing record
            return axios.put(`${ this.rootUrl }/${ id }`, data);
        }
        else {
            // User does not exist, so create a new record
            return axios.post(this.rootUrl, data);
        }
    }
}
