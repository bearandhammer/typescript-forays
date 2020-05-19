// Without interface
// const oldCivic = {
//     name: 'civic',
//     year: 2000,
//     broken: true
// };

// const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {
//     console.log(`Name: ${ vehicle.name }`);
//     console.log(`Year: ${ vehicle.year }`);
//     console.log(`Broken? ${ vehicle.broken }`);
// }

// printVehicle(oldCivic);

// With interface in play
// interface Vehicle {
//     name: string;
//     year: Date;
//     broken: boolean;
//     summary(): string;          // We must expose a summary function returning a string
// }

// const oldCivic = {
//     name: 'civic',
//     year: new Date(),
//     broken: true,
//     summary(): string {
//         return `Name: ${ this.name } | Year: ${ this.year } | Broken: ${ this.broken }`;
//     }
// };

// const printVehicle = (vehicle: Vehicle): void => {
//     console.log(vehicle.summary());
// }

// printVehicle(oldCivic);

// Further ideas...further interface refactoring
// interface SupportsSummary {
//     summary(): string;          // We must expose a summary function returning a string
// }

// const oldClio = {
//     name: 'clio',
//     year: new Date(),
//     broken: true,
//     summary(): string {
//         return `Name: ${ this.name } | Year: ${ this.year } | Broken: ${ this.broken }`;
//     }
// };

// const printSummary = (item: SupportsSummary): void => {
//     console.log(item.summary());
// }

// printSummary(oldClio);

// Code re-use ideas...
interface SupportsSummary {
    summary(): string;          // We must expose a summary function returning a string
}

// Both oldClio/drink support the SupportsSummary interface - valid for use when calling printSummary
const oldClio = {
    name: 'clio',
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${ this.name } | Year: ${ this.year } | Broken: ${ this.broken }`;
    }
};

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 25,
    summary(): string {
        return `My drink has ${ this.sugar } grams of sugar`;
    }
}

const printSummary = (item: SupportsSummary): void => {
    console.log(item.summary());
}

printSummary(oldClio);
printSummary(drink);
