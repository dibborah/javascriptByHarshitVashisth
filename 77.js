// create functions to create multiple objects

// proto, prototype, class

// Copying existing objects to create multiple objects in writing same existing code again and again
// That lower performance and efficiency

// const user1 = {
//     firstName: 'harshit',
//     lastName: 'vashishtha',
//     email: 'test@email.com',
//     age: 3,
//     address: 'noida, sec-18, UP',
//     about(){
//         return `The age of ${this.firstName} is ${this.age}`;
//     },
//     is18(){
//         return this.age >= 18;
//     }
// }

// const result1 = user1.about();
// const result2 = user1.is18();
// console.log(result1);
// console.log(result2);

// To solve the problem we will create a function will create any object of the same template

function createUser(firstName, lastName, email, age, address) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function() {
        return `The age of ${this.firstName} is ${this.age}`;
    }
    user.is18 = function() {
      return this.age >= 18;
    }
    return user;
}

const user1 = createUser('harshit', 'vashistha', 'test@email.com', 3, 'noida, sec-18');
console.log(user1);
// console.log(user1.about());
const user2 = createUser('mohit', 'sharma', 'sharma@email.com', 27, 'noida, sec-78');
console.log(user2);
// console.log(user2.is18());


