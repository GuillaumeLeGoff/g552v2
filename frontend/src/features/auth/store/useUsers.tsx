import { useState } from 'react';
import { User } from '../types/user';


export const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);

    const updateUser = (updatedUser: User) => {
        setUsers((prevUsers) =>
            prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user))
        );
    };
    return {
        users,
        updateUser,
    };
};