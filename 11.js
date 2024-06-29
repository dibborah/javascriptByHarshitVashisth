// undefined
// null

// undefined
// var firstName;// can be done in var 
// const firstName;// cannot be done in case of const

// let firstName;// can be done in let
// When no value is assinged but variable is declared
// console.log(firstName);
// console.log(typeof firstName);

// After a string is assinged
// firstName = 'harshit'
// console.log(firstName);
// console.log(typeof firstName, firstName);// In once console multiple values can be printed using comma, 

// null
// null: refers to:  is nothing // no value

// let myVarible = null;
// myVarible = 'harshit'
// console.log(myVarible, typeof myVarible);
// Note: In JS typeof null === object is a bug, error which can't or will not be fixed ever
// But this bug doesnot cause problem for us but Solving it now will


// BigInt

// let myNumber = 123;
// console.log(myNumber)
// console.log(Number.MAX_SAFE_INTEGER)// This tells us that in JS how much of number can be safely stored in a variable
// If we think that our value can be bigger thant the MAX_SAFE_INTEGER than we have to use BigInt

// Two to ways to convert a number to a BigInt number
// 1. use BigInt constructor or 
// 2. add n at the end of the number
// myNumber = BigInt(823783553653587338238643646328683684);
// myNumber = 8237835536535 87338238643646328683684n;

// If we want to add BigInt . All the number involved doing calculation with a BigInt number has also to be BigInts
let num1 = 120n;
// let num1 = BigInt(120);
let num2 = BigInt(10);// using BigInt constructor
// let num2 = 10n;
console.log(num1 + num2)

// let myNumber = 12332434343423443432434234344n;
// let myNumber = BigInt(133434343323243244332432423324343434234234344);
// console.log(typeof myNumber);