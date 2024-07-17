// every method

// Tabhi true dega jab callback function true return karga har item ke liye
// Agar ek bar v false hua callback condition than every false return kar dega
// const numbers = [2, 4, 2, 8, 1];

// const evenArray = numbers.every((number) => number % 2 === 0);
// // callback ---> true/false (boolean)
// console.log(evenArray);

// every method ---> true/false

const userCart = [
    {productId: 1, productName: 'mobile', price: 15000},
    {productId: 2, productName: 'laptop', price: 22000},
    {productId: 3, productName: 'tv', price: 12000},
];

// task : check if every products price is less than 30,000

const result = userCart.every((cartItem) => cartItem.price < 30000);
console.log(result);

