const profile = {
    name: 'alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge(age: number) {
        this.age = age;
    },
    setName(name: string) {
        this.name = name;
    }
};

// Destructuring (explicit) - expected structure needed when being explicit
const { age }: { age: number } = profile;
const { coords: { lat, lng } }: { coords: { lat: number; lng: number } } = profile;
console.log(age);

const vector3 = {
    identifier: 'point_1',
    colour: 'red',
    hasLight: false,
    points: {
        x: 41,
        y: 67,
        z: 3
    },
    transform(x: number, y: number, z: number) {
        this.points.x = x;
        this.points.y = y;
        this.points.z = z;
    }
}
console.log(`Starter state: x: ${ vector3.points.x } | y: ${ vector3.points.y } | z: ${ vector3.points.z }`);

// Transform and destructure...
vector3.transform(100, 200, 5);
let { identifier, points: { x, y, z } }: 
    { identifier: string, points: { x: number; y: number; z: number } } = vector3;

console.log(identifier);
console.log(x);
console.log(y);
console.log(z);