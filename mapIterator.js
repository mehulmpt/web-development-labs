export default function mapIterator(array, callback) {}

// Sample Tests - run the file (using run button) to see the output
const double = (num) => num * 2;
console.log("Doubled:", mapIterator([1, 2, 3], double)); // Expected Output: [2, 4, 6]

const increment = (num) => num + 1;
console.log("Incremented:", mapIterator([1, 2, 3], increment)); // Expected Output: [2, 3, 4]

const square = (num) => num * num;
console.log("Squared:", mapIterator([1, 2, 3], square)); // Expected Output: [1, 4, 9]
