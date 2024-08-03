// static methods and properties

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
    eat() {
        return `${this.firstName} is eating`;
    }
    isSuperCute() {
        return this.age <= 1;
    }
    isCute() {
        return true;
    }

    // To call static methods and property one need not create object/ instances using the class not call those static stuffs
    static hello(){
        return 'hello world';
    }
    static id = '56754';
};

// To call static methods and property one need not create object/ instances using the class not call those static stuffs
// You can call those static methods and properties w/o creating object instance using those class
// that is not possible w/o object methods and properties since they are not static
// And need to be called on objects
// const person1 = new Person('harshit', 'vashistha', 6);

// console.log(person1.isCute());
// we cannot use the object method in the class Person
// we can only use the object methods in the object created using Person class not in Person class
// console.log(Person.isCute());

// static methods :
// hello is a static class method
// It is not a normal object method
console.log(Person.hello());
// static method cannot be called in object
// they can only be invoked in Class

// static property:
console.log(Person.id);
// Similarly static property cannot be called in objects
// static property can only be called in class
// console.log(person1.id);