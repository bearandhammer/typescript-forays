import { Request, Response } from 'express';
import { get, controller } from './decorators';

@controller('')
class HomeController {
    @get('/')
    getHome(req: Request, res: Response) {
        if (req.session && req.session.loggedIn) {
            res.send(`
                <div>
                    <div>You are logged in</div>
                    <a href="/protected/detail">Go to protected route</a>
                    <a href="/auth/logout">Logout</a>
                </div>
            `);
        } else {
            res.send(`
                <div>
                    <div>You are not logged in</div>
                    <a href="/auth/login">Login</a>
                </div>
            `);
        }
    }
}
