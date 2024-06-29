// template string 

// here we use backticks (``) , dollar($) and placeholders (curly braces)({})

let age = 22;
let firstName = 'harshit';

// we want
// 'my name is harshit and my age is 22'

// let aboutMe = 'my name is ' + firstName + ' and my age is ' + age;
let aboutMe = `my name is ${firstName} and my age is ${age}`;
console.log(aboutMe);