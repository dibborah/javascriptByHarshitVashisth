// hasOwnProperty

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

const user1 = new CreateUser('harshit', 'vashishtha', 'hv@email.com', 21, 'delhi');
const user2 = new CreateUser('harsh', 'vashishtha', 'hv@email.com', 11, 'orissa');
const user3 = new CreateUser('mohit', 'vashishtha', 'hv@email.com', 41, 'bangalore');

for(let key in user1){
    if(user1.hasOwnProperty(key)){
        console.log(key);
    }
    // console.log(key)
};