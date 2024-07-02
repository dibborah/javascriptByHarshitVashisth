// objects

// arrays are good but not sufficient
// for real world data
// objects store key value pairs
// object do not have index

// how to create objects
// const person = { name: 'harshit', age: 22 };
// console.log(person);

// accessing object's properties: 

// Dot notation
// console.log(person.name);
// console.log(person.age);

// using Bracket notation
// console.log(person['name']);
// console.log(person['age']);

// In javascript the name of the keys inside an object are bydefault written in string which is not seen
// const person = {
//     name: 'Harshit',
//     age: 22,
//     hobbies: ['guitar', 'sleeping', 'listening music'],
// };

// But since key are internally written in string let's also written them explicitly, that should not be a problem
const person = {
    'name': 'Harshit',
    'age': 22,
    'hobbies': ['guitar', 'sleeping', 'listening music'],
};

// key of an object in js are internally written in string in when we create them we may write them with or without string. That is fine

// console.log(person);

// Adding new properties in object


// Adding new properties using dot notation(.)
// person.email = 'email@gmail.com';
// person.list = ['milk', 'ginger', 'butter'];

// Adding new properties using bracker notaion([''])
person['email'] = 'email@gmail.com';
person['list'] = ['milk', 'ginger', 'butter'];

console.log(person);
// console.log(person['email']);


// how to access data from objects
// how to add key value pair to objects

