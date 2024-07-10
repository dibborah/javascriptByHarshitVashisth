// function expression
// It is assigning anonymous fucntions to variables

// This below functions are all function declaration or function defination

// function singHappyBirthday() {
//     console.log('happy birthday to you...');
// }

const singHappyBirthday = function() {
    console.log('happy birthday to you...');
}

singHappyBirthday();

// function sumTwoNumbers(number1, number2) {
//     return number1 + number2;
// }

const sumTwoNumbers = function(number1, number2) {
    return number1 + number2;
}

console.log(sumTwoNumbers(1,2));

// function isEven(number) {
//     return number % 2 === 0;
// }

const isEven = function(number) {
    return number % 2 === 0;
}

console.log(isEven(4));

// function getFirstCharacter(anyString) {
//     return anyString[0];
// }

const getFirstCharacter = function(anyString) {
    return anyString[0];
}

console.log(getFirstCharacter('Javascript'));

// function findTarget(anyArray, target) {
//     for(let item in anyArray){
//         if(target === anyArray[item]){
//             return item;
//         }
//     }
//     return -1   
// }

const findTarget = function(anyArray, target) {
    for(let item in anyArray){
        if(target === anyArray[item]){
            return item;
        }
    }
    return -1   
}

console.log(findTarget([1,2,4], 4));