import 'reflect-metadata';

// Factory decorator - returns a function (nested)
function routeBinder(method: string) {
    return function (path: string) {
        return function(target: any, key: string, desc: PropertyDescriptor) {
            Reflect.defineMetadata('path', path, target, key);
            Reflect.defineMetadata('method', method, target, key);
        }
    }
}

// Define route definitions
export const get = routeBinder('get');
export const post = routeBinder('post');
export const put = routeBinder('put');
export const del = routeBinder('delete');
export const patch = routeBinder('patch');
