import { CollectionView } from './CollectionView';
import { User } from '../models/User';
import { UserProps } from '../interfaces/UserProps';
import { UserDetailRow } from './UserDetailRow';

export class UserList extends CollectionView<User, UserProps> {
    renderItem(model: User, itemParent: Element): void {
        new UserDetailRow(itemParent, model).render();
    }
}
