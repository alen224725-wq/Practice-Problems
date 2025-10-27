// Write a function to find the largest number in an array.
function maxInArray(arr) {
  if (!Array.isArray(arr)) throw new TypeError("Expected an array");
  if (arr.length === 0) return undefined; // or throw an error if preferred
  return arr.reduce((max, cur) => (cur > max ? cur : max), arr[0]);
}


