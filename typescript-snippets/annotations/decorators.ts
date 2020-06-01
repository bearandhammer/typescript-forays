/*

class Plane {
    colour: string = 'red';

    get formattedColour(): string {
        return `This planes colour is ${ this.colour }`;
    }

    @testDecorator
    pilot(): void {
        console.log('swish');
    }
}

// Decorators
// target = prototype of class Plane
// key = name of the member that the decorator is applied to
// There is a third argument = property descriptor...
function testDecorator(target: any, key: string): void {
    console.log('Target:', target);
    console.log('Key:', key);
}

// Decorator is only applied one single time, when the class is defined (not when an instance is instantiated)
*/

// Another example...
class Plane {
    colour: string = 'red';

    get formattedColour(): string {
        return `This planes colour is ${ this.colour }`;
    }

    @logError
    pilot(): void {
        throw new Error('Ouch!');
    }
}

function logError(target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function() {
        try {
            method();
        } catch (error) {
            console.log('Ooops, something went wrong.');
        }
    }
}

const newPlane = new Plane();
newPlane.pilot();

// Decorator factory example
class Building {
    @testDecorator
    colour: string = 'red';

    @testDecorator
    get formattedColour(): string {
        return `This planes colour is ${ this.colour }`;
    }
    
    @failure('We could not find the paint')
    paint(): void {
        throw new Error('Missing paint error');
    }
}

function failure(errorMessage: string) {
    return function (target: any, key: string, desc: PropertyDescriptor): void {
        const method = desc.value;

        desc.value = function() {
            try {
                method();
            } catch (error) {
                console.log(errorMessage);
            }
        }
    }
}

const newBuilding = new Building();
newBuilding.paint();

// Decorators around properties
function testDecorator(target: any, key: string) {
    // Remember, the target is looking at the prototype, hence you don't see the property (i.e. colour)
    // console.log(target);
    console.log(key);
}

// Using decorators on arguments to functions
@classDecorator
class Warrior {
    swing(
        @parameterDecorator weapon: string,
        @parameterDecorator isFast: boolean) {
        if (weapon === "sword") {
            console.log('swish');
        }
        else {
            console.log('crunch');
        }
    }
}

function parameterDecorator(target: any, key: string, index: number) {
    console.log(key, index);
}

// Class definition decorator
function classDecorator(constructor: Function) { // Or typeof Warrior, etc.
    console.log(constructor);
}
