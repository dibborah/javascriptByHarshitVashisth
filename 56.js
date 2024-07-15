// important array methods

const numbers = [4, 2, 5, 8];

// function multiplyBy2(number, index) {
//     console.log('index', index);
//     console.log('number * 2', number * 2);
// }

// multiplyBy2(numbers[0],0);
// multiplyBy2(numbers[1],1);
// multiplyBy2(numbers[2],2);

// for(let i in numbers){
//     multiplyBy2(numbers[i], i);
// }

// numbers.forEach((number, index) => {
//     multiplyBy2(number, index);
// })

const users = [
    {firstName: 'harshit', age: 23},
    {firstName: 'nitish', age: 22},
    {firstName: 'bikram', age: 24},
    {firstName: 'garima', age: 27},
]

// extra method forEach
// users.forEach((user) => console.log(user.firstName));
// users.forEach(function(user) {
//     console.log(user.firstName);
// })

for(let i = 0; i< users.length; i++) {
    console.log(users[i].firstName);
}
