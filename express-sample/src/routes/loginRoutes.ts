import { Router, Request, Response, NextFunction } from 'express';

interface BodyRequest extends Request {
    body: { [key: string]: string | undefined }
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }

    // User does not have a session or is not logged in
    res.status(403);
    res.send('Not permitted.');
}

const router = Router();

router.get('/', (req: Request, res: Response) => {
    if (req.session && req.session.loggedIn) {
        res.send(`
            <div>
                <div>You are logged in</div>
                <a href="/protected">Go to protected route</a>
                <a href="/logout">Logout</a>
            </div>
        `);
    } else {
        res.send(`
            <div>
                <div>You are not logged in</div>
                <a href="auth/login">Login</a>
            </div>
        `);
    }
});

router.get('/logout', (req: Request, res: Response) => {
    req.session = null;
    res.redirect('/');
});

router.get('/protected', requireAuth, (req: Request, res: Response) => {
    res.send('Welcome to protected route, logged in user.');
});

export { router };
