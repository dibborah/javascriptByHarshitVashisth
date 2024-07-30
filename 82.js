// use of prototype

function createUser(firstName, lastName, email, age, address) {
    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}

createUser.prototype.about = function() {
    return `The age of ${this.firstName} is ${this.age}`;
}
createUser.prototype.is18 = function() {
    return this.age >= 18;
}
createUser.prototype.sing = function() {
    return `lalala`;
}

const user1 = createUser('harshit', 'vashishtha', 'hv@email.com', 21, 'delhi');
console.log(user1);
console.log(user1.__proto__);
console.log(user1.sing());
console.log(user1.about());
console.log(user1.is18());