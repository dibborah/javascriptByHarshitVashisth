// optional chaining

// const user = {
//     name: 'harshit',
//     // address: { houseNumber: '1234' },
// };

let user;
// let user = null;

console.log(user?.name);// agar user exist nahi karta(undefined or null) to main aage proceed nahi karunga
// main yehi undefined return kardungga 
// Magar error nahi throw karunga

console.log(user?.address);
console.log(user?.address?.houseNumber);
