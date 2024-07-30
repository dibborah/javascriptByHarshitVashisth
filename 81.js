function hello() {
    console.log('hello world');
};

// const hello = {
//     key1: 'value1',
// }

// const hello = ['value1', 'value2'];

// javascript:
// fc are two things: function + object

// console.log(hello.name);

// you can add your own properties

// The two values goes inside the constructor property inside the fc prototype
// hello.addedNewProperty = 'a new value';
// hello.prototype2 = 'a new value 2';

// This two property goes inside the fc prototype
// hello.prototype.property3 = 'a new value3';
// hello.prototype.property4 = 'a new value4';

// console.log(hello.prototype)
// console.log(hello.addedNewProperty);

// name property ---> tells fc's name

// function provides more usefull properties

// Every fc in JS has an almost empty object
// It is called prototype
// We can use that extra object whenever we want

// hello.prototype => {}

// console.log(hello.prototype);

hello.prototype.abc = 'abc';
hello.prototype.xyz = 'xyz';
hello.prototype.sing = function() {
    return 'lalala';
}

console.log(hello.prototype.abc);
console.log(hello.prototype.sing());

if(hello.prototype){
    console.log('prototype is present');
}else {
    console.log('prototype is not present');
};

