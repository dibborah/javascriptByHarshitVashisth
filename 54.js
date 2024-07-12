// callback functions

// myFunc([1,2,3]);
// myFunc({ name: 'harshit' });

function myFunc2(name) {
    console.log('Hii, I am ', name);
}

function myFunc(callback) {
    // console.log(a);
    console.log('Inside myFunc');
    callback('Harshit');
}

// myFunc(myFunc2('Harshit'))
myFunc(myFunc2);
// myFunc()
