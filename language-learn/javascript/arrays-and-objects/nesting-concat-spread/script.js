// Initialize two arrays with numbers
const numbers = [1, 2, 3, 4, 5];
const numbers2 = [6, 7, 8, 9, 10];

// Push the entire numbers2 array as a single element into numbers
// This creates a nested array - numbers will become [1, 2, 3, 4, 5, [6, 7, 8, 9, 10]]
numbers.push(numbers2);
console.log(numbers);

// Access the first element of the nested array (numbers2) at index 5 of numbers
// This will output 6 (the first element of numbers2)
console.log(numbers[5][0]);

// concat() creates a new array but doesn't modify the original array
// This line doesn't save the result, so numbers remains unchanged
numbers.concat(numbers2);
console.log(numbers);

// Spread Operator
const fruits = ['apple', 'banana', 'cherry'];
const vegetables = ['carrot', 'potato', 'onion'];

// The spread operator (...) unpacks array elements
// This creates a new array with all elements from both arrays combined
const fruitsAndVegetables = [...fruits, ...vegetables];
console.log(fruitsAndVegetables);

// Flatten Arrays
// Create a nested array with multiple inner arrays
const numbers3 = [0, [1, 2, 3], [4, 5, 6], [7, 8, 9]];

// Use spread operator to manually flatten specific nested arrays
// This extracts elements from each nested array and creates a new flat array
const flattenedNumbers = [...numbers3[1], ...numbers3[2], ...numbers3[3]];
console.log(flattenedNumbers);

// flat() creates a new array with all sub-array elements concatenated
// But this doesn't save the result, so numbers3 remains unchanged
numbers3.flat();
console.log(numbers3);

// Static Methods on Array Object

// Array.isArray() checks if a value is an array
// Returns true for numbers (which is an array)
console.log(Array.isArray(numbers));
// Returns false for 'Hello' (which is a string)
console.log(Array.isArray('Hello'));

// Array.from() creates a new array from an array-like or iterable object
// This converts the string 'Hello' into an array of characters: ['H', 'e', 'l', 'l', 'o']
console.log(Array.from('Hello'));
