// sort method

// 5 9 1200, 400, 3000
// 5, 9, 400, 1200, 3000

// const numbers = [5, 9, 1200, 400, 3000];

// Not sorted as expected(ascending or descending order)
// numbers.sort();
// console.log(numbers);

// const letters = ['www', 'ddd', 'aaa','ZZZ','AAA','ZaZ','AzA','zZa', 'hhh', 'iii', 'yyy'];

// letters.sort();
// console.log(letters);

// Right way to sort in ascending or descending order
// const numbers = [5, 9, 1200, 400, 3000];

// numbers.sort((a,b) => {
//     // return a - b;
//     return b - a;
// })

// a , b
// a - b = Pos=> b, a
// a - b = negative = a, b

// b - a => Pos => b, a
// b - a => negaive => a, b

// console.log(numbers);

const products = [
    {productId: 1, productName: 'p1', price: 300},
    {productId: 2, productName: 'p2', price: 3000},
    {productId: 3, productName: 'p3', price: 200},
    {productId: 4, productName: 'p4', price: 8000},
    {productId: 5, productName: 'p5', price: 500},
];

// price lowToHigh in an new array
// const lowToHigh = products.slice(0).sort((a, b) => a.price - b.price);
// console.log(products);
// console.log(lowToHigh);

// price highToLow
const highToLow = products.slice(0).sort((a, b) => b.price - a.price);
console.log(products);
console.log(highToLow);
