// call apply bind method

// function hello() {
//     // console.log(this);
//     console.log('hello world');
// }

// hello.call();

// In JS we have call(), apply(), bind()

function about(hobby, favMusician) {
  // console.log('hello world');
  console.log(this.firstName, this.age, hobby, favMusician);
  // console.log(d);
}

const user1 = {
    firstName: 'harshit',
    age: 8,
    // about: function(hobby, favMusician) {
    //     // console.log('hello world');
    //     console.log(this.firstName, this.age, hobby, favMusician);
    //     // console.log(d);
    // }
};

const user2 = {
    firstName: 'mohit',
    age: 88,
};

// user1.about();
// call : Pass the value of this with arguement passed individuallys
// user1.about.call(user2, 'guitar', 'bach');
// apply: arguement can be passed as an array
// user1.about.apply(user2, ['guitar', 'bach']);
// bind
// const fc = user1.about.bind(user2, 'guitar', 'bach');
const fc = about.bind(user2, 'guitar', 'bach')
fc();


