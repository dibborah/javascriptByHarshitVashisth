// how to clone array

// how to concatenate two arrays

// let array1 = ['item1', 'item2'];
// let array2 = array1;// Wrong way since array is an object which is a reference data type in JS    

// Ways of cloning array1 items in array2

// 1st way
// let array2 = ['item1', 'item2'];

// 2nd way
// let array2 = array1.slice(0);// Most efficient one in terms of taking time

// 3rd way
// let array2 = [].concat(array1);

// 4th way(Modern and most widely used(famous))
// using spread operator
// let array2 = [...array1];

// mutating array1
// array1.push('item3');

// checking if the two arrays are equal
// console.log(array1 === array2);

// console.log(array1);
// console.log(array2);

// cloning items in new array and also simultaneously adding new items
let array1 = ['item1', 'item2'];

// 1st boring way
// let array2 = ['item1', 'item2', 'item3'];

// 2nd way
// let array2 = array1.slice(0).concat(['item3', 'item4']);

// 3rd way
// let array2 = [].concat(array1);
// let array2 = [].concat(array1.concat(['item3', 'item4']));

// 4th way(modern way)
let array2 = [...array1, 'item3', 'item4', 'item5'];

// creating a new array by spreading two arrays

let demoArray = ['mango', 'apple'];

let newCombineArray = [...array2, ...demoArray];

console.log('newArray', newCombineArray);

// console.log(array1 === array2);

// console.log(array1);
// console.log(array2);