import {axios} from './util/axios';

// -- API --
type User = {
    name: string,
    age: number
}

function fetchUsers(): User[] {
    return [
        axios.get<User>('user/john').data,
        axios.get<User>('user/mark').data
    ]
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
