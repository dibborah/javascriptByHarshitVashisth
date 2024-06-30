// primitive vs reference data types

// In case of primitive data type

// let num1 = 8;
// let num2 = num1;

// console.log(num1);
// console.log(num2);

// num1 = 3;

// console.log(num1);
// console.log(num2);

// In case of reference data type

let array1 = ['mango', 'papaya', 'orange'];
let array2 = array1;

console.log(array1);
console.log(array2);

// array1.pop();
array1.push('banana');

console.log(array1);
console.log(array2);

// Some Explaination of stack and heap memory and how JS works w/ that