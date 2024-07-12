// default parameter

// function addTwoNumbers(a, b){
//     if(typeof b === 'undefined') b = 0;// Earlier we did this before defualt paramerer es2015
//     console.log('b', b);
//     return a + b;
// };

// const result = addTwoNumbers(5, 2);
// console.log(result);
// console.log(4, undefined);

function addTwoNumbers(a, b = 0){
    console.log('b', b);
    return a + b;
};

const result = addTwoNumbers(14);
console.log(result);