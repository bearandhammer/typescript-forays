import { User } from './Models/User';

// Update
const user = new User({ id: 1 });
user.set({ name: 'NEW NAME', age: 21 });
user.save();

// New
const newUser = new User({ name: 'New record', age: 36 });
newUser.save();