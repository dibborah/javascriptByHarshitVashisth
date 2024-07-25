// iterables
// hum jispe for of loop laga skte hain
// usse iterables kehte hain
// strings and arrays

// const firstName = 'harshit';

// using for of loop in string
// for(let char of firstName){
//   console.log(char);
// };

// const numbers = [34, 56, 23, 78];

// using for of loop in numbers
// for(let number of numbers){
//     console.log(number);
// };

// const user = {
//     id: 34,
//     name: 'harshit',
//     city: 'noida',
// };

// using for in loop one can print the keys in an object
// for(let item in user){
//     console.log(item);
// };

// for since objects are not iterable so for of loop cannot be used in an object
// for(let item of user){
//     console.log(item);// This will throw error
// }

// array like objects
// jinke pas length property hoti hain
// aur jinko hum index se access kar skte hain
// ex: string , array

const firstName = 'harshit';
console.log(firstName.length);
console.log(firstName[3]);

// Note: string has length property and can be access using indexes 
// so string are array like objects

// const numbers = [34, 56, 23, 78];
// console.log(numbers.length);
