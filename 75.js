// arrow functions
// arrow fc main this nahi hota(window object hone ke alawa)
// arrow fc this cannot be changed

const user1 = {
    firstName: 'harshit',
    age: 8,
    // about: function() {
    //     console.log(this)
    //     console.log(this.firstName, this.age);
    // },
    about: () => {
        console.log(this)
        console.log(this.firstName, this.age);
    },
};

// user1.about();
// user1.about.call(user1); // this won't bind user1 as this of the about function
// In arrow function the value of this is const as the global object and can never be changed

// arrow functions doesnot have this as any other object other the window or the global object
// const testUser1 = {
//     firstName: 'harshit',
//     age: 8,
//     innerObject: {
//         testName: 'mohit',
//         id: 6,
//         about: () => {
//             console.log(this)
//             // console.log(this.testName, this.id);
//         }
//     }
// };

// testUser1.innerObject.about();

