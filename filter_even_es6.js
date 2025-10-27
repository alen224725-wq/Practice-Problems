// 7. Use ES6 filter to return even numbers from an array
const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(n => Number.isInteger(n) && n % 2 === 0);

console.log(evenNumbers); // [2, 4, 6]
