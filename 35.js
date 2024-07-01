// array destructuring(ES6 : ES2015)

// const myArray = ['value1', 'value2', 'value3', 'value4'];
// const myArray = ['value1'];

// traditional ways to store arrays items in seperate variables
// const str1 = myArray[0];
// const str2 = myArray[1];

// using array destructuring

// when storing first 2 item of an array
// const [str1, str2] = myArray;// str1 and str2 are normal variables and be be declaring using const, let or var (any declare type)

// str1 = 'value Changed'// Cannot be done if str1 is a constant variable

// when need to skip the 2nd item and storing 3rd item in a varible along with the 1st
// let [str1, , str2] = myArray;// skipping 2nd value

// str1 = 'value Changed'// Can be done since str1 is a let variable

// 3rd Task: Store 1st and 2nd item in separate variables
// And Store 3rd and 4th items in a single array variable

// using traditional or old way
const myArray = ['value1', 'value2', 'value3', 'value4'];

// const [str1, str2] = myArray;
// const newArray = myArray.slice(2);// slice method returns a new Array . Just slice spread array destructing

// const myArray = ['value1', 'value2', 'value3'];

// using spread array destructuring (modern or new way)
const [str1, str2, ...newArray] = myArray;// using the spread (...)operator in array destructuring stores the values spreaded inside an array in the new variable

console.log(str1);
console.log(str2);
console.log(newArray);
