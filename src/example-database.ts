import {request} from './util/util';

const userStore: UserDbo[] = []

// -- Repository --
type UserDbo = {
    name: string,
    age: number
}

function save(user: User) {
    const dbo: UserDbo = { ...user }
    userStore.push(dbo) // Imagine this is a database call
}
// --------------

// -- Service --
type User = {
    name: string,
    age: number,
    view: string
}

function createNewUser(dto: CreateUserDto) {
    const user: User = {...dto, view: `${dto.name} - ${dto.age}`}
    save(user)
}
// -------------

// -- API -- //
type CreateUserDto = {
    name: string,
    age: number
}

function postNewUser(dto: CreateUserDto) {
    createNewUser(dto)
}
// ------------

postNewUser(request({
    name: 'Mark',
    age: 28,
    typescriptIsALie: true
}))
console.log(userStore)
