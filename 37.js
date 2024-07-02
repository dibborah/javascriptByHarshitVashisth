// dot notation vs bracket notation

// 1st: Accessing spaced keys(properties): Bracket notatn has to be used over Dots
const person = {
    name: 'harshit',
    age: 22,
    'person hobbies': ['coding', 'pool', 'reading'],// when there are spaces or
    'phone-number': 333322222,// hyphen or other special character in the name of the key, always write them as strings
};

// console.log(person['person hobbies']);

// 2nd setting keys from variables: Bracket notation has to be used over Dots

const key = 'email';
// person.key = 'test@email.com';// This is not setting key value as name of the key but setting key as a property name

// Done
person[key] = 'test@gmail.com' 
console.log(person);