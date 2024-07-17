// find

// find => Return the first occurence

// const tempArray = ['hello', 'dogy', 'caty', 'lion'];

// function isLength3(string) {
//     return string.length === 3;
// };

// // find method returns only the first occurenced true value

// // const result = tempArray.find(isLength3);
// const result = tempArray.find((string) => string.length === 3);
// console.log(result);

const users = [
    {userId: 1, userName: 'harshit'},
    {userId: 2, userName: 'mohit'},
    {userId: 3, userName: 'ravi'},
    {userId: 4, userName: 'sharma'},
    {userId: 5, userName: 'gupta'},
]

// Task : find that user whose userId is 3

const answer = users.find((user) => user.userId === 3);
console.log(answer);