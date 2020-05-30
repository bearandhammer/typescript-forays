import express from 'express';
import { router } from './routes/loginRoutes';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

// Create an express application and attach route
const app = express();

// Add in middleware (for form parsing/sessions) -> express 'Request' does not inherently have a 'body' property, this is discovered/added by the middleware
app.use(bodyParser.urlencoded({
    extended: true 
}));
app.use(cookieSession({
    keys: ['somekey']    
}));

// Configure routes from our preconfigured router object
app.use(router);

app.listen(3000, () => {
    console.log('Listening on port 3000...');
});
