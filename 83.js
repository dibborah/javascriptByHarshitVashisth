// new keyword

// function CreateUser(firstName, age) {
//     this.firstName = firstName;
//     this.age = age;
// };

// CreateUser.prototype.about = function() {
//     return `age of ${this.firstName} is ${this.age}`
// }

// // new => 3 things
// // this => {}
// // this => returns this
// // function __proto__ sets equal to the function(s) prototype 
// const user1 = new CreateUser('harhsit', 4);
// // console.log(user1.__proto__);
// console.log(user1.about());

// use of prototype

// __proto__ === [[Prototype]] // They are same
// But function prototype is different from them

// This createUser is called a constructor function b/c it is constructing an object for us
// When this and prototype object is used in a function then that function is usually a prototype function
function CreateUser(firstName, lastName, email, age, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}

CreateUser.prototype.about = function() {
    return `The age of ${this.firstName} is ${this.age}`;
}
CreateUser.prototype.is18 = function() {
    return this.age >= 18;
}
CreateUser.prototype.sing = function() {
    return `lalala`;
}

// Agar ek function new lagake h call hota hain
// Then hum us funciton ke first letter ko Capital main likhte hain
// The 1st letter of that fc starts with uppercase
const user1 = new CreateUser('harshit', 'vashishtha', 'hv@email.com', 21, 'delhi');

console.log(user1);
console.log(user1.__proto__);

console.log(user1.sing());
console.log(user1.about());
console.log(user1.is18());
