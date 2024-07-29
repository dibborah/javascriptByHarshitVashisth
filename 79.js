// solution using Object.create()
// Implementing creating new object via solution using Object.create    

const userMethods = {
    about() {
        return `The age of ${this.firstName} is ${this.age}`;
    },
    is18() {
      return this.age >= 18;
    },
    sing() {
        return `lalala`;
    }
}

function createUser(firstName, lastName, email, age, address) {
    // const user = {};
    // Object.create():
    // Does two things
    // 1. creates an empty object
    // 2. Sets the proto of the newly created object to the passed object(passed as an arguement)
    const user = Object.create(userMethods);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    // user.about = userMethods.about;
    // user.is18 = userMethods.is18;
    // user.sing = userMethods.sing;
    return user;
}

const user1 = createUser('harshit', 'vashishtha', 'hv@email.com', 21, 'delhi');
console.log(user1);
console.log(user1.sing());