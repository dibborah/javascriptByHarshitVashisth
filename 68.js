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

// const person = new Map();
// console.log(person);

// person.set('name', 'harshit');
// person.set('city', 'noida');
// person.set(1, 'one');

// person.set([1,2,3], 'oneTwoThree');
// person.set({key1: 'item1', key2: 'item2'}, 'It is an obj');

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

// console.log(person.keys());

// for(let key of person.keys()){
//     console.log(typeof key);
//     console.log(Array.isArray(key));
//     // console.log(person.get(key));
// }

// const tempObj = {
//     key1: 'value1',
//     key2: 'value2',
// }

// console.log(Object.keys(tempObj));

// console.log(person['name'])// This was of accessing key value pairs in Map data structure is wrong since this is a Map and not a standard Object literal

// difference between Map and Object 
// 1. In Map the key data type can be of any type (even numbers or others)
// 2. But in object the key types are always in strings or symbols


// for(let [key, value] of person){
//     console.log(key, value);
// }

// Map is an ordered Data Structure

// const person = new Map([['name', 'harshit'], ['age', 5]]); //If want to add or set value pairs directly in Map object, array will have to be passed as nested arrays
// person.set(1, 'one')
// person.set([1,2,3], 'an array')
// // console.log(person.keys());
// for(let item of person){
//     console.log(item);
// }

// store extra info of person1
// We cannot store those extra info of person1 in obj person1
// Achieve this using Map Data structure
const person1 = {
    id: 1,
    firstName: 'harshit',
};
const person2 = {
    id: 2,
    firstName: 'rahi',
};

// const extraInfo = new Map([[person1, { age: 23, field: 'IT' }]])
const extraInfo = new Map();
extraInfo.set(person1, { age: 23, gender: 'male' })
extraInfo.set(person2, { age: 20, gender: 'female' })
// console.log(extraInfo.get(person1)['age']);
console.log(extraInfo.get(person1)['gender']);
console.log(extraInfo.get(person2).gender);