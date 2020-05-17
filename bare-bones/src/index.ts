// Taking things for a spin!!!
console.log('Taking TypeScript for a test drive (inferring types, for starters - not explicitly setting anything)...');

// 1) Numbers (types inferred)
let a = 1, b = 2;
let c = a + b;
console.log(`c = ${ c }`);

// 2) Invalid operation - errors as expected
let person = {
    name: 'Bear',
    age: 36
};

//let invalidOperation = c * person.name;

// 3) Valid operation
console.log(`3x age of Bear: ${ c * person.age }`);

// 4) More invalid operations
let path = 'https://www.google.com';
//let furtherInvalidationOperation = path % c;

// 5) Print up a path
console.log(`Full path: ${ path }/somefile.txt`);