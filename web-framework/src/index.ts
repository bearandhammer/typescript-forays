// Testing the first run, not ideal implementation of User (will get worse before it gets better - following course for now)
import { User } from './Models/User';

const user = new User({ name: 'Billy', age: 25 });

user.on('change', () => {
    console.log('Change #1');
});
user.on('change', () => {
    console.log('Change #2');
});
user.on('save', () => {
    console.log('Save was triggered');
});

user.trigger('change');
user.trigger('save');
user.trigger('doesnotexist');
