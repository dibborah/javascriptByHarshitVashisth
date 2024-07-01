// for in loop in array

const fruits = ['mango', 'papaya', 'grapes', 'chiku'];

const newArray = [];
for (let index in fruits) {
    // console.log(index, fruits[index].toUpperCase());
    newArray.push(fruits[index].toUpperCase());
};

console.log(newArray);