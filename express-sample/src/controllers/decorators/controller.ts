import 'reflect-metadata';
import express from 'express';

export const router = express.Router();

export function controller(routePrefix: string) {
    // Target of Function, suffices for a constructor reference
    return function(target: Function) {
        for (let key in target.prototype) {
            const routeHandler = target.prototype[key];
            const path = Reflect.getMetadata('path', target.prototype, key);

            if (path) {
                router.get(`${ routePrefix }${ path }`, routeHandler);
            }
        }
    }
}
