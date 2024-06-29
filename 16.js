// && and or operator

// and and or operator perform "short-circuit evaluation" in JS
// &&(and) stops evaluation and determines the entire expression as false when it even finds one false statement
// ||(or) will stop evalating and determine the entire expression as true even when it finds just one true statement

// let firstName = 'harshit';
// let age = 16;

// if(firstName[0] === 'h'){
//     console.log('firstName starts with the letter h');
// };

// if(age > 18){
//     console.log('age is greater than 18');
// }

// && (and) operator
// if(firstName[0] === 'H' && age > 18) {
//     console.log('firstName starts with h and age is greater than 18');
// }else {
//     console.log('inside else');
// }

// || (or) operator

let firstName = 'Harshit';
let age = 12;

if (firstName[0] === 'H' || age > 18) {
    console.log('firstName starts with h or age is greater than 18');
} else {
    console.log('inside else');
}