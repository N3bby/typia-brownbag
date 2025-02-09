import {createValidate, IValidation} from 'typia';
import {Format, Maximum, MaxLength, Minimum, MinItems, MinLength} from 'typia/lib/tags';

type Length<Min extends number, Max extends number> = MinLength<Min> & MaxLength<Max>
type Range<Min extends number, Max extends number> = Minimum<Min> & Maximum<Max>

type UUID = string & Format<'uuid'>;
type Email = string & Format<'email'>;
type Hobby = string & Length<2, 20>;
type Age = number & Range<0, 150>;

type User = {
    id: UUID
    name: string & Length<3, 20>,
    email: Email
    age: Age,
    hobbies: Hobby[] & MinItems<1>
}

const john = {
    id: 'not-a-uuid',
    name: 'J',
    email: 'oopsie.example.com',
    age: -20,
    hobbies: []
}

const validateUser = createValidate<User>();
const validation: IValidation<User> = validateUser(john);
console.log(validation)
