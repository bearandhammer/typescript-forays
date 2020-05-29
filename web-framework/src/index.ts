import { UserList } from './views/UserList';
import { User } from './models/User';
import { UserEdit } from './views/UserEdit';

// Just testing samples - the List/Edit Views are not actually interconnect at this time (just on show for the purposes of playing with TypeScript)

// Build a sample User Edit View
const user = User.buildUser({ name: "Steve McTest", age: 30 });
const editRoot = document.querySelector('#user-edit-root');

if (editRoot) {
    new UserEdit(editRoot, user).render()   
}

// Build a sample User List View
const users = User.buildUserCollection();

users.on('change', () => {
    const detailsRoot = document.querySelector('#user-details-root');

    if (detailsRoot) {
        new UserList(detailsRoot, users).render();
    }
});

users.fetch();
