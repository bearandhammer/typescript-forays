import express, { Request, Response } from 'express';

// Create an express application and attach route
const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send(`
        <div>
            <h1>Hi there</h1>
        </div>
    `);
});

app.listen(3000, () => {
    console.log('Listening on port 3000...');
});
