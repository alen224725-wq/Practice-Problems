// Write a function that takes an array of numbers and returns the sum.
function sumArray(arr) {
  if (!Array.isArray(arr)) throw new TypeError("Expected an array");
  return arr.reduce((acc, cur) => acc + Number(cur), 0);
}


