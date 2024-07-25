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
// const numbers = new Set('abc');
// numbers.add(5);
// console.log(numbers);

// const numbers = new Set([1,2,3]);
// console.log(numbers);

// const items = ['item1', 'item2', 'item2'];

// const numbers = new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(1);
// numbers.add(2);
// // numbers.add(items);
// // numbers.add(items);
// numbers.add(['item1', 'item2', 'item2']); // Different address in memory
// numbers.add(['item1', 'item2', 'item2']); // Different address in memory
// console.log(numbers);

// numbers.add(1);
// numbers.add(2);
// numbers.add(3);
// numbers.add(4);
// numbers.add(5);
// numbers.add(6);
// numbers.add(items);

// console.log(numbers);

// if(numbers.has(1)){
//     console.log('1 Exists');
// }else {
//     console.log('1 Does not exists');
// }

// Note: Since order is not defined in for in loop
// so we cannot use for in loop in Set()

// But since Set are iterable
// We can use for in loop in Sets
// we can access all the items of sets using for in loop

// for(let item of numbers) {
//     console.log(item);
// };

// use Set when you have unique values
// use only when you know that one value cannot occur more than onces

// const demoArray = [1, 2, 2, 3, 4, 5, 5, 6, 6, 7, 7, 7];
// const temp = new Set(demoArray)// extracting unique elements from an array
// // Just use Set in JS
// temp.add(demoArray);
// console.log(temp);
// console.log(demoArray);
// console.log(temp.length);// shows undefined

// const obj1 = {
//     key1: 'item1',
//     'key2': 'item2',
// }

// console.log(obj1.length);// shows undefined

// Note: length property (method) does not exists on Set(not ordered) and Objects(Not iterable)

// Task : Find the length of the extracted Set

const demoArray = [1, 2, 2, 3, 4, 5, 5, 6, 6, 7, 7, 7];
const temp = new Set(demoArray)
// console.log(temp);

let setLength = 0;
for (let item of temp){
    setLength++;
}
console.log(setLength);
