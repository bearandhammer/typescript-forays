import 'reflect-metadata';

// Typescript class metadata example
@printMetadata
class Goblin {
   colour: string = 'green';

   @markFunction(12345)
   speak(): void {
       console.log('Grrrrr!');
   }
}

// Decorator Factory
function markFunction(secretInfo: number) {
    return function (target: Goblin, key: string) {
        Reflect.defineMetadata('goblin-secret', secretInfo, target, key);
    }
}

const secret = Reflect.getMetadata('goblin-secret', Goblin.prototype, 'speak');
console.log(secret);

// Plain decorator...applied to the class
function printMetadata(target: typeof Goblin) {
    for (const key in target.prototype) {
        const secretMetadata = Reflect.getMetadata('goblin-secret', target.prototype, key);
        console.log(secretMetadata);
    }
}

// How about something even more practical
console.log('\r\nController Example\r\n-------------------------------------')

@controller
class LoginController {
    @get('/login')
    getLogin(): void {
        console.log('Logging in...');
    }
}

function get(path: string) {
    return function(target: LoginController, key: string) {
        Reflect.defineMetadata('path', path, target, key);
    }
}

function controller(target: typeof LoginController) {
    for (const key in target.prototype) {
        const pathMetadata = Reflect.getMetadata('path', target.prototype, key);

        // const middleware = Reflect.getMetadata('middleware', target.prototype, key);
        // We would do router.get(path, target.prototype[key])

        console.log(pathMetadata);
    }
}
