// reduce

const numbers = [1,2,3,4,5,10];

// aim: sum of all numbers in an array
const total = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

// console.log(total);

const userCart = [
    {productId: 1, productName: 'mobile', price: 12000},
    {productId: 2, productName: 'laptop', price: 22000},
    {productId: 3, productName: 'tv', price: 15000},
];

const totalPrice = userCart.reduce((total, currentValue) => {
    return total + currentValue.price;
}, 0);  

console.log(totalPrice);