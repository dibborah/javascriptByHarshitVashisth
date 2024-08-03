// OOP (object oriented programming)
// class practice and extends keyword
// inheritance(extends keyword is used)

class Animal{
    constructor(name, age){
        // console.log('constructor is called');
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating`;
    }
    isSuperCute() {
        return this.age <= 1;
    }
    isCute() {
        return true;
    }
};

const animal1 = new Animal('lion', 5);
// console.log(animal1);
// console.log(animal1.eat());
// console.log(animal1.isSuperCute());
// console.log(animal1.isCute());

// Now using inheritance create another class named Dog using Animal
// All the properties and methods of Animal class needs to be there in Dog class

// Dog is called child or derived class and Animal is the parent or base class
// Dog is also called sub-class and Animal is called super class
// Ek sub-class banti hain base class ko extend karke

class Dog extends Animal{
    constructor(name, age, habit){
        console.log('constructor is called');
        super(name, age);
        this.habit = 'sleeping'       
    }
    skill() {
        return `${this.habit} is his skill`;
    }
};

const newAnimal1 = new Dog('tommy', 3);
console.log(newAnimal1);

// console.log(newAnimal1.eat());
// console.log(newAnimal1.name)

console.log(newAnimal1.habit)
console.log(newAnimal1.skill())


// function hello () {
//     console.log('hello world');
// }

// console.log('h f pro', hello.prototype);

// const obj = {};
// console.log('o pro', obj.prototype)