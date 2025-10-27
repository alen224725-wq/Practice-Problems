// 2. Write a function that takes an array of numbers and returns the sum.
function sumArray(arr) {
  if (!Array.isArray(arr)) throw new TypeError("Expected an array");
  return arr.reduce((acc, cur) => acc + Number(cur), 0);
}

// Example:
// console.log(sumArray([1,2,3,4])); // 10
