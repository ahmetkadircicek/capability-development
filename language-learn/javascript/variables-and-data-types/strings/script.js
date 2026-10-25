// Declare a variable x
let x;

// Define constants for name, age, and city
const name = 'John';
const age = 20;
const city = 'New York';

// Use template literals to create a formatted string
x = `My name is ${name}, I am ${age} years old and I live in ${city}`;

// Output the formatted string
console.log(x);

// String Properties and Methods

// Create a string using literal notation
const string = 'Hello World';
// Create a string using the String constructor
const string2 = new String('Hello Universe');
// Log the string object and its type (object, not string)
console.log(string2, typeof string2);
// Log the prototype of the string object
console.log(string2.__proto__);
// Log the length of the string
console.log(string.length);
// Convert string to uppercase
console.log(string.toUpperCase());
// Convert string to lowercase
console.log(string.toLowerCase());

// Extract a portion of the string (from index 0 to 4)
console.log(string.substring(0, 5));

// can start from the end with negative index
// Extract a portion of the string (similar to substring)
console.log(string.slice(0, 5));

// Replace 'World' with 'Universe' in the string
console.log(string.replace('World', 'Universe'));
// Check if the string includes 'Hello'
console.log(string.includes('Hello'));
// Split the string into an array using space as delimiter
console.log(string.split(' '));
// Remove whitespace from beginning and end of string
console.log(string2.trim());
// Find the index of the first occurrence of 'o'
console.log(string.indexOf('o'));
