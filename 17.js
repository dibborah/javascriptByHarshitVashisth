// nested if else

// winning number 19

// 19 : your guess is right
// 17 : too low
// 20: too high

let winningNumber = 19;

let userGuess = +prompt('Guess a number');

// console.log('winnum', typeof winningNumber);
// console.log('user', typeof userGuess);


// if(userGuess === winningNumber){
//     console.log('Your guess is right!!!');
// }else if(userGuess > winningNumber){
//     console.log('Your guess is too high');
// }else{
//     console.log('Your guess is too low');
// }

if (userGuess === winningNumber) {
    console.log('Your guess is right!!!');
} else {
    if (userGuess > winningNumber) {
        console.log('User guess is too high');
    } else {
        console.log('User guess is too low');
    }
}