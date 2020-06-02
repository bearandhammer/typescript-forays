import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';
import { Methods } from './Methods';
import { MetadataKeys } from './MetadataKeys';

export function controller(routePrefix: string) {
    // Target of Function, suffices for a constructor reference
    return function(target: Function) {
        const router = AppRouter.getInstance();

        for (let key in target.prototype) {
            const routeHandler = target.prototype[key];
            const path = Reflect.getMetadata(MetadataKeys.Path, target.prototype, key);
            const method: Methods = Reflect.getMetadata(MetadataKeys.Method, target.prototype, key);
            const middlewares = Reflect.getMetadata(MetadataKeys.Middleware, target.prototype, key) || [];

            if (path) {
                router[method](`${ routePrefix }${ path }`, ...middlewares, routeHandler);
            }
        }
    }
}
