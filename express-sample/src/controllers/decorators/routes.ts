import 'reflect-metadata';

// Define the various decorators for determining how routes behave

// Factory decorator - returns a function
export function get(path: string) {
    return function(target: any, key: string, desc: PropertyDescriptor) {
        Reflect.defineMetadata('path', path, target, key)
    }
}
