// Intro functions

const singHappyBirthday = () => {
    console.log('happy birthday to you...');
}

// singHappyBirthday();

function sumTwoNumbers(number1, number2) {
    // number1 and number2 are called parameters
    // variables(local variables) which belongs to the function sumTwoNumbers
    return number1 + number2;
}

// console.log(sumTwoNumbers(4, 2));
// console.log(sumTwoNumbers(4, 2));

// const returnedValue = sumTwoNumbers(4,2);
// const returnedValue = sumTwoNumbers(2,);
// console.log(undefined + undefined); 
// console.log('1', 2 + undefined); 
// console.log('2', returnedValue);


// function isEven(number) {
//     if(number % 2 === 0){
//         // console.log('Even');
//         return true;
//     }else{
//         // console.log('Odd');
//         return false;
//     }
// };

// function isEven(number) {
//     if (number % 2 === 0) {
//         return true;
//     }
//     return false;
// };

// function isEven(number) {
//     return number % 2 === 0;
// }

// console.log(isEven(3));
// isEven(3);

// input : string
// output: first character

// function getFirstCharacter(anyString) {
//     return anyString[0];
// }

// console.log(getFirstCharacter('Javascript'));

// function: 
// input: array, target(number)
// output: index of target if target exists in array

// without using many return statement
// function findTarget(anyArray, target) {
//     for(let item in anyArray){
//         if(target === anyArray[item]){
//             console.log(item);
//             return;
//         }
//     }
//     console.log(-1);    
// }

// const array1 = [1, 3, 5, 7];

// findTarget(array1, 4564);


// after using many return statement
function findTarget(anyArray, target) {
    for(let item in anyArray){
        if(target === anyArray[item]){
            return item;
        }
    }
    return -1   
}

const array1 = [1, 3, 5, 7];
// console.log(findTarget(array1, 2));
const result = findTarget(array1, 6);
console.log(result);
