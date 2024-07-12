// lexical scope
const myVar = "value1";

function myApp() {
    const myFunc = () => { // myApp() function scope is the lexical environment for myFunc since myFunc is declared inside myApp
        const myVar = 'value59';
        function myFunc() {
            console.log('inside function', myVar);
        }
        myFunc();
    }

    console.log(myVar);
    myFunc();
}


myApp();