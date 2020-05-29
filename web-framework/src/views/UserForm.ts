import { Callback } from '../types/Callback';
import { User } from '../models/User';

export class UserForm {
    constructor(public parent: Element, public model: User) {
        this.bindModel();
    }

    bindModel(): void {
        this.model.on('change', () => {
            console.log('Change triggered!');
            this.render();
        });
    }

    eventsMap(): { [key: string]: Callback } {
        return {
            'click:.set-age': this.onSetAgeClick,
            'click:.set-name': this.onSetNameClick
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

    template(): string {
        return `
            <div>
                <h1>User Form</h1>
                <div>User name: ${ this.model.get('name') }</div>
                <div>User age: ${ this.model.get('age') }</div>
                <input />
                <button class="set-name">Change Name</button>
                <button class="set-age">Set Random Age</button>
            </div>
        `;
    }

    bindEvents(fragment: DocumentFragment): void {
        const eventsMap = this.eventsMap();
        for (let eventKey in eventsMap) {
            const [eventName, selector] = eventKey.split(':');

            fragment.querySelectorAll(selector).forEach(element => {
                element.addEventListener(eventName, eventsMap[eventKey]);
            });
        }
    }

    render(): void {
        // Clear out content (as needed)
        this.parent.innerHTML = '';

        // Create and populate a template element
        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.template();

        this.bindEvents(templateElement.content);

        // Add content to the parent element
        this.parent.append(templateElement.content);
    }
}
