import 'reflect-metadata';
import { MetadataKeys } from './MetadataKeys';
import { RequestHandler } from 'express';

export function use(middleware: RequestHandler) {
    return function(target: any, key: string, desc: PropertyDescriptor) {
        const middlewares = Reflect.getMetadata(MetadataKeys.Middleware, target, key) || [];

        middlewares.push(middleware);

        Reflect.defineMetadata(MetadataKeys.Middleware, middlewares, target, key);
    }
}
