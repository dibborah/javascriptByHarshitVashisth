// small warning

const user1 = {
    firstName: 'harshit',
    age: 8,
    about: function() {
        console.log(this)
        console.log(this.firstName, this.age);
    }
}

// do not do this mistake

// this ki value tab pata lagti hain jab fc ya method call hoti hain
const myFunc = user1.about;
myFunc();// outcome will be undefined undefine since I am not binding the value of this

// Now It will print valid value 
// Here we binded the value of this along with the reference passed
// const myFunc = user1.about.bind(user1);
// myFunc();
