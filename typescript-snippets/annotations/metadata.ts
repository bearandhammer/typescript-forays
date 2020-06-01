import 'reflect-metadata';

// Single variable added to the global scope by our import 'Reflect'

// Example
const coin = {
    colour: 'copper'
}

// Attach metadata to object
Reflect.defineMetadata('note', 'super shiny', coin);
Reflect.defineMetadata('thickness', 2, coin);

// Obtaining metadata from an object...
console.log(coin);
const metadataNote = Reflect.getMetadata('note', coin);
const thickness = Reflect.getMetadata('thickness', coin);
console.log(`Coin - metadataNote: ${ metadataNote } | thickness: ${ thickness }`);

// Metadata can be attached to properties...
Reflect.defineMetadata('propnote', 'Some additional metadata for the property', coin, 'colour');
const propnote = Reflect.getMetadata('propnote', coin, 'colour');
console.log(`Coin 'propnote' colour property metadata: '${ propnote }'`);
