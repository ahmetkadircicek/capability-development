/**
 * JavaScript Data Types
 *
 * JavaScript has two main categories of data types:
 * 1. Primitive Types - stored directly in the location the variable accesses
 * 2. Reference Types - accessed by reference, stored in the heap
 */

// Primitive Types
// ------------------------------

// Number - represents both integer and floating point numbers
const age = 22;
console.log(age, typeof age); // 22 'number'
const score = 4.5;
console.log(score, typeof score); // 4.5 'number'

// String - represents textual data
const firstName = 'John';
console.log(firstName, typeof firstName); // 'John' 'string'

// Boolean - represents logical entities, true or false
const isLoggedIn = false;
console.log(isLoggedIn, typeof isLoggedIn); // false 'boolean'

// Null - represents the intentional absence of any object value
const emptyValue = null;
console.log(emptyValue, typeof emptyValue); // null 'object' (this is a known JavaScript bug)

// Undefined - represents a variable that has been declared but not assigned a value
let undefinedValue;
console.log(undefinedValue, typeof undefinedValue); // undefined 'undefined'

// Symbol - represents a unique and immutable primitive value
const symbol = Symbol('id');
console.log(symbol, typeof symbol); // Symbol(id) 'symbol'

// BigInt - represents integers of arbitrary length
const bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt, typeof bigInt); // 1234567890123456789012345678901234567890n 'bigint'

// Reference Types
// ------------------------------

// Object - collection of key-value pairs
const person = {
  name: 'John',
  age: 22,
};
console.log(person, typeof person); // {name: 'John', age: 22} 'object'

// Array - ordered collection of values (technically an object in JavaScript)
const arr = [1, 2, 3, 4, 5];
console.log(arr, typeof arr); // [1, 2, 3, 4, 5] 'object'

// Function - callable object that executes a block of code
const greet = function () {
  console.log('Hello, world!');
};
console.log(greet, typeof greet); // [Function: greet] 'function'
