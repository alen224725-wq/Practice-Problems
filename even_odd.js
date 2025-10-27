// 4. Write a function that checks if a number is even or odd.
function checkEvenOdd(n) {
  if (typeof n !== "number" || !Number.isFinite(n)) throw new TypeError("Expected a finite number");
  if (!Number.isInteger(n)) return "not an integer";
  return (n % 2 === 0) ? "even" : "odd";
}

// Examples:
// console.log(checkEvenOdd(4)); // "even"
// console.log(checkEvenOdd(7)); // "odd"
// console.log(checkEvenOdd(3.5)); // "not an integer"
