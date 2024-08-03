// same method in base class

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

class Dog extends Animal{
    constructor(name, age, speed){
        super(name, age);
        this.speed = speed;     
    }
    run() {
        return `${this.name} is running at ${this.speed}kmph`;
    }
    eat(){
        return `Modified eat: ${this.name} is not eating`;
    }
};

const newAnimal1 = new Dog('doggy', 6, 45);
console.log(newAnimal1);

console.log(newAnimal1.run())
console.log(newAnimal1.eat());


// Same concept of __proto__ chaining in used when same method exits in the base class and the inherited class
// const obj1 = {
//     key1: 'value1',
//     key2: 'value2',
//     // key3: 'modifiedValue',
// }

// const obj2 = {
//     key3: 'value3',
// }

// obj1.__proto__ = obj2;

// console.log(obj1.key3);
