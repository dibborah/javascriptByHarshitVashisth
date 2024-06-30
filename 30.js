// for loop in array

// let array1 = ['mango', 'papaya', 'orange', 'banana'];

// const arrayLength = array1.length;

// printing all elements or items of array1 using for loop

// for (let i = 0; i < array1.length; i++){
//     console.log(array1[i].toUpperCase());
// }

// creating a new array with all the elements of array1 using for loop

let array1 = ['mango', 'papaya', 'orange', 'banana'];

const newArray = [];
for (let i = 0; i < array1.length; i++) {
    newArray.push(array1[i].toUpperCase());
}

console.log(array1 === newArray);

console.log('array1', array1);
console.log('newArray', newArray);
