// parameter destructuring

const person = {
    firstName: 'harshit',
    skill: 'JS',
    age: 23,
    id: 3,
};

// function myFunc(obj){// without parameter destructuring
//     console.log(obj.firstName);
//     console.log(obj.skill);
// }

function myFunc({ firstName, skill, age, id}){// with parameter destructuring
    console.log(firstName);
    console.log(skill);
    console.log(age);
    console.log(id);
}

myFunc(person);