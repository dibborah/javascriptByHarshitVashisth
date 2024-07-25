// Sets (it is iterable)
// store data
// Sets also have its own methods
// No index based access
// Orders is not guaranteed
//  UNIQUE ITEMS ONLY
// NO DUPLICATES ALLOWED

// const numbers = [1, 2, 3];

// counts separate
// [] // separate pointer address
// [] // separate pointer address

// counts the same
// varible // same address

// const numbers = new Set();

// const nums = [1,2,3];

// // Variables even for 
// numbers.add(nums);
// numbers.add(['item1', 'item2']);
// numbers.add(nums);
// numbers.add(5);
// numbers.add(5);
// console.log(numbers);

// const numbers = new Set([1,2,3,3]);// No duplicate values in Set so order no guaranteed
// console.log(numbers[2]);// No index based access in Set 
// Differences: 
// arrays vs Set()
// Note: When there is no index based access than the order is not guaranteed like arrays or strings
const numbers = new Set('abc');
numbers.add(5);
console.log(numbers);


