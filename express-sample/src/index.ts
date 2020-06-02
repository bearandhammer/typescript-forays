import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { AppRouter } from './AppRouter';
import './controllers/LoginController';
import './controllers/HomeController'
import './controllers/ProtectedController';

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
app.use(AppRouter.getInstance());

app.listen(3000, () => {
    console.log('Listening on port 3000...');
});
