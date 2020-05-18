const drink = {
    color: 'orange',
    carbonated: true,
    sugar: 50
};

// Loss of info (i.e. you can reorder elements)
//const irnBru = [ 'orange', true, 50 ];

// Tuples (annotations)
//const irnBru: [ string, boolean, number ] = [ 'orange', true, 50 ];
//irnBru[0] = 1;      // Invalid

// Use of 'type'
type Drink = [ string, boolean, number ];
const irnBru: Drink = [ 'orange', true, 50 ];
const coffee: Drink = [ 'brown', false, 0 ];
const coke: Drink = [ 'brown', true, 45 ];

// What is the purpose....??? Not very expressive
const carSpecs: [number, number] = [400, 3354];

// I would go with objects
const carStats = {
    horsepower: 400,
    weight: 3354
};
