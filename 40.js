// spread operator

// spread operator in Arrays
// const array1 = [1,3,4];
// const array2 = [2,6,7];

// const newArray = [...array1, ...array2];

// console.log(newArray);

// const newArray = [...'abc'];

// const newArray = [...'123'];
// console.log(newArray);

// Same key / property hum do bar define to kar skte hain kisi object ke andar
// But same key: do bar compile nahi karti JS engine.
// Do key aa nahi skti
// Sirf ek value rehti hain in the end
const obj1 = {
    key1: 'value1',
    ['key2']: 'value2',
    key1: 'newValue',
};

const obj2 = {
    key3: 'value3',
    ['key4']: 'value4',
    key1: 'lastValue',
};

// const newObj = {...obj1, ...obj2};
// const newObj = {...obj2, ...obj1 };

// const newObj = {
//     ...obj1,
//     ...obj2,
//     key10: 'newValue1',
//     key11: 'newValue2',
//  };
// console.log(newObj);

// const myArray = [...'abc']
// console.log(myArray);

// const newObj = {
//  ...'abc'
//  };
// const newObj = {
//  ...['item1', 'item2'],
//  };
const newObj = {
 ...'abcdefghijk',
 };

console.log(newObj);

