import { Callback } from '../types/Callback';
import { View } from './View';
import { UserProps } from '../interfaces/UserProps';
import { User } from '../models/User';

export class UserForm extends View<User, UserProps> {
    eventsMap(): { [key: string]: Callback } {
        return {
            'click:.set-age': this.onSetAgeClick,
            'click:.set-name': this.onSetNameClick,
            'click:.save-model': this.onSaveModelClick
        };
    }

    onSetAgeClick = (): void => this.model.setRandomAge();

    onSetNameClick = (): void => {
        const input = this.parent.querySelector('input');

        if (input) {
            const name = input.value;
            this.model.set({ name }); 
        }
    };

    onSaveModelClick = (): void => {
        this.model.save();
    }

    template(): string {
        return `
            <div>
                <input type="text" placeholder="${ this.model.get('name') }"/>
                <button class="set-name">Change Name</button>
                <button class="set-age">Set Random Age</button>
                <button class="save-model">Save User</button>
            </div>
        `;
    }
}
