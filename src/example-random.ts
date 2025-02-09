import {Format, Maximum, MaxLength, Minimum, MinItems, MinLength, Type} from 'typia/lib/tags';
import {random} from 'typia';

type Length<Min extends number, Max extends number> = MinLength<Min> & MaxLength<Max>
type Range<Min extends number, Max extends number> = Minimum<Min> & Maximum<Max>

type UUID = string & Format<'uuid'>;
type Email = string & Format<'email'>;
type Hobby = string & Length<2, 20>;
type Age = number & Type<'int32'> & Range<0, 150>;

type User = {
    id: UUID
    name: string & Length<3, 20>,
    email: Email
    age: Age,
    hobbies: Hobby[] & MinItems<1>
}

const randomUser = random<User>();
console.log(randomUser)

const randomJohn: User = {
    ...random<User>(),
    name: 'John'
}
console.log(randomJohn)
