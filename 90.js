// getters and setters

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName() {// using getter get one can treat a method inside a class as a property
        return `${this.firstName} ${this.lastName}`;
    }
    // without setters
    // setName(firstName, lastName){
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    // }
    // with setters
    set setFullName(fullName){
        const [firstName, lastName] = fullName.split(' ');
        // split method returns and array
        this.firstName = firstName;
        this.lastName = lastName;
    }
};

const person1 = new Person('harshit', 'vashistha', 6);
// console.log(person1);


// getters
// ye fullName method internally call hoga par humme parenthesis() lagane ki jarurat nahi
// get keyword in used in fullName method 
// console.log(person1.fullName);// I can now get or call the fullName method as a property which is technically an object or function

// console.log(person1.firstName);
// console.log(person1.lastName);

// line 37 && 38 and 39 are equivalent(achieves the same result)
// person1.setName('ravi', 'shastri');
// person1.firstName = 'ravi';
// person1.lastName = 'shastri';

// console.log(person1.firstName);
// console.log(person1.lastName);

// setters
// console.log(person1.firstName);
// console.log(person1.lastName);
// // set keyword is user in setName method
console.log(person1);
person1.setFullName = 'mohit raina';
console.log(person1);
// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.fullName);

// person1.fullName = 'harhist vashishtha';
// firstName = harhist
// lastName = vashistha
