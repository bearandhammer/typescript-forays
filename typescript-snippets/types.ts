// 'today' is of type 'Date'...no issues there
const today = new Date();
today.getMonth();

// Plain object - plain object, age is of type number
const person = {
    age: 20
}

//person.name               // Invalid - property does not exist

interface GamingConsole {
    cpuModel: string;
    gpuModel: string;
    suppliedControllerCount: number;
    releaseDate: Date
}

let newConsole: GamingConsole = {
    cpuModel: "AMD Zen 2",
    gpuModel: 'RDNA 2',
    suppliedControllerCount: 2,
    releaseDate: new Date('2020-12-01')
};

console.log(`
    Console Info:
    CPU: ${ newConsole.cpuModel }
    GPU: ${ newConsole.gpuModel }
    Controllers: ${ newConsole.suppliedControllerCount }
    Release Date: ${ newConsole.releaseDate.toLocaleDateString('en-GB') }
`);

// newConsole.height = 100;         // Invalid - property does not exist
// newConsole.cpuModel = 2;         // Invalid - 2 not assignable to string

// red is of type Colour
class Colour {
    mix(otherColour: Colour) {
        // Imagine some logic here
        console.log('mixing!');
    }
}
const red = new Colour();
red.mix(new Colour())           // Valid - Colour supplied
//red.mix("TypeScript");        // Not assignable to type Colour

