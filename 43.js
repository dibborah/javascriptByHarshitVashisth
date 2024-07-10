// nested destructuring

const users = [
    {userId: 1, firstName: 'harshit', gender: 'male'},
    {userId: 2, firstName: 'vashisth', gender: 'male'},
    {userId: 3, firstName: 'mohit', gender: 'female'},
]

const [{ firstName: firstNameOfUser1, userId }, , { gender }] = users;

// console.log(firstName);
console.log(firstNameOfUser1);
console.log(userId);
console.log(gender);