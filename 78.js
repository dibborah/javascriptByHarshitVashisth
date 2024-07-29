// storing methods in different objects

const userMethods = {
    // about: function() {
    //     return `The age of ${this.firstName} is ${this.age}`;
    // },
    // is18: function() {
    //   return this.age >= 18;
    // }
    about() {
        return `The age of ${this.firstName} is ${this.age}`;
    },
    is18() {
      return this.age >= 18;
    }
}

function createUser(firstName, lastName, email, age, address) {
    const user = {};
    // since the defination is not same so the code is written directly
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    // Since the methods defination is same so the reference can be passed here instead
    // of the same methods
    user.about = userMethods.about;// writting only the address of memory location
    user.is18 = userMethods.is18;// wriiting only the address of memory location
    return user;
}

// when code's defination is same and to be used mutiple times to render or to create mutiple objects
// Its reference needs to be passed instead of the code written directly
// otherwise more unnecessary memory will be taken and allocated

const user1 = createUser('harshit', 'vashistha', 'test@email.com', 5, 'noida, sec-18');
const user2 = createUser('harshit', 'vashistha', 'test@email.com', 30, 'noida, sec-18');
const user3 = createUser('mona', 'deka', 'test@email.com', 18, 'noida, sec-18');

// console.log(user1);
console.log(user1.about());
// console.log(user2);
// console.log(user2.is18());
// console.log(user3);
console.log(user3.about());
