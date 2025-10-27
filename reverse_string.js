// 5. Write a function that reverses a given string.
function reverseString(str) {
  if (typeof str !== "string") throw new TypeError("Expected a string");
  return str.split("").reverse().join("");
}

// Example:
// console.log(reverseString("hello")); // "olleh"
