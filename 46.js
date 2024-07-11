// arrow function

const isEven = (number) =>  number % 2 === 0;

console.log(isEven(4));

const singHappyBirthday = () => {
    console.log('happy birthday to you...');
}

singHappyBirthday();

const sumTwoNumbers = (number1, number2) => {
    return number1 + number2;
}

console.log(sumTwoNumbers(1,2));

const getFirstCharacter = (anyString) => {
    return anyString[0];
}

console.log(sumTwoNumbers(1,2));

const findTarget = (anyArray, target) => {
    for(let item in anyArray){
        if(target === anyArray[item]){
            return item;
        }
    }
    return -1   
}

console.log(findTarget([1,2,4], 4));