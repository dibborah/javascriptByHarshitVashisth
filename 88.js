// super keyword

// object ko instance v keh skte hain

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
};

const newAnimal1 = new Dog('doggy', 6, 45);
console.log(newAnimal1);

// console.log(newAnimal1.eat());
// console.log(newAnimal1.name)

console.log(newAnimal1.speed)
console.log(newAnimal1.run())
