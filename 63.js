// some method

// const numbers = [3, 5, 7, 2];

// kya ek v number array main aisa hain jo even hain
// return true

// const isEven = numbers.some((number) => number % 2 === 0);
// console.log(isEven);

// Real example

const userCart = [
    {productId: 1, productName: 'mobile', price: 15000},
    {productId: 2, productName: 'laptop', price: 22000},
    {productId: 3, productName: 'tv', price: 12000},
    {productId: 4, productName: 'macbook', price: 40000},
];

// Task: check if any product exists whose price is greater than 50000
// commit for some method

const product = userCart.some((cartItem) => cartItem.price > 100000);
console.log(product);
