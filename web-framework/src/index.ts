import { User } from './Models/User';

const user = new User({ id: 2, name: 'Newer Name', age: 1 });

user.on('save', () => {
    console.log(user);
});

user.save();