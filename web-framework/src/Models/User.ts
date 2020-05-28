import { Model } from './Model';
import { Attributes } from './Attributes';
import { ApiSync } from './ApiSync';
import { Eventing } from './Eventing';
import { UserProps } from '../interfaces/UserProps';

// The root URL for the users endpoint...hardcoded for illustration
const rootUrl = 'http://localhost:3000/users';

// Class that derives from Model representing a standard User (that can utilise the web framework for hydrating itself, interacting with events and persistence)
export class User extends Model<UserProps> {
    static buildUser(attrs: UserProps) {
        return new User(
            new Attributes<UserProps>(attrs),
            new Eventing(),
            new ApiSync<UserProps>(rootUrl)
        );
    }

    isAdminUser(): boolean {
        return this.get('id') === 1;
    }
}
