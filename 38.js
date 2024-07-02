// how to iterate objects

const person = {
    name: 'harshit',
    age: 22,
    'person hobbies': ['coding', 'pool', 'reading'],// when there are spaces or
    'phone-number': 333322222,// hyphen or other special character in the name of the key, always write them as strings
};

// using for in loop to get the keys
// priting just keys
// for(let key in person){
//     console.log(key)
// }

// console.log('A line break')

// but since keys in objects are iterable using for in loop
// getting those values is now possible using those KEY NAMES, BRACKET NOTATION and the ARRAY NAME we already know

// printing just values
// for(let key in person){
//     console.log(person[key]);
// }

// printing both keys along with their values

// for (let key in person){
//     console.log(`${key} : ${person[key]}`);
//     console.log(key, ':', person[key]);
// };

// note: for of loop cannot be used in objects since for of loop iterates values not indices and objects values are not iterable

// getting keys as a array of person object
// console.log(Object.keys(person))// returns an ARRAY containing all them keys as items inside it

// checking type
// console.log(typeof Object.keys(person))// type is an objects since arrays are objects

// To see if Object.keys(person) is an array
// console.log(Array.isArray(Object.keys(person)));

for (let key of Object.keys(person)) {
    // console.log(key);// keys names
    console.log(person[key]);// values stored in those keys
}

// getting Object values
// console.log(Object.values(person))

// Array inside the array
// console.log(Object.entries(person));



