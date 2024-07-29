// short syntax


const user1 = {
    firstName: 'harshit',
    age: 8,
    // short syntax to create methods inside objects
    about() {// need not write methods as key value pairs inside objects
        console.log(this)
        console.log(this.firstName, this.age);
    },
};

user1.about();