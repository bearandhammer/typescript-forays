// Basic function annotation to enforce type checking
function addVat(cost: number) {
    return cost += cost * 0.20;   
}

console.log(addVat(25));    // Succeeds
//addVat('Invalid');        // Fails

// 'Any' - basically avoid

// Unknown
let age: unknown = 36;                  // number
let ageIs38 = age === 38;               // boolean
//let invalidOperation = age + 10;      // unknown cannot be operated on in this fashion until 'checked'
if (typeof age == 'number') {
    console.log(`Age plus 10 is: ${ age + 10 }`);
}

// Booleans
let likeIcecream = true;                // inferred boolean
let likeOlives: boolean = false;        // explicit boolean
const likesCookies = true;              // type literal - inferred to just 'true'
let trueValue: true = true;             // heavily constrained - single value
//let anotherTrueValue: true = false;   // not allowed!