import { User } from './Models/User';

const user = new User({ name: 'Billy Zane', age: 58 });
console.log(user.get('name'));

user.on('change', () => {
    console.log('User was changed!');
});

user.trigger('change');
