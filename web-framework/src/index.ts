import { UserEdit } from './views/UserEdit';
import { User } from './models/User';

const user = User.buildUser({ name: "Stevie G", age: 41 });
const root = document.querySelector('#root');

if (root) {
    const userEdit = new UserEdit(
        root,
        user
    );
    
    userEdit.render();

    console.log(userEdit);
} else {
    throw new Error('Root element not found.');
}
