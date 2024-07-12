// // block scope vs function scope

// // let and const are block scope
// // var is a function scope

// {
//     // apne agar let and const use karke
//     // varibles banaye to aap usse block ke 
//     // undar hi un variables ko access kar skte ho
//     // us block ke bahar nahi
// }

// // const firstName = 'harshit';

// {
//     const lastName = 'Raina';
//     // console.log(firstName);
//     {
//         const id = 9;
//         // console.log(id);
//         // console.log(lastName);
//     }
// }

// let firstName = 'Hii';

// {
//     // var firstName = 'Ravi'
//     // console.log(firstName);
// }


// // console.log(firstName);


// {
//     var userName = 'Ram';
//     console.log(userName);  
// }

// console.log(userName);

// {
//     const userName = 'Krishna';
//     console.log(userName);
// }

// Note: A block ({}) is made using curly braces in JS

// var firstName= 'hii'
// console.log(firstName);
function myApp() {
    if(true) {
        var firstName = 'harshit';
        // console.log(firstName);
    }
    // console.log(firstName)
}

myApp();





