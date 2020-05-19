// Class 101

/*

    Modifiers:
    1) Public: method can be freely called - anywhere/anytime
    2) Private: method can only be called by other methods in the defining class
    3) Protected: method can be called by other methods in the defining class or derived classes

    Default: public (property/method)
*/

class Vehicle {
    // Create a public field 'colour'
    constructor(public colour: string) {
    }

    protected honk(): void {
        console.log("Honk!");
    }
}

const vehicle = new Vehicle('turquoise');
console.log(vehicle.colour);

// Derived class of Vehicle
class Car extends Vehicle {
    constructor(public wheels: number, colour: string) {
        super(colour);
    }

    private drive() {
        console.log('Screech!');
    }

    startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
}

const car = new Car(3, 'beige');
car.startDrivingProcess();
