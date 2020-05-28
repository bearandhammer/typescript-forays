import { User } from './Models/User';

// Update
const user = new User({ name: "New record", age: 40 });

user.events.on('change', () => {
    console.log('change!');
});

user.events.trigger('change');