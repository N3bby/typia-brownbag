import {axios} from './util/axios';
import {assert} from 'typia';

// -- API --
type User = {
    name: string,
    age: number
}

function fetchUsers(): User[] {
     const users = [
        axios.get<unknown>('user/john').data,
        axios.get<unknown>('user/mark').data
    ];
     return assert<User[]>(users) // Boom! But doesn't enter the rest of our codebase!
}
// ----------

// -- UI --
function renderUser(user: User) {
    console.log(`${user.name} - ${user.age}`)
}

const [john, mark] = fetchUsers();
renderUser(john)
renderUser(mark)
// ---------
