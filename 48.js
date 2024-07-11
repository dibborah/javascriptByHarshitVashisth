// functions inside function

function myApp() {
    const hello = () => {
        console.log('hello world');
    }

    const addTwoNumbers = (a, b) => {
        return a + b;
    }

    const multiplyTwoNumbers = (a, b, c) => a * b * c;

    console.log('inside myApp function');
    hello();
    console.log(addTwoNumbers(2,3));
    console.log(multiplyTwoNumbers(2,3,10));
}

myApp();