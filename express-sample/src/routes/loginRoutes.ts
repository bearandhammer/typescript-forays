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
router.get('/login', (req: Request, res: Response) => {
    res.send(`
        <form method="post">
            <div>
                <label>Email</label>
                <input name="email" />
            </div>
            <div>
                <label>Password</label>
                <input name="password" type="password" />
            </div>
            <button>Submit</button>
        </form>
    `);
});

router.post('/login', (req: BodyRequest, res: Response) => {
    // Parser middleware required to handle form content - preconfigured
    const { email, password } = req.body;

    if (email && password && email === 'admin@test.com' && password === "hithere") {
        if (req.session) {
            // Hmmm...TODO - refine
            req.session.loggedIn = true;
            res.redirect('/');
        }
    } else {
        res.send('Invalid email or password.');
    }
});

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
                <a href="/login">Login</a>
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
