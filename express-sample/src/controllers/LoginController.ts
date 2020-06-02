import { Request, Response } from 'express';
import { get, controller, bodyValidator, post } from './decorators';

interface BodyRequest extends Request {
    body: { [key: string]: string | undefined }
}

@controller('/auth')
class LoginController {
    @get('/login')
    getLogin(req: Request, res: Response): void {
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
    }

    @post('/login')
    @bodyValidator('email', 'password')
    postLogin(req: BodyRequest, res: Response) {
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
    }

    @get('/logout')
    getLogout(req: Request, res: Response) {
        req.session = null;
        res.redirect('/');
    }
}
