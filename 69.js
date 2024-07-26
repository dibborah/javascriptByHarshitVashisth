// cloning using Object.assign

// Note: Object.assign does a shallow copy of objects

// const originalObject = {
//     name: 'Alice',
//     age: 30,
//     address: {
//       city: 'New York',
//       street: 'Main Street'
//     }
//   };
  
//   // Shallow copy using Object.assign()
//   //   const shallowCopy = Object.assign({}, originalObject);
  
//   // Shallow copy using spread operator
//   //   const shallowCopy = {...originalObject}

//   // Modifying a primitive property
//   shallowCopy.name = 'Bob';
  
//   // Modifying a nested object property
//   shallowCopy.address.city = 'Los Angeles';
  
//   console.log(shallowCopy); // Output: { name: 'Bob', age: 30, address: { city: 'Los Angeles', street: 'Main Street' } }
//   console.log(originalObject); // Output: { name: 'Alice', age: 30, address: { city: 'Los Angeles', street: 'Main Street' } }
  
// memory

const obj1 = {
    key1: 'value1',
    key2: 'value2',
};

// Object not copied instead address copied(referecence to data stored in memory)
// const obj2 = obj1;

// new way
// Shallow copy using spread operator
// const obj2 = {...obj1};

// old way
// Shallow copy using Object.assign()
const obj2 = Object.assign({}, obj1);

obj1.key3 = 'value3'

console.log(obj1);
console.log(obj2);

