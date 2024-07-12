// functions returning functions

// function myFunc() {
//     return function() {
//         console.log('hello world')
//     };
// }

function myFunc() {
    function hello() {
        // console.log('hello world')
        return 'hello world'
    };
    return hello;
}
const result = myFunc();
// console.log(result());
console.log(result());

