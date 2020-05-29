import { Model } from '../models/Model';
import { Callback } from '../types/Callback';

export abstract class View<T extends Model<K>, K> {
    regions: { [key: string]: Element } = {};

    constructor(public parent: Element, public model: T) {
        this.bindModel();
    }

    abstract template(): string;

    regionsMap(): { [key: string]: string } {
        return {};
    }

    eventsMap(): { [key: string]: Callback } {
        return {};
    };

    bindModel(): void {
        this.model.on('change', () => {
            console.log('Change triggered!');
            this.render();
        });
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

    mapRegions(fragment: DocumentFragment): void {
        const regionsMap = this.regionsMap();

        for (let key in regionsMap) {
            const selector = regionsMap[key];
            const element = fragment.querySelector(selector);

            if (element) {
                this.regions[key] = element;   
            }
        }
    }

    onRender(): void {
    }

    render(): void {
        // Clear out content (as needed)
        this.parent.innerHTML = '';

        // Create and populate a template element
        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.template();

        this.bindEvents(templateElement.content);
        this.mapRegions(templateElement.content);

        // Configure 'View' nesting
        this.onRender();

        // Add content to the parent element
        this.parent.append(templateElement.content);
    }
}
