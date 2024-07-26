// methods

// function inside object : methods

// this : jis object ke andar use hota hain
// this wo object baan jata hain

// this is not fixed
// this is dynamic in nature and has no fixed or absolute value
// In runtime its value is defined

// const person = {
//     firstName: 'harsh',
//     age: 87,
//     about: function() {
//         // console.log('inside fc',this);
//         // console.log('person name is harshit and person age is 8');  
//         console.log(`person name is ${this.firstName} and person age is ${person.age}`); 
//     },
//     address: {
//         city: 'noida',
//         work: function() {
//             console.log('nested',this);
//         }

//     }
// };

// console.log('outside',this);
// person.about();
// person.address.work();

// const tempArray = [
//    {
//         city: 'noida',
//         work: function() {
//             console.log('nested',this);
//         }

//     },
//    {
//         city: 'delhi',
//         dance: function() {
//             console.log('nested',this);
//         }

//     },
// ]

// tempArray[0].work();
// tempArray[1].dance();


const person1 = {
    firstName: 'harsh',
    age: 22,
    about: function(){
        console.log(`person name is ${this.firstName} and person age is ${this.age}`); 
    }
};

const person2 = {
    firstName: 'mohit',
    age: 20,
}


person1.about();

// const user = {};

// user.about();