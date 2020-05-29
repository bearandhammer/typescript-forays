import { View } from './View';
import { User } from '../models/User';
import { UserProps } from '../interfaces/UserProps';

export class UserDetailRow extends View<User, UserProps> {
    template(): string {
        return `
            <div class="user-detail-div">
                <span class="user-detail-item">User Id: ${ this.model.get('id') }</span>
                <span class="user-detail-item">User Name: ${ this.model.get('name') }</span>
                <span class="user-detail-item">User Age: ${ this.model.get('age') }</span>
            </div>
        `;
    }   
}
