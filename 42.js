// objects inside array
// very useful in real world applications

const users = [
    {userId: 1, firstName: 'harshit', gender: 'male'},
    {userId: 2, firstName: 'vashisth', gender: 'male'},
    {userId: 3, firstName: 'mohit', gender: 'male'},
]

// console.log(users);

// using for of loop
for(const user of users){
    console.log(user.firstName);
}

// using for loop (traditional)
// for(let i = 0; i < users.length; i++) {
//     console.log(users[i]);
// }
