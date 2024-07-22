// fill method
// value, start, end

// Creating a new Array
// const newArray = new Array(10).fill(0);
// console.log(newArray);

// overwritting existing elements of an array

const myArray = [1, 2, 3, 4, 5, 6, 7, 8];
// 4, 5, 6 => 0

myArray.fill(0, 3, 6);
console.log(myArray);