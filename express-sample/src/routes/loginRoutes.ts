import { Router, Request, Response } from 'express';

interface BodyRequest extends Request {
    body: { [key: string]: string | undefined }
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

    if (email) {
        res.send(email.toUpperCase());   
    }
    else {
        res.send('Error: email must be defined.');
    }
});

export { router };
