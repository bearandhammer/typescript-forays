import { Request, Response, NextFunction } from 'express';
import { get, controller, use } from './decorators';

function requireAuth(req: Request, res: Response, next: NextFunction): void {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }

    // User does not have a session or is not logged in
    res.status(403);
    res.send('Not permitted.');
}

@controller('/protected')
class ProtectedController {
    @get('/detail')
    @use(requireAuth)
    getProtected(req: Request, res: Response) {
        res.send('Welcome to protected route, logged in user.');
    };
}
