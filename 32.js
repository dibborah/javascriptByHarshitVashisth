// while loop in array

const fruits = ['mango', 'papaya', 'grapes'];

let i = 0;
const newArray = [];
while(i < fruits.length){
    newArray.push(fruits[i].toUpperCase());
    i++;
};

console.log('newArray', newArray);