// splice method
// start , delete, insert

// slice method does not changes the original array
// const myArray = ['item1', 'item2', 'item3'];
// const newArray = myArray.slice(0, 1);
// console.log(newArray);
// console.log(myArray);

// splice method changes the original array

const myArray = ['item1', 'item2', 'item3'];

// delete
// const deletedItem = myArray.splice(1, 2);
// since an array item was deleted so deleted item will be returned as an array

// console.log('deletedItems', deletedItem);
// console.log('originalArray', myArray);

// inserting an item
// myArray.splice(1, 0, 'newItem');
// console.log(myArray);

// inserting and deleting at same time

const getValue = myArray.splice(1, 2, 'secondItem');
// got the deletedValue
console.log('deletedValue', getValue);
console.log(myArray);


