// for of loop in array

const fruits = ['mango', 'papaya', 'grapes'];

// const newArray = [];
// new for of loop to iterate an array
// for (const fruit of fruits){
//     newArray.push(fruit.toUpperCase());
// };

// console.log(newArray);

const newArray = [];
// Traditional for loop to iterate an array
for (let i = 0; i < fruits.length; i++ ){
    // console.log(fruits[i].toUpperCase());
    newArray.push(fruits[i].toUpperCase());
}
console.log(newArray);
