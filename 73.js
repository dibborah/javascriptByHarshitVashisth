// call apply bind method

// function hello() {
//     // console.log(this);
//     console.log('hello world');
// }

// hello.call();

// In JS we have call(), apply(), bind()

const user1 = {
    firstName: 'harshit',
    age: 8,
    about: function(d) {
        // console.log('hello world');
        console.log(this.firstName, this.age);
        // console.log(d);
    }
};

const user2 = {
    firstName: 'mohit',
    age: 88,
};

// user1.about();
user1.about.call(user2);
// user1.about.call(user1, 'abc');

