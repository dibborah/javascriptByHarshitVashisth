// solution using Object.create()
// learning creating new object via solution using Object.create

const obj1 = {
    key1: 'value1',
    key2: 'value2',
};

// const obj2 = {
//     key3: 'value3',
// };

// console.log(obj2.key1);

// There are two ways to create empty object or just objects
// 1. const newObj = {};
// 2. const newObj = Object.create(null)// whatever passed will be set as the created object proto
const obj2 = Object.create(obj1);
obj2.key3 = 'value3';
// obj2.key1 = 'uniqueValue';

console.log(obj2);
// ways to look for proto of an object
console.log(obj2.__proto__);
// console.log(obj2['__proto__']);

// __proto__ === [[Prototype]]

// console.log(obj2.key1);