// rest parameters

// function myFunc(a,b,c,...restArray){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`); 
//     // console.log(`d is ${d}`); 
//     console.log('restArray', restArray); 
// }

// myFunc(1,2,3,4,5,6,7);

function addAllNumbers(...numbers){
    let total = 0;
    for(const number of numbers){
        total += number;
    }
    return total
}

const result = addAllNumbers(1, 4, 5, 6);
console.log(result);