// this keyword

// console.log(this);// window object
// window object is JS's global object

// console.log(window);

// 'use strict'// strict mode restrict the window object inside functions
// console.log(window);
// console.log(this);
function myFunc() {
    console.log(this);
    // console.log(window);
    // console.log('hello world');
}

myFunc();

// window.myFunc();

// this.myFunc();