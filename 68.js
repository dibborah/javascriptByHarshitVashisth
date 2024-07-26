// Maps Data Structure

// map is iterable

// store data in ordered fashion

// store key value pair(like object)
// dublicate keys are not allowed like object

// difference between Map and object

// objects can only have string or symbol as key

// object ko object literal v bolte hain
// curly braces and key value pair syntax 
// also called object literals

// key ---> strings || symbol

// const person = {
//     firstName: 'harshit',
//     age: 7,
//     1: 'one',
// };

// console.log(person.firstName);
// console.log(person['firstName']);

// for(let key in person) {
//     console.log(typeof key);   
// }

// console.log(person['firstName']);

// key value pair

const person = new Map();
// console.log(person);

person.set('name', 'harshit');
person.set('city', 'noida');
person.set(1, 'one');
// console.log(person);

// for(let item of person){
//     console.log(item);
//     // for(let key of item){
//     //     console.log(typeof key)
//     // }
// }

// console.log(person.get('name'));
// console.log(person.get('city'));
// console.log(person.get(1));

// console.log(person['name'])// This was of accessing key value pairs in Map data structure is wrong since this is a Map and not a standard Object literal

// difference between Map and Object 
// 1. In Map the key data type can be of any type (even numbers or others)
// 2. But in object the key types are always in strings or symbols
