// class keyword
// es6 or es2015 classes where introduced in js

// classes in js is fake
// internally it uses this and prototype to work as classes of any other programming language like JAVA and PYTHON

// using class keyword

class CreateUser {
    constructor(firstName, lastName, email, age, address){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }
    about() {
        return `The age of ${this.firstName} is ${this.age}`;
    }
    is18() {
        return this.age >= 18;
    }
    sing() {
        return `lalala`;
    }
}

// class constructor cannot be invoked (called) w/o new
const user1 = new CreateUser('harshit', 'vashishtha', 'hv@email.com', 21, 'delhi');
// const user2 = new CreateUser('harsh', 'vashishtha', 'hv@email.com', 18, 'orissa');
// const user3 = new CreateUser('mohit', 'vashishtha', 'hv@email.com', 41, 'bangalore');

// console.log(user1.about());
// console.log(user2.is18());
// console.log(user3.sing());


// Both gives the __proto__ or [[Prototype]] of user1 object
// console.log(user1.__proto__);
// console.log(Object.getPrototypeOf(user1));

// function hello() {
//     console.log('hello world');
// };

// console.log(hello.prototype);