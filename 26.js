// intro to arrays

// reference data type
// how to create arrays

// array : ordered collection of items
// let fruits = ['mango', 'papaya', 'orange'];
// console.log(fruits);

// storing mixed dataTypes in an array as items
const mixedTypes = ['mango', 1, 1.34, -3.4, false, null, undefined];
console.log(mixedTypes);
mixedTypes[3] = "hi"
console.log(mixedTypes);


// array indexing
// console.log(fruits[0]);

// mutating an array since it is reference type(obj)
// console.log(typeof fruits);// obj
// console.log('before mutating', fruits);
// fruits[1] = 'banana';
// console.log('after mutating', fruits);

// differentiating an Array with an Object
const obj = {};
const arr = [];
// using typeof we can't differiate an Array with an Object
// console.log(typeof obj);
// console.log(typeof fruits);

// Differentiating solution:
// Array.isArray()
// console.log(Array.isArray(arr));
// console.log(Array.isArray(obj));
