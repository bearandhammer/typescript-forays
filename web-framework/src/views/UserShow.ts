import { View } from './View';
import { User } from '../models/User';
import { UserProps } from '../interfaces/UserProps';

export class UserShow extends View<User, UserProps> {
    template(): string {
        return `
            <div>
                <h2>User Detail</h2>
                <div class="user-detail-div">User Name: ${ this.model.get('name') }</div>
                <div class="user-detail-div">User Age: ${ this.model.get('age') }</div>
            </div>
        `;
    }   
}
