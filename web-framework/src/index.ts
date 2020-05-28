// MOCK TEST SETUP...
import { User } from './models/user';

// Build a User (for testing) and setup a 'change' event
const user = User.buildUser({ id: 1 });
user.on('change', () => {
    console.log(user);
});

// On fetch triggers a 'change' and hydrates the object
user.fetch();
