// intro to for loop
// print 0 - 9

// console.log(i);// i is declared using let so it will throw error when used outside the for loop
let i = 0
for(; i <= 9; i++){
    // Note: i here is a local variable since it is a let variable 
    // so i doesnot exists outside the for loop
    console.log(i);
}

// console.log(i);// i is a let variable so i is a local variable so it can't be used outside the for loop
// error: reference error: i is not defined

// console.log(i);// here i will be undefined but will not throw error

// for (var i = 0; i <= 9;i++){
//     // But var is a global scope varibale type so it can be used outside
//     // N0 error will be throw
//     console.log(i);
// }
// console.log('i current value: ' , i);// Here i will contain its current value and will be displayed in the console