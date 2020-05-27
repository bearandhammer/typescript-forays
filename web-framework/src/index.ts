// Testing the first run, not ideal implementation of User (will get worse before it gets better - following course for now)
import { User } from './Models/User';

const user = new User({ name: 'Billy', age: 25 });

user.on('change', () => {});
user.on('change', () => {});
user.on('click', () => {});

console.log(user);
